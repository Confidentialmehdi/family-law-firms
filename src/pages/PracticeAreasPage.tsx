import {
  ArrowUpRight,
  FilePenLine,
  Handshake,
  HeartHandshake,
  Home,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Button } from '@/components/ui/button'
import { getPracticeArea, practiceAreas, practicePage } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

const practiceIcons: Record<string, LucideIcon> = {
  divorce: Scale,
  custody: Users,
  'child-support': HeartHandshake,
  'spousal-support': Handshake,
  property: Home,
  prenup: FilePenLine,
}

/** Editorial scales mark — signals measured family-law guidance in the hero. */
function HeroScalesMark() {
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
        {/* Beam */}
        <path
          d="M40 118h240"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brass"
        />
        {/* Fulcrum stem */}
        <path
          d="M160 68v170"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brass/80"
        />
        {/* Crown / pivot */}
        <circle
          cx="160"
          cy="118"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brass"
        />
        <path
          d="M148 68h24l-4 18h-16l-4-18z"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-ivory/55"
        />
        {/* Left arm */}
        <path
          d="M40 118l-18 78"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-ivory/45"
        />
        {/* Right arm */}
        <path
          d="M280 118l18 78"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-ivory/45"
        />
        {/* Left pan */}
        <path
          d="M8 196h48l-8 28H16l-8-28z"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-brass"
        />
        <path
          d="M22 196v-14M32 196v-10M42 196v-14"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ivory/35"
        />
        {/* Right pan */}
        <path
          d="M264 196h48l-8 28h-32l-8-28z"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-brass"
        />
        <path
          d="M278 196v-14M288 196v-10M298 196v-14"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ivory/35"
        />
        {/* Base */}
        <path
          d="M118 238h84"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brass/70"
        />
        <path
          d="M128 238l-10 36h84l-10-36"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-ivory/40"
        />
        <path
          d="M96 274h128"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brass"
        />
        {/* Quiet home mark under the base — family context */}
        <path
          d="M148 300l12-10 12 10v18h-8v-10h-8v10h-8v-18z"
          stroke="currentColor"
          strokeWidth="1.15"
          className="text-brass/55"
        />
        </svg>
      </div>
    </figure>
  )
}

function ServiceTopics({ questions }: { questions: readonly string[] }) {
  return (
    <div className="flex h-full flex-col">
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
      <p className="mt-4 text-sm text-muted">{practicePage.questionsNote}</p>
    </div>
  )
}

function ServiceSection({
  area,
  index,
}: {
  area: (typeof practiceAreas)[number]
  index: number
}) {
  const tinted = index % 2 === 1
  const Icon = practiceIcons[area.id] ?? Scale
  const related = area.relatedIds
    .map((id) => getPracticeArea(id))
    .filter((item): item is (typeof practiceAreas)[number] => Boolean(item))

  return (
    <article
      id={area.id}
      className={cn(
        'scroll-mt-28',
        index > 0 && 'border-t border-border',
        tinted ? 'bg-[#f0ebe3]/40' : 'bg-ivory',
      )}
      aria-labelledby={`${area.id}-heading`}
    >
      <div
        className={cn(
          'mx-auto max-w-[1200px] px-5 md:px-8',
          index === 0 ? 'pb-16 pt-10 md:pb-20 md:pt-12' : 'py-16 md:py-20',
        )}
      >
        <Icon
          className="size-6 text-brass md:size-7"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <h2
          id={`${area.id}-heading`}
          className="mt-4 font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem] lg:text-[2.75rem]"
        >
          {area.title}
        </h2>
        <div className="mt-5 h-px w-16 bg-brass" aria-hidden="true" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12">
          <div>
            <p className="max-w-prose text-lg text-muted">{area.description}</p>

            <h3 className="mt-8 text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {practicePage.oftenInvolvesLabel}
            </h3>
            <ul className="mt-3 max-w-prose space-y-2.5">
              {area.oftenInvolves.map((item) => (
                <li key={item} className="flex gap-3 text-base text-navy/85">
                  <span
                    className="mt-2.5 h-px w-3 shrink-0 bg-brass/70"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-l border-brass pl-4">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                {practicePage.approachLabel}
              </p>
              <p className="mt-2 font-serif text-xl leading-snug text-navy">
                {area.approachLine}
              </p>
            </div>
          </div>

          <aside className="border border-border bg-[#f0ebe3] px-5 py-6 md:px-6 md:py-7">
            <ServiceTopics questions={area.questions} />
          </aside>
        </div>

        {related.length > 0 ? (
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {practicePage.relatedLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {related.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-base text-teal underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export function PracticeAreasPage() {
  useDocumentTitle('Practice Areas')

  return (
    <main id="main">
      {/* 1. Hero — navy opening */}
      <section
        className="relative overflow-hidden bg-navy text-ivory"
        aria-labelledby="page-heading"
      >
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:items-stretch md:gap-10 md:px-8 md:py-16 lg:gap-14 lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {practicePage.eyebrow}
            </p>
            <PageHeading className="mt-5 text-[2.25rem] leading-[1.1] text-ivory md:text-[3.5rem] lg:text-[4.25rem]">
              {practicePage.headline}
            </PageHeading>
            <p className="mt-6 max-w-md text-lg text-ivory/70">
              {practicePage.supporting}
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/book-consultation">{site.ctaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden h-full min-h-0 md:block">
            <HeroScalesMark />
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

      {/* 2. Practice areas — index header + detail articles */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="practice-nav-heading"
      >
        <header className="mx-auto max-w-[1200px] px-5 pt-12 pb-2 md:px-8 md:pt-14">
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
        </header>

        {practiceAreas.map((area, index) => (
          <ServiceSection key={area.id} area={area} index={index} />
        ))}
      </section>

      {/* Unsure — calm pause */}
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

      <ClosingConversion formIdPrefix="practice-closing" />
    </main>
  )
}
