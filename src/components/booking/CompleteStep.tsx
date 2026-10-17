import { CircleCheck } from 'lucide-react'

import { bookingPage } from '@/content/booking'
import { site } from '@/content/site'

import { useBooking } from './BookingContext'

export function CompleteStep() {
  const {
    selectedSlot,
    meetingTypeLabel,
    practiceAreaLabel,
    draft,
  } = useBooking()

  return (
    <div className="text-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center">
        <CircleCheck
          className="size-12 text-teal"
          strokeWidth={1.5}
          aria-hidden
        />
        <h1
          id="page-heading"
          tabIndex={-1}
          className="mt-4 font-serif text-2xl text-navy outline-none md:text-3xl"
        >
          {bookingPage.completeHeading}
        </h1>
        <p className="mt-2 text-base text-muted">{bookingPage.completeCopy}</p>
      </div>

      <div className="mx-auto mt-6 max-w-md rounded-sm border border-border bg-ivory px-5 py-5 text-left">
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
            <dt className="text-sm text-muted">Duration</dt>
            <dd>{bookingPage.duration}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Contact</dt>
            <dd>
              {draft.name}
              <span className="block text-muted">{draft.email}</span>
              <span className="block text-muted">{draft.phone}</span>
              {practiceAreaLabel ? (
                <span className="block text-muted">{practiceAreaLabel}</span>
              ) : null}
            </dd>
          </div>
        </dl>
      </div>

      <p className="mt-6 text-sm text-muted">{bookingPage.completeDemoNotice}</p>
    </div>
  )
}
