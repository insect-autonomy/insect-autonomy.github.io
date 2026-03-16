# Insect-scale Autonomy — IROS 2026 Workshop Website (Astro)

## Run locally
```bash
npm install
npm run dev
```

Open:
- http://localhost:4321/insect-scale-autonomy/  (if `base` is `/insect-scale-autonomy`)

## Update content (Markdown only)
Edit:
- `src/content/pages/home.md`
- `src/content/pages/cfp.md`
- `src/content/pages/program.md`
- `src/content/pages/speakers.md`
- `src/content/pages/organizers.md`
- `src/content/pages/logistics.md`

## Deploy (GitHub Pages)
1) Update `astro.config.mjs` (`site`, `base`)
2) Push to GitHub
3) Settings → Pages → Source: GitHub Actions
