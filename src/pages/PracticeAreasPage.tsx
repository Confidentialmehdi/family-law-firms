import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { useBooking } from '@/components/booking/BookingContext'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { Button } from '@/components/ui/button'
import { practiceAreas, practicePage } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function PracticeAreasPage() {
  useDocumentTitle('Practice Areas')
  const { openBooking } = useBooking()

  return (
    <main id="main">
      {/* 1. Compact hero */}
      <section
        className="border-b border-border/60"
        aria-labelledby="page-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-14">
          <p className="text-sm tracking-[0.14em] text-brass uppercase">
            {practicePage.eyebrow}
          </p>
          <PageHeading className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem]">
            {practicePage.headline}
          </PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {practicePage.supporting}
          </p>
          <div className="mt-6">
            <Button type="button" size="lg" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Quick service navigation */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="practice-nav-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-12">
          <h2
            id="practice-nav-heading"
            className="font-serif text-2xl text-navy md:text-3xl"
          >
            {practicePage.navHeading}
          </h2>
          <nav aria-label="Practice areas on this page" className="mt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className="text-base font-medium text-navy/80 underline-offset-4 transition-colors hover:text-teal hover:underline focus-visible:text-teal"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 3. Six service explanations */}
      <section className="border-b border-border/60" aria-label="Practice area details">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
          <ul className="space-y-0">
            {practiceAreas.map((area, index) => {
              const isDivorce = area.id === 'divorce'
              return (
                <li
                  key={area.id}
                  id={area.id}
                  className={cn(
                    'scroll-mt-28 border-t border-border py-10 md:py-12',
                    isDivorce && 'border-t-brass/50 bg-surface/30 -mx-5 px-5 md:-mx-8 md:px-8',
                    index === practiceAreas.length - 1 && 'border-b border-border',
                  )}
                >
                  <h2
                    className={cn(
                      'font-serif text-navy',
                      isDivorce ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl',
                    )}
                  >
                    {area.title}
                  </h2>
                  <p
                    className={cn(
                      'mt-4 max-w-3xl text-muted',
                      isDivorce ? 'text-lg' : 'text-base md:text-lg',
                    )}
                  >
                    {area.description}
                  </p>
                  <h3 className="mt-8 text-sm font-medium tracking-wide text-brass">
                    {practicePage.questionsHeading}
                  </h3>
                  <ul className="mt-3 max-w-2xl space-y-2">
                    {area.questions.map((question) => (
                      <li key={question} className="flex gap-3 text-base text-navy/85">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brass/70"
                          aria-hidden="true"
                        />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 4. Guidance for unsure visitors */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="unsure-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-14">
          <h2 id="unsure-heading" className="font-serif text-2xl text-navy md:text-3xl">
            {practicePage.unsure.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{practicePage.unsure.copy}</p>
          <Link
            to="/what-to-expect"
            className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {practicePage.unsure.linkLabel}
          </Link>
        </div>
      </section>

      {/* 5. Closing invitation */}
      <ClosingCta
        variant="invitation"
        headline={practicePage.closing.headline}
        supporting={practicePage.closing.supporting}
        terms={practicePage.closing.terms}
      />
    </main>
  )
}
