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
  video: 'Online',
  'in-person': 'In person',
}

export const bookingPage = {
  headline: 'Book a consultation with Robert J. Whitfield, Esq.',
  supporting:
    'Choose a format, date, and time for a consultation about your questions and priorities.',
  consultationDetails: 'Consultation · Online or in person',
  progress: [
    { id: 'consultation', label: 'Consultation' },
    { id: 'details', label: 'Your details' },
    { id: 'review', label: 'Review' },
  ] as const,
  timesLabel: 'All times shown in New York time.',
  selectDateForTimes: 'Select a date to see available times.',
  dateStaleNotice:
    'That date is no longer among the next three working days. Please choose a new date and time.',
  attorneyName: 'Robert J. Whitfield, Esq.',
  duration: 'Consultation',
  summaryHeading: 'Your consultation',
  summaryEmpty: 'Choose a date and time.',
  confirmLabel: 'Book a consultation',
  submittingLabel: 'Submitting',
  completeHeading: 'Consultation confirmed',
  completeCopy: 'Here is a summary of the details you selected.',
  completeDemoNotice: 'Demo only. No consultation has been scheduled. Nothing was sent or stored.',
  validation: {
    meetingType: 'Choose online or in person.',
    date: 'Select a date.',
    slot: 'Select a time.',
    firstName: 'Enter your first name.',
    lastName: 'Enter your last name.',
    email: 'Enter your email address.',
    emailInvalid: 'Enter a valid email (for example, name@example.com).',
    phone: 'Enter your phone number.',
    phoneInvalid: 'Enter a 10-digit US phone number.',
    practiceArea: 'Choose a practice area.',
  },
  reassurance: {
    heading: 'Before you confirm.',
    items: [
      {
        question: 'Unsure which practice area applies?',
        answer: 'Select “Not sure.” Begin with the questions that matter to you.',
      },
      {
        question: 'What should I prepare?',
        answer:
          'Bring your questions and any notes that help you explain them. No uploads are required to book.',
      },
      {
        question: 'What does the consultation cost?',
        answer: 'Fees are confirmed when you book so you know what to expect before you continue.',
      },
    ],
    contactLinkLabel: 'Prefer another way to reach us? Contact us',
  },
} as const
