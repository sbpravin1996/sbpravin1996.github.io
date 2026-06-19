# Personal Site

A static personal portfolio built with Next.js. The layout is inspired by a clean resume-style portfolio with sections for skills, experience, projects, hackathons, and profile links.

## Edit Your Content

Update your name, intro, links, skills, experience, projects, and hackathons in:

```txt
src/data/profile.ts
```

Also update the page metadata in:

```txt
src/app/layout.tsx
```

## Run Locally

```bash
npm install
npm run typecheck
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project is configured for static export, so the generated site will be written to `out/`.
