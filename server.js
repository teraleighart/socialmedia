const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/generate', async (req, res) => {
  res.status(501).json({
    message: 'AI endpoint not connected yet. Front-end prototype is deployed and ready for backend integration.',
    received: req.body || null
  });
});

app.post('/api/improve', async (req, res) => {
  res.status(501).json({
    message: 'AI endpoint not connected yet. Front-end prototype is deployed and ready for backend integration.',
    received: req.body || null
  });
});

app.post('/api/repurpose', async (req, res) => {
  res.status(501).json({
    message: 'AI endpoint not connected yet. Front-end prototype is deployed and ready for backend integration.',
    received: req.body || null
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
