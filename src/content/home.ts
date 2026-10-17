export const homeHero = {
  headline: 'New York family law. A clear next step.',
  supporting:
    'Guidance through divorce, parenting arrangements, and financial decisions with attorney Robert Whitfield.',
  terms: '30-minute consultation · Video or in person',
} as const

export const homePractice = {
  heading: 'What brings you here?',
  introduction: 'Find guidance for the decisions you’re facing.',
  linkLabel: 'Explore our practice areas',
  groups: [
    {
      id: 'divorce-finances',
      label: 'Divorce and finances',
      areaIds: ['divorce', 'spousal-support', 'property'],
    },
    {
      id: 'parenting-support',
      label: 'Parenting and support',
      areaIds: ['custody', 'child-support'],
    },
    {
      id: 'planning',
      label: 'Planning ahead',
      areaIds: ['prenup'],
    },
  ],
} as const

export const homeMeet = {
  heading: 'Meet the attorney you’ll speak with.',
  body: `Robert Whitfield listens carefully, explains options in plain language, and helps you discuss possible next steps—so you can understand your choices before deciding how to move forward.`,
  linkLabel: 'About Whitfield Law Group',
} as const

export const homeExperience = {
  heading: 'Feeling heard. Understanding what comes next.',
  linkLabel: 'Explore our results',
  /** Prefer clear explanations + feeling heard themes. */
  testimonialIds: ['t2', 't1'] as const,
} as const

export const homeAppointment = {
  heading: 'Here’s what your first appointment involves.',
  feeNote: '30 minutes · Video or in person',
  linkLabel: 'What to expect',
  steps: [
    {
      step: 1,
      title: 'Choose a time',
      description: 'Select a date and time, and choose video or in person.',
    },
    {
      step: 2,
      title: 'Discuss your priorities',
      description: 'Bring the questions and concerns that matter most to you.',
    },
    {
      step: 3,
      title: 'Explore possible next steps',
      description: 'Discuss your options and what may need further consideration.',
    },
  ],
} as const

export const homeConcerns = {
  heading: 'A few things to know before booking.',
  linkLabel: 'More questions? Visit our FAQ',
  items: [
    {
      id: 'service',
      question: 'Do I need to know which service I need?',
      answer: 'No. Choose “Not sure” in the booking form.',
    },
    {
      id: 'prepare',
      question: 'What should I prepare?',
      answer:
        'Start with your questions and any information you want to discuss. You do not need to upload documents to book.',
    },
    {
      id: 'cost',
      question: 'What does the appointment cost?',
      answer:
        'Fees are discussed when you book so you know what to expect before confirming a consultation.',
    },
  ],
} as const
