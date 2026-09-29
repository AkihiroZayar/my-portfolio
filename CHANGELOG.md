# Changelog

All notable changes to the AkihiroLabs studio site are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [2.0.0] — 2026-09-29

Rebranded from a personal portfolio to the **AkihiroLabs** studio site.

- **Brand:** AkihiroLabs light theme (navy `#1E3A8A`, white, charcoal text, cyan highlight), wordmark in the nav, AkihiroLabs badge in the hero, studio favicon and home-screen icon, Open Graph tags for link previews.
- **Apps:** all 7 public apps with their new logos and **Open app** / **GitHub** buttons — AkihiroLabs POS, ShiftPay, ByteBell, Kanji Bridge, NumConv, Cyber Clock and Byte Utility.
- **In the lab:** new section for apps that aren't public yet (HiroCrew, LibroHiro, KanjiFlash).
- **Community:** the contact button now goes to the AkihiroLabs Discord server; socials are GitHub and Discord.
- **Admin panel:** new fields for app logo, live URL and GitHub URL, a new **In the lab** tab, and a link field for the contact button.
- **Security:** the admin PIN is no longer written in the code. Admin now uses a password of 8+ characters, stored only as a salted PBKDF2-SHA256 hash (310,000 rounds), with a 30-second lock after 5 wrong tries. First visit to the admin shows a setup screen.
- Saved content now uses a new storage key (`akihirolabs_site_v1`), so the new defaults show even if you saved edits before. Old edits are still in your browser under `ztt_portfolio_v2`.

## [1.0.0] — 2026-09-28

- Moved `style.css` into `css/` and `script.js` into `js/`.
- Added `js/version.js`, `README.md` and `CHANGELOG.md`.
- Repository renamed from `MyPortfolio` to `my-portfolio`.
- No feature or behavior changes. Saved content (`localStorage`) is untouched.
