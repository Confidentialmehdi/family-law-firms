export const homeHero = {
  headline: 'New York family law. A clear next step.',
  supporting:
    'Guidance through divorce, parenting arrangements, and financial decisions with attorney Robert Whitfield.',
  terms: '30-minute consultation · Video or in person',
} as const

export const homePractice = {
  heading: 'What brings you here?',
  introduction: 'Choose the path that fits your questions. We’ll help from there.',
  linkLabel: 'Explore all practice areas',
  pathways: [
    {
      id: 'divorce-finances',
      title: 'Divorce and finances',
      description:
        'Ending a marriage, support, and shared property—questions that often arrive together.',
      href: '/practice-areas#divorce',
      linkLabel: 'See these areas',
    },
    {
      id: 'parenting-support',
      title: 'Parenting and support',
      description:
        'Schedules, responsibilities, and what your children need as arrangements take shape.',
      href: '/practice-areas#custody',
      linkLabel: 'See these areas',
    },
    {
      id: 'planning',
      title: 'Planning ahead',
      description:
        'Financial expectations before or during marriage, discussed with care and clarity.',
      href: '/practice-areas#prenup',
      linkLabel: 'See this area',
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
  eyebrow: 'FAQ',
  heading: 'A few things to know before booking.',
  supporting:
    'Quick answers to the questions people ask most often before scheduling a consultation.',
  linkLabel: 'See all FAQ',
  items: [
    {
      id: 'service',
      question: 'Do I need to know which practice area applies?',
      answer:
        'No. Choose “Not sure” when you book—sorting that out can be part of the conversation.',
    },
    {
      id: 'prepare',
      question: 'What should I prepare?',
      answer:
        'A short list of questions or concerns is enough. You do not need documents to schedule the first consultation.',
    },
    {
      id: 'cost',
      question: 'What does the appointment cost?',
      answer:
        'Fees are discussed when you book, so you know what to expect before you confirm a time.',
    },
  ],
} as const
