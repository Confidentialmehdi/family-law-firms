import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { StoryCard } from '@/components/results/StoryCard'
import { clientStories, resultsPage } from '@/content/results'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function OurResultsPage() {
  useDocumentTitle('Our Results')

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

      {/* Personal reflection */}

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

      <ClosingConversion formIdPrefix="results-closing" />
    </main>
  )
}
