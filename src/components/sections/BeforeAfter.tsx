import { ArrowRight } from 'lucide-react'

import { beforeAfter } from '@/content/beforeAfter'
import { site } from '@/content/site'

export function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="before-after-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="before-after-heading" className="font-serif text-3xl text-navy md:text-4xl">
            {beforeAfter.heading}
          </h2>
          <p className="mt-3 text-sm text-muted">{site.illustrativeLabel}</p>
        </div>

        <ul className="mt-12 space-y-0 divide-y divide-border border-y border-border">
          {beforeAfter.items.map((item) => (
            <li
              key={item.before}
              className="grid gap-3 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
            >
              <p className="text-lg text-muted">{item.before}</p>
              <ArrowRight
                className="hidden size-5 text-brass md:block"
                aria-hidden="true"
              />
              <p className="font-serif text-xl text-navy md:text-right">{item.after}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
