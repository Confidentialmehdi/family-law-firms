import { ArrowRight } from 'lucide-react'

import { PageHeading } from '@/components/PageHeading'
import { useBooking } from '@/components/booking/BookingContext'
import { StoryCard } from '@/components/results/StoryCard'
import { Button } from '@/components/ui/button'
import {
  clientStories,
  resultTestimonials,
  resultsPage,
} from '@/content/results'
import { site } from '@/content/site'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function OurResultsPage() {
  useDocumentTitle('Our Results')
  const { openBooking } = useBooking()

  return (
    <main id="main">
      {/* 1. Hero */}
      <section className="bg-navy text-ivory" aria-labelledby="page-heading">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-14 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] md:items-end md:gap-12 md:px-8 md:py-16">
          <div>
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {resultsPage.eyebrow}
            </p>
            <PageHeading className="mt-4 text-[2.25rem] leading-[1.1] text-ivory md:text-[3.25rem] lg:text-[3.75rem]">
              {resultsPage.headline}
            </PageHeading>
          </div>
          <div>
            <div className="mb-5 h-px w-14 bg-brass" aria-hidden="true" />
            <p className="max-w-sm text-lg text-ivory/70">{resultsPage.supporting}</p>
            <p className="mt-4 text-sm text-ivory/50">{resultsPage.disclosure}</p>
          </div>
        </div>
      </section>

      {/* 2. Eight story cards */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="stories-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[960px]">
            <h2
              id="stories-heading"
              className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
            >
              {resultsPage.stories.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {resultsPage.stories.introduction}
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8">
              {clientStories.map((story) => (
                <li key={story.id} className="flex">
                  <StoryCard story={story} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Before and after */}
      <section
        className="border-b border-border bg-[#f0ebe3]/40"
        aria-labelledby="before-after-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="before-after-heading"
              className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
            >
              {resultsPage.beforeAfter.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">
              {resultsPage.beforeAfter.supporting}
            </p>
            <p className="mt-2 text-sm text-muted">{resultsPage.beforeAfter.label}</p>
          </div>

          <ul className="mt-12 max-w-4xl divide-y divide-border border-y border-border">
            {resultsPage.beforeAfter.items.map((item) => (
              <li
                key={item.before}
                className="grid gap-4 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10"
              >
                <div>
                  <p className="text-[0.65rem] tracking-[0.14em] text-brass uppercase">
                    Before
                  </p>
                  <p className="mt-2 text-lg text-muted">{item.before}</p>
                </div>
                <ArrowRight
                  className="hidden size-5 text-brass md:block"
                  aria-hidden="true"
                />
                <div className="md:text-right">
                  <p className="text-[0.65rem] tracking-[0.14em] text-brass uppercase">
                    After
                  </p>
                  <p className="mt-2 font-serif text-xl text-navy">{item.after}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Client reflections — navy editorial */}
      <section
        className="bg-navy text-ivory"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[minmax(14rem,0.38fr)_minmax(0,1fr)] md:gap-16 md:px-8 md:py-20 lg:gap-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {resultsPage.testimonials.label}
            </p>
            <h2
              id="testimonials-heading"
              className="mt-4 font-serif text-[2rem] leading-[1.15] text-ivory md:text-[2.5rem]"
            >
              {resultsPage.testimonials.heading}
            </h2>
            <p className="mt-4 text-base text-ivory/65 md:text-lg">
              {resultsPage.testimonials.supporting}
            </p>
            <p className="mt-4 text-sm text-ivory/45">
              {resultsPage.testimonials.disclaimer}
            </p>
          </div>

          <ul className="divide-y divide-ivory/15">
            {resultTestimonials.map((item) => (
              <li key={item.id} className="py-8 first:pt-0 last:pb-0 md:py-10">
                <blockquote>
                  <p className="font-serif text-xl leading-snug text-ivory md:text-[1.65rem]">
                    “{item.quote}”
                  </p>
                  <footer className="mt-4 text-sm text-ivory/50">
                    {item.attribution}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Appointment section — ivory + navy panel */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="closing-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-14 md:px-8 md:py-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {resultsPage.closing.label}
            </p>
            <h2
              id="closing-heading"
              className="mt-4 font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.75rem]"
            >
              {resultsPage.closing.headline}
            </h2>
            <div className="mt-5 h-px w-16 bg-brass" aria-hidden="true" />
            <p className="mt-5 max-w-md text-lg text-muted">
              {resultsPage.closing.supporting}
            </p>
          </div>

          <aside className="rounded-sm bg-navy px-6 py-7 text-ivory md:px-8 md:py-8">
            <h3 className="font-serif text-xl text-ivory md:text-2xl">
              {resultsPage.closing.panelHeading}
            </h3>

            <dl className="mt-6 divide-y divide-ivory/15 border-y border-ivory/15">
              {resultsPage.closing.details.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="text-sm text-ivory/55">{row.label}</dt>
                  <dd className="text-right text-base text-ivory">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm text-ivory/65">{resultsPage.closing.note}</p>

            <Button
              type="button"
              size="lg"
              className="mt-6 w-full md:w-auto"
              onClick={openBooking}
            >
              {site.ctaLabel}
            </Button>
            <p className="mt-3 text-xs text-ivory/45">{resultsPage.closing.demoNote}</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
