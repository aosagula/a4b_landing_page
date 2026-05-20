# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js landing page for Agentic4Biz. Route files live in `pages/`, with the main page at `pages/index.js` and app-level setup in `pages/_app.js`. Reusable React sections are in `components/` (`HeroSection.js`, `Navbar.js`, `Footer.js`, etc.). Global styling is in `styles/globals.css`, including Bootstrap imports, chat widget variables, fonts, and responsive rules.

Static assets belong in `public/`: optimized images in `public/images/`, locale files in `public/locales/{es,en}/translation.json`, fonts in `public/fonts/`, and SEO files such as `robots.txt` and generated sitemaps. Original editable image sources are stored separately in `gimp/`. Deployment support is in `Dockerfile`, `docker-compose.yml`, and `.github/workflows/deploy.yml`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Next.js development server.
- `npm run build`: create the production build and run `next-sitemap` through `postbuild`.
- `npm start`: serve the production build after `npm run build`.
- `docker compose up --build`: build and run the containerized app locally.

The repo also contains `yarn.lock`, but `package-lock.json` is present and npm scripts are the clearest default. Avoid mixing package managers in one change.

## Coding Style & Naming Conventions

Use JavaScript React components with PascalCase file names in `components/`. Keep route files lowercase under `pages/`. Follow the existing style: 2-space indentation in JS, single quotes, semicolons only where already used by surrounding code, and Bootstrap utility classes for layout where practical.

Keep user-visible copy in translation files instead of hardcoding new text. When adding images, reference them from `public/images/` with absolute public paths like `/images/logo3.png`.

## Testing Guidelines

There is no test framework configured yet. For changes, at minimum run `npm run build` to catch compile, routing, and sitemap issues. Manually verify the landing page in both configured locales, `es` and `en`, especially after editing `translation.json`, navigation labels, SEO metadata, or section layout.

## Commit & Pull Request Guidelines

Recent history uses short conventional-style prefixes such as `fix:`, `feat:`, and `chore:`. Prefer concise imperative commits, for example `fix: correct deploy workflow indentation` or `feat: add localized hero copy`.

Pull requests should include a brief summary, testing notes such as `npm run build`, linked issue or deployment context when relevant, and screenshots for visible UI changes. Mention any changes to external service URLs, sitemap configuration, Docker settings, or GitHub Actions deployment behavior.

## Security & Configuration Tips

Do not commit secrets or private webhook replacements. The current chat webhook is configured in `pages/index.js`; treat any production endpoint changes as deployment-sensitive and document them in the PR.
