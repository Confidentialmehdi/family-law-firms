import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export function ClosingCta() {
  const { openBooking } = useBooking()

  return (
    <section
      id="book"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="closing-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-20 text-center md:px-8 md:py-24">
        <h2
          id="closing-heading"
          className="font-serif text-3xl text-navy md:text-4xl lg:text-5xl"
        >
          Take the next step with clarity.
        </h2>
        <div className="mt-8">
          <Button type="button" size="lg" onClick={openBooking}>
            {site.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
