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
  heading: 'A few things to know before booking.',
  linkLabel: 'More questions? Visit our FAQ',
  items: [
    {
      id: 'service',
      statement: 'You don’t need to know the practice area.',
      detail: 'Choose “Not sure” when you book—sorting that out can be part of the conversation.',
    },
    {
      id: 'prepare',
      statement: 'Bring questions, not a finished file.',
      detail:
        'A short list of concerns is enough. You do not need documents to schedule the first consultation.',
    },
    {
      id: 'cost',
      statement: 'Fees are clear before you confirm.',
      detail: 'We’ll discuss cost when you book so you know what to expect before confirming a time.',
    },
  ],
} as const
