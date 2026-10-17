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
      'A consultation can be a conversation, not a commitment. Many people come simply to understand options and leave with clearer questions.',
  },
  {
    id: 'fit',
    question: 'I’m unsure whether my situation fits.',
    response:
      'You do not need to name a practice area first. Choose “Not sure” when booking, and we can sort that together.',
  },
  {
    id: 'costs',
    question: 'I’m worried about costs.',
    response:
      'Fees are discussed when you book so you know what to expect before confirming a consultation.',
  },
  {
    id: 'sensitive',
    question: 'I don’t want to share sensitive details online.',
    response:
      'Booking and contact forms only ask for basic contact details and an optional practice area. You are not asked for case narratives, documents, or payment details.',
  },
  {
    id: 'time',
    question: 'I have limited time.',
    response:
      'Consultations are thirty minutes. You can choose a time that fits and come with just a few priorities in mind.',
  },
]
