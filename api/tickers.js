import { kv } from '@vercel/kv';

const USER_KEY = 'pe-watchlist-tickers';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const tickers = await kv.get(USER_KEY);
      return res.status(200).json({ tickers: tickers || ['AAPL', 'MSFT', 'GOOGL', 'META', 'AMZN'] });
    }

    if (req.method === 'POST') {
      const { tickers } = req.body;
      if (!Array.isArray(tickers)) return res.status(400).json({ error: 'tickers must be an array' });
      await kv.set(USER_KEY, tickers);
      return res.status(200).json({ ok: true, tickers });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Storage error', detail: err.message });
  }
}
