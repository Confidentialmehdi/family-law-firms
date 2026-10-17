export const attorney = {
  name: 'Robert Whitfield',
  role: 'Lead Attorney',
  firm: 'Whitfield Law Group',
  /** Editorial sample portrait for the prototype (Unsplash). */
  imageSrc: '/images/portraits/robert.jpg',
  imageAlt: 'Portrait of attorney Robert Whitfield',
  firmIntro:
    'Whitfield Law Group is a New York family law practice. We work with people who have questions about divorce, parenting arrangements, financial support, property, and agreements before or during marriage.',
  bio: `Robert Whitfield begins with what you want to discuss. Family, finances, and timing often arrive together. He listens carefully, explains options in plain language, and helps you separate questions that need attention now from those that can wait.

At Whitfield Law Group, the initial consultation is a defined first step: organize your priorities, understand possible paths, and decide—at your own pace—what you want to do next.`,
  approachStatement: 'A useful first conversation starts with your questions.',
  approach: [
    'Listening first, then explaining the landscape in ordinary language.',
    'Helping you separate urgent decisions from ones that can unfold over time.',
    'Preparing realistic next steps—not pressure to hire the firm or choose a path today.',
  ],
  homePreview:
    'Robert Whitfield leads Whitfield Law Group. He focuses on careful listening, plain explanations, and practical next steps.',
} as const

export const aboutPage = {
  team: {
    heading: 'The people you may work with.',
    supporting:
      'Legal guidance and practical coordination each support the consultation and any follow-up conversations.',
  },
  values: {
    heading: 'How we approach the work.',
    linkLabel: 'What happens at the first consultation?',
    items: [
      {
        number: '01',
        title: 'Room to explain',
        description:
          'You begin with the questions, concerns, and priorities that brought you here.',
      },
      {
        number: '02',
        title: 'Plain explanations',
        description:
          'We discuss unfamiliar terms and how related issues connect, in language you can use.',
      },
      {
        number: '03',
        title: 'Practical next steps',
        description:
          'We identify what may need further attention and which information could help a later conversation.',
      },
    ],
  },
} as const

export type TeamMember = {
  id: string
  name: string
  role: string
  description: string
  imageSrc: string
  imageAlt: string
  /** Anchor to in-page profile when set (e.g. Robert). */
  profileHref?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'robert',
    name: 'Robert Whitfield',
    role: 'Lead Attorney',
    description:
      'Leads consultations about client priorities, family law questions, and possible next steps.',
    imageSrc: '/images/portraits/robert.jpg',
    imageAlt: 'Portrait of Robert Whitfield',
    profileHref: '#robert-whitfield',
  },
  {
    id: 'avery',
    name: 'Avery Morgan',
    role: 'Family Law Attorney',
    description:
      'Supports discussion and preparation of family law matters, with attention to clear communication.',
    imageSrc: '/images/portraits/avery.jpg',
    imageAlt: 'Portrait of Avery Morgan',
  },
  {
    id: 'taylor',
    name: 'Taylor Reed',
    role: 'Client Services Coordinator',
    description:
      'Coordinates consultations and answers practical questions about preparing for a meeting.',
    imageSrc: '/images/portraits/taylor.jpg',
    imageAlt: 'Portrait of Taylor Reed',
  },
]
