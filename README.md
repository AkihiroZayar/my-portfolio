<p align="center">
  <img src="assets/wordmark.png" alt="AkihiroLabs" width="340">
</p>

<h1 align="center">AkihiroLabs — Studio Site</h1>

<p align="center">
  The home of AkihiroLabs, a one-person indie studio in Tokyo building lightweight, local-first web apps.<br>
  English / 日本語 — editable in the browser, no backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.0-1E3A8A" alt="version 2.0.0">
  <img src="https://img.shields.io/badge/vanilla-JavaScript-00A8CC" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/lang-English%20%7C%20%E6%97%A5%E6%9C%AC%E8%AA%9E-1E3A8A" alt="English | 日本語">
</p>

Live: **https://akihirozayar.github.io/my-portfolio/**

---

## 🦝 The apps

| | App | What it is |
|---|---|---|
| <img src="assets/app-akihirolabs-pos.png" width="40"> | [AkihiroLabs POS](https://github.com/AkihiroZayar/akihirolabs-pos) | Local-first point-of-sale for bars, cafés and small shops |
| <img src="assets/app-shiftpay.png" width="40"> | [ShiftPay](https://github.com/AkihiroZayar/shiftpay) | Income tracker for part-time workers in Japan |
| <img src="assets/app-bytebell.png" width="40"> | [ByteBell](https://github.com/AkihiroZayar/bytebell) | Weekly timetable with push reminders (PWA) |
| <img src="assets/app-kanji-bridge.png" width="40"> | [Kanji Bridge](https://github.com/AkihiroZayar/kanji-bridge) | Furigana for any Japanese text, with PDF export |
| <img src="assets/app-numconv.png" width="40"> | [NumConv](https://github.com/AkihiroZayar/numconv) | Number system converter with steps and a quiz |
| <img src="assets/app-cyber-clock.png" width="40"> | [Cyber Clock](https://github.com/AkihiroZayar/cyber-clock) | Neon desk clock with focus mode |
| <img src="assets/app-utility-bot.png" width="40"> | [Byte Utility](https://github.com/AkihiroZayar/utility-bot) | The AkihiroLabs Discord bot |

## ✨ Features

- **Bilingual** — switch between English and Japanese; the choice is remembered
- **Sections** — hero, studio, apps (with live + GitHub links), in the lab, toolbox and community
- **Built-in admin panel** — edit every text, app and link right in the page (triple-click the "AkihiroLabs apps" label)
- **Safe admin password** — only a salted PBKDF2 hash is stored, never the password. The first time you open the admin you create a password; the setup screen shows an `ADMIN_HASH` line you can paste into `js/script.js` so it works on every browser
- **Import / export** — back up or move your content as a JSON file
- **No backend** — admin edits are stored in your own browser (`localStorage`); visitors always see the defaults in `js/script.js`

## 🚀 Getting started

No build step is needed.

1. Download or clone this repository.
2. Open `index.html` in any modern browser.

To change what visitors see, edit `DEFAULT_DATA` in `js/script.js` and push.

## 📁 Project structure

```
my-portfolio/
├── index.html            # Page markup — links the CSS and JS
├── css/
│   └── style.css         # Styles (AkihiroLabs light theme)
├── js/
│   ├── version.js        # APP_VERSION
│   └── script.js         # Content, i18n, rendering, admin panel
├── assets/
│   ├── wordmark.png · logo.png          # AkihiroLabs brand art
│   ├── favicon.png · apple-touch-icon.png
│   └── app-*.png                        # App logos
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

Current version: **v2.0.0** — see the [changelog](CHANGELOG.md).

## 💬 Community

Updates and feedback on the **[AkihiroLabs Discord server](https://discord.gg/RwHzT7X85)**.

---

<p align="center">
  Built with 🦝 by <b>AkihiroLabs</b>
</p>
