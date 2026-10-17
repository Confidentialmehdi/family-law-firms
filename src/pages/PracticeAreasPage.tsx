import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { useBooking } from '@/components/booking/BookingContext'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { Button } from '@/components/ui/button'
import { practiceAreas, practicePage } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function PracticeAreasPage() {
  useDocumentTitle('Practice Areas')
  const { openBooking } = useBooking()

  return (
    <main id="main">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Hero + jump links in one band */}
        <header className="border-b border-border pt-12 pb-10 md:pt-14 md:pb-12">
          <p className="text-sm text-muted">{practicePage.eyebrow}</p>
          <PageHeading className="mt-2 max-w-3xl text-3xl md:text-4xl">
            {practicePage.headline}
          </PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {practicePage.supporting}
          </p>
          <div className="mt-6">
            <Button type="button" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
          </div>

          <nav className="mt-10" aria-label="Practice areas on this page">
            <p className="sr-only">{practicePage.navHeading}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className="text-base text-teal underline-offset-4 hover:underline"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Service rows: title left, body right */}
        <div aria-label="Practice area details">
          {practiceAreas.map((area, index) => (
            <article
              key={area.id}
              id={area.id}
              className={
                index === 0
                  ? 'scroll-mt-28 border-b border-border pt-14 pb-10 md:pt-16 md:pb-12'
                  : 'scroll-mt-28 border-b border-border py-10 md:py-12'
              }
            >
              <div className="grid gap-4 md:grid-cols-[minmax(12rem,0.34fr)_minmax(0,1fr)] md:gap-12">
                <h2 className="font-serif text-2xl text-navy md:text-[1.65rem]">
                  {area.title}
                </h2>
                <div>
                  <p className="max-w-prose text-lg text-muted">{area.description}</p>
                  <ul className="mt-5 max-w-prose space-y-2 text-base text-navy/80">
                    {area.questions.map((question) => (
                      <li key={question} className="pl-0">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Unsure — same rhythm as a service row */}
        <section
          className="border-b border-border py-10 md:py-12"
          aria-labelledby="unsure-heading"
        >
          <div className="grid gap-4 md:grid-cols-[minmax(12rem,0.34fr)_minmax(0,1fr)] md:gap-12">
            <h2 id="unsure-heading" className="font-serif text-2xl text-navy md:text-[1.65rem]">
              {practicePage.unsure.heading}
            </h2>
            <div>
              <p className="max-w-prose text-lg text-muted">{practicePage.unsure.copy}</p>
              <Link
                to="/what-to-expect"
                className="mt-5 inline-block text-base text-teal underline-offset-4 hover:underline"
              >
                {practicePage.unsure.linkLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ClosingCta
        headline={practicePage.closing.headline}
        supporting={practicePage.closing.supporting}
        terms={practicePage.closing.terms}
      />
    </main>
  )
}
