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
      'Consultation fees are discussed when you book. You’ll know what to expect before you confirm a time.',
  },
  {
    id: 'remote',
    question: 'Can I meet remotely?',
    answer:
      'Yes. When booking a consultation, you can choose Video or In person.',
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
      'Select “Not sure” when booking or requesting contact. Sorting that out can be part of the conversation.',
  },
  {
    id: 'details',
    question: 'Do I need to share case details when booking?',
    answer:
      'No. Booking only asks for your name, email, and an optional practice area. You are not asked for case narratives, documents, or payment details online.',
  },
  {
    id: 'contact',
    question: 'How can I contact the firm?',
    answer:
      'Visit the Contact Us page for phone and email, or leave your details in the contact-request form on most pages.',
  },
]
