import { Clock3, Lock, MessageCircle, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { attorney } from '@/content/attorney'
import { homeHero } from '@/content/home'
import { site } from '@/content/site'

const heroPointIcons: Record<(typeof homeHero.points)[number]['id'], LucideIcon> = {
  confidential: Lock,
  options: MessageCircle,
  format: Clock3,
}

/** Home hero — provides the page’s sole h1 (id=page-heading). */
export function Hero() {
  return (
    <section
      className="texture-paper relative flex min-h-[min(92vh,54rem)] overflow-hidden border-b border-border/60 md:min-h-[min(90vh,52rem)]"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] flex-1 content-center gap-14 px-5 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-16 md:px-8 md:py-24 lg:gap-20 lg:py-28">
        <div className="animate-fade-up max-w-2xl">
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
          <div className="mt-10 md:mt-12">
            <Button asChild size="lg">
              <Link to="/book-consultation">{site.ctaLabel}</Link>
            </Button>
            <ul className="mt-6 flex max-w-xl flex-wrap items-start gap-y-3 text-sm text-muted md:flex-nowrap md:gap-0 md:text-[0.95rem]">
              {homeHero.points.map((point, index) => {
                const Icon = heroPointIcons[point.id]
                return (
                  <li
                    key={point.id}
                    className="flex min-w-0 flex-1 items-start gap-2.5 md:px-3 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-border"
                  >
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-brass"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{point.label}</span>
                    <span className="sr-only">
                      {index < homeHero.points.length - 1 ? '|' : ''}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div
          className="animate-fade-in relative hidden min-h-[32rem] md:block lg:min-h-[36rem]"
          style={{ animationDelay: '120ms' }}
        >
          <figure className="relative h-full min-h-[32rem] overflow-hidden border border-border/70 bg-[#ebe4da] lg:min-h-[36rem]">
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
            <figcaption className="absolute right-6 bottom-6 left-6">
              <p className="font-serif text-3xl text-navy lg:text-4xl">{attorney.name}</p>
              <p className="mt-1.5 text-base text-muted">{attorney.role}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
