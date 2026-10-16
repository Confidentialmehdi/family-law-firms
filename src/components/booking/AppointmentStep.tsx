import { groupSlotsByDate } from '@/content/booking'
import { site } from '@/content/site'
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
  } = useBooking()

  const grouped = groupSlotsByDate(slots)

  function handleContinue() {
    if (validateAppointment()) {
      setStep('details')
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-2">
        <p className="text-sm text-muted">
          {site.consultationNote}
          <span className="mx-2 text-brass" aria-hidden="true">
            ·
          </span>
          <span>{site.timeZoneLabel}</span>
        </p>

        <fieldset>
          <legend className="mb-3 text-sm font-medium text-navy">Date and time</legend>
          <div className="space-y-5">
            {grouped.map((group) => (
              <div key={group.dateKey}>
                <p className="mb-2 font-serif text-base text-navy">{group.dateLabelLong}</p>
                <div className="flex flex-wrap gap-2">
                  {group.slots.map((slot) => {
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
                          'min-h-11 rounded-sm border px-3 py-2 text-sm transition-colors',
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
              </div>
            ))}
          </div>
          {appointmentErrors.slot ? (
            <p className="mt-2 text-sm text-red-800" role="alert">
              {appointmentErrors.slot}
            </p>
          ) : null}
        </fieldset>

        <div className="space-y-3">
          <Label id="meeting-type-label">Meeting type</Label>
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
      </div>

      <div className="flex justify-end border-t border-border bg-surface/60 px-5 py-4">
        <Button type="button" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  )
}
