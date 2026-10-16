import { site } from '@/content/site'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking/BookingContext'

export function StickyMobileCta() {
  const { open, openBooking } = useBooking()

  if (open) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-auto border-t border-border bg-ivory/95 px-4 py-3 backdrop-blur-sm">
        <Button type="button" className="w-full" size="lg" onClick={openBooking}>
          {site.ctaLabel}
        </Button>
      </div>
    </div>
  )
}
