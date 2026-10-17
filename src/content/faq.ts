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
      'You share what brought you here and what matters most. The conversation focuses on clarifying options and outlining possible next steps—not on making every decision in one sitting.',
  },
  {
    id: 'length',
    question: 'How long is it?',
    answer:
      'Consultations are scheduled for 30 minutes. That is usually enough time to cover priorities and leave with a clearer sense of direction.',
  },
  {
    id: 'cost',
    question: 'What does it cost?',
    answer:
      'The booking page shows a $150 sample consultation fee for this demo. In a live setting, fees are confirmed before you finalize a time.',
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
      'A short list of questions or concerns is enough. You do not need documents to book your first consultation on the booking page.',
  },
  {
    id: 'area',
    question: 'What if I’m unsure which practice area applies?',
    answer:
      'Select “Not sure” on the booking page or when requesting contact. Sorting that out can be part of the conversation.',
  },
  {
    id: 'details',
    question: 'Do I need to share case details when booking?',
    answer:
      'No. The booking page only asks for your name, email, phone, and an optional practice area. You are not asked for case narratives, documents, or payment details online.',
  },
  {
    id: 'how-to-book',
    question: 'How do I book a consultation?',
    answer:
      'Use Book a consultation in the header, footer, or closing sections to open the booking page. Choose a format, date, and time, then enter your details and review before confirming. This site’s booking flow is a front-end demo and does not schedule a live appointment.',
  },
  {
    id: 'contact',
    question: 'How can I contact the firm?',
    answer:
      'Visit the Contact Us page for phone and email, or leave your details in the contact-request form on most pages.',
  },
]
