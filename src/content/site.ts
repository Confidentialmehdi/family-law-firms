export const site = {
  firmName: 'Whitfield Law Group',
  location: 'New York, NY',
  tagline: 'New York family law',
  ctaLabel: 'Book a consultation',
  consultationNote: '30-minute consultation · Video or in person · $150 sample fee',
  timeZoneLabel: 'New York time',
  footerDisclaimer: 'New York family law practice.',
} as const

export const contactPage = {
  headline: 'Reach Whitfield Law Group.',
  supporting:
    'Call, email, or leave your details below. Choose the option that feels most comfortable—there is no obligation to book.',
  directHeading: 'Phone, email, and office hours',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  locationLabel: 'Location',
  hoursLabel: 'Office hours',
} as const

export const contactForm = {
  sensitiveNote: 'Please avoid including sensitive case details.',
  preferredTimePlaceholder: 'e.g. Weekday mornings',
  selectOption: 'Select an option',
  startAgain: 'Start again',
  submitLabel: 'Request contact',
  completeHeading: 'Contact request received',
  completeCopy: 'Thank you for sharing how we can reach you.',
  completeDemoNotice: 'Demo only. Your contact request was not sent. Nothing was stored.',
  validation: {
    name: 'Enter your full name.',
    email: 'Enter your email address.',
    emailInvalid: 'Enter a valid email (for example, name@example.com).',
    phone: 'Enter your phone number.',
    phoneInvalid: 'Enter a 10-digit US phone number.',
  },
} as const

export const closingConversion = {
  label: 'First step',
  headline: 'Begin with a 30-minute consultation.',
  supporting:
    'Book a time to discuss your questions with Robert Whitfield, or leave your details and request contact.',
  booking: {
    heading: 'Book a consultation',
    copy: 'Choose video or in person, pick a time, and review your details before you confirm.',
    details: [
      '30-minute consultation',
      'Video or in person',
      '$150 sample fee',
      'New York time',
    ],
  },
  contact: {
    heading: 'Request contact',
    copy: 'Share how you prefer to be reached. On this prototype, submissions are not sent.',
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
