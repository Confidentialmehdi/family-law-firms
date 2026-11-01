import { Link } from 'react-router-dom'

import { HeroLeadForm } from '@/components/home/HeroLeadForm'
import { Button } from '@/components/ui/button'
import { homeHeroForm } from '@/content/home'
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

        <div className="mt-10 grid overflow-hidden rounded-sm border border-border lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-stretch">
          <div className="flex h-full flex-col bg-navy px-6 py-8 text-ivory md:px-8 md:py-9">
            <h3 className="font-serif text-xl text-ivory md:text-2xl">
              {closingConversion.booking.heading}
            </h3>
            <p className="mt-3 text-base text-ivory/70">{closingConversion.booking.copy}</p>
            <ul className="mt-6 space-y-2 border-y border-ivory/15 py-4 text-sm text-ivory/85">
              {closingConversion.booking.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-8 flex-1">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                {closingConversion.booking.concernsHeading}
              </p>
              <ul className="mt-4 divide-y divide-ivory/15 border-y border-ivory/15">
                {closingConversion.booking.concerns.map((item) => (
                  <li key={item.title} className="py-3.5">
                    <p className="text-sm font-medium text-ivory">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ivory/65">
                      {item.answer}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to={closingConversion.booking.guideTo}
                className="mt-6 inline-block text-sm font-medium text-brass-muted underline-offset-4 hover:text-brass hover:underline"
              >
                {closingConversion.booking.guideLabel}
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-2 pt-2">
              <Button asChild size="lg" className="w-full">
                <Link to="/book-consultation">{site.ctaLabel}</Link>
              </Button>
              <p className="text-center text-[0.65rem] leading-snug text-ivory/55 sm:text-[0.7rem]">
                {homeHeroForm.footerLine}
              </p>
            </div>
          </div>

          <div className="flex h-full min-h-0 flex-col border-t border-border lg:border-t-0 lg:border-l">
            <HeroLeadForm
              idPrefix={formIdPrefix}
              tone="light"
              className="h-full rounded-none border-0 sm:px-6 sm:py-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
