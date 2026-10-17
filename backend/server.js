// PancaLearn Backend Server
// Serves the AI API route and (optionally) the built frontend.

require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
});

const path = require('path');
const express = require('express');
const cors = require('cors');

const aiRoutes = require('./routes/ai');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// ---- API Routes ----
app.use('/api/ai', aiRoutes);

// Simple health check
// `aiConfigured` lets the frontend show an honest status (never exposes the key itself).

app.get('/api/health', (req, res) => {
  const key = process.env.GROQ_API_KEY;

  res.json({
    status: 'ok',
    service: 'PancaLearn backend',
    aiConfigured: Boolean(key && key.trim()),
    aiProvider: 'Groq'
  });
});


// ---- Serve the static frontend ----
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

// Fallback to index.html for any non-API GET route (simple SPA-style routing safety net)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) next();
  });
});

// ---- Central error handler ----
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Terjadi kesalahan pada server. Silakan coba lagi.' });
});

app.listen(PORT, () => {
  console.log(`✅ PancaLearn backend running at http://localhost:${PORT}`);
  console.log(`   Frontend served from: ${frontendPath}`);
  if (!process.env.AI_API_KEY) {
    console.warn('⚠️  AI_API_KEY is not set. PancaAI will respond with a fallback message until it is configured in backend/.env');
  }
});
