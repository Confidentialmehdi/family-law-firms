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
    title: 'Book your consultation.',
    description: 'Select a date, time, and meeting type.',
  },
  details: {
    title: 'Your details',
    description: 'Tell us how to reach you. Case details are not requested here.',
  },
  review: {
    title: 'Review',
    description: 'Confirm your selections before submitting.',
  },
  complete: {
    title: 'Thank you',
    description: site.bookingComplete,
  },
}

export function BookingDialog() {
  const { open, setOpen, step } = useBooking()
  const copy = stepCopy[step]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>

        {step === 'appointment' ? <AppointmentStep /> : null}
        {step === 'details' ? <DetailsStep /> : null}
        {step === 'review' ? <ReviewStep /> : null}
        {step === 'complete' ? <CompleteStep /> : null}
      </DialogContent>
    </Dialog>
  )
}
