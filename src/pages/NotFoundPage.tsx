import { Link } from 'react-router-dom'

import { PageHeading } from '@/components/PageHeading'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page not found')

  return (
    <main id="main">
      <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
        <PageHeading>Page not found</PageHeading>
        <p className="mt-4 max-w-lg text-lg text-muted">
          That page could not be found. Return to the home page to continue browsing Whitfield Law
          Group.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center font-medium text-teal underline-offset-4 hover:underline"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
