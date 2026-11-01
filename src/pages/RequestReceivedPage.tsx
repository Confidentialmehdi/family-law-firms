import { CircleCheck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  requestReceivedPage,
  type RequestReceivedState,
} from '@/content/requestReceived'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function RequestReceivedPage() {
  useDocumentTitle(requestReceivedPage.title)
  const location = useLocation()
  const state = (location.state ?? {}) as RequestReceivedState
  const firstName = state.firstName?.trim()

  return (
    <main id="main" className="flex flex-1 flex-col bg-ivory">
      <div className="flex flex-1 flex-col justify-center border-b border-border/60 px-5 py-16 md:px-8 md:py-24">
        <div
          className="mx-auto w-full max-w-xl rounded-sm border border-border bg-surface px-5 py-10 text-center md:px-8 md:py-12"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center">
            <CircleCheck
              className="size-16 text-teal md:size-[4.5rem]"
              strokeWidth={1.5}
              aria-hidden
            />
            <h1
              id="page-heading"
              tabIndex={-1}
              className="mt-5 font-serif text-3xl leading-[1.15] text-navy outline-none md:text-4xl lg:text-[2.75rem]"
            >
              {firstName
                ? requestReceivedPage.headingWithName(firstName)
                : requestReceivedPage.heading}
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted md:text-xl">
              {requestReceivedPage.supporting}
            </p>
            <p className="mt-5 text-sm text-muted">{requestReceivedPage.demoNotice}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
        <section className="mx-auto max-w-3xl" aria-labelledby="request-next-heading">
          <h2
            id="request-next-heading"
            className="font-serif text-2xl text-navy md:text-3xl"
          >
            {requestReceivedPage.nextHeading}
          </h2>
          <ol className="mt-8 space-y-8">
            {requestReceivedPage.nextSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span
                  className="font-serif text-4xl leading-none text-brass/45"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-base text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mx-auto mt-16 max-w-3xl"
          aria-labelledby="request-prepare-heading"
        >
          <h2
            id="request-prepare-heading"
            className="font-serif text-2xl text-navy md:text-3xl"
          >
            {requestReceivedPage.prepareHeading}
          </h2>
          <p className="mt-3 text-base text-muted">{requestReceivedPage.prepareIntro}</p>
          <ul className="mt-6 space-y-3 text-base text-navy">
            {requestReceivedPage.prepareItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto mt-16 max-w-3xl"
          aria-labelledby="request-resources-heading"
        >
          <h2
            id="request-resources-heading"
            className="font-serif text-2xl text-navy md:text-3xl"
          >
            {requestReceivedPage.resourcesHeading}
          </h2>
          <p className="mt-3 text-base text-muted">
            {requestReceivedPage.resourcesIntro}
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {requestReceivedPage.resources.map((resource) => (
              <li key={resource.to}>
                <Link
                  to={resource.to}
                  className="group flex flex-col gap-1 py-5 transition-colors hover:text-teal focus-visible:outline-none"
                >
                  <span className="font-serif text-xl text-navy group-hover:text-teal">
                    {resource.label}
                  </span>
                  <span className="text-base text-muted">{resource.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mx-auto mt-12 max-w-3xl">
          <Button asChild variant="outline">
            <Link to="/">{requestReceivedPage.homeLabel}</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
