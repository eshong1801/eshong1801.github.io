# eshong1801.github.io

Personal portfolio site for **Elliot Hong** — mechatronics-focused engineer building hardware–software systems across embedded firmware, FPGA, and real-time control.

Single-page, vanilla HTML / CSS / JS. Tailwind CSS via CDN. No build step.

## Stack

- `index.html` — single-page site, all sections (Hero / About / Projects / Experience / Skills / Contact)
- `styles.css` — custom styles layered on top of Tailwind
- `script.js` — theme toggle, mobile menu, active-section highlight on scroll
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing)

## Run locally

No build, no server required:

```
# just open the file in your browser
start index.html       # Windows
open  index.html       # macOS
xdg-open index.html    # Linux
```

Or serve it for live-reload during edits (any static server works):

```
python -m http.server 8000
# then visit http://localhost:8000
```

## Live site

https://eshong1801.github.io

## Customizing

- **Resume PDF:** drop a file named `Elliot_Hong_resume.pdf` in the repo root — the "Download Resume" button on the Contact section already links to it.
- **GitHub URL:** update the placeholder links to your repo (search `eshong1801` in `index.html`).
- **Accent color:** change `#3b82f6` in `index.html` (the `tailwind.config` block) and in `styles.css`.
- **Project cards:** each `<article class="project-card">` in `index.html` is self-contained — copy/edit as needed.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Uses `IntersectionObserver` for nav highlighting and `prefers-color-scheme` for initial theme.
