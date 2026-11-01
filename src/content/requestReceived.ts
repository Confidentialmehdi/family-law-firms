export const requestReceivedPage = {
  title: 'Request received',
  eyebrow: 'Whitfield Law Group',
  statusLabel: 'Request received',
  heading: 'We received your request.',
  headingWithName: (firstName: string) => `Thank you, ${firstName}.`,
  supporting:
    'A member of our team will review what you shared and follow up using the contact method you preferred.',
  followUpNote: 'Weekday outreach is typical during New York office hours.',
  demoNotice: 'Demo only. Your form was not sent. Nothing was stored.',
  bookCtaLabel: 'Or book a consultation time',
  homeLabel: 'Return home',
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
} as const

export type RequestReceivedState = {
  firstName?: string
  contactMethod?: string
  caseType?: string
}
