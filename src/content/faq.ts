export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'first',
    question: 'What happens during the first consultation?',
    answer:
      'You share what brought you here and what you want to discuss. Robert Whitfield focuses on listening, explaining options, and outlining possible next steps—not on making every decision in one sitting.',
  },
  {
    id: 'length',
    question: 'How long is it?',
    answer:
      'Consultations are scheduled for 30 minutes. That is usually enough time to cover priorities and leave with a practical sense of direction.',
  },
  {
    id: 'cost',
    question: 'What does it cost?',
    answer:
      'This prototype shows a $150 sample fee for a 30-minute consultation. Fees are confirmed when you book so you know what to expect before you continue.',
  },
  {
    id: 'remote',
    question: 'Can I meet remotely?',
    answer:
      'Yes. On the Book a Consultation page, you can choose Video or In person.',
  },
  {
    id: 'prepare',
    question: 'What should I prepare?',
    answer:
      'A short list of questions or concerns is enough. You do not need documents to book your first consultation.',
  },
  {
    id: 'area',
    question: 'What if I’m unsure which practice area applies?',
    answer:
      'Select “Not sure” when you book or request contact. Sorting that out can be part of the conversation.',
  },
  {
    id: 'details',
    question: 'Do I need to share case details when booking?',
    answer:
      'No. The booking page asks for your name, email, phone, and an optional practice area. You are not asked for case narratives, documents, or payment details online.',
  },
  {
    id: 'how-to-book',
    question: 'How do I book a consultation?',
    answer:
      'Use Book a consultation in the header, footer, or closing sections. Choose a format, date, and time, enter your details, and review before confirming. This site’s booking flow is a front-end demo and does not schedule a live appointment.',
  },
  {
    id: 'contact',
    question: 'How can I contact the firm?',
    answer:
      'Visit Contact Us for phone and email, or leave your details in the Request contact form on most pages. On this prototype, form submissions are not sent.',
  },
]

export const faqPage = {
  supporting: 'Direct answers about the consultation, preparation, cost, and how to get in touch.',
} as const
