export type PracticeArea = {
  id: string
  title: string
  description: string
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'divorce',
    title: 'Divorce and separation',
    description:
      'Guidance on ending a marriage or partnership, including how the process typically unfolds and what decisions usually come first.',
  },
  {
    id: 'custody',
    title: 'Child custody and parenting time',
    description:
      'Help thinking through parenting arrangements that reflect your children’s needs and your family’s day-to-day life.',
  },
  {
    id: 'child-support',
    title: 'Child support',
    description:
      'Clear explanations of how support is generally approached so you can understand what may apply in your situation.',
  },
  {
    id: 'spousal-support',
    title: 'Spousal support',
    description:
      'Discussion of maintenance considerations, timelines, and questions to bring as you weigh your options.',
  },
  {
    id: 'property',
    title: 'Property division',
    description:
      'Support organizing assets, debts, and household finances so you can see the picture more clearly before deciding next steps.',
  },
  {
    id: 'prenup',
    title: 'Prenuptial and postnuptial agreements',
    description:
      'Thoughtful conversations about financial expectations and agreements before or during marriage.',
  },
]

export const practiceAreaOptions = [
  { value: 'not-sure', label: 'Not sure' },
  ...practiceAreas.map((area) => ({ value: area.id, label: area.title })),
] as const
