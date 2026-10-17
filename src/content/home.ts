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
  buttonLabel: 'Learn more',
  /** Four stories featured on the homepage; full set lives on Our Results. */
  storyIds: ['michael', 'sarah', 'dana', 'james'] as const,
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
  eyebrow: 'Before you book',
  heading: 'You don’t need everything figured out.',
  supporting:
    'Most people schedule a first conversation while questions are still forming. That is enough to begin.',
  linkLabel: 'More questions? Visit our FAQ',
  items: [
    {
      id: 'service',
      label: 'Practice area',
      statement: 'Choose “Not sure” if you are still sorting out what applies.',
    },
    {
      id: 'prepare',
      label: 'What to bring',
      statement: 'A short list of questions is enough—no documents required to book.',
    },
    {
      id: 'cost',
      label: 'Fees',
      statement: 'Cost is discussed when you book, before you confirm a time.',
    },
  ],
} as const
