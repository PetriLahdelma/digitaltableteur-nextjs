# Digitaltableteur Portfolio

A multilingual Next.js 15 site and Storybook workspace for Digitaltableteur — a design-led studio showcasing flagship case studies, multilingual thought-leadership, and a production-ready lead capture flow.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: CSS Modules + design tokens
- **Internationalisation**: `react-i18next` with lazy locale resources
- **Component library**: Storybook 9 with theme + locale controls
- **Forms & storage**: EmailJS notifications + MongoDB (serverless API route)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the site and `npm run storybook` for the component library (`http://localhost:6006`).

## Environment variables

Copy `.env.example` to `.env.local` and fill the following:

```
NEXT_PUBLIC_EMAIL_SERVICE_ID=   # EmailJS service id (client side)
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=  # EmailJS template id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=   # EmailJS public key
NEXT_PUBLIC_GA_ID=              # Optional Google Analytics 4 id
MONGODB_URI=                    # MongoDB connection string
MONGODB_DB=                     # Database name (e.g. digitaltableteur)
```

The contact route degrades gracefully if MongoDB or EmailJS credentials are absent.

## NPM scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the Next.js dev server on port `3000`. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint with the Next.js configuration. |
| `npm run storybook` | Launch Storybook (port `6006`). |
| `npm run build-storybook` | Create the static Storybook output. |

## Project structure

```
app/
  [locale]/        # Locale-aware routes (home, work, blog, contact, privacy)
  components/      # Reusable UI primitives and feature components
  api/             # Route handlers (Mongo-backed contact endpoint)
content/           # Typed data for case studies and blog posts
stories/           # Intro and global Storybook stories
```

## Testing & quality

- `npm run lint` — validates TypeScript, accessibility lint rules, and design system constraints.
- Storybook stories exist for all primitives, plus new stories for `SocialShare` and `HelsinkiClock`.

## Design system notes

- Theme switching and locale persistence are handled globally in `ThemeProvider` and the `[locale]` layout.
- Cookie consent gating controls GA injection via `AnalyticsScript`.
- `content/` centralises multilingual case-study and blog metadata for the App Router and Storybook.

## Contact flow

1. Client-side validation in `ContactForm`.
2. EmailJS notification (`NEXT_PUBLIC_EMAIL_*`).
3. Lead persistence via `POST /api/save-contact` using MongoDB (`MONGODB_URI`).
4. Inline success/error messaging with localisation.

Feel free to open issues or PRs as the component library and case content evolve.
