<h1 align="center">AkihiroLabs — Portfolio</h1>

<p align="center">
  Personal portfolio site of Akihiro, a student web developer in Tokyo.<br>
  English / 日本語 — editable in the browser, no backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-1E3A8A" alt="version 1.0.0">
  <img src="https://img.shields.io/badge/vanilla-JavaScript-00A8CC" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/lang-English%20%7C%20%E6%97%A5%E6%9C%AC%E8%AA%9E-1E3A8A" alt="English | 日本語">
</p>

---

## ✨ Features

- **Bilingual** — switch between English and Japanese; the choice is remembered
- **Sections** — hero, about, skills, projects and contact
- **Built-in admin panel** — edit every text, project and link right in the page
- **Import / export** — back up or move your content as a JSON file
- **No backend** — content is stored in the browser (`localStorage`)

## 🚀 Getting started

No build step is needed.

1. Download or clone this repository.
2. Open `index.html` in any modern browser.

## 📁 Project structure

```
my-portfolio/
├── index.html            # Page markup — links the CSS and JS
├── css/
│   └── style.css         # Styles
├── js/
│   ├── version.js        # APP_VERSION
│   └── script.js         # Content, i18n, rendering, admin panel
├── .github/workflows/
│   ├── ci.yml            # HTML validation on every push
│   └── cd.yml            # Deploy to GitHub Pages
├── CHANGELOG.md
└── README.md
```

## 🛠 Tech

- Vanilla JavaScript, HTML and CSS — no frameworks, no build tools
- GitHub Actions for HTML validation and GitHub Pages deployment
- Google Fonts (Archivo, Inter)

## 🔖 Versioning

This project uses [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`).

- The version lives in **`js/version.js`** (`APP_VERSION`).
- To release: bump the version, add an entry to [`CHANGELOG.md`](CHANGELOG.md), then create a GitHub Release tagged `vX.Y.Z`.

Current version: **v1.0.0** — see the [changelog](CHANGELOG.md).
