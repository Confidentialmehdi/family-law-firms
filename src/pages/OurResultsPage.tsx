import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { StoryCard } from '@/components/results/StoryCard'
import { Button } from '@/components/ui/button'
import { clientStories, resultsPage } from '@/content/results'
import { site } from '@/content/site'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

/** Editorial stories mark — layered pages suggesting illustrative conversations. */
function HeroStoriesMark() {
  return (
    <figure className="relative flex h-full w-full flex-col">
      <div className="min-h-0 flex-1">
        <svg
          viewBox="0 0 320 340"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="78"
            y="48"
            width="150"
            height="200"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-ivory/30"
          />
          <rect
            x="92"
            y="62"
            width="150"
            height="200"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.35"
            className="text-brass/55"
          />
          <rect
            x="106"
            y="76"
            width="150"
            height="200"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brass"
          />
          <path
            d="M128 118h106M128 142h96M128 166h112M128 190h88"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-ivory/45"
          />
          <circle
            cx="160"
            cy="248"
            r="10"
            stroke="currentColor"
            strokeWidth="1.35"
            className="text-brass/70"
          />
          <path
            d="M154 248h12M160 242v12"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-ivory/50"
          />
          <path
            d="M96 300h128"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brass/60"
          />
        </svg>
      </div>
    </figure>
  )
}

export function OurResultsPage() {
  useDocumentTitle('Our Results')

  return (
    <main id="main">
      {/* 1. Hero — matches Practice Areas opener */}
      <section
        className="relative overflow-hidden bg-navy text-ivory"
        aria-labelledby="page-heading"
      >
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:items-stretch md:gap-10 md:px-8 md:py-16 lg:gap-14 lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {resultsPage.eyebrow}
            </p>
            <PageHeading className="mt-5 text-[2.25rem] leading-[1.1] text-ivory md:text-[3.5rem] lg:text-[4.25rem]">
              {resultsPage.headline}
            </PageHeading>
            <p className="mt-6 max-w-md text-lg text-ivory/70">
              {resultsPage.supporting}
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/book-consultation">{site.ctaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden h-full min-h-0 md:block">
            <HeroStoriesMark />
          </div>
        </div>

        <div
          className="mx-auto max-w-[1200px] px-5 pb-6 md:hidden"
          aria-hidden="true"
        >
          <div className="h-px w-24 bg-brass/50" />
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
