import * as React from 'react'
import { Link } from 'react-router-dom'

import { AppointmentStep } from '@/components/booking/AppointmentStep'
import { useBooking } from '@/components/booking/BookingContext'
import { CompleteStep } from '@/components/booking/CompleteStep'
import { ConsultationSummary } from '@/components/booking/ConsultationSummary'
import { DetailsStep } from '@/components/booking/DetailsStep'
import { ReviewStep } from '@/components/booking/ReviewStep'
import { bookingPage } from '@/content/booking'
import { useDocumentTitle } from '@/lib/useDocumentTitle'
import { cn } from '@/lib/utils'

const progressSteps = bookingPage.progress

export function BookConsultationPage() {
  useDocumentTitle('Book a Consultation')
  const { step, refreshAvailability, setStep } = useBooking()
  const stepHeadingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    refreshAvailability()
  }, [refreshAvailability])

  React.useEffect(() => {
    if (step === 'complete') return
    const frame = requestAnimationFrame(() => {
      stepHeadingRef.current?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [step])

  const activeIndex = progressSteps.findIndex((item) => item.id === step)

  return (
    <main id="main" className="bg-ivory">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
        <div className="max-w-2xl">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-serif text-3xl leading-[1.15] text-navy outline-none md:text-4xl"
          >
            {bookingPage.headline}
          </h1>
          <p className="mt-4 text-lg text-muted">{bookingPage.supporting}</p>
          <p className="mt-3 text-sm text-muted">{bookingPage.appointmentDetails}</p>
          <p className="mt-4 rounded-sm bg-brass/10 px-3 py-2 text-sm text-navy/80">
            {bookingPage.demoNotice}
          </p>
        </div>

        {step === 'complete' ? (
          <div className="mt-12 rounded-sm border border-border bg-surface px-5 py-10 md:px-10 md:py-14">
            <CompleteStep />
          </div>
        ) : (
          <>
            <div className="mt-10 lg:hidden">
              <ConsultationSummary variant="compact" />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <div className="rounded-sm border border-border bg-surface px-5 py-8 md:px-8 md:py-10">
                <ol className="mb-8 flex flex-wrap gap-2 border-b border-border pb-6">
                  {progressSteps.map((item, index) => {
                    const isActive = item.id === step
                    const isComplete = activeIndex > index
                    return (
                      <li key={item.id} className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={!isComplete}
                          onClick={() => {
                            if (isComplete) setStep(item.id)
                          }}
                          className={cn(
                            'rounded-sm px-3 py-1.5 text-sm transition-colors',
                            isActive
                              ? 'bg-navy text-ivory'
                              : isComplete
                                ? 'text-teal hover:bg-teal/10'
                                : 'text-muted',
                          )}
                          aria-current={isActive ? 'step' : undefined}
                        >
                          <span className="tabular-nums">{index + 1}. </span>
                          {item.label}
                        </button>
                      </li>
                    )
                  })}
                </ol>

                <h2
                  ref={stepHeadingRef}
                  tabIndex={-1}
                  className="sr-only outline-none"
                >
                  {progressSteps.find((item) => item.id === step)?.label}
                </h2>

                {step === 'appointment' ? <AppointmentStep /> : null}
                {step === 'details' ? <DetailsStep /> : null}
                {step === 'review' ? <ReviewStep /> : null}
              </div>

              <div className="hidden lg:block">
                <ConsultationSummary />
              </div>
            </div>

            <section className="mt-14 max-w-2xl" aria-labelledby="booking-reassure-heading">
              <h2
                id="booking-reassure-heading"
                className="font-serif text-2xl text-navy md:text-[1.75rem]"
              >
                {bookingPage.reassurance.heading}
              </h2>
              <ul className="mt-8 space-y-6">
                {bookingPage.reassurance.items.map((item) => (
                  <li key={item.question}>
                    <p className="font-serif text-lg text-navy">{item.question}</p>
                    <p className="mt-1 text-base text-muted">{item.answer}</p>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact-us"
                className="mt-8 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
              >
                {bookingPage.reassurance.contactLinkLabel}
              </Link>
            </section>
          </>
        )}
      </div>
    </main>
  )
}
