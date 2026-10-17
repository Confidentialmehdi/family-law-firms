export const homeHero = {
  headline: 'New York family law. A defined first conversation.',
  supporting:
    'Whitfield Law Group helps you discuss divorce, parenting arrangements, and financial questions with attorney Robert Whitfield—so you can understand your options before deciding what comes next.',
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
      lines: ['4.9/5 sample', 'client rating'],
    },
  ],
  statsNote: 'Sample figures for this prototype. Not independently verified firm metrics.',
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
  heading: 'Meet Robert Whitfield.',
  body: `Robert Whitfield leads Whitfield Law Group. In a consultation, he listens to your priorities, explains options in ordinary language, and helps you organize what may need attention next—without asking you to decide everything in one sitting.`,
  linkLabel: 'About the firm and team',
} as const

export const homeExperience = {
  heading: 'How a first conversation can help organize priorities.',
  buttonLabel: 'See illustrative stories',
  /** Four stories featured on the homepage; full set lives on Our Results. */
  storyIds: ['michael', 'sarah', 'dana', 'james'] as const,
} as const

export const homeAppointment = {
  heading: 'What the first consultation includes.',
  feeNote: '30 minutes · Video or in person · $150 sample fee',
  linkLabel: 'Read the full appointment guide',
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
  heading: 'Common questions about the consultation.',
  supporting:
    'Short answers about preparation, fit, and cost. Fuller responses are on the FAQ page.',
  linkLabel: 'Read the FAQ',
  items: [
    {
      id: 'service',
      question: 'Do I need to know which practice area applies?',
      answer:
        'No. Choose “Not sure” when you book. Identifying the right topics can be part of the conversation.',
    },
    {
      id: 'prepare',
      question: 'What should I prepare?',
      answer:
        'A short list of questions is enough. You do not need documents to schedule the first consultation.',
    },
    {
      id: 'cost',
      question: 'What does the appointment cost?',
      answer:
        'The sample consultation fee shown on this site is $150 for 30 minutes. Fees are confirmed when you book.',
    },
  ],
} as const
