import { CircleCheck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
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
    <main id="main">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
          <div className="max-w-2xl">
            <CircleCheck
              className="size-12 text-teal"
              strokeWidth={1.5}
              aria-hidden
            />
            <PageHeading className="mt-4">
              {firstName
                ? requestReceivedPage.headingWithName(firstName)
                : requestReceivedPage.heading}
            </PageHeading>
            <p className="mt-4 text-lg text-muted">{requestReceivedPage.supporting}</p>
            <p className="mt-3 text-sm text-muted">{requestReceivedPage.demoNotice}</p>
          </div>

          <section
            className="mt-14 max-w-3xl"
            aria-labelledby="request-next-heading"
          >
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
            className="mt-16 max-w-3xl"
            aria-labelledby="request-prepare-heading"
          >
            <h2
              id="request-prepare-heading"
              className="font-serif text-2xl text-navy md:text-3xl"
            >
              {requestReceivedPage.prepareHeading}
            </h2>
            <p className="mt-3 text-base text-muted">
              {requestReceivedPage.prepareIntro}
            </p>
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
            className="mt-16 max-w-3xl"
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

          <div className="mt-12">
            <Button asChild variant="outline">
              <Link to="/">{requestReceivedPage.homeLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
