import { ArrowRight } from 'lucide-react'

import { PageHeading } from '@/components/PageHeading'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { beforeAfter } from '@/content/beforeAfter'
import { site } from '@/content/site'
import { stories } from '@/content/stories'
import { testimonials } from '@/content/testimonials'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function OurResultsPage() {
  useDocumentTitle('Our Results')

  return (
    <main id="main">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>A clearer path forward.</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            These examples explore what feeling heard, understanding your options, and preparing
            for next steps can look like.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">{site.resultsDisclosure}</p>

          <section className="mt-16" aria-labelledby="results-testimonials-heading">
            <h2
              id="results-testimonials-heading"
              className="font-serif text-2xl text-navy md:text-3xl"
            >
              Testimonials
            </h2>
            <p className="mt-2 text-sm text-muted">{site.fictionalLabel}</p>
            <ul className="mt-8 grid gap-10 md:grid-cols-3">
              {testimonials.map((item) => (
                <li key={item.id} className="border-l-2 border-brass/50 pl-5">
                  <p className="text-xs tracking-[0.12em] text-brass uppercase">{item.theme}</p>
                  <blockquote className="mt-2 font-serif text-xl leading-snug text-navy">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <p className="mt-4 text-sm text-muted">{item.attribution}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20" aria-labelledby="results-before-after-heading">
            <h2
              id="results-before-after-heading"
              className="font-serif text-2xl text-navy md:text-3xl"
            >
              {beforeAfter.heading}
            </h2>
            <p className="mt-2 text-sm text-muted">{site.illustrativeLabel}</p>
            <ul className="mt-8 space-y-0 divide-y divide-border border-y border-border">
              {beforeAfter.items.map((item) => (
                <li
                  key={item.before}
                  className="grid gap-3 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
                >
                  <p className="text-lg text-muted">{item.before}</p>
                  <ArrowRight className="hidden size-5 text-brass md:block" aria-hidden="true" />
                  <p className="font-serif text-xl text-navy md:text-right">{item.after}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20" aria-labelledby="results-stories-heading">
            <h2
              id="results-stories-heading"
              className="font-serif text-2xl text-navy md:text-3xl"
            >
              Transformation stories
            </h2>
            <p className="mt-2 text-sm text-muted">{site.fictionalLabel}</p>
            <ul className="mt-10 grid gap-12 lg:grid-cols-3">
              {stories.map((story) => (
                <li key={story.id}>
                  <h3 className="font-serif text-2xl text-navy">{story.title}</h3>
                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="text-xs tracking-[0.14em] text-brass uppercase">
                        Situation
                      </dt>
                      <dd className="mt-1 text-base text-muted">{story.situation}</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.14em] text-brass uppercase">
                        Conversation
                      </dt>
                      <dd className="mt-1 text-base text-muted">{story.conversation}</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.14em] text-brass uppercase">Next step</dt>
                      <dd className="mt-1 text-base text-navy/90">{story.nextStep}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <ClosingCta />
    </main>
  )
}
