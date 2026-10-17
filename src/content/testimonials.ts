export type Testimonial = {
  id: string
  quote: string
  attribution: string
  theme: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'I felt heard. We spent time on my priorities before talking about paperwork or timelines.',
    attribution: 'A.M.',
    theme: 'Feeling heard',
  },
  {
    id: 't2',
    quote:
      'I finally understood the process in language I could follow. Nothing felt rushed, and I knew what to ask next.',
    attribution: 'J.R.',
    theme: 'Clear explanations',
  },
  {
    id: 't3',
    quote:
      'I left knowing what to prepare—and what I did not need to decide yet. That clarity mattered.',
    attribution: 'S.L.',
    theme: 'Understanding what to prepare',
  },
]
