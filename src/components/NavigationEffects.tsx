import * as React from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top and move focus to the page heading after route changes. */
export function NavigationEffects() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Defer until the new page heading is in the DOM.
    const frame = requestAnimationFrame(() => {
      const heading = document.getElementById('page-heading')
      if (heading instanceof HTMLElement) {
        heading.focus({ preventScroll: true })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
