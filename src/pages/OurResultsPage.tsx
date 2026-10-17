import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { useBooking } from '@/components/booking/BookingContext'
import { StoryCard } from '@/components/results/StoryCard'
import { Button } from '@/components/ui/button'
import { clientStories, resultsPage } from '@/content/results'
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

      {/* 4. Your situation is personal */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="personal-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
            {resultsPage.personal.label}
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] md:items-start md:gap-14 lg:gap-16">
            <h2
              id="personal-heading"
              className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.75rem] lg:text-[3rem]"
            >
              {resultsPage.personal.heading}
            </h2>

            <div>
              <div className="mb-6 h-px w-16 bg-brass" aria-hidden="true" />
              <p className="text-lg text-muted">{resultsPage.personal.copy}</p>
              <p className="mt-5 text-lg text-navy/85">{resultsPage.personal.followUp}</p>
              <Link
                to="/about-us"
                className="mt-8 inline-flex items-center gap-2 text-base text-teal underline-offset-4 hover:underline"
              >
                {resultsPage.personal.linkLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Start your conversation */}
      <section
        className="border-t border-border bg-ivory"
        aria-labelledby="closing-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-14 md:px-8 md:py-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {resultsPage.closing.label}
            </p>
            <h2
              id="closing-heading"
              className="mt-4 font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.75rem] lg:text-[3.25rem]"
            >
              {resultsPage.closing.headline}
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted">
              {resultsPage.closing.supporting}
            </p>
          </div>

          <div className="md:pb-1">
            <p className="text-base text-navy/80">{resultsPage.closing.terms}</p>
            <Button
              type="button"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              onClick={openBooking}
            >
              {site.ctaLabel}
            </Button>
            <p className="mt-3 text-sm text-muted">{resultsPage.closing.demoNote}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
