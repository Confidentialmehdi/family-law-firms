import { Link } from 'react-router-dom'

import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { groupSlotsByDate, type MeetingType } from '@/content/booking'
import { homeConsultationStarter } from '@/content/home'
import { cn } from '@/lib/utils'

/** Compact optional date/format surface that carries selections into /book-consultation. */
export function ConsultationStarter() {
  const { slots, draft, updateDraft, clearDateStale } = useBooking()
  const dates = groupSlotsByDate(slots)

  return (
    <div className="rounded-sm border border-border bg-surface/90 px-4 py-5 sm:px-5 sm:py-5">
      <h2 className="font-serif text-xl text-navy md:text-[1.35rem]">
        {homeConsultationStarter.heading}
      </h2>

      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label id="home-meeting-type-label" className="text-xs tracking-wide text-muted uppercase">
            {homeConsultationStarter.formatLabel}
          </Label>
          <RadioGroup
            aria-labelledby="home-meeting-type-label"
            value={draft.meetingType ?? ''}
            onValueChange={(value) => {
              updateDraft({ meetingType: value as MeetingType })
            }}
            className="grid grid-cols-2 gap-2"
          >
            {homeConsultationStarter.formats.map((option) => (
              <label
                key={option.value}
                className={cn(
                  'flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm border border-border bg-ivory px-3 py-2 text-center transition-colors has-[[data-state=checked]]:border-teal has-[[data-state=checked]]:bg-teal/5',
                )}
              >
                <RadioGroupItem
                  value={option.value}
                  id={`home-meeting-${option.value}`}
                  className="sr-only"
                />
                <span className="text-sm font-medium text-navy sm:text-base">{option.label}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        <fieldset>
          <legend className="mb-2 text-xs tracking-wide text-muted uppercase">
            {homeConsultationStarter.dateLabel}
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {dates.map((group) => {
              const selected = draft.dateKey === group.dateKey
              return (
                <button
                  key={group.dateKey}
                  type="button"
                  onClick={() => {
                    updateDraft({ dateKey: group.dateKey, slotId: null })
                    clearDateStale()
                  }}
                  aria-pressed={selected}
                  className={cn(
                    'min-h-14 rounded-sm border px-2 py-2.5 text-center transition-colors sm:min-h-16 sm:px-2.5',
                    selected
                      ? 'border-teal bg-teal/10 ring-2 ring-teal/20'
                      : 'border-border bg-ivory hover:border-teal/40',
                  )}
                >
                  <span className="block text-[0.65rem] tracking-wide text-brass uppercase sm:text-xs">
                    {group.weekdayLabel.slice(0, 3)}
                  </span>
                  <span className="mt-0.5 block font-serif text-sm text-navy sm:text-base">
                    {group.monthDayLabel}
                  </span>
                </button>
              )
            })}
          </div>
        </fieldset>

        <p className="text-sm text-muted">{homeConsultationStarter.details}</p>

        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link to="/book-consultation">{homeConsultationStarter.buttonLabel}</Link>
        </Button>

        <p className="text-xs leading-relaxed text-muted/90">{homeConsultationStarter.demoNotice}</p>
      </div>
    </div>
  )
}
