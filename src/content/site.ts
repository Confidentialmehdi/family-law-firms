export const site = {
  firmName: 'Whitfield Law Group',
  location: 'New York, NY',
  tagline: 'New York family law',
  ctaLabel: 'Book a consultation',
  bookingComplete: 'Thank you. Your consultation request has been received.',
  contactComplete: 'Thank you. Your contact request has been received.',
  consultationNote: '30-minute consultation · Video or in person',
  timeZoneLabel: 'New York time',
  footerDisclaimer: 'New York family law counsel.',
} as const

export const closingConversion = {
  label: 'Your next step',
  headline: 'Let’s start with a conversation.',
  supporting:
    'Choose a consultation time, or leave your details and request contact.',
  booking: {
    heading: 'Ready to speak with us?',
    copy: 'Choose a time for an initial conversation about your questions and priorities.',
    details: [
      '30-minute consultation',
      'Video or in person',
      'New York time',
    ],
  },
  contact: {
    heading: 'Prefer us to contact you?',
    copy: 'Leave your preferred contact details.',
  },
} as const

/** Primary header navigation — keep this short. */
export const headerNav = [
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/about-us', label: 'About Us' },
  { to: '/our-results', label: 'Our Results' },
] as const

/** Footer Explore grid — full site map including pages not in the header. */
export const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/our-results', label: 'Our Results' },
  { to: '/what-to-expect', label: 'What to Expect' },
  { to: '/faq', label: 'FAQ' },
  { to: '/book-consultation', label: 'Book a Consultation' },
] as const

/** Legal links — footer column on every page. */
export const footerLegal = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
  { to: '/disclaimer', label: 'Disclaimer' },
] as const

/** Firm contact details — display as plain text. */
export const firmContact = {
  phone: '(212) 555-0148',
  email: 'hello@whitfieldlaw.com',
  location: 'New York, NY',
  officeHours: 'Weekdays, 9:00 AM–5:00 PM (New York time)',
} as const
