import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

type ClosingCtaProps = {
  headline?: string
  supporting?: string
  terms?: string
  /** Distinct calm treatment for invitation sections. */
  variant?: 'default' | 'invitation'
}

export function ClosingCta({
  headline = 'Take the next step with clarity.',
  supporting,
  terms,
  variant = 'default',
}: ClosingCtaProps) {
  const { openBooking } = useBooking()

  return (
    <section
      className={cn(
        'border-b border-border/60',
        variant === 'invitation' && 'bg-navy text-ivory',
      )}
      aria-labelledby="closing-heading"
    >
      <div
        className={cn(
          'mx-auto max-w-[1200px] px-5 py-20 text-center md:px-8 md:py-24',
          variant === 'invitation' && 'md:py-28',
        )}
      >
        <h2
          id="closing-heading"
          className={cn(
            'font-serif text-3xl md:text-4xl lg:text-5xl',
            variant === 'invitation' ? 'text-ivory' : 'text-navy',
          )}
        >
          {headline}
        </h2>
        {supporting ? (
          <p
            className={cn(
              'mx-auto mt-4 max-w-lg text-lg',
              variant === 'invitation' ? 'text-ivory/75' : 'text-muted',
            )}
          >
            {supporting}
          </p>
        ) : null}
        {terms ? (
          <p
            className={cn(
              'mx-auto mt-3 max-w-lg text-sm',
              variant === 'invitation' ? 'text-ivory/60' : 'text-muted',
            )}
          >
            {terms}
          </p>
        ) : null}
        <div className="mt-8">
          <Button
            type="button"
            size="lg"
            className={
              variant === 'invitation'
                ? 'bg-ivory text-navy hover:bg-surface'
                : undefined
            }
            onClick={openBooking}
          >
            {site.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
