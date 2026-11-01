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
      <figcaption className="absolute right-5 bottom-5 left-5 md:right-6 md:bottom-6 md:left-6">
        <p className="font-serif text-2xl text-navy md:text-3xl">{attorney.name}</p>
        <p className="mt-1 text-sm text-muted md:mt-1.5 md:text-base">{attorney.role}</p>
      </figcaption>
    </figure>
  )
}

/**
 * Home hero — headline above an equal-size portrait | form pair.
 */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-5 py-14 md:gap-10 md:px-8 md:py-16 lg:py-20">
        <div className="animate-fade-up max-w-3xl">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-serif text-[2.75rem] leading-[1.08] text-navy outline-none md:text-5xl lg:text-[3.75rem]"
          >
            {homeHero.headline}
          </h1>
          <p className="mt-5 text-lg text-muted md:mt-6 md:text-xl lg:text-[1.35rem] lg:leading-relaxed">
            {homeHero.supporting}
          </p>
        </div>

        {/* Equal-width, equal-height media + form */}
        <div className="animate-fade-in grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
          <AttorneyPortrait className="relative aspect-[4/5] w-full overflow-hidden border border-border/70 bg-[#ebe6de]" />
          <div className="aspect-[4/5] w-full min-h-0">
            <HeroLeadForm className="h-full" />
          </div>
        </div>

        <ul className="animate-fade-up flex flex-col gap-4 text-sm text-muted md:flex-row md:flex-nowrap md:items-center md:gap-0">
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
                  className="size-6 shrink-0 text-brass md:size-6 lg:size-7"
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
