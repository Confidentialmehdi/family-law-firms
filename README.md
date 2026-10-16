# Whitfield Law Group

Front-end-only prototype for a New York family law firm. Single-page marketing site with an in-memory demo booking dialog. No backend, persistence, payments, or live scheduling.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Radix-based UI primitives (dialog, accordion, form controls)
- Lucide React icons

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
- Completing the booking flow shows a demo confirmation only; nothing is scheduled or stored.
- Portrait and office visuals are intentional placeholders until real assets are supplied.
