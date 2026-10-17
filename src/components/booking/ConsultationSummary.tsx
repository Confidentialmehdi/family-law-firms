import { bookingPage } from '@/content/booking'
import { site } from '@/content/site'

import { useBooking } from './BookingContext'

type ConsultationSummaryProps = {
  /** Compact strip for mobile above the current step. */
  variant?: 'panel' | 'compact'
}

export function ConsultationSummary({ variant = 'panel' }: ConsultationSummaryProps) {
  const { selectedSlot, meetingTypeLabel, draft } = useBooking()

  const hasSelection = Boolean(draft.dateKey || draft.slotId || draft.meetingType)

  if (variant === 'compact') {
    return (
      <div className="rounded-sm border border-border bg-navy px-4 py-4 text-ivory">
        <p className="text-[0.7rem] tracking-[0.14em] text-brass uppercase">
          {bookingPage.summaryHeading}
        </p>
        <p className="mt-2 font-serif text-lg text-ivory">{bookingPage.attorneyName}</p>
        {!hasSelection ? (
          <p className="mt-2 text-sm text-ivory/65">{bookingPage.summaryEmpty}</p>
        ) : (
          <ul className="mt-3 space-y-1 text-sm text-ivory/80">
            <li>{bookingPage.duration}</li>
            {meetingTypeLabel ? <li>{meetingTypeLabel}</li> : null}
            {selectedSlot ? (
              <li>
                {selectedSlot.dateLabelShort} · {selectedSlot.timeLabel} ({site.timeZoneLabel})
              </li>
            ) : draft.dateKey ? (
              <li>Date selected — choose a time</li>
            ) : null}
          </ul>
        )}
      </div>
    )
  }

  return (
    <aside className="rounded-sm bg-navy px-6 py-7 text-ivory lg:sticky lg:top-28">
      <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
        {bookingPage.summaryHeading}
      </p>
      <h2 className="mt-3 font-serif text-2xl text-ivory">{bookingPage.attorneyName}</h2>

      <dl className="mt-8 space-y-5 border-t border-ivory/15 pt-6 text-sm">
        <div>
          <dt className="text-ivory/55">Duration</dt>
          <dd className="mt-1 text-base text-ivory">{bookingPage.duration}</dd>
        </div>
        <div>
          <dt className="text-ivory/55">Format</dt>
          <dd className="mt-1 text-base text-ivory">
            {meetingTypeLabel ?? '—'}
          </dd>
        </div>
        <div>
          <dt className="text-ivory/55">Date & time</dt>
          <dd className="mt-1 text-base text-ivory">
            {selectedSlot ? (
              <>
                <span className="block">{selectedSlot.dateLabelLong}</span>
                <span className="text-ivory/75">
                  {selectedSlot.timeLabel} · {site.timeZoneLabel}
                </span>
              </>
            ) : (
              <span className="text-ivory/65">{bookingPage.summaryEmpty}</span>
            )}
          </dd>
        </div>
      </dl>
    </aside>
  )
}
