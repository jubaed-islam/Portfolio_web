# Jubaed Islam – Academic Portfolio

Static site (HTML, CSS, vanilla JS). No backend; works on GitHub Pages.

## Deploy on GitHub Pages
1. **Account:** sign up at https://github.com/signup (skip if you have one).
2. **Repository:** click **+ → New repository**, name it `jubaed-portfolio`, set it **Public**, click **Create repository**.
3. **Upload code:** on the repo page choose **Add file → Upload files**, drag in `index.html`, `style.css`, `script.js`, `README.md` and the whole `assets` folder, then **Commit changes**.
4. **Photo:** `assets/profile.jpg` is already included (replace it by uploading a new file with the same name).
5. **CV:** upload your PDF to `assets/` and name it exactly `cv.pdf`.
6. **Certificates:** upload images/PDFs to `assets/certificates/`, then add an entry in the `certs` list in `script.js`:
   `{title:"…", org:"…", date:"…", img:"assets/certificates/x.jpg", pdf:"assets/certificates/x.pdf", link:"https://…"}`
   Only add certificates issued to Jubaed Islam.
7. **Enable Pages:** **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**
8. **Live site (after 1–3 minutes):** `https://YOUR-GITHUB-USERNAME.github.io/jubaed-portfolio/`

## Updating later
Open a file on GitHub → pencil icon → edit → **Commit changes**. Or upload replacement files via **Add file → Upload files**. Pages redeploys automatically.

## Things to fill in (all in `script.js`)
- Publication author lists, journal names and DOIs (placeholders marked `[Add …]`)
- Project data sources and map images (put figures in `assets/projects/`)
- Google Scholar, ResearchGate and GitHub URLs in `links`
- Certificates and awards
