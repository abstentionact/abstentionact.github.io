# AbstentionAct

Project website for AbstentionAct, a benchmark for compliance bias in tool-using agents,
building on *Designing for Doubt* (AIES 2026).

Website: https://abstentionact.github.io/

## Editing

- `index.html`: page content
- `style.css`: layout, original colour palette, and dark-mode styles
- `app.js`: scenario demo, task explorer, citations, and theme toggle
- `theme.js`: applies the saved theme before rendering
- `favicon.svg`: browser icon

No installation or build step is needed. To preview locally, run
`python3 -m http.server 8000` and open `http://localhost:8000/`.

GitHub Pages serves the root of the `main` branch. The `.nojekyll` file keeps the
static files unchanged. This repository contains only the website, not benchmark
runs, private reports, or credentials.
