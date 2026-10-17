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

  const featured =
    resultTestimonials.find((item) => item.featured) ?? resultTestimonials[0]
  const supporting = resultTestimonials.filter((item) => item.id !== featured?.id)

  return (
    <main id="main">
      {/* 1. Hero */}
      <section
        className="bg-navy text-ivory"
        aria-labelledby="page-heading"
      >
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

      {/* 2. Eight story cards — 2 columns */}
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

      {/* 4. Testimonials */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <h2
            id="testimonials-heading"
            className="max-w-2xl font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
          >
            {resultsPage.testimonials.heading}
          </h2>
          <p className="mt-3 text-sm text-muted">{site.fictionalLabel}</p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-16">
            {featured ? (
              <blockquote className="border-l-2 border-brass pl-6">
                <p className="font-serif text-2xl leading-snug text-navy md:text-[2rem] lg:text-[2.25rem]">
                  “{featured.quote}”
                </p>
                <footer className="mt-6 text-sm text-muted">{featured.attribution}</footer>
              </blockquote>
            ) : null}

            <ul className="flex flex-col justify-center gap-10">
              {supporting.map((item) => (
                <li key={item.id}>
                  <blockquote className="border-l border-border pl-5">
                    <p className="font-serif text-xl leading-snug text-navy">
                      “{item.quote}”
                    </p>
                    <footer className="mt-4 text-sm text-muted">{item.attribution}</footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section
        className="border-b border-brass/30 bg-navy text-ivory"
        aria-labelledby="closing-heading"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="closing-heading"
              className="font-serif text-[2rem] leading-[1.15] text-ivory md:text-[2.75rem] lg:text-[3.25rem]"
            >
              {resultsPage.closing.headline}
            </h2>
            <p className="mt-5 max-w-md text-lg text-ivory/70">
              {resultsPage.closing.supporting}
            </p>
            <p className="mt-4 text-sm text-ivory/55">{resultsPage.closing.terms}</p>
          </div>
          <div className="shrink-0">
            <Button type="button" size="lg" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
          </div>
        </div>
      </section>

      <div className="h-6 bg-ivory md:h-8" aria-hidden="true" />
    </main>
  )
}
