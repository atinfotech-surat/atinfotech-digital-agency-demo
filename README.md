# ATinfotech Digital Agency Demo

A responsive React/Vite homepage concept for **ATinfotech**, a digital agency based in Surat, Gujarat. It presents the company's web, custom software, eCommerce, mobile app, UI/UX and SEO/digital marketing services, plus selected work and a clear project enquiry path.

> **Image note:** The four images in `public/images/` are AI-generated concept visuals. They are not screenshots or photographs of ATinfotech's actual client projects. Replace them with approved portfolio images before publishing this as a company website. Project descriptions and links are based on the public ATinfotech website; please verify all claims and URLs before launch.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

To verify the production build:

```bash
npm run build
npm run preview
```

## Customize before launch

1. Update services, case-study copy and project links in `src/data/site.js`.
2. Replace the concept images in `public/images/` with approved project screenshots and write accurate alt text.
3. Update the title, description, social preview image, canonical URL and JSON-LD in `index.html` for the real deployment URL.
4. The page links contact enquiries to `https://atinfotech.com/contact`. Confirm the contact page is current and add any preferred phone/email details only after verification.
5. Review the `Since 2009` and `200+ projects delivered` statements for current accuracy.
6. The demo is set to `noindex, nofollow`; change this only after it's customized and ready for public search indexing.
7. Run `npm run build`, review the mobile layout, and test all links before publishing.

## Project structure

```text
public/
  images/             Illustrative concept visuals
  favicon.svg         ATinfotech-inspired demo mark
src/
  data/site.js        Company content, services, projects and process
  App.jsx             Page sections and interactions
  main.jsx            React entry point
  styles.css          Responsive styling
index.html            Metadata and Organization JSON-LD
.github/workflows/    Build verification workflow
```

## Suggested GitHub repository details

- **Repository name:** `atinfotech-digital-agency-demo`
- **Description:** `Responsive digital agency website concept for ATinfotech, built with React and Vite.`
- **Topics:** `react`, `vite`, `digital-agency`, `web-development`, `surat`, `portfolio`

The provided destination is the `atinfotech-surat` GitHub account. Create an empty public repository there named `atinfotech-digital-agency-demo`, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Add ATinfotech digital agency demo"
git branch -M main
git remote add origin https://github.com/atinfotech-surat/atinfotech-digital-agency-demo.git
git push -u origin main
```

The project is MIT-licensed; see [`LICENSE`](./LICENSE).
