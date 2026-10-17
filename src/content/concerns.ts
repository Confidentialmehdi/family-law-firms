export type Concern = {
  id: string
  question: string
  response: string
}

export const concerns: Concern[] = [
  {
    id: 'not-ready',
    question: 'I’m not ready to make a major decision.',
    response:
      'A consultation can be a conversation, not a commitment to representation. Many people come to understand options and leave with sharper questions.',
  },
  {
    id: 'fit',
    question: 'I’m unsure whether my situation fits.',
    response:
      'You do not need to name a practice area first. Choose “Not sure” when you book, and we can sort the topics together.',
  },
  {
    id: 'costs',
    question: 'I’m worried about costs.',
    response:
      'The consultation fee is $150 for 30 minutes. Fees are confirmed when you book so you know what to expect before continuing.',
  },
  {
    id: 'sensitive',
    question: 'I don’t want to share sensitive details online.',
    response:
      'Booking and contact forms ask only for basic contact details and an optional practice area. You are not asked for case narratives, documents, or payment details.',
  },
  {
    id: 'time',
    question: 'I have limited time.',
    response:
      'Consultations are thirty minutes. Choose a time that fits and come with a few priorities in mind.',
  },
]
