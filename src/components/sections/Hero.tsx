import { BriefcaseBusiness, FolderCheck, Star, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { attorney } from '@/content/attorney'
import { homeHero } from '@/content/home'
import { site } from '@/content/site'

const heroPointIcons: Record<(typeof homeHero.points)[number]['id'], LucideIcon> = {
  experience: BriefcaseBusiness,
  matters: FolderCheck,
  rating: Star,
}

function AttorneyPortrait({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <img
        src={attorney.imageSrc}
        alt={attorney.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        loading="eager"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/25 to-transparent"
        aria-hidden="true"
      />
      <figcaption className="absolute right-5 bottom-5 left-5 md:right-6 md:bottom-6 md:left-6">
        <p className="font-serif text-2xl text-navy md:text-3xl lg:text-4xl">{attorney.name}</p>
        <p className="mt-1 text-sm text-muted md:mt-1.5 md:text-base">{attorney.role}</p>
      </figcaption>
    </figure>
  )
}

/** Home hero — provides the page’s sole h1 (id=page-heading). */
export function Hero() {
  return (
    <section
      className="texture-paper relative flex min-h-[min(92vh,54rem)] overflow-hidden border-b border-border/60 md:min-h-[min(90vh,52rem)]"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] flex-1 content-center gap-14 px-5 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-16 md:px-8 md:py-24 lg:gap-20 lg:py-28">
        <div className="animate-fade-up">
          <div className="max-w-2xl">
            <h1
              id="page-heading"
              tabIndex={-1}
              className="font-serif text-[3rem] leading-[1.08] text-navy outline-none md:text-5xl lg:text-[4rem]"
            >
              {homeHero.headline}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted md:mt-9 md:text-xl lg:text-[1.4rem] lg:leading-relaxed">
              {homeHero.supporting}
            </p>
            {/* Mobile: portrait between copy and CTA */}
            <div className="relative mt-10 min-h-[22rem] sm:min-h-[26rem] md:hidden">
              <AttorneyPortrait className="relative h-full min-h-[22rem] overflow-hidden border border-border/70 bg-[#ebe6de] sm:min-h-[26rem]" />
            </div>
            <div className="mt-10 md:mt-12">
              <Button asChild size="lg">
                <Link to="/book-consultation">{site.ctaLabel}</Link>
              </Button>
            </div>
          </div>
          <ul className="mt-6 flex flex-col gap-4 text-sm text-muted md:flex-row md:flex-wrap md:items-center md:gap-y-4 md:text-[0.95rem]">
            {homeHero.points.map((point, index) => {
              const Icon = heroPointIcons[point.id]
              return (
                <li
                  key={point.id}
                  className={
                    index === 0
                      ? 'flex items-center gap-2.5 md:pr-5'
                      : 'flex items-center gap-2.5 md:border-l md:border-border md:pr-5 md:pl-5 md:last:pr-0'
                  }
                >
                  <Icon
                    className="size-6 shrink-0 text-brass md:size-7"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="leading-snug">
                    <span className="block whitespace-nowrap">{point.lines[0]}</span>
                    <span className="block whitespace-nowrap">{point.lines[1]}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Desktop: portrait in right column */}
        <div
          className="animate-fade-in relative hidden min-h-[32rem] md:block lg:min-h-[36rem]"
          style={{ animationDelay: '120ms' }}
        >
          <AttorneyPortrait className="relative h-full min-h-[32rem] overflow-hidden border border-border/70 bg-[#ebe6de] lg:min-h-[36rem]" />
        </div>
      </div>
    </section>
  )
}
