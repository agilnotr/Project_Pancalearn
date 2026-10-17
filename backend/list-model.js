
require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
});

async function listModels() {
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey || !apiKey.trim()) {
    console.log('AI_API_KEY tidak terbaca dari .env');
    return;
  }

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models',
    {
      headers: {
        'x-goog-api-key': apiKey.trim(),
      },
    }
  );

  const data = await response.json();

  console.log('HTTP STATUS:', response.status);

  if (!response.ok) {
    console.log('ERROR:', data.error?.message || data);
    return;
  }

  console.log(
    'MODEL YANG MENDUKUNG generateContent:'
  );

  for (const model of data.models || []) {
    if (model.supportedGenerationMethods?.includes('generateContent')) {
      console.log(model.name);
    }
  }
}

listModels().catch((error) => {
  console.log('ERROR KONEKSI:', error.message);
});
