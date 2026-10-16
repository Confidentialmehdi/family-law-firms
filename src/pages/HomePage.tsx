import { Link } from 'react-router-dom'

import { ClosingCta } from '@/components/sections/ClosingCta'
import { Hero } from '@/components/sections/Hero'
import { attorney } from '@/content/attorney'
import { practiceAreas } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { testimonials } from '@/content/testimonials'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle()

  return (
    <main id="main">
      <Hero />

      <section className="border-b border-border/60" aria-labelledby="home-practice-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2
                id="home-practice-heading"
                className="font-serif text-3xl text-navy md:text-4xl"
              >
                Practice areas
              </h2>
              <p className="mt-3 text-lg text-muted">
                Clear guidance for the matters families bring most often.
              </p>
            </div>
            <Link
              to="/practice-areas"
              className="text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              View all practice areas
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <li key={area.id} className="border-t border-brass/35 pt-4">
                <h3 className="font-serif text-xl text-navy">{area.title}</h3>
                <p className="mt-2 line-clamp-2 text-base text-muted">{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-about-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2 id="home-about-heading" className="font-serif text-3xl text-navy md:text-4xl">
              About the firm
            </h2>
            <p className="mt-4 text-lg text-navy/90">{attorney.homePreview}</p>
            <Link
              to="/about-us"
              className="mt-6 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60" aria-labelledby="home-results-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2
                id="home-results-heading"
                className="font-serif text-3xl text-navy md:text-4xl"
              >
                What clarity can feel like
              </h2>
              <p className="mt-2 text-sm text-muted">{site.fictionalLabel}</p>
            </div>
            <Link
              to="/our-results"
              className="text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              Our Results
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {testimonials.slice(0, 2).map((item) => (
              <li key={item.id} className="border-l-2 border-brass/50 pl-5">
                <blockquote className="font-serif text-xl leading-snug text-navy">
                  <p>“{item.quote}”</p>
                </blockquote>
                <p className="mt-3 text-sm text-muted">{item.attribution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  )
}
