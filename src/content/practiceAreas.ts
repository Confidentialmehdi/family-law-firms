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
      'Understand the decisions involved in ending a marriage or planning a separation.',
  },
  {
    id: 'custody',
    title: 'Child custody and parenting time',
    description:
      'Explore questions about parenting responsibilities and time with your children.',
  },
  {
    id: 'child-support',
    title: 'Child support',
    description: 'Discuss financial contributions toward your children’s needs.',
  },
  {
    id: 'spousal-support',
    title: 'Spousal support',
    description:
      'Understand questions about financial support during and after separation.',
  },
  {
    id: 'property',
    title: 'Property division',
    description: 'Make sense of shared assets, debts, and financial priorities.',
  },
  {
    id: 'prenup',
    title: 'Prenuptial and postnuptial agreements',
    description:
      'Discuss financial expectations and agreements before or during marriage.',
  },
]

export const practiceAreaOptions = [
  { value: 'not-sure', label: 'Not sure' },
  ...practiceAreas.map((area) => ({ value: area.id, label: area.title })),
] as const

export function getPracticeArea(id: string) {
  return practiceAreas.find((area) => area.id === id)
}
