import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export function Hero() {
  const { openBooking } = useBooking()

  return (
    <section
      id="top"
      className="texture-paper relative overflow-hidden border-b border-border/60"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-12 md:px-8 md:py-24 lg:py-28">
        <div className="animate-fade-up max-w-2xl">
          <p className="font-serif text-3xl text-navy md:text-4xl lg:text-[2.75rem]">
            {site.firmName}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-serif text-4xl leading-[1.15] text-navy md:text-5xl lg:text-[3.25rem]"
          >
            Clear guidance for your family’s next chapter.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            New York family law counsel for divorce, parenting arrangements, and financial
            matters. Understand your options and take your next step with confidence.
          </p>
          <div className="mt-8">
            <Button type="button" size="lg" onClick={openBooking}>
              {site.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="animate-fade-in relative hidden md:block" style={{ animationDelay: '120ms' }}>
          <div className="relative aspect-[4/5] max-h-[28rem] overflow-hidden border border-border/70 bg-[#ebe4da]">
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
