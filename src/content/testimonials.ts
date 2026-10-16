export type Testimonial = {
  id: string
  quote: string
  attribution: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'I finally understood the process in language I could follow. Nothing felt rushed, and I knew what to ask next.',
    attribution: 'Sample client voice',
  },
  {
    id: 't2',
    quote:
      'I felt heard. We spent time on my priorities before talking about paperwork or timelines.',
    attribution: 'Sample client voice',
  },
  {
    id: 't3',
    quote:
      'I left knowing what to expect—and what I did not need to decide yet. That clarity mattered.',
    attribution: 'Sample client voice',
  },
]
