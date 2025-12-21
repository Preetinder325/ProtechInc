# Protech Inc site

Minimal, multi-page marketing site (Home, About, Hiring, Contact) built with Tailwind CSS. Contact form can post to Firebase Firestore.

## Structure
- `public/` — static pages (`index.html`, `about.html`, `hiring.html`, `contact.html`) and compiled `styles.css`.
- `src/styles/tailwind.css` — Tailwind source.
- `tailwind.config.js` — light palette, fonts, and content scan paths.
- `postcss.config.js` — PostCSS/Tailwind config (generated).
- `index.html` — redirect to `public/index.html`.

## Setup
```sh
npm install
npm run build:css      # one-time build
npm run dev:css        # watch mode during edits
```
Open `public/index.html` (or other pages) in a browser.

## Firebase (contact form)
1. In Firebase console, create a project with Firestore.
2. Copy your web app config values (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`, `measurementId`).
3. In `public/contact.html`, replace the placeholders in `firebaseConfig` **or** set `window.PROTECH_FIREBASE_CONFIG = { ... }` before the Firebase scripts.
4. Submissions go to Firestore collection `contactMessages` with fields `{ name, email, company, message, createdAt }`.

To disable storage, remove the Firebase scripts and form handler block in `public/contact.html`.
