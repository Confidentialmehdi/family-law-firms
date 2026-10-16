import { whatToExpect } from '@/content/whatToExpect'

export function WhatToExpect() {
  return (
    <section
      id="what-to-expect"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="what-to-expect-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="what-to-expect-heading" className="font-serif text-3xl text-navy md:text-4xl">
            What to expect
          </h2>
          <p className="mt-3 text-lg text-muted">
            A straightforward path from first conversation to clearer options.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {whatToExpect.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-serif text-5xl text-brass/40" aria-hidden="true">
                {String(item.step).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-base text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
