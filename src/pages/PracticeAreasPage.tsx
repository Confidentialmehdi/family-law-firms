import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { practiceAreas, practicePage } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

function HeroArtwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 480 420"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="48"
        y="36"
        width="280"
        height="320"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brass/35"
      />
      <rect
        x="120"
        y="72"
        width="280"
        height="280"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ivory/20"
      />
      <line
        x1="48"
        y1="200"
        x2="400"
        y2="200"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brass/25"
      />
      <line
        x1="220"
        y1="36"
        x2="220"
        y2="352"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ivory/15"
      />
      <rect
        x="300"
        y="140"
        width="100"
        height="100"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brass/40"
      />
    </svg>
  )
}

function ServiceTopics({ questions }: { questions: readonly string[] }) {
  return (
    <div>
      <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
        Questions to explore
      </p>
      <ul className="mt-4 divide-y divide-border/80 border-y border-border/80">
        {questions.map((question) => (
          <li key={question} className="py-3 text-base text-navy/85">
            {question}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PracticeAreasPage() {
  useDocumentTitle('Practice Areas')
  const { openBooking } = useBooking()

  const divorce = practiceAreas[0]
  const remaining = practiceAreas.slice(1)

  return (
    <main id="main">
      {/* 1. Hero — navy opening */}
      <section
        className="relative overflow-hidden bg-navy text-ivory"
        aria-labelledby="page-heading"
      >
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:items-end md:gap-8 md:px-8 md:py-16 lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              Whitfield Law Group / Practice Areas
            </p>
            <PageHeading className="mt-5 text-[2.25rem] leading-[1.1] text-ivory md:text-[3.5rem] lg:text-[4.25rem]">
              Family law guidance
              <br className="hidden sm:block" /> for the decisions ahead.
            </PageHeading>
            <p className="mt-6 max-w-md text-lg text-ivory/70">
              {practicePage.supporting}
            </p>
            <div className="mt-8">
              <Button type="button" size="lg" onClick={openBooking}>
                {site.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="relative hidden h-64 md:block lg:h-80">
            <HeroArtwork />
          </div>
        </div>

        {/* Quiet mobile rule instead of full artwork */}
        <div
          className="mx-auto max-w-[1200px] px-5 pb-6 md:hidden"
          aria-hidden="true"
        >
          <div className="h-px w-24 bg-brass/50" />
        </div>
      </section>

      {/* 2. Service index */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="practice-nav-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-14">
          <h2
            id="practice-nav-heading"
            className="font-serif text-2xl text-navy md:text-3xl"
          >
            {practicePage.navHeading}
          </h2>
          <nav aria-label="Practice areas on this page" className="mt-8">
            <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area, index) => (
                <li
                  key={area.id}
                  className="border-t border-border sm:border-r sm:odd:border-l-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <a
                    href={`#${area.id}`}
                    className="group flex min-h-14 items-baseline justify-between gap-4 px-0 py-4 pr-3 transition-colors hover:bg-surface/80 focus-visible:bg-surface sm:px-4"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-brass tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-lg text-navy group-hover:text-teal md:text-xl">
                        {area.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-brass/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 3. Featured Divorce */}
      {divorce ? (
        <section
          id={divorce.id}
          className="scroll-mt-28 border-b border-border bg-ivory"
          aria-labelledby={`${divorce.id}-heading`}
        >
          <div className="relative mx-auto max-w-[1200px] overflow-hidden px-5 py-16 md:px-8 md:py-20">
            <span
              className="pointer-events-none absolute top-8 right-4 select-none font-serif text-[7rem] leading-none text-navy/[0.04] md:top-6 md:right-8 md:text-[10rem]"
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative grid gap-10 lg:grid-cols-[7rem_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
              <div>
                <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                  01 / Divorce
                </p>
              </div>

              <div>
                <h2
                  id={`${divorce.id}-heading`}
                  className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem] lg:text-[2.75rem]"
                >
                  {divorce.title}
                </h2>
                <div className="mt-5 h-px w-16 bg-brass" aria-hidden="true" />
                <p className="mt-6 max-w-prose text-lg text-muted">{divorce.description}</p>
              </div>

              <aside className="border border-border bg-[#f0ebe3] px-5 py-6 md:px-6">
                <ServiceTopics questions={divorce.questions} />
              </aside>
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. Remaining services */}
      {remaining.map((area, index) => {
        const number = String(index + 2).padStart(2, '0')
        const mirrored = index % 2 === 1
        const tinted = index === 1

        return (
          <section
            key={area.id}
            id={area.id}
            className={cn(
              'scroll-mt-28 border-b border-border',
              tinted ? 'bg-[#f0ebe3]/55' : 'bg-ivory',
            )}
            aria-labelledby={`${area.id}-heading`}
          >
            <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                {number} / {area.title}
              </p>

              {mirrored ? (
                /* Wider heading row, then balanced columns */
                <div className="mt-4">
                  <h2
                    id={`${area.id}-heading`}
                    className="max-w-3xl font-serif text-[1.85rem] leading-[1.15] text-navy md:text-[2.25rem] lg:text-[2.5rem]"
                  >
                    {area.title}
                  </h2>
                  <div className="mt-5 h-px w-12 bg-brass/70" aria-hidden="true" />
                  <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
                    <p className="text-lg text-muted">{area.description}</p>
                    <ServiceTopics questions={area.questions} />
                  </div>
                </div>
              ) : (
                /* Heading + description left; topics right */
                <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
                  <div>
                    <h2
                      id={`${area.id}-heading`}
                      className="font-serif text-[1.85rem] leading-[1.15] text-navy md:text-[2.25rem] lg:text-[2.5rem]"
                    >
                      {area.title}
                    </h2>
                    <div className="mt-5 h-px w-12 bg-brass/70" aria-hidden="true" />
                    <p className="mt-6 max-w-prose text-lg text-muted">
                      {area.description}
                    </p>
                  </div>
                  <ServiceTopics questions={area.questions} />
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* 5. Unsure — calm pause */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="unsure-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2
              id="unsure-heading"
              className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
            >
              {practicePage.unsure.heading}
            </h2>
            <div className="mt-6 h-px w-20 bg-brass" aria-hidden="true" />
            <p className="mt-6 text-lg text-muted">{practicePage.unsure.copy}</p>
            <Link
              to="/what-to-expect"
              className="mt-8 inline-flex items-center gap-2 text-base text-teal underline-offset-4 hover:underline"
            >
              {practicePage.unsure.linkLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Closing — navy finish */}
      <section
        className="bg-navy text-ivory"
        aria-labelledby="closing-heading"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="closing-heading"
              className="font-serif text-[2rem] leading-[1.15] text-ivory md:text-[2.75rem] lg:text-[3.25rem]"
            >
              {practicePage.closing.headline}
            </h2>
            <p className="mt-5 max-w-md text-lg text-ivory/70">
              {practicePage.closing.supporting}
            </p>
            <p className="mt-4 text-sm text-ivory/55">{practicePage.closing.terms}</p>
          </div>
          <div className="shrink-0">
            <Button type="button" size="lg" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
