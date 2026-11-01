/** Homepage copy and section configuration. */

export const homeHero = {
  headlineLine1: 'New York family law.',
  headlineLine2: 'Personal attention to what comes next.',
  supporting:
    'Discuss divorce, parenting arrangements, and financial questions with Robert J. Whitfield, Esq., of Whitfield Law Group.',
  aboutLinkLabel: 'Meet Robert and the team',
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

export const homeConsultationStarter = {
  heading: 'Choose your consultation',
  formatLabel: 'Meeting format',
  dateLabel: 'Preferred date',
  details: '30 minutes · $150 sample consultation fee',
  buttonLabel: 'Book a consultation',
  demoNotice: 'Demo booking. No consultation will be scheduled.',
  formats: [
    { value: 'video', label: 'Video' },
    { value: 'in-person', label: 'In person' },
  ] as const,
} as const

export const homePractice = {
  heading: 'How can we help?',
  introduction: 'Explore the family law matters we handle.',
  linkLabel: 'Explore all practice areas',
  /** Flat editorial list — order matches the homepage brief. */
  areaIds: [
    'divorce',
    'custody',
    'child-support',
    'spousal-support',
    'property',
    'prenup',
  ] as const,
} as const

export const homeFeaturedStory = {
  heading: 'A closer look at the first step.',
  /** Reuse an existing fictional Divorce story. */
  storyId: 'michael' as const,
  fictionalLabel: 'Fictional illustrative story',
  startingConcernLabel: 'Starting concern',
  discussedLabel: 'What was discussed',
  clearerLabel: 'What became clearer',
  startingConcern:
    'Michael was considering divorce and felt pulled between questions about his children, housing, and finances.',
  discussed:
    'He named what felt most urgent and what could wait, without trying to settle every decision at once.',
  clearer:
    'He left with a practical overview of the process and a short list of topics to prepare for a next discussion.',
  linkLabel: 'Explore client stories',
} as const

export const homeConsultation = {
  heading: 'Your first consultation, explained.',
  introduction:
    'A conversation to discuss your priorities, ask questions, and explore possible next steps.',
  feeNote: '30 minutes · Video or in person · $150 sample consultation fee',
  overview: [
    'Bring the questions you want to cover.',
    'Discuss the issues that matter most to you.',
    'Consider what may need further attention afterward.',
  ] as const,
  expectLinkLabel: 'What to expect',
  faqLinkLabel: 'Read all FAQs',
  questions: [
    {
      id: 'prepare',
      question: 'What should I prepare?',
      answer:
        'Start with your questions and any relevant information you want to discuss. No document uploads are required to book.',
    },
    {
      id: 'unsure',
      question: 'What if I’m unsure which service I need?',
      answer:
        'Choose “Not sure” in the booking form. Your situation may involve several connected matters.',
    },
    {
      id: 'after',
      question: 'What happens after the consultation?',
      answer:
        'You can consider the discussion and decide whether to explore further work with the firm. Any additional services would be discussed separately.',
    },
  ] as const,
} as const
