import { BriefcaseBusiness, FolderCheck, Star, type LucideIcon } from 'lucide-react'

import { HeroLeadForm } from '@/components/home/HeroLeadForm'
import { homeHero } from '@/content/home'

const heroPointIcons: Record<(typeof homeHero.points)[number]['id'], LucideIcon> = {
  experience: BriefcaseBusiness,
  matters: FolderCheck,
  rating: Star,
}

/** Home hero — page h1 plus themed lead-capture form (intake panel on the right). */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-x-12 md:gap-y-8 md:px-8 md:py-16 lg:gap-x-14 lg:py-20">
        <div className="animate-fade-up order-1 min-w-0">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="max-w-2xl font-serif text-[2.75rem] leading-[1.08] text-navy outline-none md:text-5xl lg:text-[3.75rem]"
          >
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:mt-8 md:text-xl lg:text-[1.35rem] lg:leading-relaxed">
            {homeHero.supporting}
          </p>
        </div>

        <div
          className="animate-fade-in order-2 min-w-0 md:order-3 md:col-start-2 md:row-span-2 md:row-start-1"
          style={{ animationDelay: '120ms' }}
        >
          <HeroLeadForm />
        </div>

        <div className="animate-fade-up order-3 min-w-0 md:order-2 md:col-start-1">
          <ul className="flex flex-col gap-4 text-sm text-muted md:flex-row md:flex-nowrap md:items-center md:gap-0">
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
      </div>
    </section>
  )
}
