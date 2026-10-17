import { Link } from 'react-router-dom'

import { ImageFallback } from '@/components/ImageFallback'
import { StoryCard } from '@/components/results/StoryCard'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Hero } from '@/components/sections/Hero'
import { Button } from '@/components/ui/button'
import { attorney } from '@/content/attorney'
import {
  homeAppointment,
  homeConcerns,
  homeExperience,
  homeMeet,
  homePractice,
} from '@/content/home'
import { getPracticeArea } from '@/content/practiceAreas'
import { clientStories } from '@/content/results'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle()

  const featuredStories = homeExperience.storyIds
    .map((id) => clientStories.find((story) => story.id === id))
    .filter((story): story is (typeof clientStories)[number] => Boolean(story))

  return (
    <main id="main">
      <Hero />

      {/* 2. Practice areas */}
      <section className="border-b border-border/60" aria-labelledby="home-practice-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="home-practice-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              {homePractice.heading}
            </h2>
            <p className="mt-3 text-lg text-muted">{homePractice.introduction}</p>
          </div>

          <div className="mt-12 space-y-12">
            {homePractice.groups.map((group) => (
              <div key={group.id}>
                <h3 className="text-xs tracking-[0.14em] text-brass uppercase">
                  {group.label}
                </h3>
                <ul className="mt-5 divide-y divide-border border-y border-border">
                  {group.areaIds.map((areaId) => {
                    const area = getPracticeArea(areaId)
                    if (!area) return null
                    return (
                      <li
                        key={area.id}
                        className="grid gap-2 py-5 md:grid-cols-[minmax(12rem,0.4fr)_1fr] md:gap-8"
                      >
                        <p className="font-serif text-xl text-navy">{area.title}</p>
                        <p className="text-base text-muted md:pt-0.5">{area.preview}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/practice-areas"
            className="mt-10 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homePractice.linkLabel}
          </Link>
        </div>
      </section>

      {/* 3. Meet Robert */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-meet-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-14 md:px-8 md:py-20">
          <ImageFallback label="Portrait" className="w-full max-w-sm" />
          <div>
            <h2 id="home-meet-heading" className="font-serif text-3xl text-navy md:text-4xl">
              {homeMeet.heading}
            </h2>
            <p className="mt-3 font-serif text-xl text-navy/90">{attorney.name}</p>
            <p className="mt-1 text-base text-muted">
              {attorney.role}, {attorney.firm}
            </p>
            <p className="mt-5 max-w-xl text-lg text-muted">{homeMeet.body}</p>
            <Link
              to="/about-us"
              className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              {homeMeet.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Results preview */}
      <section className="border-b border-border/60" aria-labelledby="home-experience-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="home-experience-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              {homeExperience.heading}
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
            {featuredStories.map((story) => (
              <li key={story.id} className="flex">
                <StoryCard story={story} variant="compact" />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/our-results">{homeExperience.buttonLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. First appointment — editorial timeline */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-appointment-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-16 lg:gap-20">
            <div className="order-1 md:order-2 md:pt-1">
              <h2
                id="home-appointment-heading"
                className="font-serif text-3xl leading-[1.15] text-navy md:text-4xl lg:text-[2.75rem]"
              >
                {homeAppointment.heading}
              </h2>
              <p className="mt-4 text-base text-muted">{homeAppointment.feeNote}</p>
              <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
              <Link
                to="/what-to-expect"
                className="mt-8 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
              >
                {homeAppointment.linkLabel}
              </Link>
            </div>

            <ol className="order-2 relative md:order-1">
              <div
                className="absolute top-2 bottom-2 left-[0.4375rem] w-px bg-brass/45"
                aria-hidden="true"
              />
              {homeAppointment.steps.map((item, index) => (
                <li
                  key={item.step}
                  className="animate-fade-up relative flex gap-5 pb-10 last:pb-0"
                  style={{ animationDelay: `${80 + index * 100}ms` }}
                >
                  <span
                    className="relative z-10 mt-1.5 size-3.5 shrink-0 rounded-full border-[1.5px] border-brass bg-ivory"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-serif text-xl text-navy md:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6. Booking reassurances */}
      <section className="border-b border-border/60" aria-labelledby="home-concerns-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <h2
            id="home-concerns-heading"
            className="max-w-2xl font-serif text-3xl text-navy md:text-4xl"
          >
            {homeConcerns.heading}
          </h2>

          <ul className="mt-12 max-w-2xl space-y-0">
            {homeConcerns.items.map((item, index) => (
              <li
                key={item.id}
                className="animate-fade-up border-t border-brass/25 py-8 first:border-t-0 first:pt-0 last:pb-0"
                style={{ animationDelay: `${60 + index * 90}ms` }}
              >
                <div className="flex gap-4">
                  <span
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brass"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-serif text-xl leading-snug text-navy md:text-[1.35rem]">
                      {item.statement}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/faq"
            className="mt-10 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homeConcerns.linkLabel}
          </Link>
        </div>
      </section>

      <ClosingConversion formIdPrefix="home-closing" />
    </main>
  )
}
