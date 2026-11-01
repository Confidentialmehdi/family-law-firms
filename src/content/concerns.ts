export type Concern = {
  id: string
  question: string
  response: string
}

export const concerns: Concern[] = [
  {
    id: 'not-ready',
    question: 'I am not ready to make a major decision.',
    response:
      'A consultation can be a conversation, not a commitment to representation. Many people come to understand their options and leave with sharper questions.',
  },
  {
    id: 'fit',
    question: 'I am unsure whether my situation fits.',
    response:
      'You do not need to name a practice area first. Choose “Not sure” when you book, and we can sort the topics together.',
  },
  {
    id: 'costs',
    question: 'I am worried about costs.',
    response:
      'Fees are confirmed when you book, so you know what to expect before continuing.',
  },
  {
    id: 'sensitive',
    question: 'I do not want to share sensitive details online.',
    response:
      'Forms ask only for basic contact details and a practice area. You are not asked for case narratives, documents, or payment details.',
  },
  {
    id: 'time',
    question: 'I have limited time.',
    response:
      'Consultations are focused. Choose a time that fits and come with a few priorities in mind.',
  },
]
