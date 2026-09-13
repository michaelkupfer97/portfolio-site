# Michael Kupfer — Portfolio

Personal site of a Forward Deployed Engineer who builds production AI agents. Shows the featured project (Voxly), a filterable grid of AI-agent / ML / full-stack projects, an experience timeline, and a contact form.

**Live:** [portfolio-site-nine-xi-86.vercel.app](https://portfolio-site-nine-xi-86.vercel.app)

## What's inside

- **Hero** — typewriter roles, status pill, constellation background (canvas), floating badges, headline stats
- **Featured project** — Voxly as a case study: framed screenshot carousel with autoplay, stats, demo link
- **Projects grid** — category filters (AI Agents / Full-stack / Machine Learning), per-card screenshot carousels
- **Experience timeline** + education sidebar
- **Contact form** — server route that sends email through Resend
- **Dynamic Open Graph image** (`app/opengraph-image.tsx`) so shared links get a branded preview
- Scroll-reveal animations, glowing card borders, and `prefers-reduced-motion` support throughout

## Tech stack

- **Framework:** Next.js 16 (App Router, React Compiler)
- **Styling:** Tailwind CSS 4
- **Email:** Resend
- **Deployment:** Vercel (pushes to `main` deploy automatically)

## Editing content

All copy and project data lives in one file: [`lib/site.ts`](lib/site.ts).

- `profile` — name, role, tagline, hero typewriter phrases, about paragraphs
- `experience` / `education` — timeline entries
- `projects` — each project has `category`, `images`, `tech`, `highlights`, links; set `featured: true` on exactly one to make it the case-study block
- `techStack` — the marquee

Screenshots go under `public/images/<project>/`.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in your Resend API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](.env.example). `.env*` files are git-ignored; never commit a real key.

## Project structure

```
app/
  page.tsx              # page composition
  layout.tsx            # metadata, fonts
  opengraph-image.tsx   # generated OG image
  api/contact/route.ts  # Resend email endpoint
components/
  FeaturedProject.tsx   # Voxly case-study block
  ProjectsGrid.tsx      # filters + grid
  ProjectCard.tsx
  ExperienceTimeline.tsx
  ParticleField.tsx     # canvas constellation background
  Typewriter.tsx, Reveal.tsx, TechMarquee.tsx, Nav.tsx
lib/site.ts             # all content
public/images/          # project screenshots
```
