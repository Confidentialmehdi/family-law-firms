import { bookingPage, groupSlotsByDate } from '@/content/booking'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

import { useBooking } from './BookingContext'

export function AppointmentStep() {
  const {
    slots,
    draft,
    updateDraft,
    appointmentErrors,
    clearAppointmentErrors,
    validateAppointment,
    setStep,
    dateStale,
    clearDateStale,
  } = useBooking()

  const grouped = groupSlotsByDate(slots)
  const timesForDate = draft.dateKey
    ? grouped.find((group) => group.dateKey === draft.dateKey)?.slots ?? []
    : []

  function handleContinue() {
    if (validateAppointment()) {
      setStep('details')
    }
  }

  return (
    <div className="flex flex-col">
      <div className="space-y-5">
        {dateStale ? (
          <p className="rounded-sm bg-brass/15 px-3 py-2 text-sm text-navy" role="status">
            {bookingPage.dateStaleNotice}
          </p>
        ) : null}

        <div className="space-y-2">
          <Label id="meeting-type-label">Meeting format</Label>
          <RadioGroup
            aria-labelledby="meeting-type-label"
            value={draft.meetingType ?? ''}
            onValueChange={(value) => {
              updateDraft({ meetingType: value as 'video' | 'in-person' })
              clearAppointmentErrors()
            }}
            className="grid gap-2 sm:grid-cols-2"
          >
            {(
              [
                { value: 'video', label: 'Video' },
                { value: 'in-person', label: 'In person' },
              ] as const
            ).map((option) => (
              <label
                key={option.value}
                className={cn(
                  'flex min-h-11 cursor-pointer items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 transition-colors has-[[data-state=checked]]:border-teal has-[[data-state=checked]]:bg-teal/5',
                )}
              >
                <RadioGroupItem value={option.value} id={`meeting-${option.value}`} />
                <span className="text-base text-navy">{option.label}</span>
              </label>
            ))}
          </RadioGroup>
          {appointmentErrors.meetingType ? (
            <p className="text-sm text-red-800" role="alert">
              {appointmentErrors.meetingType}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="mb-3 text-sm font-medium text-navy">Date</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {grouped.map((group) => {
              const selected = draft.dateKey === group.dateKey
              return (
                <button
                  key={group.dateKey}
                  type="button"
                  onClick={() => {
                    updateDraft({ dateKey: group.dateKey, slotId: null })
                    clearAppointmentErrors()
                    clearDateStale()
                  }}
                  aria-pressed={selected}
                  className={cn(
                    'min-h-11 rounded-sm border px-4 py-4 text-left transition-colors',
                    selected
                      ? 'border-teal bg-teal/10 ring-2 ring-teal/25'
                      : 'border-border bg-surface hover:border-teal/40',
                  )}
                >
                  <span className="block text-xs tracking-wide text-brass uppercase">
                    {group.weekdayLabel}
                  </span>
                  <span className="mt-1 block font-serif text-xl text-navy">
                    {group.monthDayLabel}
                  </span>
                </button>
              )
            })}
          </div>
          {appointmentErrors.date ? (
            <p className="mt-2 text-sm text-red-800" role="alert">
              {appointmentErrors.date}
            </p>
          ) : null}
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-navy">Time</legend>
          <p className="mb-1 text-sm text-muted">{bookingPage.timesLabel}</p>
          <p className="mb-3 text-xs text-muted">{bookingPage.sampleAvailabilityNote}</p>
          {draft.dateKey ? (
            <div className="flex flex-wrap gap-2">
              {timesForDate.map((slot) => {
                const selected = draft.slotId === slot.id
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => {
                      updateDraft({ slotId: slot.id })
                      clearAppointmentErrors()
                    }}
                    aria-pressed={selected}
                    className={cn(
                      'min-h-11 rounded-sm border px-4 py-2 text-sm transition-colors',
                      selected
                        ? 'border-teal bg-teal text-white'
                        : 'border-border bg-surface text-navy hover:border-teal/40',
                    )}
                  >
                    {slot.timeLabel}
                  </button>
                )
              })}
            </div>
          ) : (
            <p className="text-sm text-muted">Select a date to see sample times.</p>
          )}
          {appointmentErrors.slot ? (
            <p className="mt-2 text-sm text-red-800" role="alert">
              {appointmentErrors.slot}
            </p>
          ) : null}
        </fieldset>
      </div>

      <div className="mt-10 flex justify-end border-t border-border pt-6">
        <Button type="button" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  )
}
