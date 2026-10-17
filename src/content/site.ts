export const site = {
  firmName: 'Whitfield Law Group',
  location: 'New York, NY',
  tagline: 'New York family law',
  ctaLabel: 'Book a consultation',
  demoBanner: 'Demo booking — no appointment will be scheduled.',
  demoComplete: 'Demo complete. No appointment has been scheduled.',
  contactDemoBanner: 'Demo form — your request will not be sent.',
  contactDemoComplete: 'Demo complete. Your request has not been sent.',
  consultationNote: '30 minutes · $150 sample consultation fee',
  timeZoneLabel: 'New York time',
  footerDisclaimer:
    'Prototype. Sample content and appointments are for demonstration.',
  fictionalLabel: 'Fictional examples for demonstration.',
  illustrativeLabel: 'Illustrative experiences, not legal case results.',
  sampleImageryLabel: 'Sample imagery',
  resultsDisclosure:
    'Fictional examples for demonstration. These are not actual client testimonials or legal case results.',
} as const

/** Primary header navigation — What to Expect and FAQ are footer-only. */
export const headerNav = [
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/our-results', label: 'Our Results' },
] as const

export const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/our-results', label: 'Our Results' },
  { to: '/what-to-expect', label: 'What to Expect' },
  { to: '/faq', label: 'FAQ' },
] as const

/** Sample-only firm contact details — display as plain text, not links. */
export const sampleContact = {
  phone: '(212) 555-0148',
  email: 'hello@whitfieldlaw.example',
  location: 'New York, NY',
  officeHours: 'Weekdays, 9:00 AM–5:00 PM (New York time)',
  sampleLabel: 'Sample',
} as const
