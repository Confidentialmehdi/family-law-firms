export const whatToExpectPage = {
  supporting:
    'How the initial consultation works—from choosing a time to discussing priorities and reviewing possible next steps.',
  prepareHeading: 'What to prepare',
  prepareCopy:
    'A short list of questions or priorities is enough. You do not need documents or a finished plan for the first consultation. Bring what helps you explain what you want to discuss.',
  concernsHeading: 'Common concerns',
  faqLinkLabel: 'FAQ',
  faqLeadIn: 'More answers are on the',
  faqLeadOut: 'page.',
} as const

export const whatToExpect = [
  {
    step: 1,
    title: 'Choose a consultation',
    description:
      'Pick a date, time, and whether you prefer video or an in-person meeting. Times are shown in New York time.',
  },
  {
    step: 2,
    title: 'Discuss your priorities',
    description:
      'Share what you want to cover—family, finances, timing—without needing a finished plan.',
  },
  {
    step: 3,
    title: 'Review possible next steps',
    description:
      'Leave with a practical sense of options and what preparation may help a later conversation.',
  },
] as const
