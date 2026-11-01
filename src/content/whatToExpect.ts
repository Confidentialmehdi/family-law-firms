export const whatToExpectPage = {
  supporting:
    'How the consultation works—from choosing a time to discussing priorities and leaving with a clear next step.',
  prepareHeading: 'What to prepare',
  prepareCopy:
    'A short list of questions or priorities is enough. You do not need documents or a finished plan. Bring whatever helps you explain what you want to discuss.',
  concernsHeading: 'Common concerns',
  faqLinkLabel: 'common questions',
  faqLeadIn: 'More answers are in the',
  faqLeadOut: 'section on the home page.',
} as const

export const whatToExpect = [
  {
    step: 1,
    title: 'Choose a consultation',
    description:
      'Pick a date, time, and whether you prefer to meet online or in person. Times are shown in New York time.',
  },
  {
    step: 2,
    title: 'Discuss your priorities',
    description:
      'Share what you want to cover—family, finances, timing—without needing a finished plan.',
  },
  {
    step: 3,
    title: 'Leave with direction',
    description:
      'Walk away with a practical sense of options and what preparation may help a later conversation.',
  },
] as const
