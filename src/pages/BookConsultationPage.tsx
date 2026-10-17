import * as React from 'react'
import { Link } from 'react-router-dom'

import { AppointmentStep } from '@/components/booking/AppointmentStep'
import { useBooking } from '@/components/booking/BookingContext'
import { CompleteStep } from '@/components/booking/CompleteStep'
import { ConsultationSummary } from '@/components/booking/ConsultationSummary'
import { DetailsStep } from '@/components/booking/DetailsStep'
import { ReviewStep } from '@/components/booking/ReviewStep'
import { bookingPage } from '@/content/booking'
import type { BookingStep } from '@/components/booking/BookingContext'
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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const frame = requestAnimationFrame(() => {
      if (step === 'complete') {
        document.getElementById('page-heading')?.focus({ preventScroll: true })
      } else {
        stepHeadingRef.current?.focus({ preventScroll: true })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [step])

  const activeIndex = progressSteps.findIndex((item) => item.id === step)
  const isComplete = step === 'complete'

  return (
    <main
      id="main"
      className={cn('bg-ivory', isComplete && 'flex flex-1 flex-col justify-center')}
    >
      <div
        className={cn(
          'mx-auto w-full max-w-[1200px] px-5 md:px-8',
          isComplete ? 'py-16 md:py-24' : 'py-6 md:py-8',
        )}
      >
        {isComplete ? (
          <div className="mx-auto w-full max-w-xl rounded-sm border border-border bg-surface px-5 py-10 md:px-8 md:py-12">
            <CompleteStep />
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-serif text-2xl leading-[1.15] text-navy outline-none md:text-3xl lg:text-[2.15rem]"
              >
                {bookingPage.headline}
              </h1>
              <p className="mt-2 text-base text-muted md:text-lg">{bookingPage.supporting}</p>
              <p className="mt-2 text-sm text-muted">{bookingPage.appointmentDetails}</p>
              <p className="mt-3 inline-block rounded-sm bg-brass/10 px-3 py-1.5 text-sm text-navy/80">
                {bookingPage.demoNotice}
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <div className="mb-4 lg:hidden">
                <ConsultationSummary variant="compact" />
              </div>

              <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
                <div className="rounded-sm border border-border bg-surface px-4 py-5 md:px-6 md:py-6">
                  <ol className="mb-5 flex flex-wrap gap-1.5 border-b border-border pb-4">
                    {progressSteps.map((item, index) => {
                      const isActive = item.id === step
                      const isStepComplete = activeIndex > index
                      return (
                        <li key={item.id} className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={!isStepComplete}
                            onClick={() => {
                              if (isStepComplete) setStep(item.id as BookingStep)
                            }}
                            className={cn(
                              'rounded-sm px-2.5 py-1 text-sm transition-colors',
                              isActive
                                ? 'bg-navy text-ivory'
                                : isStepComplete
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
            </div>
          </>
        )}
      </div>

      {step !== 'complete' ? (
        <section
          className="border-t border-border/60 bg-surface/40"
          aria-labelledby="booking-reassure-heading"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-8 md:px-8 md:py-10">
            <h2
              id="booking-reassure-heading"
              className="font-serif text-xl text-navy md:text-2xl"
            >
              {bookingPage.reassurance.heading}
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-3 md:gap-8">
              {bookingPage.reassurance.items.map((item) => (
                <li key={item.question}>
                  <p className="font-serif text-base text-navy">{item.question}</p>
                  <p className="mt-1 text-sm text-muted">{item.answer}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/contact-us"
              className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              {bookingPage.reassurance.contactLinkLabel}
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  )
}
