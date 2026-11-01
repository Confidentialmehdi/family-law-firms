export type PracticeArea = {
  id: string
  /** Short name used in homepage preview, nav, and booking dropdown. */
  title: string
  /** Full explanation on the Practice Areas page. */
  description: string
  /** Concise line for homepage preview. */
  preview: string
  /** Practical topics people often recognize. */
  oftenInvolves: readonly string[]
  /** Short approach line for this practice area. */
  approachLine: string
  questions: readonly string[]
  /** Related practice area ids for in-page links. */
  relatedIds: readonly string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'divorce',
    title: 'Divorce',
    description:
      'Thinking about divorce or separation often means facing children, housing, money, and timing all at once. We help you see which decisions need attention soon, how those issues connect, and what a steady next step can look like—without asking you to resolve everything in one meeting.',
    preview:
      'Get clarity on the decisions that come with ending a marriage or planning a separation.',
    oftenInvolves: [
      'Where to begin when answers are not ready yet',
      'How parenting, support, and property questions connect',
      'Timing, living arrangements, and financial pressure',
      'Information that makes a first conversation useful',
    ],
    approachLine:
      'We start with your questions, then map options and what may need further discussion.',
    questions: [
      'Where should I begin if I am considering divorce or separation?',
      'How do parenting, support, and property issues connect in my situation?',
      'What information helps before a first consultation?',
      'Which decisions need attention soon—and which can wait?',
    ],
    relatedIds: ['custody', 'property', 'spousal-support'],
  },
  {
    id: 'custody',
    title: 'Child Custody & Parenting Time',
    description:
      'When family routines change, questions about schedules, school, and shared decisions can feel urgent. A consultation helps you put those concerns into plain language and discuss arrangements that reflect your children’s everyday lives.',
    preview:
      'Talk through parenting time, responsibilities, and decisions that affect your children.',
    oftenInvolves: [
      'Weekday and weekend parenting schedules',
      'School, activities, and travel',
      'How major decisions get shared',
      'Changes when work or home life shifts',
    ],
    approachLine:
      'We help you describe parenting concerns clearly before talking through possible arrangements.',
    questions: [
      'What parenting schedule fits our children’s real lives?',
      'How should important decisions be shared?',
      'What if circumstances or an existing arrangement change?',
      'How should everyday routines show up in a plan?',
    ],
    relatedIds: ['divorce', 'child-support'],
  },
  {
    id: 'child-support',
    title: 'Child Support',
    description:
      'Supporting your children after a separation raises questions about income, expenses, and changing circumstances. We help you frame the financial picture that matters and the details worth gathering before a longer discussion.',
    preview: 'Clarify contributions toward your children’s ongoing needs.',
    oftenInvolves: [
      'Income information to organize',
      'Children’s expenses and ongoing needs',
      'Changes in work or household circumstances',
      'Questions about existing support arrangements',
    ],
    approachLine:
      'We focus on clarifying the financial picture you need—not finishing every calculation in one sitting.',
    questions: [
      'What financial information should I prepare?',
      'How do my children’s expenses factor into support?',
      'What if I already have a support arrangement?',
      'How might changing circumstances affect the conversation?',
    ],
    relatedIds: ['custody', 'divorce'],
  },
  {
    id: 'spousal-support',
    title: 'Spousal Support',
    description:
      'Separation and divorce can leave you unsure how household costs get covered—now and later. We discuss your circumstances and the support questions that matter most during or after a split.',
    preview:
      'Discuss financial support during and after separation.',
    oftenInvolves: [
      'Income, needs, and household expenses',
      'Support questions during separation',
      'How finances connect to other divorce topics',
      'Information useful for a later discussion',
    ],
    approachLine:
      'We help you identify the support questions that matter most and what to organize next.',
    questions: [
      'What income and expense details matter here?',
      'How does support work during separation?',
      'What if an arrangement already exists?',
      'How does support connect to property and living costs?',
    ],
    relatedIds: ['divorce', 'property'],
  },
  {
    id: 'property',
    title: 'Property Division',
    description:
      'Shared homes, accounts, debts, and business interests can make every financial decision feel complicated. We help you identify what needs closer attention and group related questions so a first conversation stays focused.',
    preview: 'Organize shared assets, debts, and financial priorities.',
    oftenInvolves: [
      'Shared assets and household debts',
      'Homes, accounts, and business interests',
      'Financial records worth organizing',
      'Priorities when several issues connect',
    ],
    approachLine:
      'We group complex financial questions into categories so the conversation is easier to follow.',
    questions: [
      'Which shared assets and debts need attention first?',
      'How do property or business interests fit in?',
      'What financial records should I organize?',
      'Which priorities should lead the next discussion?',
    ],
    relatedIds: ['divorce', 'spousal-support'],
  },
  {
    id: 'prenup',
    title: 'Prenuptial & Postnuptial Agreements',
    description:
      'Planning a marriage—or revisiting finances during one—takes careful conversation about expectations, assets, and debts. We help you name what a potential agreement should address before treating the talk as a finished negotiation.',
    preview:
      'Set financial expectations clearly before or during marriage.',
    oftenInvolves: [
      'Financial expectations before or during marriage',
      'Assets, debts, and business interests',
      'How to open the conversation thoughtfully',
      'Topics to revisit before preparing an agreement',
    ],
    approachLine:
      'We help you name priorities and questions before treating the discussion as a finished deal.',
    questions: [
      'What financial expectations matter most to us?',
      'How should assets, debts, and business interests be addressed?',
      'What should we discuss before drafting an agreement?',
      'What if circumstances change later?',
    ],
    relatedIds: ['property', 'divorce'],
  },
]

export const practiceAreaOptions = [
  ...practiceAreas.map((area) => ({ value: area.id, label: area.title })),
  { value: 'not-sure', label: 'Not sure' },
] as const

export const practicePage = {
  eyebrow: 'Practice Areas',
  headline: 'Family law help for the decisions in front of you.',
  supporting:
    'Divorce, parenting, support, property, and marriage agreements—explained in practical terms so you know where to begin.',
  navHeading: 'Choose a topic.',
  oftenInvolvesLabel: 'What this often involves',
  questionsLabel: 'Questions people bring',
  approachLabel: 'How we approach this',
  relatedLabel: 'Related areas',
  questionsNote: 'Bring whichever of these you want to cover first.',
  /** Quiet next step under each area intro — text link, not a repeated button. */
  softNextPrompt: 'Ready to talk this through?',
  softNextLabel: 'What to expect at a consultation',
  softNextTo: '/what-to-expect',
  unsure: {
    heading: 'Not sure where your situation fits?',
    copy: 'You do not need a legal label before speaking with us. Family matters often involve several connected questions.',
    bookingNote: 'Select “Not sure” when you book and start with what you want to discuss.',
    bookLabel: 'Book a consultation',
    linkLabel: 'What to expect at your consultation',
  },
  closing: {
    headline: 'Talk through the questions that matter most.',
    supporting: 'Book a consultation with Robert J. Whitfield, Esq.',
    terms: 'Consultation · Online or in person',
  },
  questionsHeading: 'Questions you may want to discuss.',
} as const

export function getPracticeArea(id: string) {
  return practiceAreas.find((area) => area.id === id)
}
