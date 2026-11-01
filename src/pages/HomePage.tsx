import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Hero } from '@/components/sections/Hero'
import {
  homeConsultation,
  homeFeaturedStory,
  homePractice,
} from '@/content/home'
import { getPracticeArea } from '@/content/practiceAreas'
import { clientStories } from '@/content/results'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle()

  const featuredStory = clientStories.find((story) => story.id === homeFeaturedStory.storyId)

  return (
    <main id="main">
      <Hero />

      {/* 2. Practice-area guide */}
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

          <ul className="mt-12 grid grid-cols-1 gap-0 border-t border-border md:grid-cols-2">
            {homePractice.areaIds.map((areaId) => {
              const area = getPracticeArea(areaId)
              if (!area) return null
              return (
                <li key={area.id} className="border-b border-border md:odd:border-r">
                  <Link
                    to={`/practice-areas#${area.id}`}
                    className="group flex items-start justify-between gap-6 px-0 py-6 outline-none transition-colors md:px-6 md:py-7 md:first:pl-0 md:odd:pr-8 md:even:pl-8"
                  >
                    <div className="min-w-0 max-w-xl">
                      <p className="font-serif text-xl text-navy transition-colors group-hover:text-teal md:text-[1.35rem]">
                        {area.title}
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-muted">{area.preview}</p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-brass transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link
            to="/practice-areas"
            className="mt-10 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homePractice.linkLabel}
          </Link>
        </div>
      </section>

      {/* 3. One featured client story */}
      {featuredStory ? (
        <section
          className="border-b border-border/60 bg-surface/40"
          aria-labelledby="home-story-heading"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
            <h2
              id="home-story-heading"
              className="max-w-2xl font-serif text-3xl text-navy md:text-4xl"
            >
              {homeFeaturedStory.heading}
            </h2>

            <article className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-14 lg:gap-16">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-[#ebe6de]">
                <img
                  src={featuredStory.imageSrc}
                  alt={featuredStory.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="min-w-0 md:pt-2">
                <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                  {homeFeaturedStory.fictionalLabel}
                </p>
                <p className="mt-4 font-serif text-2xl text-navy md:text-[1.75rem]">
                  {featuredStory.name}
                </p>
                <p className="mt-1 text-base text-muted">{featuredStory.city}</p>
                <h3 className="mt-5 font-serif text-xl text-navy md:text-2xl">
                  {featuredStory.title}
                </h3>

                <dl className="mt-8 space-y-6 border-t border-border pt-7">
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-brass uppercase">
                      {homeFeaturedStory.startingConcernLabel}
                    </dt>
                    <dd className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {homeFeaturedStory.startingConcern}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-brass uppercase">
                      {homeFeaturedStory.discussedLabel}
                    </dt>
                    <dd className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {homeFeaturedStory.discussed}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-brass uppercase">
                      {homeFeaturedStory.clearerLabel}
                    </dt>
                    <dd className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {homeFeaturedStory.clearer}
                    </dd>
                  </div>
                </dl>

                <Link
                  to="/our-results"
                  className="mt-8 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  {homeFeaturedStory.linkLabel}
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {/* 4. First consultation + three practical questions */}
      <section
        className="border-b border-border/60"
        aria-labelledby="home-consultation-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-14 lg:gap-20">
            <div>
              <h2
                id="home-consultation-heading"
                className="font-serif text-3xl leading-[1.15] text-navy md:text-4xl"
              >
                {homeConsultation.heading}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                {homeConsultation.introduction}
              </p>
              <p className="mt-5 text-sm font-medium text-navy">{homeConsultation.feeNote}</p>
              <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted">
                {homeConsultation.overview.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brass"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  to="/what-to-expect"
                  className="text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  {homeConsultation.expectLinkLabel}
                </Link>
                <Link
                  to="/faq"
                  className="text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  {homeConsultation.faqLinkLabel}
                </Link>
              </div>
            </div>

            <div className="border-t border-border md:border-t-0 md:border-l md:pl-10 lg:pl-14">
              <Accordion type="single" collapsible defaultValue={homeConsultation.questions[0]?.id}>
                {homeConsultation.questions.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left text-base text-navy md:text-[1.05rem]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <ClosingConversion formIdPrefix="home-closing" />
    </main>
  )
}
