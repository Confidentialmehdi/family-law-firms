import { CheckCircle2 } from 'lucide-react'

import { site } from '@/content/site'
import { Button } from '@/components/ui/button'

import { useBooking } from './BookingContext'

export function CompleteStep() {
  const { setOpen } = useBooking()

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 py-10 text-center">
        <CheckCircle2 className="size-10 text-teal" aria-hidden="true" />
        <p className="font-serif text-xl text-navy" role="status">
          {site.demoComplete}
        </p>
        <p className="max-w-sm text-sm text-muted">
          Nothing was scheduled, emailed, or stored. You can close this dialog to return to the
          page.
        </p>
      </div>
      <div className="flex justify-end border-t border-border bg-surface/60 px-5 py-4">
        <Button type="button" onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>
    </div>
  )
}
