# Personal Site

A static personal portfolio built with Next.js. The layout is inspired by a clean resume-style portfolio with sections for skills, experience focus, projects, learning, and profile links.

## Edit Your Content

Most edits happen in one file:

```txt
src/data/profile.ts
```

You can update:

- `name`, `title`, `intro`, and `location` for the hero section.
- `links` for GitHub, LinkedIn, and email.
- `skills` for the skill cards.
- `experience` for the Experience Focus section.
- `projects` for the project cards.
- `hackathons` for the Learning & Certifications section.

Each project-style card follows this shape:

```ts
{
  name: "Project Name",
  period: "Portfolio Project",
  description: [
    "First bullet about what you built.",
    "Second bullet about the tools, result, or insight."
  ],
  tags: ["Python", "SQL", "Power BI"]
}
```

If a project has a link, add `href`:

```ts
href: "https://github.com/sbpravin1996/project-name"
```

Update browser title and search preview text in:

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
