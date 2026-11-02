export const homeHero = {
  headline: 'Family law questions. A clear place to start.',
  supporting:
    'When divorce, parenting, or money feels tangled, Whitfield Law Group helps you sort what matters now—and what can wait—with attorney Robert J. Whitfield, Esq.',
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
  emailPlaceholder: 'Email',
  caseTypePlaceholder: '- What is this mainly about? -',
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
    { value: 'asap', label: 'As soon as you are available' },
    { value: '9-12', label: 'Weekday morning · 9:00 AM–12:00 PM' },
    { value: '12-15', label: 'Weekday midday · 12:00–3:00 PM' },
    { value: '15-18', label: 'Weekday afternoon · 3:00–6:00 PM' },
  ] as const,
  detailsPlaceholder: 'Optional: the questions weighing on you most',
  consultationNote: 'Consultation · Online or in person · New York time',
  submitLabel: 'Request a consultation',
  submittingLabel: 'Submitting…',
  termsLead: 'By submitting this form, you agree to our',
  termsLinkLabel: 'Terms',
  privacyLead: 'and acknowledge our',
  privacyLinkLabel: 'privacy policy',
  consentCopy:
    'By submitting your phone number, you authorize Whitfield Law Group to contact you by phone or SMS at the number you provided, including with an automatic dialing system. Consent is not required to request a consultation. Message and data rates may apply.',
  footerLine: 'Requests contact only · No attorney-client relationship',
  validation: {
    firstName: 'Enter your first name.',
    lastName: 'Enter your last name.',
    phone: 'Enter your phone number.',
    phoneInvalid: 'Enter a 10-digit US phone number.',
    email: 'Enter your email address.',
    emailInvalid: 'Enter a valid email (for example, name@example.com).',
    caseType: 'Choose the topic closest to your situation.',
  },
} as const

export const homePractice = {
  eyebrow: 'Practice areas',
  heading: 'What is weighing on you?',
  introduction:
    'Start with the situation that feels closest. Open any item to see how a consultation can help—then book when you are ready.',
  linkLabel: 'Learn more',
  dialogCtaLabel: 'Book a consultation',
  dialogTopicsLabel: 'In a consultation',
  dialogSecondaryLabel: 'Read more about this practice area',
  dialogFooterNote: 'No documents required to book. Online or in person.',
  /** Situation-led mapping — concern first, practice area second. */
  concerns: [
    {
      areaId: 'divorce',
      concern: 'Thinking about separation',
      outcome: 'See which decisions come first—and which can wait.',
      dialogBody:
        'Separation often raises everything at once: children, housing, money, and timing. A consultation helps you name what feels most urgent, how those issues connect, and what a steady next step could look like—without asking you to resolve every decision today.',
      dialogPoints: [
        'Where to begin when you are not ready for every answer',
        'How parenting, support, and property questions connect',
        'Living arrangements, timing, and financial pressure',
        'What information helps before you take a next step',
      ],
    },
    {
      areaId: 'custody',
      concern: 'Need a workable parenting plan',
      outcome: 'Talk through time with your children and shared decisions.',
      dialogBody:
        'When routines change, questions about weekdays, weekends, school, and who decides what can feel heavy. We help you put those concerns into plain language and discuss arrangements that reflect your children’s real lives—so you know what to ask for before anything is finalized.',
      dialogPoints: [
        'Weekday, weekend, and holiday parenting time',
        'School, activities, and travel',
        'How major decisions get shared',
        'Adjustments when work or home life shifts',
      ],
    },
    {
      areaId: 'child-support',
      concern: 'Support for your children’s needs',
      outcome: 'Clarify contributions toward ongoing costs.',
      dialogBody:
        'After a separation, income, expenses, and changing circumstances can make support feel unclear. We help you frame the financial picture you need to understand and the details worth gathering—so the next conversation is grounded, not guesswork.',
      dialogPoints: [
        'Income and expense information to gather',
        'Children’s ongoing needs and costs',
        'Questions about an existing support order',
        'How job or household changes may affect support',
      ],
    },
    {
      areaId: 'spousal-support',
      concern: 'Financial footing after a split',
      outcome: 'Discuss needs and responsibilities during or after separation.',
      dialogBody:
        'Separation can leave you unsure how household costs get covered—now and later. In a consultation, we walk through your circumstances, the support questions that matter most, and which details will make a later discussion more useful.',
      dialogPoints: [
        'Income, needs, and household expenses',
        'Support during separation versus after divorce',
        'How support connects to property and living costs',
        'Information worth organizing before you continue',
      ],
    },
    {
      areaId: 'property',
      concern: 'Sorting shared assets and debts',
      outcome: 'Map property, obligations, and financial priorities.',
      dialogBody:
        'Homes, accounts, debts, and business interests can make every next step feel complicated. We help you identify what needs closer attention, group related questions, and set priorities so a first conversation stays focused instead of overwhelming.',
      dialogPoints: [
        'Shared assets and household debts',
        'Homes, accounts, and business interests',
        'Records worth gathering early',
        'Which financial questions should lead next',
      ],
    },
    {
      areaId: 'prenup',
      concern: 'Planning finances around marriage',
      outcome: 'Set clear expectations before or during marriage.',
      dialogBody:
        'Talking about money before or during marriage can feel sensitive. We help you name expectations around assets, debts, and future plans—and clarify what a prenuptial or postnuptial agreement can address—before treating the talk as a finished negotiation.',
      dialogPoints: [
        'Financial expectations before or during marriage',
        'Assets, debts, and business interests',
        'How to open the conversation thoughtfully',
        'Topics to revisit before drafting an agreement',
      ],
    },
  ] as const,
} as const

export const homeMeet = {
  heading: 'Meet Robert J. Whitfield, Esq.',
  body: `Robert leads Whitfield Law Group with a simple promise: your consultation starts with your questions. He listens carefully, explains options in plain English, and helps you separate what needs attention now from what can wait—without pressure to hire the firm on the spot.`,
  /** Specific commitments drawn from the consultation approach above. */
  commitments: [
    {
      title: 'Your questions set the agenda',
      description:
        'We begin with what brought you here—family, finances, timing—not a one-size script.',
    },
    {
      title: 'Plain explanations',
      description:
        'You leave understanding the landscape in language you can use, not legal jargon.',
    },
    {
      title: 'A clearer next step',
      description:
        'You walk away knowing what to prepare, what can wait, and whether further help makes sense.',
    },
  ] as const,
  linkLabel: 'About the firm and team',
} as const

export const homeExperience = {
  eyebrow: 'Our results',
  heading: 'What a first conversation can change.',
  supporting:
    'Illustrative examples of how people left with clearer priorities—not promises of outcomes.',
  buttonLabel: 'See more results',
  /** Two outcome-led stories on Home; full set lives on Our Results. */
  stories: [
    {
      id: 'michael',
      outcome:
        'Named what felt urgent versus what could wait—and left with a short list for the next discussion.',
    },
    {
      id: 'sarah',
      outcome:
        'Turned a swirl of separation questions into a focused set of priorities.',
    },
  ] as const,
} as const

export const homeConsultation = {
  heading: 'What the consultation covers.',
  withAttorney: 'with Robert J. Whitfield, Esq.',
  feeNote: 'Consultation · Online or in person',
  valueLine:
    'Leave with clearer priorities, a practical sense of options, and what to prepare next.',
  bookLabel: 'Book a consultation',
  linkLabel: 'Read the full consultation guide',
  steps: [
    {
      step: 1,
      title: 'Choose a time and format',
      description: 'Pick a date and time. Meet online or in person—whichever fits.',
    },
    {
      step: 2,
      title: 'Discuss what is on your mind',
      description:
        'Bring the questions that matter: children, finances, timing, or several issues at once.',
    },
    {
      step: 3,
      title: 'Leave with direction',
      description:
        'Walk away knowing your options and what information will help a later conversation.',
    },
  ],
} as const

export const homeConcerns = {
  eyebrow: 'Before you book',
  heading: 'Questions people ask first',
  supporting:
    'Straight answers about preparation, fit, cost, booking, and how to reach us.',
} as const
