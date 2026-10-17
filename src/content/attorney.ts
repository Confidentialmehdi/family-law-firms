export const attorney = {
  name: 'Robert Whitfield',
  role: 'Lead Attorney',
  firm: 'Whitfield Law Group',
  firmIntro:
    'Whitfield Law Group is a New York family law practice focused on helping people navigate divorce, parenting arrangements, and financial matters with clarity and care.',
  bio: `Robert Whitfield’s approach begins with understanding what matters most to the person across the table. Questions about family, finances, and the future often arrive together. He focuses on making those conversations easier to navigate through careful listening and clear explanations.

At Whitfield Law Group, the initial conversation is an opportunity to organize priorities, discuss options, and consider possible next steps.`,
  approachStatement: 'A useful first conversation starts with your questions.',
  approach: [
    'Listening first, then outlining the landscape in clear terms.',
    'Helping clients separate urgent decisions from ones that can unfold over time.',
    'Preparing people for next steps with realistic options—not pressure.',
  ],
  homePreview:
    'Robert Whitfield leads Whitfield Law Group with a calm, clear approach—helping clients understand their options before they decide what comes next.',
} as const

export const aboutPage = {
  eyebrow: 'About Whitfield Law Group',
  headline: 'Family matters deserve personal attention.',
  supporting:
    'Meet the people behind a clear, considered approach to divorce, parenting arrangements, and financial decisions.',
  locationDetail: 'New York, NY',
  team: {
    heading: 'The people supporting your next step.',
    supporting:
      'Legal guidance and practical coordination each have a place in helping clients navigate the process.',
    disclaimer: 'Prototype team. Profiles and descriptions are sample content.',
  },
  values: {
    heading: 'What you can expect from our approach.',
    linkLabel: 'What happens at the first appointment?',
    items: [
      {
        number: '01',
        title: 'Space to explain',
        description:
          'Start with the questions, concerns, and priorities that brought you here.',
      },
      {
        number: '02',
        title: 'Clear explanations',
        description:
          'Discuss unfamiliar terms and connected issues in straightforward language.',
      },
      {
        number: '03',
        title: 'Considered next steps',
        description:
          'Explore what may need further attention and which information could help the next conversation.',
      },
    ],
  },
  closing: {
    headline: 'Let’s begin with what matters to you.',
    supporting:
      'Choose a time for an initial conversation about your questions and priorities.',
    terms: '30 minutes · Video or in person · $150 sample consultation fee',
  },
} as const

export type TeamMember = {
  id: string
  name: string
  role: string
  description: string
  /** Anchor to in-page profile when set (e.g. Robert). */
  profileHref?: string
  fictional?: boolean
}

export const teamMembers: TeamMember[] = [
  {
    id: 'robert',
    name: 'Robert Whitfield',
    role: 'Lead Attorney',
    description:
      'Leads conversations about client priorities, family law questions, and possible next steps.',
    profileHref: '#robert-whitfield',
  },
  {
    id: 'avery',
    name: 'Avery Morgan',
    role: 'Family Law Attorney',
    description:
      'Supports the discussion and preparation of family law matters, with an emphasis on clear communication.',
    fictional: true,
  },
  {
    id: 'taylor',
    name: 'Taylor Reed',
    role: 'Client Services Coordinator',
    description:
      'Helps with appointment coordination and practical questions about preparing for a conversation.',
    fictional: true,
  },
]
