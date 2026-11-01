import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  requestReceivedPage,
  type RequestReceivedState,
} from '@/content/requestReceived'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function RequestReceivedPage() {
  useDocumentTitle(requestReceivedPage.title)
  const location = useLocation()
  const state = (location.state ?? {}) as RequestReceivedState
  const firstName = state.firstName?.trim()

  return (
    <main id="main" className="flex flex-1 flex-col bg-ivory">
      <section
        className="relative flex min-h-[min(72vh,40rem)] flex-1 flex-col justify-center overflow-hidden bg-navy text-ivory"
        aria-labelledby="page-heading"
        role="status"
        aria-live="polite"
      >
        <img
          src="/images/hero/new-york.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-[0.28]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/88 to-navy"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgb(165_139_115/0.22),transparent_65%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[880px] flex-col items-center px-5 py-20 text-center md:px-8 md:py-28">
          <p className="animate-fade-in text-[0.7rem] tracking-[0.2em] text-brass uppercase">
            {requestReceivedPage.eyebrow}
          </p>
          <div
            className="animate-fade-up mt-6 h-px w-14 bg-brass"
            aria-hidden="true"
          />
          <p
            className="animate-fade-up mt-8 text-[0.7rem] tracking-[0.18em] text-brass-muted uppercase"
            style={{ animationDelay: '80ms' }}
          >
            {requestReceivedPage.statusLabel}
          </p>
          <h1
            id="page-heading"
            tabIndex={-1}
            className="animate-fade-up mt-4 max-w-[18ch] font-serif text-[2.5rem] leading-[1.08] text-balance text-ivory outline-none md:text-[3.5rem] lg:text-[4rem]"
            style={{ animationDelay: '120ms' }}
          >
            {firstName
              ? requestReceivedPage.headingWithName(firstName)
              : requestReceivedPage.heading}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg text-balance text-ivory/72 md:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            {requestReceivedPage.supporting}
          </p>
          <p
            className="animate-fade-up mt-3 text-sm text-ivory/50"
            style={{ animationDelay: '220ms' }}
          >
            {requestReceivedPage.followUpNote}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: '280ms' }}
          >
            <Button asChild size="lg">
              <Link to="/book-consultation">{requestReceivedPage.bookCtaLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ivory/25 bg-transparent text-ivory hover:border-ivory/45 hover:bg-ivory/5"
            >
              <Link to="/">{requestReceivedPage.homeLabel}</Link>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-10 text-xs text-ivory/40"
            style={{ animationDelay: '320ms' }}
          >
            {requestReceivedPage.demoNotice}
          </p>
        </div>
      </section>

      <div className="texture-paper border-b border-border/60">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <section
            className="mx-auto max-w-3xl"
            aria-labelledby="request-next-heading"
          >
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {requestReceivedPage.nextEyebrow}
            </p>
            <h2
              id="request-next-heading"
              className="mt-4 font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
            >
              {requestReceivedPage.nextHeading}
            </h2>
            <ol className="mt-10 space-y-10">
              {requestReceivedPage.nextSteps.map((step, index) => (
                <li key={step.title} className="flex gap-5 md:gap-7">
                  <span
                    className="font-serif text-4xl leading-none text-brass/40 md:text-5xl"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-serif text-xl text-navy md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-base text-muted md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  )
}
