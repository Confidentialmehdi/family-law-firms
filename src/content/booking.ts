import {
  formatNyDateLong,
  formatNyDateShort,
  formatNyMonthDay,
  formatNyWeekday,
  formatTimeLabel,
  getUpcomingNyWeekdays,
  nyDateKey,
  type NyDateParts,
} from '@/lib/timezone'

export type MeetingType = 'video' | 'in-person'

export type TimeSlot = {
  id: string
  dateKey: string
  date: NyDateParts
  hour: number
  minute: number
  timeLabel: string
  dateLabelLong: string
  dateLabelShort: string
  weekdayLabel: string
  monthDayLabel: string
}

/** Sample 30-minute slots for each available day. */
const SLOT_TIMES: Array<{ hour: number; minute: number }> = [
  { hour: 9, minute: 0 },
  { hour: 11, minute: 0 },
  { hour: 14, minute: 0 },
  { hour: 16, minute: 0 },
]

/** Exactly the next 3 NY working days (Mon–Fri), starting tomorrow. */
export function generateAvailabilitySlots(now = new Date()): TimeSlot[] {
  const weekdays = getUpcomingNyWeekdays(3, now)

  return weekdays.flatMap((date) => {
    const dateKey = nyDateKey(date)
    const dateLabelLong = formatNyDateLong(date)
    const dateLabelShort = formatNyDateShort(date)
    const weekdayLabel = formatNyWeekday(date)
    const monthDayLabel = formatNyMonthDay(date)

    return SLOT_TIMES.map(({ hour, minute }) => ({
      id: `${dateKey}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}-NY`,
      dateKey,
      date,
      hour,
      minute,
      timeLabel: formatTimeLabel(hour, minute),
      dateLabelLong,
      dateLabelShort,
      weekdayLabel,
      monthDayLabel,
    }))
  })
}

export function groupSlotsByDate(slots: TimeSlot[]): Array<{
  dateKey: string
  dateLabelLong: string
  dateLabelShort: string
  weekdayLabel: string
  monthDayLabel: string
  slots: TimeSlot[]
}> {
  const map = new Map<
    string,
    {
      dateKey: string
      dateLabelLong: string
      dateLabelShort: string
      weekdayLabel: string
      monthDayLabel: string
      slots: TimeSlot[]
    }
  >()

  for (const slot of slots) {
    const existing = map.get(slot.dateKey)
    if (existing) {
      existing.slots.push(slot)
    } else {
      map.set(slot.dateKey, {
        dateKey: slot.dateKey,
        dateLabelLong: slot.dateLabelLong,
        dateLabelShort: slot.dateLabelShort,
        weekdayLabel: slot.weekdayLabel,
        monthDayLabel: slot.monthDayLabel,
        slots: [slot],
      })
    }
  }

  return Array.from(map.values())
}

export const meetingTypeLabels: Record<MeetingType, string> = {
  video: 'Video',
  'in-person': 'In person',
}

export const bookingPage = {
  headline: 'Choose a time to talk.',
  supporting:
    'Arrange an initial consultation with Robert Whitfield to discuss your questions and priorities.',
  appointmentDetails: '30 minutes · Video or in person',
  demoNotice: 'Demo booking. No consultation will be scheduled.',
  progress: [
    { id: 'appointment', label: 'Consultation' },
    { id: 'details', label: 'Your details' },
    { id: 'review', label: 'Review' },
  ] as const,
  timesLabel: 'All times shown in New York time.',
  sampleAvailabilityNote: 'Sample availability — not live calendar openings.',
  dateStaleNotice:
    'The date you selected is no longer among the next three working days. Please choose a new date and time.',
  attorneyName: 'Robert Whitfield',
  duration: '30 minutes',
  summaryHeading: 'Your consultation',
  summaryEmpty: 'Choose a date and time.',
  reviewDemoNotice: 'This is a demonstration. Nothing will be scheduled or charged.',
  completeHeading: 'Consultation confirmed.',
  completeCopy: 'Your initial consultation details are below.',
  completeDemoNotice: 'This is a demo. No consultation has been scheduled.',
  reassurance: {
    heading: 'A few things before we speak.',
    items: [
      {
        question: 'Unsure which practice area applies?',
        answer: 'Select “Not sure.” Start with the questions that matter to you.',
      },
      {
        question: 'What should I prepare?',
        answer: 'Bring your questions and relevant information. No uploads are required to book.',
      },
      {
        question: 'Will this demo charge me?',
        answer: 'No. No payment is collected.',
      },
    ],
    contactLinkLabel: 'Prefer to reach us another way? Contact us',
  },
} as const
