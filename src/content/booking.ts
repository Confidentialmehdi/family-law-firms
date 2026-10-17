import {
  formatNyDateLong,
  formatNyDateShort,
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
}

const SLOT_TIMES: Array<{ hour: number; minute: number }> = [
  { hour: 9, minute: 0 },
  { hour: 10, minute: 30 },
  { hour: 13, minute: 0 },
  { hour: 14, minute: 30 },
  { hour: 16, minute: 0 },
]

/** Build availability slots from NY civil dates so labels stay correct in any visitor timezone. */
export function generateAvailabilitySlots(now = new Date()): TimeSlot[] {
  const weekdays = getUpcomingNyWeekdays(8, now)

  return weekdays.flatMap((date) => {
    const dateKey = nyDateKey(date)
    const dateLabelLong = formatNyDateLong(date)
    const dateLabelShort = formatNyDateShort(date)

    return SLOT_TIMES.map(({ hour, minute }) => ({
      id: `${dateKey}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}-NY`,
      dateKey,
      date,
      hour,
      minute,
      timeLabel: formatTimeLabel(hour, minute),
      dateLabelLong,
      dateLabelShort,
    }))
  })
}

export function groupSlotsByDate(slots: TimeSlot[]): Array<{
  dateKey: string
  dateLabelLong: string
  dateLabelShort: string
  slots: TimeSlot[]
}> {
  const map = new Map<
    string,
    { dateKey: string; dateLabelLong: string; dateLabelShort: string; slots: TimeSlot[] }
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
