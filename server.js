import app from './api/vercel.js';

const port = Number(process.env.PORT) || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Mental Math running on http://127.0.0.1:${port}`);
});
