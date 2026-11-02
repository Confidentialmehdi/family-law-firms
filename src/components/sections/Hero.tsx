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
        className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
        loading="eager"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/20 to-transparent"
        aria-hidden="true"
      />
      <figcaption className="absolute right-4 bottom-4 left-4 md:right-5 md:bottom-5 md:left-5">
        <p className="font-serif text-xl text-navy md:text-2xl">{attorney.name}</p>
        <p className="mt-0.5 text-sm text-muted">{attorney.role}</p>
      </figcaption>
    </figure>
  )
}

/**
 * Home hero sized like the Morgan & Morgan lead block (~1140×826):
 * left copy + media + trust, right thinner tall form.
 */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto w-full max-w-[1080px] px-5 py-8 md:px-6 md:py-10">
        <div className="animate-fade-in grid grid-cols-1 items-stretch gap-5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-6 lg:gap-8">
          <div className="animate-fade-up flex min-h-0 flex-col gap-4 md:gap-5">
            <div className="shrink-0">
              <h1
                id="page-heading"
                tabIndex={-1}
                className="max-w-xl font-serif text-[1.95rem] leading-[1.08] text-navy outline-none md:text-[2.25rem] lg:text-[2.55rem]"
              >
                {homeHero.headline}
              </h1>
              <p className="mt-2.5 max-w-lg text-sm text-muted md:mt-3 md:text-base">
                {homeHero.supporting}
              </p>
            </div>

            <AttorneyPortrait className="relative aspect-square w-full overflow-hidden border border-border/70 bg-[#ebe6de]" />

            <ul className="mt-auto flex flex-col gap-3 pt-1 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
              {homeHero.points.map((point, index) => {
                const Icon = heroPointIcons[point.id]
                return (
                  <li
                    key={point.id}
                    className={
                      index === 0
                        ? 'flex shrink-0 items-center gap-2 sm:pr-4'
                        : 'flex shrink-0 items-center gap-2 sm:border-l sm:border-border sm:px-4 sm:last:pr-0'
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

          <div className="flex min-h-0 w-full min-w-0">
            <HeroLeadForm className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
