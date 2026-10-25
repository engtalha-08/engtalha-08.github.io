# Muhammad Talha — Portfolio

A static portfolio website (HTML5, CSS3, vanilla JavaScript). No build step, no Node.js, no backend. Works on GitHub Pages.

## Folder structure

```
muhammad-talha-portfolio/
├── index.html
├── style.css
├── script.js            ← all your content lives in the CONFIG object at the top
├── README.md
└── assets/
    ├── Muhammad-Talha-Resume.pdf     (already included)
    ├── favicon.svg                   (already included)
    ├── profile.jpg                   (your photo — already included)
    ├── icons/                        (optional extra icons)
    └── projects/
        ├── leave-management/         cover.png  ← Canvas App screenshots
        ├── sales-pipeline/           cover.png  ← Model-driven App + Power BI dashboard screenshots
        ├── workflow-automation/      cover.png  ← Power Automate workflow screenshots
        ├── hospital-crm/             cover.png  ← only once the project is confirmed
        ├── employee-management/      cover.png  ← only once the project is confirmed
        └── customer-service/         cover.png  ← only once the project is confirmed
```

Each project folder has a `README.txt` explaining what to put there. Until `cover.png` exists, the card shows a clearly labelled **"Screenshot not added yet"** placeholder — no fake screenshots are used.

Recommended screenshot size: 1600 × 1000 px (16:10), PNG or JPG. If you use `.jpg`, update the `image` / `screenshots` paths in `script.js`. For extra screenshots (shown in the project details popup), save them as `shot-2.png`, `shot-3.png`… and add their paths to that project's `screenshots` array.

Remove or blur client names, personal data and secrets in any screenshot before adding it.

## Page structure (inspired by the reference portfolio's section order)

Hero (orbit portrait + tech ticker) → 01 About → 02 Experience (dark band) → 03 Power Platform (hover-to-trace map) → 04 Selected work → 05 Skills → 06 Education → 07 Contact → Footer. Light theme with dark career and contact bands.

## What you still need to fill in

Open `script.js` and edit the `CONFIG` object. Anything written as `[[like this]]` shows up on the page as a highlighted amber placeholder.

| Item | Where | Status |
|---|---|---|
| Numrex start date and contributions | `CONFIG.experience[0]` | Placeholders |
| GreenX Consultants end date | `CONFIG.experience[1].end` | Placeholder (start is 2025) |
| Project repositories | `repo` in each project | Empty — buttons appear disabled |
| Live demos | `demo` in each project | Empty — the Live Demo button is hidden until a real URL exists |
| Concept project details | the three `type: 'concept'` projects | Placeholders — change `type` to `'featured'` once confirmed |

Already filled in: your photo (`assets/profile.jpg`), GitHub (`https://github.com/engtalha-08`), LinkedIn, email, education (5th semester, 2024 – 2028).

### Project preview images

The images in `assets/projects/*/` are **illustrative mockups with sample data** (fictional names and numbers) that imitate Power Platform screens. Each one is labelled **"Illustrative preview · sample data"** on the page so nobody mistakes them for real screenshots. When you have real screenshots, save them over `cover.png` in the same folder (and remove the `mockup: true` line from that project in `script.js` to hide the label). Remove client names and personal data from real screenshots first.

### Things taken from your resume / messages — please verify

* Email, LinkedIn URL and location (resume).
* GreenX Consultants from 2025, then a full-time role at Numrex where you started as a 3-month intern (your messages + resume).
* "Reduced manual effort by approximately 40%" (resume) — remove it from `CONFIG.experience[1].contributions` if you can't back it up.
* The About stat tile "2025 — Since" and the project count wording — edit them in `index.html` (`.stat-col`) if they stop being accurate.

Your phone number is intentionally **not** shown on the website.

## Hero effects (inspired by the reference)

* Animated 3D-style wireframe ribbons, rotating wireframe shapes and floating particles drawn on a `<canvas>` (no libraries). The ribbons bend toward the mouse and particles are pushed away.
* Custom cursor: a dot plus a trailing ring that grows over links and buttons (mouse devices only).
* Mouse parallax on the orbit portrait and technology chips; typewriter headline (`CONFIG.heroPhrases`).
* All effects stop with `prefers-reduced-motion`, pause when the hero is off-screen, and the cursor ring is disabled on touch devices.

## Editing content

* **Add a project:** copy any object inside `CONFIG.projects`, change the fields, save. `type: 'featured'` creates a large stacked card; `type: 'concept'` adds a smaller card in the Concepts grid.
* **Remove a project:** delete its object.
* **Change the Power Platform map:** edit `CONFIG.platform.nodes` (the first four are drawn left, the next four right).
* **Change skills:** edit the `<li>` items inside the `#skills` section of `index.html`.
* **Change hero or About text:** look for the `<!-- EDIT: ... -->` comments in `index.html`.
* **Colours and fonts:** change the variables at the top of `style.css` (`:root`).

## Run locally

Simplest: double-click `index.html`. Everything works except the resume-exists check (browsers block that on `file://`).

Better — use a tiny local server:

```bash
cd muhammad-talha-portfolio
python -m http.server 8000
# open http://localhost:8000
```

Then check, at desktop width and in your browser's responsive/mobile mode: the menu, every section, the hover map, project details (Esc closes it), the resume download, and the browser console (F12) for errors.

## Publish on GitHub Pages

1. Create a GitHub repository, e.g. `muhammad-talha-portfolio` (public).
2. Upload **the contents** of this folder so `index.html` is at the repository root (or use Git):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/muhammad-talha-portfolio.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://<your-username>.github.io/muhammad-talha-portfolio/`.
   (Name the repo `<your-username>.github.io` for the shorter address.)
5. Set `CONFIG.social.github` in `script.js` to your profile URL and push again.

All asset paths are relative, so the site works in a sub-path like the one above.

## Contact method

The Contact section uses a real `mailto:` link plus a copy-to-clipboard button. There is deliberately **no fake form**. To add one later, connect a real backend such as Formspree, Web3Forms or Netlify Forms: create an account, get your form endpoint, and add a `<form action="YOUR_ENDPOINT" method="POST">` with `name`, `email` and `message` fields plus spam protection.

## Accessibility and performance notes

* Semantic landmarks, skip link, visible focus styles, keyboard-operable menu, hover map (focus works like hover) and project dialog (Esc closes it, focus returns to the button that opened it).
* `prefers-reduced-motion` disables animations and smooth scrolling.
* On small screens the hover map becomes a plain list, and the floating hero badges become a wrapped row.
* Only external requests: Google Fonts (Fraunces, Inter, JetBrains Mono). If blocked, system fonts are used. To remove the dependency, delete the three `fonts.googleapis.com` / `fonts.gstatic.com` lines in `index.html`.
* No analytics, cookies, API keys or credentials.
