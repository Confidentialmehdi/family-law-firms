import { attorneyProfiles } from '@/content/attorneys'

export const attorney = {
  name: 'Robert J. Whitfield, Esq.',
  role: 'Lead Attorney',
  firm: 'Whitfield Law Group',
  /** Editorial sample portrait for the prototype (Unsplash). */
  imageSrc: '/images/portraits/robert.jpg',
  imageAlt: 'Portrait of attorney Robert J. Whitfield, Esq.',
  firmIntro:
    'Whitfield Law Group is a New York family law practice. We work with people who have questions about divorce, parenting arrangements, financial support, property, and agreements before or during marriage.',
  bio: `Robert J. Whitfield, Esq. begins with what you want to discuss. Family, finances, and timing often arrive together. He listens carefully, explains options in plain language, and helps you separate questions that need attention now from those that can wait.

At Whitfield Law Group, the initial consultation is a defined first step: organize your priorities, understand possible paths, and decide—at your own pace—what you want to do next.`,
  approachStatement: 'A useful first conversation starts with your questions.',
  approach: [
    'Listening first, then explaining the landscape in ordinary language.',
    'Helping you separate urgent decisions from ones that can unfold over time.',
    'Preparing realistic next steps—not pressure to hire the firm or choose a path today.',
  ],
  homePreview:
    'Robert J. Whitfield, Esq. leads Whitfield Law Group. He focuses on careful listening, plain explanations, and practical next steps.',
  profileHref: '/attorneys/robert-j-whitfield',
} as const

export const aboutPage = {
  profileSoftNextPrompt: 'Ready for a defined first conversation?',
  profileSoftNextLabel: 'What to expect at a consultation',
  profileSoftNextTo: '/what-to-expect',
  profileFullLabel: 'View full profile',
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
  /** Profile page path. */
  profileHref: string
}

export const teamMembers: TeamMember[] = attorneyProfiles.map((profile) => ({
  id: profile.id,
  name: profile.name,
  role: profile.role,
  description: profile.summary,
  imageSrc: profile.imageSrc,
  imageAlt: profile.imageAlt,
  profileHref: `/attorneys/${profile.slug}`,
}))
