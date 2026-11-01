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
  consultationNote: 'Consultation · We’ll follow up using your preferred method',
  submitLabel: 'Request a consultation',
  submittingLabel: 'Submitting…',
  termsLead: 'By submitting this form, you agree to our',
  termsLinkLabel: 'Terms',
  privacyLead: '& acknowledge our',
  privacyLinkLabel: 'privacy policy',
  consentCopy:
    'By submitting your phone number, you authorize Whitfield Law Group to contact you by phone or SMS at the number you provided, including with an automatic dialing system. Consent is not required to request a consultation. Message and data rates may apply.',
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
    'Choose the situation closest to yours. Open any item to see how we can help—and book a consultation when you are ready.',
  linkLabel: 'Learn More',
  dialogCtaLabel: 'Book Consultation',
  dialogTopicsLabel: 'Common questions we can discuss',
  /** Situation-led mapping — concern first, practice area second. */
  concerns: [
    {
      areaId: 'divorce',
      concern: 'Considering separation',
      outcome: 'Clarify decisions about family, home, and timing.',
      dialogBody:
        'Thinking about separation often brings uncertainty about children, living arrangements, finances, and when anything needs to happen. A first conversation can help you name what feels most urgent, understand which decisions usually connect, and leave with a clearer sense of options—without requiring you to decide everything at once.',
      dialogPoints: [
        'Where to begin and which questions usually come first',
        'How parenting, support, and property issues relate',
        'Timing, living arrangements, and financial priorities',
        'What information is useful before a next step',
      ],
    },
    {
      areaId: 'custody',
      concern: 'Need a parenting schedule',
      outcome: 'Talk through time with your children and shared responsibilities.',
      dialogBody:
        'When family routines change, questions about time with your children, school and activities, and who decides what can feel heavy. We help you put those concerns into plain language and talk through arrangements that reflect your children’s everyday needs—so you know what to discuss before anything is finalized.',
      dialogPoints: [
        'Weekday, weekend, and holiday parenting time',
        'School, activities, and travel routines',
        'How important decisions are shared',
        'Adjustments when work or home life shifts',
      ],
    },
    {
      areaId: 'child-support',
      concern: 'Support for your children',
      outcome: 'Understand contributions toward their ongoing needs.',
      dialogBody:
        'Supporting your children after a separation often raises questions about income, expenses, and changing circumstances. We focus on clarifying the financial picture you want to understand and the details worth organizing—not on finishing every calculation in one sitting.',
      dialogPoints: [
        'Income and expense information to gather',
        'Children’s ongoing needs and costs',
        'Questions about an existing support arrangement',
        'How work or household changes may affect the conversation',
      ],
    },
    {
      areaId: 'spousal-support',
      concern: 'Financial support after separation',
      outcome: 'Discuss needs and responsibilities during or after a split.',
      dialogBody:
        'Separation can create uncertainty about meeting household needs and longer-term financial responsibilities. In a consultation, we discuss your circumstances, the support questions that matter most to you, and what details help a later, more focused discussion.',
      dialogPoints: [
        'Income, needs, and household expenses',
        'Support during separation versus after a divorce',
        'How support connects to property and living costs',
        'Information that is useful to organize next',
      ],
    },
    {
      areaId: 'property',
      concern: 'Sorting shared assets and debts',
      outcome: 'Organize property, obligations, and financial priorities.',
      dialogBody:
        'Shared homes, accounts, debts, and other assets can make next steps feel complicated. We help you identify what may need closer attention, group related questions, and set priorities so financial decisions are easier to follow in a first conversation.',
      dialogPoints: [
        'Shared assets and household debts',
        'Homes, accounts, and business interests',
        'Records worth gathering early',
        'Which priorities should lead the next discussion',
      ],
    },
    {
      areaId: 'prenup',
      concern: 'Planning finances around marriage',
      outcome: 'Set expectations before or during a marriage agreement.',
      dialogBody:
        'Talking about finances before or during marriage can feel sensitive. We help you name expectations around assets, debts, and future plans, and clarify the subjects a prenuptial or postnuptial agreement might address—before treating the discussion as a finished negotiation.',
      dialogPoints: [
        'Financial expectations before or during marriage',
        'Assets, debts, and business interests',
        'How to open the conversation thoughtfully',
        'Topics to revisit before preparing an agreement',
      ],
    },
  ] as const,
} as const

export const homeMeet = {
  heading: 'Meet Robert J. Whitfield, Esq.',
  body: `Robert J. Whitfield, Esq. leads Whitfield Law Group. In a consultation, he listens to your priorities, explains options in ordinary language, and helps you organize what may need attention next—without asking you to decide everything in one sitting.`,
  /** Specific commitments drawn from the consultation approach above. */
  commitments: [
    {
      title: 'Your priorities come first',
      description: 'The conversation starts with what matters most to you—family, finances, and timing.',
    },
    {
      title: 'Options in ordinary language',
      description: 'He explains the landscape in plain terms so you can understand possible paths.',
    },
    {
      title: 'Organize what needs attention next',
      description:
        'Leave with a clearer sense of next steps—without pressure to decide everything in one sitting.',
    },
  ] as const,
  linkLabel: 'About the firm and team',
} as const

export const homeExperience = {
  eyebrow: 'Our results',
  heading: 'How a first conversation can help organize priorities.',
  supporting:
    'Short examples of how people clarify what needs attention now—and what can wait.',
  buttonLabel: 'See More Results',
  /** Two outcome-led stories on Home; full set lives on Our Results. */
  stories: [
    {
      id: 'michael',
      outcome:
        'Named what felt urgent and what could wait, then left with topics to prepare for a next discussion.',
    },
    {
      id: 'sarah',
      outcome:
        'Sorted immediate concerns from longer-term questions into a focused set of priorities.',
    },
  ] as const,
} as const

export const homeConsultation = {
  heading: 'What the first consultation includes.',
  withAttorney: 'with Robert J. Whitfield, Esq.',
  feeNote: 'Consultation · Online or in person',
  valueLine:
    'Leave with clearer priorities, a practical sense of options, and what may help a next discussion.',
  bookLabel: 'Book a consultation',
  linkLabel: 'Read the full consultation guide',
  steps: [
    {
      step: 1,
      title: 'Choose a time and format',
      description: 'Select a date and time, then choose online or in person.',
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
