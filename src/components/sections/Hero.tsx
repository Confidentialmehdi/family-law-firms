import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { homeHero } from '@/content/home'
import { site } from '@/content/site'

/** Home hero — provides the page’s sole h1 (id=page-heading). */
export function Hero() {
  const { openBooking } = useBooking()

  return (
    <section
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="page-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end md:gap-14 md:px-8 md:py-20 lg:py-24">
        <div className="animate-fade-up max-w-2xl">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-serif text-4xl leading-[1.15] text-navy outline-none md:text-5xl lg:text-[3.15rem]"
          >
            {homeHero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            {homeHero.supporting}
          </p>
          <div className="mt-8">
            <Button type="button" size="lg" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
            <p className="mt-3 text-sm text-muted md:text-base">{homeHero.terms}</p>
          </div>
        </div>

        <div
          className="animate-fade-in relative hidden md:block"
          style={{ animationDelay: '120ms' }}
        >
          <div className="relative aspect-[4/5] max-h-[26rem] overflow-hidden border border-border/70 bg-[#ebe4da]">
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
            <div className="absolute right-5 bottom-5 left-5">
              <p className="font-serif text-2xl text-navy">New York</p>
              <p className="mt-1 text-sm text-muted">Family law · Sample visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
