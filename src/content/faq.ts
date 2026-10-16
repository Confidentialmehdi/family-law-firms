export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'first',
    question: 'What happens at the first appointment?',
    answer:
      'You share what brought you here and what matters most. The conversation focuses on clarifying options and outlining possible next steps—not on making every decision in one sitting.',
  },
  {
    id: 'length',
    question: 'How long does it take?',
    answer:
      'Sample appointments are scheduled for 30 minutes. That is usually enough time to cover priorities and leave with a clearer sense of direction.',
  },
  {
    id: 'cost',
    question: 'What does it cost?',
    answer:
      'This demo lists a sample consultation fee of $150. No payment is collected in the prototype, and nothing is billed.',
  },
  {
    id: 'remote',
    question: 'Can I meet remotely?',
    answer:
      'Yes. When booking, you can choose Video or In person. Both are sample options for this demonstration.',
  },
  {
    id: 'prepare',
    question: 'What should I prepare?',
    answer:
      'A short list of questions or concerns is enough. You do not need documents for this demo appointment.',
  },
  {
    id: 'area',
    question: 'What if I’m unsure which practice area applies?',
    answer:
      'Select “Not sure” in the booking form. Sorting that out can be part of the conversation.',
  },
  {
    id: 'demo',
    question: 'Does this demo schedule a real appointment?',
    answer:
      'No. This is a front-end prototype. Completing the flow does not schedule a meeting, send email, or store your information.',
  },
]
