import { Link } from 'react-router-dom'

import { bookingPage } from '@/content/booking'
import { site } from '@/content/site'
import { Button } from '@/components/ui/button'

import { useBooking } from './BookingContext'

export function CompleteStep() {
  const {
    selectedSlot,
    meetingTypeLabel,
    practiceAreaLabel,
    draft,
    resetBooking,
  } = useBooking()

  return (
    <div className="text-center" role="status" aria-live="polite">
      <h2 className="font-serif text-3xl text-navy md:text-4xl">
        {bookingPage.completeHeading}
      </h2>
      <p className="mt-3 text-lg text-muted">{bookingPage.completeCopy}</p>

      <div className="mx-auto mt-10 max-w-md rounded-sm border border-border bg-surface px-6 py-6 text-left">
        <p className="text-[0.7rem] tracking-[0.14em] text-brass uppercase">
          {bookingPage.summaryHeading}
        </p>
        <dl className="mt-4 space-y-3 text-base text-navy">
          <div>
            <dt className="text-sm text-muted">Attorney</dt>
            <dd>{bookingPage.attorneyName}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Date & time</dt>
            <dd>
              {selectedSlot ? (
                <>
                  {selectedSlot.dateLabelLong}
                  <span className="block text-muted">
                    {selectedSlot.timeLabel} · {site.timeZoneLabel}
                  </span>
                </>
              ) : (
                '—'
              )}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Format</dt>
            <dd>{meetingTypeLabel ?? '—'}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Duration / fee</dt>
            <dd>
              {bookingPage.duration} · {bookingPage.sampleFee}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Contact</dt>
            <dd>
              {draft.name}
              <span className="block text-muted">{draft.email}</span>
              {practiceAreaLabel ? (
                <span className="block text-muted">{practiceAreaLabel}</span>
              ) : null}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button type="button" variant="outline" onClick={resetBooking}>
          {bookingPage.startAgainLabel}
        </Button>
        <Button asChild>
          <Link to="/" onClick={resetBooking}>
            {bookingPage.backHomeLabel}
          </Link>
        </Button>
      </div>
    </div>
  )
}
