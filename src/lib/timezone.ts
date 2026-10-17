/** Wall-clock helpers anchored to America/New_York for appointment availability. */

export const NY_TIME_ZONE = 'America/New_York'

export type NyDateParts = {
  year: number
  month: number
  day: number
  weekday: number // 0 = Sunday … 6 = Saturday
}

function partValue(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): string {
  return parts.find((p) => p.type === type)?.value ?? ''
}

/** Current calendar date in New York (ignores visitor device timezone). */
export function getNyToday(now = new Date()): NyDateParts {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: NY_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  }).formatToParts(now)

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  }

  return {
    year: Number(partValue(parts, 'year')),
    month: Number(partValue(parts, 'month')),
    day: Number(partValue(parts, 'day')),
    weekday: weekdayMap[partValue(parts, 'weekday')] ?? 0,
  }
}

/** Add calendar days to a NY date (month/day arithmetic in civil date space). */
export function addNyDays(base: NyDateParts, days: number): NyDateParts {
  // Use UTC noon as a stable civil-date carrier (not a NY instant).
  const carrier = new Date(Date.UTC(base.year, base.month - 1, base.day + days, 12, 0, 0))
  return {
    year: carrier.getUTCFullYear(),
    month: carrier.getUTCMonth() + 1,
    day: carrier.getUTCDate(),
    weekday: carrier.getUTCDay(),
  }
}

export function nyDateKey(date: NyDateParts): string {
  return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
}

export function formatNyDateLong(date: NyDateParts): string {
  const carrier = new Date(Date.UTC(date.year, date.month - 1, date.day, 12, 0, 0))
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(carrier)
}

export function formatNyDateShort(date: NyDateParts): string {
  const carrier = new Date(Date.UTC(date.year, date.month - 1, date.day, 12, 0, 0))
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(carrier)
}

export function formatTimeLabel(hour: number, minute: number): string {
  const period = hour >= 12 ? 'PM' : 'AM'
  const h12 = hour % 12 === 0 ? 12 : hour % 12
  const mm = String(minute).padStart(2, '0')
  return `${h12}:${mm} ${period}`
}

/** Upcoming weekdays in New York, starting tomorrow (NY civil date). */
export function getUpcomingNyWeekdays(count: number, now = new Date()): NyDateParts[] {
  const today = getNyToday(now)
  const results: NyDateParts[] = []
  let offset = 1

  while (results.length < count) {
    const candidate = addNyDays(today, offset)
    if (candidate.weekday !== 0 && candidate.weekday !== 6) {
      results.push(candidate)
    }
    offset += 1
  }

  return results
}
