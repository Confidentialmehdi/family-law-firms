export const homeHero = {
  headline: 'New York family law. A defined first conversation.',
  supporting:
    'Whitfield Law Group helps you discuss divorce, parenting arrangements, and financial questions with attorney Robert J. Whitfield, Esq.—so you can understand your options before deciding what comes next.',
  points: [
    {
      id: 'experience',
      lines: ['25+ years of', 'combined experience'],
    },
    {
      id: 'matters',
      lines: ['500+ family law', 'matters resolved'],
    },
    {
      id: 'rating',
      lines: ['4.9/5', 'client rating'],
    },
  ],
} as const

/**
 * Hero consultation request form.
 * Same compact lead-panel layout; copy is written for family-law intake
 * (priorities and practice area), not personal-injury “what happened” framing.
 */
export const homeHeroForm = {
  heading: 'Request a consultation.',
  firstNamePlaceholder: 'First name',
  lastNamePlaceholder: 'Last name',
  phonePlaceholder: 'Phone number',
  zipPlaceholder: 'ZIP code',
  emailPlaceholder: 'Email',
  caseTypePlaceholder: '- Select a practice area -',
  /** Hero-specific labels; values match practice-area ids used elsewhere. */
  practiceTopics: [
    { value: 'divorce', label: 'Divorce or separation' },
    { value: 'custody', label: 'Parenting time and custody' },
    { value: 'child-support', label: 'Child support' },
    { value: 'spousal-support', label: 'Spousal support' },
    { value: 'property', label: 'Property and finances' },
    { value: 'prenup', label: 'Prenup or postnup agreement' },
    { value: 'not-sure', label: 'Several connected questions' },
  ] as const,
  formatLabel: 'Preferred way to reach you',
  formats: [
    { value: 'phone', label: 'Phone call' },
    { value: 'email', label: 'Email' },
    { value: 'text', label: 'Text' },
  ] as const,
  contactWindowPlaceholder: '- When may we reach you? -',
  contactWindows: [
    { value: 'asap', label: 'As soon as you’re available to talk' },
    { value: '9-12', label: 'Weekday morning · 9:00 AM–12:00 PM' },
    { value: '12-15', label: 'Weekday midday · 12:00–3:00 PM' },
    { value: '15-18', label: 'Weekday afternoon · 3:00–6:00 PM' },
  ] as const,
  detailsPlaceholder: 'Optional: a few words about your questions',
  consultationNote: '30-minute consultation · We’ll follow up using your preferred method',
  submitLabel: 'Request a consultation',
  submittingLabel: 'Submitting…',
  termsLead: 'By submitting this form, you agree to our',
  termsLinkLabel: 'Terms',
  privacyLead: '& acknowledge our',
  privacyLinkLabel: 'privacy policy',
  consentCopy:
    'By submitting your phone number, you authorize Whitfield Law Group to contact you by phone or SMS at the number you provided, including with an automatic dialing system. Consent is not required to request a consultation. Message and data rates may apply.',
  footerLine: 'Requests contact only · No attorney-client relationship',
  completeHeading: 'Request received',
  completeCopy: 'Thank you. We will use the details you provided to follow up.',
  completeDemoNotice: 'Demo only. Your form was not sent. Nothing was stored.',
  startAgain: 'Start again',
  validation: {
    firstName: 'Enter your first name.',
    lastName: 'Enter your last name.',
    phone: 'Enter your phone number.',
    phoneInvalid: 'Enter a 10-digit US phone number.',
    zip: 'Enter your ZIP code.',
    zipInvalid: 'Enter a valid US ZIP code.',
    email: 'Enter your email address.',
    emailInvalid: 'Enter a valid email (for example, name@example.com).',
    caseType: 'Choose the topic closest to your situation.',
  },
} as const

export const homePractice = {
  eyebrow: 'Practice areas',
  heading: 'What are you facing?',
  introduction:
    'Choose the situation closest to yours. Each path leads to the practice area we handle.',
  linkLabel: 'Explore all practice areas',
  /** Situation-led mapping — concern first, practice area second. */
  concerns: [
    {
      areaId: 'divorce',
      concern: 'Considering separation',
      outcome: 'Clarify decisions about family, home, and timing.',
    },
    {
      areaId: 'custody',
      concern: 'Need a parenting schedule',
      outcome: 'Talk through time with your children and shared responsibilities.',
    },
    {
      areaId: 'child-support',
      concern: 'Support for your children',
      outcome: 'Understand contributions toward their ongoing needs.',
    },
    {
      areaId: 'spousal-support',
      concern: 'Financial support after separation',
      outcome: 'Discuss needs and responsibilities during or after a split.',
    },
    {
      areaId: 'property',
      concern: 'Sorting shared assets and debts',
      outcome: 'Organize property, obligations, and financial priorities.',
    },
    {
      areaId: 'prenup',
      concern: 'Planning finances around marriage',
      outcome: 'Set expectations before or during a marriage agreement.',
    },
  ] as const,
} as const

export const homeMeet = {
  heading: 'Meet Robert J. Whitfield, Esq.',
  body: `Robert J. Whitfield, Esq. leads Whitfield Law Group. In a consultation, he listens to your priorities, explains options in ordinary language, and helps you organize what may need attention next—without asking you to decide everything in one sitting.`,
  linkLabel: 'About the firm and team',
} as const

export const homeExperience = {
  heading: 'How a first conversation can help organize priorities.',
  buttonLabel: 'See More Results',
  /** Four stories featured on the homepage; full set lives on Our Results. */
  storyIds: ['michael', 'sarah', 'dana', 'james'] as const,
} as const

export const homeConsultation = {
  heading: 'What the first consultation includes.',
  feeNote: '30 minutes · Video or in person · $150',
  linkLabel: 'Read the full consultation guide',
  steps: [
    {
      step: 1,
      title: 'Choose a time and format',
      description: 'Select a date and time, then choose video or in person.',
    },
    {
      step: 2,
      title: 'Discuss your priorities',
      description:
        'Bring the questions you want to cover—family, finances, timing, or several connected topics.',
    },
    {
      step: 3,
      title: 'Review possible next steps',
      description:
        'Leave with a practical sense of options and what information may help a later discussion.',
    },
  ],
} as const

export const homeConcerns = {
  eyebrow: 'Before you book',
  heading: 'Frequently Asked Questions',
  supporting:
    'Direct answers about preparation, fit, cost, booking, and how to get in touch.',
} as const
