# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website (single-page, scroll-based) introducing the owner, work experience, and projects. Bilingual VI/EN with light/dark theme toggle.

## Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS**
- **next-themes** for light/dark toggle
- **next-intl** (or built-in i18n routing) for VI/EN
- Deploy target: **Vercel**

## Commands

```bash
npm install          # install deps
npm run dev          # start dev server (http://localhost:3000)
npm run build        # production build
npm run start        # serve production build
npm run lint         # ESLint
```

The project has not been scaffolded yet — see `PLAN.md` for the build plan and `CONTENT.md` for the CV content that will populate the site.

## Architecture notes

- **Single-page layout**: all sections (Hero, About, Experience, Projects, Skills, Contact) live on `/` as sibling components, anchored by `id` for in-page scroll navigation.
- **Content as data**: CV content lives in typed objects under `src/content/` (one file per language: `vi.ts`, `en.ts`). Components consume content from a language-aware hook — do **not** hardcode user-facing strings in JSX.
- **Theme**: `next-themes` provides the toggle; Tailwind's `dark:` variant handles styling. Persist user choice in `localStorage`.
- **Sections are self-contained**: each section under `src/components/sections/` owns its layout and animations. Adding a new section means creating one component and importing it into the page.

## Conventions

- All user-facing strings must come from `src/content/{vi,en}.ts` — adding text means updating both files.
- New project entries: append to the `projects` array in both content files; don't create per-project files unless content grows beyond ~10 entries.
- Images go in `public/images/` with descriptive names matching the content slug (e.g., `public/images/projects/pump-control-system.jpg`).

## Assets pipeline

The user drops **raw** images and documents into `assets/` (see [ASSETS.md](ASSETS.md)):

- `assets/personal/` — avatar, hero photo, CV PDF
- `assets/projects/<slug>/` — one folder per project, with `cover.jpg` + screenshots
- `assets/documents/` — certificates, references, other PDFs

When building or updating the site, copy from `assets/` → `public/`, optimize (resize, WebP/AVIF), and generate blur placeholders. **Never ask the user to manually place files in `public/`** — the source of truth is `assets/`. Project slugs in `assets/projects/<slug>/` must match the `slug` field in `src/content/{vi,en}.ts`.
