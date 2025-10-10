# YourBrand Marketing Site (React + Vite + Tailwind)

Responsive, SEO-friendly marketing website inspired by healthcare documentation services. Uses React Router, Tailwind CSS, and Helmet for meta/SEO.

Note: Replace placeholder images and copy with your own brand assets and original content before publishing.

## Run locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Project structure

- `src/components`: shared `Header`, `Footer`, `SEO`, `Layout`
- `src/pages`: `Home`, `About`, `Services`, `Resources`, `Contact`
- `public/images`: put your logo and images here

## Customize colors

Colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --primary: #0B4A6F; /* deep blue */
  --accent: #00A3A3;  /* teal */
  --neutral: #F8FAFC; /* light */
  --text: #0F172A;    /* dark */
}
```

Update these values to change the theme.

## Replace images

- Replace `public/images/logo.png` with your logo (same filename).
- Replace image placeholders in sections with real assets.

## SEO & metadata

- Base meta tags are in `index.html`.
- Per-page titles/descriptions are set with the `SEO` component.
- JSON-LD Organization schema is included via `SEO`.

## Accessibility

- Semantic HTML and `aria` attributes are included in nav and forms.
- Keyboard focusable elements use Tailwind focus styles.

## Deploy

```bash
npm run build
npm run preview # optional local preview
```

Deploy the `dist` folder to any static host (Netlify, Vercel, S3, etc.).

<!-- Reminder: Insert your own logo and unique content before publishing to avoid copyright issues. -->


# LUZORION
