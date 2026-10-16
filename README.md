# Whitfield Law Group

Front-end-only multi-page prototype for a New York family law firm. Shared in-memory appointment booking and a Contact Us enquiry form. No backend, persistence, payments, or live scheduling.

## Stack

- React + TypeScript + Vite
- React Router
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Radix-based UI primitives (dialog, accordion, form controls)
- Lucide React icons

## Pages

| Path | Page |
|------|------|
| `/` | Home |
| `/practice-areas` | Practice Areas |
| `/about-us` | About Us |
| `/contact-us` | Contact Us |
| `/our-results` | Our Results |
| `/what-to-expect` | What to Expect |
| `/faq` | FAQ |

`/meet-robert` redirects to `/about-us`.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Notes

- Sample appointments use **America/New_York** civil dates and times, labeled “New York time.”
- Booking and contact flows are demo-only; nothing is scheduled, emailed, or stored.
- Contact details on Contact Us are labeled sample content (plain text, not links).
- Portrait and office visuals are intentional placeholders until real assets are supplied.
