# Shakir's portfolio

A one-page portfolio built with React, TypeScript and Vite.

## Running it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-check and build into dist/
npm run preview  # serve the built site
```

## Editing content

All text and links are in [src/content.ts](src/content.ts).

- Leave a link as `''` to hide it (e.g. `email`, `cv`, Whetstone's `source`).
- Screenshots and logos: put the files in `public/` (e.g. `public/screenshots/manaheart-home.png`)
  and set the path in `content.ts` (e.g. `screenshot: '/screenshots/manaheart-home.png'`).
- Smaller projects: edit the `smallProjects` list. The first four also appear as planets.

## Structure

- `src/components/SolarSystem.tsx`: the animated planets band
- `src/components/FeatureCard.tsx` and `Stories.tsx`: the Whetstone and Manaheart cards and their expanded stories
- `src/styles.css`: all styling, with colours as variables at the top
