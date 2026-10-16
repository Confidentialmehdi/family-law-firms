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
      'An appointment can be a conversation, not a commitment. Many people come simply to understand options and leave with clearer questions.',
  },
  {
    id: 'fit',
    question: 'I’m unsure whether my situation fits.',
    response:
      'You do not need to name a practice area first. Choose “Not sure” when booking, and we can sort that together in the demo conversation.',
  },
  {
    id: 'costs',
    question: 'I’m worried about costs.',
    response:
      'This prototype shows a sample consultation fee of $150 for a 30-minute meeting. In a real practice, fees would be explained before you decide how to proceed.',
  },
  {
    id: 'sensitive',
    question: 'I don’t want to share sensitive details online.',
    response:
      'The demo booking only asks for your name, email, and optional practice area. You are not asked for case narratives, documents, or payment details here.',
  },
  {
    id: 'time',
    question: 'I have limited time.',
    response:
      'Sample appointments are thirty minutes. You can choose a time that fits and come with just a few priorities in mind.',
  },
]
