export const requestReceivedPage = {
  title: 'Request received',
  eyebrow: 'Whitfield Law Group',
  statusLabel: 'Request received',
  heading: 'We received your request.',
  headingWithName: (firstName: string) => `Thank you, ${firstName}.`,
  supporting:
    'Our team will review what you shared and follow up using the contact method you preferred.',
  followUpNote: 'Weekday outreach is typical during New York office hours.',
  demoNotice: 'Demo only. Your form was not sent. Nothing was stored.',
  bookCtaLabel: 'Or book a consultation time',
  homeLabel: 'Return home',
  nextEyebrow: 'After you submit',
  nextHeading: 'What happens next',
  nextSteps: [
    {
      title: 'We review your note',
      description:
        'Someone on the team reads the details you shared—what this is about, how to reach you, and any questions you included.',
    },
    {
      title: 'We reach out',
      description:
        'Expect a reply by phone, email, or text, matching how you asked to be contacted. Weekday outreach is typical during office hours.',
    },
    {
      title: 'You set the pace',
      description:
        'There is no obligation to book or retain the firm. Use the conversation to get clarity before choosing what comes next.',
    },
  ],
} as const

export type RequestReceivedState = {
  firstName?: string
  contactMethod?: string
  caseType?: string
}
