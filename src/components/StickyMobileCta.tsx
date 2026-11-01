import { Link } from 'react-router-dom'

import { site } from '@/content/site'
import { Button } from '@/components/ui/button'

export function StickyMobileCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-auto border-t border-border bg-ivory/95 px-4 py-3 backdrop-blur-sm">
        <Button asChild className="w-full" size="lg">
          <Link to="/book-consultation">{site.ctaLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
