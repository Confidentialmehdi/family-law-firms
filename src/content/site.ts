export const site = {
  firmName: 'Whitfield Law Group',
  location: 'New York, NY',
  tagline: 'New York family law',
  ctaLabel: 'Book a consultation',
  consultationNote: 'Consultation · Online or in person',
  timeZoneLabel: 'New York time',
  footerDisclaimer: 'New York family law practice.',
} as const

export const contactPage = {
  headline: 'Talk with Whitfield Law Group.',
  supporting:
    'Call, email, or leave your details below. Choose whatever feels easiest—there is no obligation to book.',
  directHeading: 'Phone, email, and office hours',
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  addressLabel: 'Address',
  locationLabel: 'Location',
  hoursLabel: 'Office hours',
} as const

export const contactForm = {
  sensitiveNote: 'Please keep sensitive case details for the consultation—not the form.',
  preferredTimePlaceholder: 'e.g. Weekday mornings',
  selectOption: 'Select an option',
  startAgain: 'Start again',
  submitLabel: 'Request contact',
  submittingLabel: 'Submitting…',
  completeHeading: 'We received your message',
  completeCopy: 'Thank you. We will use the details you provided to follow up.',
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
  headline: 'Start with a consultation.',
  supporting:
    'Book a time with Robert J. Whitfield, Esq., or leave your details and we will follow up.',
  booking: {
    heading: 'Book a consultation',
    copy: 'Choose online or in person, pick a time that works, and review your details before you confirm.',
    details: [
      'Consultation',
      'Online or in person',
      'New York time',
    ],
    concernsHeading: 'Common concerns',
    concerns: [
      {
        title: 'Do I need to know my legal category first?',
        answer:
          'No. Start with the questions on your mind—even if several issues connect.',
      },
      {
        title: 'Will I be pressured to hire the firm?',
        answer:
          'No. The consultation is a focused first conversation, not a commitment to retain us.',
      },
      {
        title: 'What if I am not ready to decide next steps?',
        answer:
          'That is common. Many people leave clearer on priorities before choosing a path.',
      },
      {
        title: 'Is this confidential?',
        answer: 'Yes. What you share in the consultation is treated as confidential.',
      },
    ],
    guideLabel: 'Read the full consultation guide',
    guideTo: '/what-to-expect',
  },
  contact: {
    heading: 'Request contact',
    copy: 'Tell us how to reach you. We will follow up using the details you provide.',
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
  { to: '/#faq', label: 'FAQ' },
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
  address: '450 Park Avenue, Suite 1200',
  location: 'New York, NY',
  phone: '(212) 555-0148',
  email: 'hello@whitfieldlaw.com',
  officeHours: 'Weekdays, 9:00 AM–5:00 PM (New York time)',
} as const
