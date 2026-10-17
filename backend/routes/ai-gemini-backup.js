
const express = require('express');

const router = express.Router();

const SYSTEM_PROMPT = `
Kamu adalah PancaAI, AI Learning Assistant untuk membantu mahasiswa
dan pelajar Indonesia memahami Pancasila.

Fokus pembelajaran:
- Sejarah dan perumusan Pancasila.
- Makna dan nilai setiap sila.
- Penerapan Pancasila dalam kehidupan sehari-hari.
- Pancasila di lingkungan kampus dan era digital.
- Analisis studi kasus, kuis, dan latihan.

Gunakan bahasa Indonesia yang jelas, sederhana, edukatif, dan mudah
dipahami mahasiswa. Berikan contoh yang relevan dengan kampus,
media sosial, teknologi, organisasi, dan kehidupan sehari-hari.

Saat menganalisis studi kasus, jelaskan masalah, nilai Pancasila,
sila yang relevan, tindakan yang sebaiknya dilakukan, dan alasannya.

Jawablah secara terstruktur dan tidak terlalu panjang, kecuali
pengguna meminta penjelasan lebih detail.

Jika pertanyaan tidak berhubungan dengan Pancasila, jelaskan dengan
sopan bahwa PancaAI berfokus pada pembelajaran Pancasila.
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

    if (body.message.length > 4000) {
      return res.status(400).json({
        error: 'Pesan terlalu panjang. Maksimal 4000 karakter.',
      });
    }

    const apiKey = process.env.AI_API_KEY?.trim();
    const model = process.env.AI_MODEL || 'gemini-3.5-flash-lite';

    if (!apiKey || apiKey === 'AQ.Ab8RN6KzUK-WRxmMMiN1wkrIcAz9KWjgF4HMsZ878LojBrtsVw') {
      return res.status(503).json({
        error: 'API Gemini belum dikonfigurasi. Periksa backend/.env.',
      });
    }

    const contents = [];

    for (const turn of history.slice(-10)) {
      if (
        !turn ||
        (turn.role !== 'user' && turn.role !== 'assistant') ||
        typeof turn.content !== 'string' ||
        !turn.content.trim()
      ) {
        continue;
      }

      contents.push({
        role: turn.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: turn.content.trim().slice(0, 4000) }],
      });
    }

    const lastTurn = contents[contents.length - 1];

    if (
      lastTurn &&
      lastTurn.role === 'user' &&
      lastTurn.parts[0].text.trim() === message
    ) {
      contents.pop();
    }

    while (contents.length && contents[0].role !== 'user') {
      contents.shift();
    }

    let userContent = message;

    if (context) {
      userContent =
        `Konteks pembelajaran:\n${context}\n\n` +
        `Pertanyaan mahasiswa:\n${message}`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: userContent }],
    });

    const endpoint =
      `https://generativelanguage.googleapis.com/v1beta/models/` +
      `${encodeURIComponent(model)}:generateContent`;

    const requestBody = {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents,
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.7,
      },
    };

    let response;
    let errorData = {};

    // Maksimal 3 percobaan total: 1 percobaan awal + 2 retry.
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify(requestBody),
        });
      } catch (error) {
        // Retry jika koneksi mengalami kegagalan sementara.
        if (attempt < maxAttempts) {
          const delay = attempt * 1000 + Math.random() * 300;
          console.warn(
            `Koneksi Gemini gagal. Percobaan ${attempt}/${maxAttempts}; mencoba lagi.`
          );
          await sleep(delay);
          continue;
        }

        throw error;
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

      const delay = attempt * 1000 + Math.random() * 300;

      console.warn(
        `Gemini mengembalikan HTTP ${response.status}. ` +
        `Percobaan ${attempt}/${maxAttempts}; mencoba lagi dalam ` +
        `${Math.round(delay)} ms.`
      );

      await sleep(delay);
    }

    if (!response || !response.ok) {
      console.error(
        'Gemini API error:',
        response?.status || 'KONEKSI GAGAL',
        JSON.stringify(errorData, null, 2)
      );

      return res.status(502).json({
        error:
          'PancaAI belum berhasil mendapatkan jawaban dari Gemini. ' +
          'Silakan coba lagi beberapa saat.',
      });
    }

    const data = await response.json();

    const reply = (data.candidates?.[0]?.content?.parts || [])
      .map((part) => part.text || '')
      .join('\n')
      .trim();

    if (!reply) {
      console.error(
        'Gemini tidak mengembalikan teks.',
        data.promptFeedback || data.candidates?.[0]?.finishReason || ''
      );

      return res.status(502).json({
        error: 'Gemini tidak menghasilkan jawaban. Silakan coba lagi.',
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
