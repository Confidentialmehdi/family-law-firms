export const requestReceivedPage = {
  title: 'Request received',
  heading: 'We received your request.',
  headingWithName: (firstName: string) => `Thank you, ${firstName}.`,
  supporting:
    'A member of the Whitfield Law Group team will review what you shared and follow up using the contact method you preferred.',
  demoNotice: 'Demo only. Your form was not sent. Nothing was stored.',
  nextHeading: 'What happens next',
  nextSteps: [
    {
      title: 'We review your note',
      description:
        'Someone on the team reads the details you provided—practice area, preferred contact method, and any questions you included.',
    },
    {
      title: 'We reach out',
      description:
        'Expect a reply by phone, email, or text, matching how you asked to be contacted. Weekday outreach is typical during office hours.',
    },
    {
      title: 'You decide the pace',
      description:
        'There is no obligation to book or retain the firm. Use the conversation to clarify priorities before choosing a next step.',
    },
  ],
  prepareHeading: 'While you wait',
  prepareIntro:
    'A short list is enough for a first conversation. You do not need documents or a finished plan.',
  prepareItems: [
    'Two or three questions you most want answered',
    'What feels most urgent versus what can wait',
    'Any deadlines, court dates, or upcoming decisions you already know about',
    'How you prefer to meet later—online or in person—if you schedule a consultation',
  ],
  resourcesHeading: 'Useful next steps',
  resourcesIntro:
    'If you want to keep moving while you wait for a reply, these pages can help.',
  resources: [
    {
      to: '/book-consultation',
      label: 'Book a consultation time',
      description: 'Choose online or in person and pick a slot that fits.',
    },
    {
      to: '/what-to-expect',
      label: 'Read what to expect',
      description: 'See how the first consultation usually unfolds.',
    },
    {
      to: '/practice-areas',
      label: 'Browse practice areas',
      description: 'Find the situation closest to yours and how we approach it.',
    },
    {
      to: '/#faq',
      label: 'Common questions',
      description: 'Quick answers about timing, preparation, and fit.',
    },
  ],
  homeLabel: 'Return home',
} as const

export type RequestReceivedState = {
  firstName?: string
  contactMethod?: string
  caseType?: string
}
