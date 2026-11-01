import { Link } from 'react-router-dom'

import { HomePracticeSection } from '@/components/home/HomePracticeSection'
import { ImageFallback } from '@/components/ImageFallback'
import { StoryClientIdentity } from '@/components/results/VerifiedClientName'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Hero } from '@/components/sections/Hero'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { attorney } from '@/content/attorney'
import {
  homeConsultation,
  homeConcerns,
  homeExperience,
  homeMeet,
} from '@/content/home'
import { faqItems } from '@/content/faq'
import { clientStories } from '@/content/results'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle()

  const featuredStories = homeExperience.stories.flatMap((item) => {
    const story = clientStories.find((entry) => entry.id === item.id)
    return story ? [{ ...story, outcome: item.outcome }] : []
  })

  return (
    <main id="main">
      <Hero />

      <HomePracticeSection />

      {/* 3. Meet Robert */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-meet-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-14 md:px-8 md:py-20">
          <ImageFallback
            src={attorney.imageSrc}
            alt={attorney.imageAlt}
            className="w-full max-w-sm border border-border"
          />
          <div>
            <h2 id="home-meet-heading" className="font-serif text-3xl text-navy md:text-4xl">
              {homeMeet.heading}
            </h2>
            <p className="mt-3 font-serif text-xl text-navy/90">{attorney.name}</p>
            <p className="mt-1 text-base text-muted">
              {attorney.role}, {attorney.firm}
            </p>
            <p className="mt-5 max-w-xl text-lg text-muted">{homeMeet.body}</p>
            <ul className="mt-8 max-w-xl space-y-5 border-t border-border pt-6">
              {homeMeet.commitments.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="mt-2 h-px w-6 shrink-0 bg-brass"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-lg text-navy">{item.title}</p>
                    <p className="mt-1 text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="sm" className="mt-8">
              <Link to="/about-us">{homeMeet.linkLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Results preview — outcome-led editorial list */}
      <section className="border-b border-border/60" aria-labelledby="home-experience-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-16 lg:gap-20">
            <div className="md:sticky md:top-28">
              <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
                {homeExperience.eyebrow}
              </p>
              <h2
                id="home-experience-heading"
                className="mt-4 font-serif text-3xl leading-[1.15] text-navy md:text-4xl lg:text-[2.75rem]"
              >
                {homeExperience.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                {homeExperience.supporting}
              </p>
              <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
              <Button asChild variant="outline" size="sm" className="mt-8">
                <Link to="/our-results">{homeExperience.buttonLabel}</Link>
              </Button>
            </div>

            <ul className="border-t border-border">
              {featuredStories.map((story) => (
                <li key={story.id} className="border-b border-border py-6 md:py-7">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e8e3db]"
                      aria-hidden="true"
                    >
                      <img
                        src={story.imageSrc}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <StoryClientIdentity
                      name={story.name}
                      city={story.city}
                      nameClassName="text-sm"
                    />
                  </div>
                  <p className="mt-4 text-[0.65rem] tracking-[0.14em] text-brass uppercase">
                    {story.practiceArea}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-navy md:text-[1.35rem]">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{story.outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. First consultation — editorial timeline */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-consultation-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-16 lg:gap-20">
            <div className="order-1 md:order-2 md:pt-1">
              <h2
                id="home-consultation-heading"
                className="font-serif text-3xl leading-[1.15] text-navy md:text-4xl lg:text-[2.75rem]"
              >
                {homeConsultation.heading}
              </h2>
              <p className="mt-3 text-base text-muted">{homeConsultation.withAttorney}</p>
              <p className="mt-4 text-base text-muted">{homeConsultation.feeNote}</p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-navy/85">
                {homeConsultation.valueLine}
              </p>
              <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="default">
                  <Link to="/book-consultation">{homeConsultation.bookLabel}</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/what-to-expect">{homeConsultation.linkLabel}</Link>
                </Button>
              </div>
            </div>

            <ol className="order-2 relative md:order-1">
              <div
                className="absolute top-3 bottom-3 left-5 w-px bg-brass/45 md:left-6"
                aria-hidden="true"
              />
              {homeConsultation.steps.map((item, index) => (
                <li
                  key={item.step}
                  className="animate-fade-up relative flex gap-5 pb-10 last:pb-0"
                  style={{ animationDelay: `${80 + index * 100}ms` }}
                >
                  <span
                    className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-ivory font-serif text-sm text-navy md:size-12 md:text-base"
                    aria-hidden="true"
                  >
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 pt-1.5 md:pt-2.5">
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

      {/* 6. FAQ */}
      <section
        id="faq"
        className="scroll-mt-28 border-b border-border/60 bg-navy text-ivory"
        aria-labelledby="home-concerns-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="animate-fade-up max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {homeConcerns.eyebrow}
            </p>
            <h2
              id="home-concerns-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] text-ivory md:text-4xl lg:text-[2.75rem]"
            >
              {homeConcerns.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/70">
              {homeConcerns.supporting}
            </p>
          </div>

          <div className="mt-10 max-w-3xl border-t border-ivory/15">
            <Accordion type="single" collapsible defaultValue={faqItems[0]?.id}>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-ivory/15"
                >
                  <AccordionTrigger className="text-ivory hover:text-brass-muted [&[data-state=open]]:text-ivory">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ivory/70">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ClosingConversion formIdPrefix="home-closing" />
    </main>
  )
}
