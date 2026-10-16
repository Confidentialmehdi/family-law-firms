import { site } from '@/content/site'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { AppointmentStep } from './AppointmentStep'
import { useBooking } from './BookingContext'
import { CompleteStep } from './CompleteStep'
import { DetailsStep } from './DetailsStep'
import { ReviewStep } from './ReviewStep'

const stepCopy: Record<
  'appointment' | 'details' | 'review' | 'complete',
  { title: string; description: string }
> = {
  appointment: {
    title: 'Choose an appointment',
    description: 'Select a sample date, time, and meeting type.',
  },
  details: {
    title: 'Your details',
    description: 'Tell us how to reach you. Case details are not requested here.',
  },
  review: {
    title: 'Review',
    description: 'Confirm your selections before finishing this demo booking.',
  },
  complete: {
    title: 'Thank you',
    description: site.demoBanner,
  },
}

export function BookingDialog() {
  const { open, setOpen, step } = useBooking()
  const copy = stepCopy[step]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent aria-describedby="booking-demo-banner">
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
          {step !== 'complete' ? (
            <p
              id="booking-demo-banner"
              className="mt-2 rounded-sm bg-brass/10 px-3 py-2 text-sm text-navy/80"
            >
              {site.demoBanner}
            </p>
          ) : null}
        </DialogHeader>

        {step === 'appointment' ? <AppointmentStep /> : null}
        {step === 'details' ? <DetailsStep /> : null}
        {step === 'review' ? <ReviewStep /> : null}
        {step === 'complete' ? <CompleteStep /> : null}
      </DialogContent>
    </Dialog>
  )
}
