# EduApp - College Assessment and Performance Portal

EduApp is a modern React + TypeScript portal built for colleges to run and manage:

- assessment modules (aptitude, technical, lab, interview, assignment)
- student performance reporting
- leaderboard and benchmark tracking
- mentoring and schedule workflows

The app is optimized as a single-page application (SPA) and includes deploy-ready routing configs.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router 7

## Local Development

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy and Host

### Option 1: Vercel (Recommended)

This repo already includes [vercel.json](vercel.json) with SPA rewrite support.

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Vercel auto-detects Vite settings.
4. Deploy.

Build settings (if asked):

- Build Command: `npm run build`
- Output Directory: `dist`

### Option 2: Netlify

This repo already includes [netlify.toml](netlify.toml) with build and SPA redirect configuration.

1. Push this project to GitHub.
2. Import the repo into Netlify.
3. Deploy with default settings.

## Production Notes

- Routing fallback is configured for both Vercel and Netlify.
- Run `npm run build` before every release.
- Integrate backend APIs later for authentication, test creation, and student result ingestion.
