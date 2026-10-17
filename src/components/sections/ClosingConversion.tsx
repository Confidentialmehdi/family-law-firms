import { Link } from 'react-router-dom'

import { ContactRequestForm } from '@/components/contact/ContactRequestForm'
import { Button } from '@/components/ui/button'
import { closingConversion, site } from '@/content/site'

type ClosingConversionProps = {
  /** Unique id prefix so multiple pages never collide on form field ids. */
  formIdPrefix?: string
}

export function ClosingConversion({ formIdPrefix = 'closing' }: ClosingConversionProps) {
  return (
    <section
      className="border-t border-border bg-ivory"
      aria-labelledby="closing-conversion-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
        <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
          {closingConversion.label}
        </p>
        <h2
          id="closing-conversion-heading"
          className="mt-3 max-w-2xl font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
        >
          {closingConversion.headline}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">{closingConversion.supporting}</p>

        <div className="mt-10 grid overflow-hidden rounded-sm border border-border lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="bg-navy px-6 py-8 text-ivory md:px-8 md:py-9">
            <h3 className="font-serif text-xl text-ivory md:text-2xl">
              {closingConversion.booking.heading}
            </h3>
            <p className="mt-3 text-base text-ivory/70">{closingConversion.booking.copy}</p>
            <ul className="mt-6 space-y-2 border-y border-ivory/15 py-4 text-sm text-ivory/85">
              {closingConversion.booking.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-6 w-full">
              <Link to="/book-consultation">{site.ctaLabel}</Link>
            </Button>
          </div>

          <div className="border-t border-border bg-surface px-6 py-8 md:px-8 md:py-9 lg:border-t-0 lg:border-l">
            <h3 className="font-serif text-xl text-navy md:text-2xl">
              {closingConversion.contact.heading}
            </h3>
            <p className="mt-3 text-base text-muted">{closingConversion.contact.copy}</p>
            <div className="mt-6">
              <ContactRequestForm variant="compact" idPrefix={formIdPrefix} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
