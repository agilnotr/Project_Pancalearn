
require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
});

async function testGemini() {
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || 'gemini-2.5-flash';

  if (!apiKey || !apiKey.trim()) {
    console.log('GAGAL: AI_API_KEY tidak terbaca dari .env');
    return;
  }

  console.log('Menguji model:', model);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey.trim(),
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: 'Jelaskan makna sila pertama Pancasila dalam satu kalimat.' }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log('HTTP STATUS:', response.status);

    if (!response.ok) {
      console.log('PESAN ERROR:', data.error?.message || JSON.stringify(data));
      return;
    }

    console.log(
      'JAWABAN GEMINI:',
      data.candidates?.[0]?.content?.parts
        ?.map(part => part.text || '')
        .join('\n') || 'Tidak ada teks jawaban'
    );
  } catch (error) {
    console.log('ERROR KONEKSI:', error.message);
  }
}

testGemini();
