This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Setup

Copy environment templates before starting:

```bash
cp .env.example .env.local
cp backend/.env.example backend/.env
```

Key security-related values:

- `CHAT_RATE_LIMIT_MAX_REQUESTS`, `CHAT_RATE_LIMIT_WINDOW_MS`: request throttling for `/api/chat`.
- `CHAT_BACKEND_TIMEOUT_MS`: backend timeout for proxy calls.
- `ALLOWED_ORIGINS`: comma-separated CORS origins for FastAPI.
- `INGEST_TOKEN`: required for `/ingest` when set (and strongly recommended in production).
- `ENVIRONMENT`: set to `production` to disable open ingest behavior when token is missing.

### Profile chatbot on the live site

The floating “Ask about my profile” chat widget is wired to a **profile chatbot** (from `Projects/AI_Chatbot` or `services/profile-chat`). Vercel only hosts the Next.js app, so the chatbot API must run elsewhere.

1. **Deploy the chatbot API** (Python FastAPI) to a service that runs 24/7, e.g.:
   - [Railway](https://railway.app)
   - [Render](https://render.com)
   - [Fly.io](https://fly.io)

   Use the code in `Projects/AI_Chatbot` (or `services/profile-chat`): run `uvicorn api:app --host 0.0.0.0`, and ensure `profile.json` and `.env` (e.g. `OPENAI_API_KEY` or `USE_OLLAMA=true`) are available there.

2. **Set the API URL on Vercel**: In your Vercel project → Settings → Environment Variables, add:
   - **Name:** `CHATBOT_API_URL`
   - **Value:** your deployed API URL (e.g. `https://your-app.up.railway.app`)

3. Redeploy the portfolio. The widget will call your site’s `/chat` route, which proxies to `CHATBOT_API_URL`. If `CHATBOT_API_URL` is not set, the widget still appears but will show a “not configured” message when users send a message.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
