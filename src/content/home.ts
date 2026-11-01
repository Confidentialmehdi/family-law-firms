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
  formatLabel: 'Preferred format',
  formats: [
    { value: 'video', label: 'Online' },
    { value: 'in-person', label: 'In person' },
  ] as const,
  contactWindowPlaceholder: '- When may we reach you? -',
  contactWindows: [
    { value: 'asap', label: 'As soon as you’re available to talk' },
    { value: '9-12', label: 'Weekday morning · 9:00 AM–12:00 PM' },
    { value: '12-15', label: 'Weekday midday · 12:00–3:00 PM' },
    { value: '15-18', label: 'Weekday afternoon · 3:00–6:00 PM' },
  ] as const,
  detailsPlaceholder: 'Optional: a few words about your questions',
  consultationNote: '30-minute consultation · Online or in person',
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
  heading: 'Which questions are you bringing?',
  introduction:
    'Many people arrive with more than one concern. Use these groups to find the services that match what you want to discuss.',
  linkLabel: 'View all practice areas',
  groups: [
    {
      id: 'divorce-finances',
      title: 'Divorce and finances',
      description:
        'Ending a marriage, financial support, and shared property—topics that often need to be discussed together.',
      areaIds: ['divorce', 'spousal-support', 'property'],
    },
    {
      id: 'parenting-support',
      title: 'Parenting and child support',
      description:
        'Schedules, decision-making, and financial contributions toward your children’s needs.',
      areaIds: ['custody', 'child-support'],
    },
    {
      id: 'planning',
      title: 'Agreements before or during marriage',
      description:
        'Financial expectations, assets, and debts discussed thoughtfully before preparing an agreement.',
      areaIds: ['prenup'],
    },
  ],
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
