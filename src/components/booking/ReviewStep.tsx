import { bookingPage } from '@/content/booking'
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
    <div className="flex flex-col">
      <dl className="space-y-4 text-base">
        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted">Attorney</dt>
          <dd className="mt-1 text-navy">{bookingPage.attorneyName}</dd>
        </div>

        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <div>
            <dt className="text-sm text-muted">Date</dt>
            <dd className="mt-1 text-navy">
              {selectedSlot?.dateLabelLong ?? '—'}
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
            <dt className="text-sm text-muted">Time</dt>
            <dd className="mt-1 text-navy">
              {selectedSlot ? (
                <>
                  {selectedSlot.timeLabel} · {site.timeZoneLabel}
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
            <dt className="text-sm text-muted">Meeting format</dt>
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

        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted">Duration</dt>
          <dd className="mt-1 text-navy">{bookingPage.duration}</dd>
        </div>

        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted">Fee</dt>
          <dd className="mt-1 text-navy">{bookingPage.sampleFee}</dd>
        </div>

        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <div>
            <dt className="text-sm text-muted">Your details</dt>
            <dd className="mt-1 text-navy">
              <span className="block">{draft.name}</span>
              <span className="block">{draft.email}</span>
              <span className="block">{draft.phone}</span>
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

      <div className="mt-6 flex flex-col-reverse gap-2 border-t border-border pt-4 sm:flex-row sm:justify-between">
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
