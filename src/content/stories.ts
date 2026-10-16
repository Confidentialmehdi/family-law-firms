export type Story = {
  id: string
  title: string
  situation: string
  conversation: string
  nextStep: string
}

export const stories: Story[] = [
  {
    id: 'parent',
    title: 'A parent organizing concerns',
    situation:
      'A parent facing separation wanted to sort worries about schedules, school, and how to talk with the children—without deciding everything at once.',
    conversation:
      'The conversation focused on naming priorities, separating immediate needs from longer-term questions, and clarifying what “parenting time” can mean in everyday terms.',
    nextStep:
      'They left with a short list of topics to gather and questions to bring to a follow-up discussion.',
  },
  {
    id: 'professional',
    title: 'A professional preparing questions',
    situation:
      'A professional felt unsure how shared property, retirement accounts, and household debts fit together and did not know which documents mattered yet.',
    conversation:
      'Rather than diving into every account, they mapped categories of questions and talked through how property conversations often begin.',
    nextStep:
      'They prepared an organized set of questions and a simple inventory checklist for a later appointment.',
  },
  {
    id: 'couple',
    title: 'A couple before marriage',
    situation:
      'A couple wanted to discuss financial expectations before marriage—what felt fair, what should be written down, and how to start the conversation kindly.',
    conversation:
      'They walked through common themes in prenuptial discussions and practiced framing goals without treating the meeting as a negotiation contest.',
    nextStep:
      'They agreed on topics to revisit privately and what information each person would bring to a next conversation.',
  },
]
