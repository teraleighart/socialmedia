# Social Media Content Command Center

GitHub-ready Node.js project for Hostinger deployment.

## Included
- `server.js` — simple Express server for Hostinger Node.js hosting
- `public/index.html` — current front-end app prototype
- `.env.example` — example environment variables
- `package.json` — project manifest

## Upload to GitHub
1. Create a new GitHub repository.
2. Upload every file in this folder.
3. Do not upload a real `.env` file or any real API key.

## Deploy to Hostinger
1. In Hostinger, choose **Add Website**.
2. Choose **Node.js Web App**.
3. Choose **Import Git Repository**.
4. Connect GitHub and select this repository.
5. Start command: `npm start`
6. Entry file: `server.js` if Hostinger asks.

## Current status
This package deploys the front-end interface and includes placeholder API routes:
- `POST /api/generate`
- `POST /api/improve`
- `POST /api/repurpose`

Those endpoints are not connected to a live AI model yet.
