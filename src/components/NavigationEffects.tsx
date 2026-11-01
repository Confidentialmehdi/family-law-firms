import * as React from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll and focus handling after route changes. */
export function NavigationEffects() {
  const { pathname, hash } = useLocation()

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const id = hash.replace(/^#/, '')
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

      const heading = document.getElementById('page-heading')
      if (heading instanceof HTMLElement) {
        heading.focus({ preventScroll: true })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
