import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { homeHero } from '@/content/home'
import { site } from '@/content/site'

/** Home hero — provides the page’s sole h1 (id=page-heading). */
export function Hero() {
  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start md:gap-16 md:px-8 md:py-16 lg:gap-20 lg:py-20">
        <div className="animate-fade-up max-w-2xl">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-serif text-[2.75rem] leading-[1.1] text-navy outline-none md:text-5xl lg:text-[3.75rem]"
          >
            {homeHero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted md:mt-8 md:text-xl lg:text-[1.35rem] lg:leading-relaxed">
            {homeHero.supporting}
          </p>
          <div className="mt-9 md:mt-10">
            <Button asChild size="lg">
              <Link to="/book-consultation">{site.ctaLabel}</Link>
            </Button>
            <p className="mt-4 text-sm text-muted md:text-base">{homeHero.terms}</p>
          </div>
        </div>

        <div
          className="animate-fade-in relative hidden h-full min-h-[28rem] md:block lg:min-h-[32rem]"
          style={{ animationDelay: '120ms' }}
        >
          <div className="relative h-full min-h-[28rem] overflow-hidden border border-border/70 bg-[#ebe4da] lg:min-h-[32rem]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(180deg, transparent 55%, rgb(247 244 239 / 0.85) 100%),
                  linear-gradient(135deg, rgb(24 92 88 / 0.12), transparent 50%),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 24px,
                    rgb(165 139 96 / 0.05) 24px,
                    rgb(165 139 96 / 0.05) 25px
                  )
                `,
              }}
              aria-hidden="true"
            />
            <div className="absolute right-6 bottom-6 left-6">
              <p className="font-serif text-3xl text-navy lg:text-4xl">New York</p>
              <p className="mt-1.5 text-base text-muted">Family law</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
