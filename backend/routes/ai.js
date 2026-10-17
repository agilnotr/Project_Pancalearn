const express = require('express');

const router = express.Router();

const SYSTEM_PROMPT = `
Kamu adalah PancaAI, asisten pembelajaran Pancasila.

ATURAN AKURASI WAJIB:
1. Utamakan ketepatan fakta daripada panjang jawaban.
2. Jangan pernah menukar bunyi atau urutan sila Pancasila.
3. Gunakan urutan resmi berikut:
   - Sila ke-1: Ketuhanan Yang Maha Esa.
   - Sila ke-2: Kemanusiaan yang Adil dan Beradab.
   - Sila ke-3: Persatuan Indonesia.
   - Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat
     Kebijaksanaan dalam Permusyawaratan/Perwakilan.
   - Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia.
4. Sebelum menjawab pertanyaan tentang sila tertentu,
   cocokkan nomor sila dengan daftar resmi di atas.
5. Jika pertanyaan atau pernyataan pengguna mengandung
   kekeliruan fakta, koreksi dengan sopan dan jelaskan
   fakta yang benar.
6. Jangan mengarang sumber, kutipan, pasal, atau fakta.
7. Jika tidak yakin dengan informasi tertentu, katakan
   dengan jujur bahwa informasi tersebut perlu diverifikasi.
8. Bedakan fakta resmi, interpretasi, dan contoh penerapan.

FOKUS PEMBELAJARAN:
- Sejarah dan perumusan Pancasila.
- Makna dan nilai setiap sila.
- Penerapan Pancasila dalam kehidupan sehari-hari.
- Pancasila di lingkungan kampus dan era digital.
- Analisis studi kasus, kuis, dan latihan.


GAYA JAWABAN:
- Gunakan bahasa Indonesia yang sederhana dan mudah dipahami.
- Jawab pertanyaan secara langsung dan akurat.
- Gunakan teks biasa, bukan format Markdown.
- Jangan gunakan tanda pagar (#) untuk judul.
- Jangan gunakan tanda bintang (*) untuk penekanan.
- Jangan gunakan simbol Markdown seperti backtick, pagar,
  atau format tabel.
- Gunakan judul sederhana tanpa simbol dekoratif.
- Gunakan nomor untuk daftar yang berurutan.
- Gunakan tanda hubung (-) untuk daftar sederhana.
- Pisahkan judul, paragraf, dan daftar dengan baris baru.
- Hindari jawaban yang terlalu panjang jika tidak diminta.
- Berikan contoh yang relevan dengan kehidupan kampus.
- Jika tidak yakin, jangan mengarang jawaban.
`;


function cleanText(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.post('/', async (req, res) => {
  try {
    const body = req.body || {};
    const message = cleanText(body.message, 4000);
    const context = cleanText(body.context, 800);
    const history = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return res.status(400).json({
        error: 'Pesan tidak boleh kosong.',
      });
    }

    if (
      typeof body.message === 'string' &&
      body.message.length > 4000
    ) {
      return res.status(400).json({
        error: 'Pesan terlalu panjang. Maksimal 4000 karakter.',
      });
    }

    const apiKey = process.env.GROQ_API_KEY?.trim();
    const model = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

    if (!apiKey) {
      return res.status(503).json({
        error:
          'API Groq belum dikonfigurasi. Periksa GROQ_API_KEY di backend/.env.',
      });
    }

    const messages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
    ];

    for (const turn of history.slice(-10)) {
      if (
        !turn ||
        (turn.role !== 'user' && turn.role !== 'assistant') ||
        typeof turn.content !== 'string' ||
        !turn.content.trim()
      ) {
        continue;
      }

      messages.push({
        role: turn.role,
        content: turn.content.trim().slice(0, 4000),
      });
    }

    // Hindari mengirim pertanyaan terakhir dua kali.
    const lastMessage = messages[messages.length - 1];

    if (
      lastMessage &&
      lastMessage.role === 'user' &&
      lastMessage.content.trim() === message
    ) {
      messages.pop();
    }

    // Pastikan riwayat dimulai dari pesan pengguna.
    while (
      messages.length > 1 &&
      messages[1].role !== 'user'
    ) {
      messages.splice(1, 1);
    }

    let userContent = message;

    if (context) {
      userContent =
        `Konteks pembelajaran:\n${context}\n\n` +
        `Pertanyaan mahasiswa:\n${message}`;
    }

    messages.push({
      role: 'user',
      content: userContent,
    });

    const endpoint =
      'https://api.groq.com/openai/v1/chat/completions';

    const requestBody = {
      model,
      messages,
      max_tokens: 800,
      temperature: 0.7,
    };

    let response;
    let errorData = {};

    // Maksimal 3 percobaan untuk gangguan sementara.
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestBody),
          signal: AbortSignal.timeout(30000),
        });
      } catch (error) {
        if (attempt < maxAttempts) {
          const delay = attempt * 1000;

          console.warn(
            `Koneksi Groq gagal. Percobaan ${attempt}/${maxAttempts}.`
          );

          await sleep(delay);
          continue;
        }

        console.error('Koneksi Groq gagal:', error.message);

        return res.status(502).json({
          error:
            'PancaAI tidak dapat terhubung ke layanan AI saat ini. ' +
            'Periksa koneksi internet dan coba lagi beberapa saat.',
        });
      }

      if (response.ok) {
        break;
      }

      errorData = await response.json().catch(() => ({}));

      const retryableStatuses = [500, 502, 503, 504];
      const shouldRetry =
        retryableStatuses.includes(response.status) &&
        attempt < maxAttempts;

      if (!shouldRetry) {
        break;
      }

      const delay = attempt * 1500;

      console.warn(
        `Groq mengembalikan HTTP ${response.status}. ` +
        `Mencoba lagi (${attempt}/${maxAttempts}) dalam ${delay} ms.`
      );

      await sleep(delay);
    }

    if (!response || !response.ok) {
      const status = response?.status || 0;

      // Catat detail untuk debugging, tetapi jangan tampilkan API key.
      console.error(
        'Groq API error:',
        status,
        errorData.error?.message || 'Tidak ada detail error'
      );

      if (status === 401) {
        return res.status(502).json({
          error:
            'API key Groq tidak valid. Periksa GROQ_API_KEY di backend/.env.',
        });
      }

      if (status === 403) {
        return res.status(502).json({
          error:
            'Akses ke layanan atau model AI ditolak. ' +
            'Periksa akses model pada akun Groq.',
        });
      }

      if (status === 404) {
        return res.status(502).json({
          error:
            'Model AI tidak ditemukan. Periksa nama GROQ_MODEL di backend/.env.',
        });
      }

      if (status === 429) {
        return res.status(429).json({
          error:
            'PancaAI sedang mencapai batas penggunaan layanan AI. ' +
            'Silakan tunggu sebentar sebelum mencoba kembali.',
        });
      }

      if ([500, 502, 503, 504].includes(status)) {
        return res.status(502).json({
          error:
            'Layanan AI sedang sibuk atau mengalami gangguan. ' +
            'Silakan coba kembali beberapa saat lagi.',
        });
      }

      return res.status(502).json({
        error:
          'PancaAI belum berhasil mendapatkan jawaban. ' +
          'Silakan coba lagi beberapa saat.',
      });
    }

    const data = await response.json();

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      console.error(
        'Groq tidak mengembalikan teks jawaban.'
      );

      return res.status(502).json({
        error:
          'Layanan AI belum menghasilkan jawaban. Silakan coba lagi.',
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('PancaAI route error:', error.message);

    return res.status(500).json({
      error:
        'Terjadi kesalahan pada backend PancaAI. ' +
        'Periksa terminal server.',
    });
  }
});

module.exports = router;
