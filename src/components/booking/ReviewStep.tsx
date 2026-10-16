import { site } from '@/content/site'
import { Button } from '@/components/ui/button'

import { useBooking } from './BookingContext'

export function ReviewStep() {
  const {
    draft,
    selectedSlot,
    meetingTypeLabel,
    practiceAreaLabel,
    setStep,
    completeBooking,
  } = useBooking()

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-2">
        <dl className="space-y-4 text-base">
          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
            <div>
              <dt className="text-sm text-muted">Appointment</dt>
              <dd className="mt-1 text-navy">
                {selectedSlot ? (
                  <>
                    <span className="block font-medium">{selectedSlot.dateLabelLong}</span>
                    <span>
                      {selectedSlot.timeLabel} · {site.timeZoneLabel}
                    </span>
                  </>
                ) : (
                  '—'
                )}
              </dd>
            </div>
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm"
              onClick={() => setStep('appointment')}
            >
              Edit
            </Button>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
            <div>
              <dt className="text-sm text-muted">Meeting type</dt>
              <dd className="mt-1 text-navy">{meetingTypeLabel ?? '—'}</dd>
            </div>
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm"
              onClick={() => setStep('appointment')}
            >
              Edit
            </Button>
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
            <div>
              <dt className="text-sm text-muted">Your details</dt>
              <dd className="mt-1 text-navy">
                <span className="block">{draft.name}</span>
                <span className="block">{draft.email}</span>
                {practiceAreaLabel ? (
                  <span className="mt-1 block text-muted">{practiceAreaLabel}</span>
                ) : null}
              </dd>
            </div>
            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm"
              onClick={() => setStep('details')}
            >
              Edit
            </Button>
          </div>
        </dl>

        <p className="text-sm text-muted">{site.consultationNote}</p>
      </div>

      <div className="flex flex-col-reverse gap-2 border-t border-border bg-surface/60 px-5 py-4 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" onClick={() => setStep('details')}>
          Back
        </Button>
        <Button type="button" onClick={completeBooking}>
          {site.ctaLabel}
        </Button>
      </div>
    </div>
  )
}
