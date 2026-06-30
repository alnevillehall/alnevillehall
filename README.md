# Al Neville Hall — Portfolio (Next.js)

Game-inspired portfolio site built with **Next.js**, **React**, and **TypeScript**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — Next.js App Router pages (`/` and `/resume`)
- `src/components/` — UI sections and layout
- `src/lib/data.ts` — Portfolio content (edit this to update copy)
- `public/assets/` — Static assets (headshot, etc.)

## Resume variants

- Full resume: `/resume`
- Business development focus: `/resume?focus=bd`
- Business systems focus: `/resume?focus=systems`

Use **Print / Save as PDF** on the resume page to download.

## Personalize content

Edit `src/lib/data.ts` with your name, projects, experience, skills, and links.
