# P/E Watchlist

A glanceable web app showing P/E ratios for a list of peer stocks — works on iPhone, iPad, and Mac.

**Columns:** Ticker · Company · Current P/E · 5Y avg P/E · vs 5Y avg · Rev growth (1Y forecast) · Dividend yield

Data sourced from Yahoo Finance (no API key needed). Ticker list stored server-side via Vercel KV so it syncs across all your devices.

---

## Deploy to Vercel (one-time setup, ~10 minutes)

### 1. Push this repo to GitHub

If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/williamfmorris/pe-watchlist.git
git push -u origin main
```

### 2. Create a Vercel account

Go to [vercel.com](https://vercel.com) and sign up with your GitHub account (`williamfmorris`).

### 3. Import the project

- In Vercel dashboard, click **Add New → Project**
- Select the `pe-watchlist` repository from your GitHub account
- Click **Deploy** (Vercel auto-detects the config from `vercel.json`)

### 4. Add Vercel KV (the backend storage)

This is what stores your ticker list server-side so it syncs across devices.

- In your Vercel project dashboard, go to **Storage** tab
- Click **Create Database → KV**
- Name it `pe-watchlist-kv`
- Click **Connect** to link it to your project
- Vercel automatically injects the required environment variables — no manual config needed

### 5. Redeploy

After connecting KV, trigger a redeploy:
- Go to **Deployments** tab → click the three dots on the latest deployment → **Redeploy**

### 6. Open your app

Your app will be live at:
```
https://pe-watchlist.vercel.app
```
(or a similar auto-generated URL — check your Vercel dashboard)

**Bookmark this URL on your iPhone, iPad, and Mac.** On iPhone/iPad, tap Share → Add to Home Screen for a full-screen app icon.

---

## Updating the app

Any `git push` to `main` automatically triggers a redeploy on Vercel. No manual steps needed.

---

## Local development

```bash
npm install -g vercel
vercel dev
```

This runs the app locally at `http://localhost:3000` with the same serverless API.
