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

/** Hero lead-capture form — layout mirrors common law-firm intake panels. */
export const homeHeroForm = {
  heading: "It's Easy to Get Started.",
  firstNamePlaceholder: 'First Name',
  lastNamePlaceholder: 'Last Name',
  phonePlaceholder: 'Phone Number',
  zipPlaceholder: 'Zip Code',
  emailPlaceholder: 'Email',
  caseTypePlaceholder: '- Case Type -',
  detailsPlaceholder: 'Please describe what happened',
  submitLabel: 'See if you qualify',
  submittingLabel: 'Submitting…',
  termsLead: 'By submitting this form, you agree to our',
  termsLinkLabel: 'Terms',
  privacyLead: '& acknowledge our',
  privacyLinkLabel: 'privacy policy',
  consentCopy:
    'By submitting your phone number, you authorize Whitfield Law Group to deliver or cause to be delivered calls using an automatic dialing system, prerecorded and/or artificial voice, and SMS text messages to the number you provided. Consent is not a condition of receiving services. Message and data rates may apply. Message frequency varies.',
  resultsDisclaimer:
    'Results may vary depending on your particular facts and legal circumstances.',
  copyright: '©2026 Whitfield Law Group. All rights reserved.',
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
    caseType: 'Select a case type.',
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
