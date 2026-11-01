import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { concerns } from '@/content/concerns'
import { site } from '@/content/site'
import { whatToExpect, whatToExpectPage } from '@/content/whatToExpect'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function WhatToExpectPage() {
  useDocumentTitle('What to Expect')

  return (
    <main id="main">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>What to Expect</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">{whatToExpectPage.supporting}</p>
          <p className="mt-3 text-sm text-muted">
            {site.consultationNote}. Times shown in {site.timeZoneLabel}.
          </p>

          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {whatToExpect.map((item) => (
              <li key={item.step}>
                <span className="font-serif text-5xl text-brass/40" aria-hidden="true">
                  {String(item.step).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-serif text-xl text-navy">{item.title}</h2>
                <p className="mt-3 text-base text-muted">{item.description}</p>
              </li>
            ))}
          </ol>

          <section className="mt-16 max-w-3xl" aria-labelledby="prepare-heading">
            <h2 id="prepare-heading" className="font-serif text-2xl text-navy">
              {whatToExpectPage.prepareHeading}
            </h2>
            <p className="mt-3 text-base text-muted">{whatToExpectPage.prepareCopy}</p>
          </section>

          <section className="mt-14 max-w-3xl" aria-labelledby="concerns-heading">
            <h2 id="concerns-heading" className="font-serif text-2xl text-navy">
              {whatToExpectPage.concernsHeading}
            </h2>
            <ul className="mt-6 space-y-6">
              {concerns.map((item) => (
                <li key={item.id}>
                  <h3 className="font-serif text-xl text-navy">{item.question}</h3>
                  <p className="mt-2 text-base text-muted">{item.response}</p>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-12 text-base text-muted">
            {whatToExpectPage.faqLeadIn}{' '}
            <Link to="/faq" className="font-medium text-teal underline-offset-4 hover:underline">
              {whatToExpectPage.faqLinkLabel}
            </Link>{' '}
            {whatToExpectPage.faqLeadOut}
          </p>
        </div>
      </div>
      <ClosingConversion formIdPrefix="expect-closing" />
    </main>
  )
}
