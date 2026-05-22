# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js landing page plus documentation and standalone design prototypes.

- `src/app/` contains the Next.js App Router entrypoints, global metadata, and CSS.
- `src/components/landing/` contains landing page sections and client-side interactions.
- `src/lib/` stores shared content and constants used by the landing page.
- `public/` stores favicon and social preview assets.
- `docs/prototypes/` stores self-contained HTML prototypes, including the A4B brand book and Swiss blue visual concept.

Keep future implementation code in a clear top-level directory such as `src/`, with tests in `tests/` or colocated as `*.test.*` files. Store static design references, exported prototypes, and product documentation under `docs/`.

## Build, Test, and Development Commands

Use npm for the Next.js app:

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Build and run the production Docker image:

```powershell
docker build -t agentic4biz-landing .
docker run --rm -p 3001:3001 agentic4biz-landing
```

Run the same production image through Docker Compose:

```powershell
docker compose up --build
Start-Process "http://localhost:3001"
docker compose down
```

Existing prototypes can still be opened directly in a browser:

```powershell
Start-Process ".\docs\prototypes\A4B - brand book.html"
Start-Process ".\docs\prototypes\A4B - Swiss azul (standalone).html"
```

## Coding Style & Naming Conventions

Use 2-space indentation for TypeScript, TSX, HTML, CSS, and JavaScript blocks. Prefer semantic section names and CSS custom properties for reusable colors, typography, and spacing. Keep landing page copy and repeated data in `src/lib/content.ts` instead of scattering it through components.

For HTML prototypes, keep files standalone unless a shared asset pipeline is introduced.

Use descriptive filenames for prototypes and docs, for example `A4B - brand book.html` or `feature-name-prototype.html`. Avoid renaming existing prototype files unless references are updated at the same time.

## Testing Guidelines

No automated tests are present yet. For app changes, run `npm run lint` and `npm run build`. For current HTML deliverables and visual app changes, manually verify each changed file in a browser at common desktop and mobile widths. Check that typography loads, JavaScript executes without console errors, and exported standalone files still render without external local dependencies.

When code is added, include a test runner and place tests near the behavior they cover. Use names such as `component-name.test.ts` or `FeatureNameTests.cs`, matching the selected stack.

## Commit & Pull Request Guidelines

This workspace does not currently include Git history, so no project-specific commit convention can be inferred. Use short imperative commit messages, for example `Add brand prototype guide` or `Update A4B color tokens`.

Pull requests should include a concise summary, affected paths, validation performed, and screenshots or recordings for visual prototype changes. Link related issues when available and call out any new commands, dependencies, or manual review steps.

## Agent-Specific Instructions

Keep generated guidance concise and repository-specific. Do not invent build or test commands that are not present in the repo. Preserve existing standalone prototypes unless the task explicitly asks to restructure them.
