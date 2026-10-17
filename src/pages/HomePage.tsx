import { Link } from 'react-router-dom'

import { ImageFallback } from '@/components/ImageFallback'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Hero } from '@/components/sections/Hero'
import { attorney } from '@/content/attorney'
import {
  homeAppointment,
  homeConcerns,
  homeExperience,
  homeMeet,
  homePractice,
} from '@/content/home'
import { getPracticeArea } from '@/content/practiceAreas'
import { site } from '@/content/site'
import { testimonials } from '@/content/testimonials'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function HomePage() {
  useDocumentTitle()

  const experienceQuotes = homeExperience.testimonialIds
    .map((id) => testimonials.find((item) => item.id === id))
    .filter((item): item is (typeof testimonials)[number] => Boolean(item))

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
          <ImageFallback label="Portrait placeholder" className="w-full max-w-sm" />
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

      {/* 4. Client experience */}
      <section className="border-b border-border/60" aria-labelledby="home-experience-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="home-experience-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              {homeExperience.heading}
            </h2>
            <p className="mt-3 text-sm text-muted">{site.fictionalLabel}</p>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2">
            {experienceQuotes.map((item) => (
              <li key={item.id} className="border-l-2 border-brass/50 pl-5">
                <blockquote className="font-serif text-xl leading-snug text-navy md:text-2xl">
                  <p>“{item.quote}”</p>
                </blockquote>
                <p className="mt-4 text-sm text-muted">{item.attribution}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/our-results"
            className="mt-10 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homeExperience.linkLabel}
          </Link>
        </div>
      </section>

      {/* 5. First appointment */}
      <section
        className="border-b border-border/60 bg-surface/40"
        aria-labelledby="home-appointment-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="home-appointment-heading"
              className="font-serif text-3xl text-navy md:text-4xl"
            >
              {homeAppointment.heading}
            </h2>
            <p className="mt-3 text-sm text-muted">{homeAppointment.feeNote}</p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {homeAppointment.steps.map((item) => (
              <li key={item.step}>
                <span className="font-serif text-5xl text-brass/40" aria-hidden="true">
                  {String(item.step).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-base text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/what-to-expect"
            className="mt-10 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homeAppointment.linkLabel}
          </Link>
        </div>
      </section>

      {/* 6. Booking concerns */}
      <section className="border-b border-border/60" aria-labelledby="home-concerns-heading">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <h2
            id="home-concerns-heading"
            className="font-serif text-3xl text-navy md:text-4xl"
          >
            {homeConcerns.heading}
          </h2>
          <ul className="mt-10 max-w-3xl divide-y divide-border border-y border-border">
            {homeConcerns.items.map((item) => (
              <li key={item.id} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,0.45fr)_1fr] sm:gap-8">
                <p className="font-serif text-lg text-navy">{item.question}</p>
                <p className="text-base text-muted">{item.answer}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/faq"
            className="mt-8 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
          >
            {homeConcerns.linkLabel}
          </Link>
        </div>
      </section>

      <ClosingConversion formIdPrefix="home-closing" />
    </main>
  )
}
