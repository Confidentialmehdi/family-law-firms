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
        className="absolute inset-0 h-full w-full scale-125 object-cover object-[center_8%]"
        loading="eager"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/25 to-transparent"
        aria-hidden="true"
      />
      <figcaption className="absolute right-2.5 bottom-2.5 left-2.5">
        <p className="font-serif text-base text-navy md:text-lg">{attorney.name}</p>
        <p className="text-xs text-muted">{attorney.role}</p>
      </figcaption>
    </figure>
  )
}

/**
 * Home hero sized to fit below the sticky header in one viewport on desktop.
 */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60 md:h-[calc(100dvh-5rem)] md:max-h-[calc(100dvh-5rem)]"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] flex-col justify-center px-5 py-6 md:px-6 md:py-5 lg:py-6">
        <div className="animate-fade-in grid min-h-0 flex-1 grid-cols-1 items-stretch gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-6 lg:gap-8">
          <div className="animate-fade-up flex min-h-0 flex-col gap-3 md:gap-3.5">
            <div className="shrink-0">
              <h1
                id="page-heading"
                tabIndex={-1}
                className="max-w-xl font-serif text-[1.85rem] leading-[1.1] text-navy outline-none md:text-[2.1rem] lg:text-[2.35rem]"
              >
                {homeHero.headline}
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted md:mt-2.5 md:text-base md:line-clamp-3">
                {homeHero.supporting}
              </p>
            </div>

            <AttorneyPortrait className="relative aspect-square w-[min(100%,16rem)] min-h-0 flex-1 overflow-hidden border border-border/70 bg-[#ebe6de] sm:w-[min(100%,18rem)] md:w-[min(100%,20rem)] md:max-h-[min(100%,22rem)]" />

            <ul className="mt-auto flex flex-col gap-2.5 pt-1 text-xs text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-0 md:text-sm">
              {homeHero.points.map((point, index) => {
                const Icon = heroPointIcons[point.id]
                return (
                  <li
                    key={point.id}
                    className={
                      index === 0
                        ? 'flex shrink-0 items-center gap-1.5 sm:pr-3'
                        : 'flex shrink-0 items-center gap-1.5 sm:border-l sm:border-border sm:px-3 sm:last:pr-0'
                    }
                  >
                    <Icon
                      className="size-4 shrink-0 text-brass"
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

          <div className="flex min-h-0 md:h-full">
            <HeroLeadForm className="h-full max-h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
