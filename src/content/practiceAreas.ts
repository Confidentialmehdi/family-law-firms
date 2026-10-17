export type PracticeArea = {
  id: string
  /** Short name used in homepage preview, nav, and booking dropdown. */
  title: string
  /** Full explanation on the Practice Areas page. */
  description: string
  /** Concise line for homepage preview. */
  preview: string
  questions: readonly string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'divorce',
    title: 'Divorce',
    description:
      'Considering divorce or separation can raise questions about your children, home, finances, and future. Whitfield Law Group helps you understand your options, organize your priorities, and discuss possible next steps.',
    preview:
      'Understand the decisions involved in ending a marriage or planning a separation.',
    questions: [
      'Where to begin when considering divorce or separation.',
      'How parenting, support, and property matters connect.',
      'What information to prepare for your first appointment.',
    ],
  },
  {
    id: 'custody',
    title: 'Child Custody & Parenting Time',
    description:
      'Changes in family life can bring questions about parenting schedules, responsibilities, and your children’s everyday needs. A conversation can help you identify your concerns and the arrangements you want to discuss.',
    preview:
      'Explore questions about parenting responsibilities and time with your children.',
    questions: [
      'Parenting schedules and time with your children.',
      'Responsibilities for important decisions.',
      'Changes in family circumstances or existing arrangements.',
    ],
  },
  {
    id: 'child-support',
    title: 'Child Support',
    description:
      'Questions about supporting your children often involve income, expenses, and changing circumstances. Discuss the information relevant to your situation and the financial concerns you want to understand.',
    preview: 'Discuss financial contributions toward your children’s needs.',
    questions: [
      'Financial information to prepare.',
      'Your children’s expenses and needs.',
      'Questions about existing support arrangements.',
    ],
  },
  {
    id: 'spousal-support',
    title: 'Spousal Support',
    description:
      'Separation and divorce can create uncertainty about financial needs and responsibilities. Discuss your circumstances and the questions you have about support during or after separation.',
    preview:
      'Understand questions about financial support during and after separation.',
    questions: [
      'Financial needs and income information.',
      'Support questions during separation.',
      'Questions about existing arrangements.',
    ],
  },
  {
    id: 'property',
    title: 'Property Division',
    description:
      'Shared assets and debts can make financial decisions feel complicated. Identify the property, obligations, and priorities that may need closer discussion as you consider your next steps.',
    preview: 'Make sense of shared assets, debts, and financial priorities.',
    questions: [
      'Shared assets and debts.',
      'Property or business interests.',
      'Financial records to organize.',
    ],
  },
  {
    id: 'prenup',
    title: 'Prenuptial & Postnuptial Agreements',
    description:
      'Planning a marriage or discussing finances during one can involve important conversations about expectations, assets, and debts. Explore the subjects you want a potential agreement to address.',
    preview:
      'Discuss financial expectations and agreements before or during marriage.',
    questions: [
      'Financial expectations and priorities.',
      'Assets, debts, and business interests.',
      'Questions to discuss together before preparing an agreement.',
    ],
  },
]

export const practiceAreaOptions = [
  { value: 'not-sure', label: 'Not sure' },
  ...practiceAreas.map((area) => ({ value: area.id, label: area.title })),
] as const

export const practicePage = {
  eyebrow: 'Practice Areas',
  headline: 'Family law guidance for the decisions ahead.',
  supporting:
    'Explore support for divorce, parenting arrangements, financial matters, and planning for marriage.',
  navHeading: 'Find the support you need.',
  unsure: {
    heading: 'Not sure where your situation fits?',
    copy: 'You don’t need to choose the right legal category before speaking with us. Family matters often involve several connected questions. Select “Not sure” when booking and start with what matters to you.',
    linkLabel: 'What to expect at your appointment',
  },
  closing: {
    headline: 'Talk through the questions that matter to you.',
    supporting: 'Choose a time for an initial conversation with Robert Whitfield.',
    terms: '30 minutes · Video or in person · $150 sample consultation fee',
  },
  questionsHeading: 'Questions you may want to discuss.',
} as const

export function getPracticeArea(id: string) {
  return practiceAreas.find((area) => area.id === id)
}
