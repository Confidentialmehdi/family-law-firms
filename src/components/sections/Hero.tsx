import { BriefcaseBusiness, FolderCheck, Star, type LucideIcon } from 'lucide-react'

import { HeroLeadForm } from '@/components/home/HeroLeadForm'
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
      <figcaption className="absolute right-4 bottom-4 left-4">
        <p className="font-serif text-xl text-navy md:text-2xl">{attorney.name}</p>
        <p className="mt-0.5 text-sm text-muted">{attorney.role}</p>
      </figcaption>
    </figure>
  )
}

/**
 * Home hero — compact left stack (headline + square portrait) beside the intake form.
 */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-5 py-10 md:gap-8 md:px-8 md:py-12 lg:py-14">
        <div className="animate-fade-in grid grid-cols-1 items-stretch gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-6 lg:gap-7">
          <div className="animate-fade-up flex min-h-0 flex-col gap-4 md:gap-5">
            <div className="shrink-0">
              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-serif text-[2rem] leading-[1.1] text-navy outline-none md:text-[2.35rem] lg:text-[2.75rem]"
              >
                {homeHero.headline}
              </h1>
              <p className="mt-3 max-w-xl text-base text-muted md:mt-3.5 md:text-lg">
                {homeHero.supporting}
              </p>
            </div>

            <AttorneyPortrait className="relative aspect-square w-full max-w-[18rem] overflow-hidden border border-border/70 bg-[#ebe6de] sm:max-w-[20rem] md:max-w-[22rem]" />
          </div>

          <div className="flex min-h-0 flex-col">
            <HeroLeadForm className="h-full" />
          </div>
        </div>

        <ul className="animate-fade-up flex flex-col gap-3 text-sm text-muted md:flex-row md:flex-nowrap md:items-center md:gap-0">
          {homeHero.points.map((point, index) => {
            const Icon = heroPointIcons[point.id]
            return (
              <li
                key={point.id}
                className={
                  index === 0
                    ? 'flex shrink-0 items-center gap-2 md:pr-4'
                    : 'flex shrink-0 items-center gap-2 md:border-l md:border-border md:px-4 md:last:pr-0'
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
    </section>
  )
}
