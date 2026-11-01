import { BriefcaseBusiness, FolderCheck, Star, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ConsultationStarter } from '@/components/home/ConsultationStarter'
import { attorney } from '@/content/attorney'
import { homeHero } from '@/content/home'

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

/** Home hero — page h1 plus compact consultation starter. Height follows content. */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-14 md:px-8 md:py-16 lg:gap-16 lg:py-20">
        <div className="animate-fade-up min-w-0">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="max-w-xl font-serif text-[2.75rem] leading-[1.08] text-navy outline-none md:text-5xl lg:text-[3.5rem]"
          >
            <span className="block">{homeHero.headlineLine1}</span>
            <span className="mt-1 block md:mt-2">{homeHero.headlineLine2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:mt-7 md:text-xl">
            {homeHero.supporting}
          </p>

          <Link
            to="/about-us"
            className="mt-5 hidden text-sm font-medium text-teal underline-offset-4 hover:underline md:inline-block"
          >
            {homeHero.aboutLinkLabel}
          </Link>

          <div className="mt-8 md:mt-9">
            <ConsultationStarter />
          </div>

          <ul className="mt-8 flex flex-col gap-3.5 text-sm text-muted md:mt-9 md:flex-row md:flex-nowrap md:items-center md:gap-0">
            {homeHero.points.map((point, index) => {
              const Icon = heroPointIcons[point.id]
              return (
                <li
                  key={point.id}
                  className={
                    index === 0
                      ? 'flex shrink-0 items-center gap-2.5 md:pr-4 lg:pr-5'
                      : 'flex shrink-0 items-center gap-2.5 md:border-l md:border-border md:px-4 lg:px-5 md:last:pr-0'
                  }
                >
                  <Icon
                    className="size-5 shrink-0 text-brass"
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

        <div
          className="animate-fade-in min-w-0"
          style={{ animationDelay: '120ms' }}
        >
          <AttorneyPortrait className="relative aspect-[4/5] w-full overflow-hidden border border-border/70 bg-[#ebe6de] md:aspect-auto md:min-h-[28rem] lg:min-h-[32rem]" />
          <Link
            to="/about-us"
            className="mt-5 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline md:hidden"
          >
            {homeHero.aboutLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
