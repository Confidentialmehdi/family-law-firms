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
        {/* 1. Compact hero */}
        <header className="border-b border-border py-12 md:py-14">
          <p className="text-sm text-muted">{practicePage.eyebrow}</p>
          <PageHeading className="mt-2 text-3xl md:text-4xl">
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
        </header>

        {/* 2. Quick service navigation */}
        <nav
          className="border-b border-border py-8"
          aria-labelledby="practice-nav-heading"
        >
          <h2 id="practice-nav-heading" className="font-serif text-xl text-navy">
            {practicePage.navHeading}
          </h2>
          <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
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

        {/* 3. Six service explanations */}
        <div aria-label="Practice area details">
          {practiceAreas.map((area) => (
            <article
              key={area.id}
              id={area.id}
              className="scroll-mt-28 border-b border-border py-10 md:py-12"
            >
              <h2
                className={
                  area.id === 'divorce'
                    ? 'font-serif text-3xl text-navy'
                    : 'font-serif text-2xl text-navy'
                }
              >
                {area.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-muted">{area.description}</p>
              <p className="mt-8 text-sm font-medium text-navy">
                {practicePage.questionsHeading}
              </p>
              <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-base text-muted">
                {area.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* 4. Guidance for unsure visitors */}
        <section className="border-b border-border py-12" aria-labelledby="unsure-heading">
          <h2 id="unsure-heading" className="font-serif text-2xl text-navy">
            {practicePage.unsure.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{practicePage.unsure.copy}</p>
          <Link
            to="/what-to-expect"
            className="mt-5 inline-block text-base text-teal underline-offset-4 hover:underline"
          >
            {practicePage.unsure.linkLabel}
          </Link>
        </section>
      </div>

      {/* 5. Closing invitation */}
      <ClosingCta
        headline={practicePage.closing.headline}
        supporting={practicePage.closing.supporting}
        terms={practicePage.closing.terms}
      />
    </main>
  )
}
