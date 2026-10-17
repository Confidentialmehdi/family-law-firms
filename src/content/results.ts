export type ClientStory = {
  id: string
  name: string
  initials: string
  city: string
  practiceArea: string
  title: string
  caption: string
  /** Editorial sample photo for the prototype. */
  imageSrc: string
  imageAlt: string
}

export const resultsPage = {
  eyebrow: 'Our Results',
  headline: 'What a clearer way forward can look like.',
  supporting:
    'Explore stories about organizing priorities, understanding options, and preparing for the next step.',
  stories: {
    heading: 'Different situations. Personal priorities.',
    introduction:
      'Every situation begins with its own questions. These stories illustrate how a conversation can help organize them.',
  },
  personal: {
    label: 'Beyond the examples',
    heading: 'Your situation may look different.',
    copy: 'The questions in these stories may feel familiar, but your priorities and circumstances are your own. You may be thinking about your children, your finances, your relationship, or several connected decisions.',
    followUp:
      'You don’t need to fit your situation into someone else’s story before starting a conversation.',
    linkLabel: 'Meet Robert and the team',
  },
} as const

export const clientStories: ClientStory[] = [
  {
    id: 'michael',
    name: 'Michael R.',
    initials: 'MR',
    city: 'Brooklyn, NY',
    practiceArea: 'Divorce',
    title: 'Finding a place to begin.',
    caption:
      'Michael was considering divorce and felt pulled between questions about his children, housing, and finances. In conversation, he named what felt most urgent and what could wait. He left with a clearer overview of the process and a short list of topics to prepare for a next discussion.',
    imageSrc: '/images/stories/michael.jpg',
    imageAlt: 'Thoughtful man looking toward the camera',
  },
  {
    id: 'sarah',
    name: 'Sarah L.',
    initials: 'SL',
    city: 'Manhattan, NY',
    practiceArea: 'Divorce',
    title: 'Turning questions into priorities.',
    caption:
      'Sarah was thinking about separation but did not want to decide everything at once. She talked through what she hoped to understand before making further choices. The conversation helped her sort immediate concerns from longer-term questions and leave with a focused set of priorities.',
    imageSrc: '/images/stories/sarah.jpg',
    imageAlt: 'Woman in soft light looking thoughtfully ahead',
  },
  {
    id: 'dana',
    name: 'Dana M.',
    initials: 'DM',
    city: 'Queens, NY',
    practiceArea: 'Child Custody & Parenting Time',
    title: 'Putting parenting questions into words.',
    caption:
      'Dana wanted to talk about parenting schedules, shared responsibilities, and everyday routines without assuming a finished plan. Together they mapped the questions that mattered most for school, weekends, and decision-making. She left knowing how to describe her priorities more clearly.',
    imageSrc: '/images/stories/dana.jpg',
    imageAlt: 'Parent walking outdoors with a young child',
  },
  {
    id: 'james',
    name: 'James T.',
    initials: 'JT',
    city: 'Bronx, NY',
    practiceArea: 'Child Support',
    title: 'Preparing the financial picture.',
    caption:
      'James needed help organizing information about income and his children’s expenses before a longer discussion. The conversation focused on which details were useful to gather and which questions to bring next. He left with a practical preparation list rather than a finished financial answer.',
    imageSrc: '/images/stories/james.jpg',
    imageAlt: 'Professional reviewing notes at a desk',
  },
  {
    id: 'morgan',
    name: 'Morgan K.',
    initials: 'MK',
    city: 'Brooklyn, NY',
    practiceArea: 'Spousal Support',
    title: 'Understanding what to ask.',
    caption:
      'Morgan faced financial uncertainty after separation and was unsure what support questions were worth asking. They talked through income, needs, and how support conversations often begin. Morgan left with clearer language for the next discussion and a sense of what information to organize.',
    imageSrc: '/images/stories/morgan.jpg',
    imageAlt: 'Close portrait of a person in soft natural light',
  },
  {
    id: 'alex',
    name: 'Alex P.',
    initials: 'AP',
    city: 'White Plains, NY',
    practiceArea: 'Property Division',
    title: 'Making complex details more manageable.',
    caption:
      'Alex felt overwhelmed by shared property, debts, and a business interest. Instead of covering every account, the conversation grouped questions into categories and noted what documents might help later. Alex left with a more manageable map of priorities and next preparation steps.',
    imageSrc: '/images/stories/alex.jpg',
    imageAlt: 'Quiet residential home exterior in soft daylight',
  },
  {
    id: 'jordan',
    name: 'Jordan S.',
    initials: 'JS',
    city: 'Queens, NY',
    practiceArea: 'Prenuptial & Postnuptial Agreements',
    title: 'Starting an important conversation.',
    caption:
      'Jordan and their partner wanted to discuss financial expectations before marriage. The appointment focused on naming topics openly—assets, debts, and shared goals—without treating the meeting as a finished negotiation. They left with a list of subjects to revisit together.',
    imageSrc: '/images/stories/jordan.jpg',
    imageAlt: 'Couple talking closely in warm indoor light',
  },
  {
    id: 'casey',
    name: 'Casey W.',
    initials: 'CW',
    city: 'Albany, NY',
    practiceArea: 'Prenuptial & Postnuptial Agreements',
    title: 'Revisiting priorities together.',
    caption:
      'Casey and their spouse wanted to revisit financial expectations after circumstances changed. They talked through what felt important now and which questions belonged in a later agreement discussion. They left with shared language for priorities and a clearer sense of what to prepare next.',
    imageSrc: '/images/stories/casey.jpg',
    imageAlt: 'Person looking calmly toward soft window light',
  },
]

