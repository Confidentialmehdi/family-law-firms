import * as React from 'react'

import { site } from '@/content/site'

export function useDocumentTitle(pageTitle?: string) {
  React.useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${site.firmName}`
      : `${site.firmName} | New York Family Law`
  }, [pageTitle])
}
