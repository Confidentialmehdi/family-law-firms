# Whitfield Law Group

Multi-page front-end for a New York family law firm. Shared appointment booking dialog and Contact Us enquiry form.

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
| `/book-consultation` | Book a Consultation |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/disclaimer` | Disclaimer |

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

- Appointment times use **America/New_York** civil dates and are labeled “New York time.”
- Contact details on Contact Us are shown as plain text.
