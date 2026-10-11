# Crimson Red Team — Personal Portfolio

A responsive bilingual portfolio for Abdulrahman Al-Zoubi, built with semantic HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a browser. The CV download references `assets/Abdulrahman_AlZoubi_CV.pdf`. Google Fonts load from their CDN when an internet connection is available; system fonts are used as fallbacks.

## Project files

```text
ex00/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── Abdulrahman_AlZoubi_CV.pdf
    ├── avatar.svg
    └── avatar-alt.svg
```

## Interactions and accessibility

- Dark and light themes; the selected theme is saved in browser storage when available.
- English and Arabic content with dynamic document language and text direction.
- A profile illustration switcher that uses the existing geometric SVG assets.
- Two skill tracks with continuous horizontal movement, pointer and touch dragging, keyboard controls, and reduced-motion support.
- A responsive mobile navigation menu and a relative-path CV download.

The portfolio uses the existing Crimson Red Team color direction and has no frontend framework dependencies.
