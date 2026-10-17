
require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
});

async function testGroq() {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

  if (!apiKey) {
    console.log('Gagal: GROQ_API_KEY belum terbaca dari .env');
    return;
  }

  console.log('API key tersedia:', Boolean(apiKey));
  console.log('Model:', model);
  console.log('Menghubungi Groq...');

  try {
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: 'Jawab dalam bahasa Indonesia dengan jelas.',
            },
            {
              role: 'user',
              content: 'Jelaskan makna sila pertama Pancasila dalam 2 kalimat.',
            },
          ],
          temperature: 0.5,
          max_tokens: 200,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log('Status HTTP:', response.status);
      console.log('Pesan error:', data.error?.message || data);
      return;
    }

    console.log('\nTES BERHASIL!');
    console.log(data.choices?.[0]?.message?.content || '(Jawaban kosong)');
  } catch (error) {
    console.log('Gagal menghubungi Groq:', error.message);
  }
}

testGroq();
