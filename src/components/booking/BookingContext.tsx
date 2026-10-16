import * as React from 'react'

import {
  generateSampleSlots,
  meetingTypeLabels,
  type MeetingType,
  type TimeSlot,
} from '@/content/booking'
import { practiceAreaOptions } from '@/content/practiceAreas'

export type BookingStep = 'appointment' | 'details' | 'review' | 'complete'

export type BookingDraft = {
  slotId: string | null
  meetingType: MeetingType | null
  name: string
  email: string
  practiceArea: string
}

type BookingContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  openBooking: () => void
  step: BookingStep
  setStep: (step: BookingStep) => void
  draft: BookingDraft
  updateDraft: (patch: Partial<BookingDraft>) => void
  slots: TimeSlot[]
  selectedSlot: TimeSlot | null
  practiceAreaLabel: string | null
  meetingTypeLabel: string | null
  completeBooking: () => void
  appointmentErrors: { slot?: string; meetingType?: string }
  detailsErrors: { name?: string; email?: string }
  validateAppointment: () => boolean
  validateDetails: () => boolean
  clearAppointmentErrors: () => void
  clearDetailsErrors: () => void
}

const emptyDraft: BookingDraft = {
  slotId: null,
  meetingType: null,
  name: '',
  email: '',
  practiceArea: '',
}

const BookingContext = React.createContext<BookingContextValue | null>(null)

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpenState] = React.useState(false)
  const [step, setStep] = React.useState<BookingStep>('appointment')
  const [draft, setDraft] = React.useState<BookingDraft>(emptyDraft)
  const [appointmentErrors, setAppointmentErrors] = React.useState<{
    slot?: string
    meetingType?: string
  }>({})
  const [detailsErrors, setDetailsErrors] = React.useState<{
    name?: string
    email?: string
  }>({})

  const slots = React.useMemo(() => generateSampleSlots(), [])

  const selectedSlot = React.useMemo(
    () => slots.find((slot) => slot.id === draft.slotId) ?? null,
    [slots, draft.slotId],
  )

  const practiceAreaLabel = React.useMemo(() => {
    if (!draft.practiceArea) return null
    return (
      practiceAreaOptions.find((option) => option.value === draft.practiceArea)?.label ?? null
    )
  }, [draft.practiceArea])

  const meetingTypeLabel = draft.meetingType
    ? meetingTypeLabels[draft.meetingType]
    : null

  const resetAfterComplete = React.useCallback(() => {
    setDraft(emptyDraft)
    setStep('appointment')
    setAppointmentErrors({})
    setDetailsErrors({})
  }, [])

  const setOpen = React.useCallback(
    (next: boolean) => {
      setOpenState(next)
      if (!next && step === 'complete') {
        resetAfterComplete()
      }
    },
    [resetAfterComplete, step],
  )

  const openBooking = React.useCallback(() => {
    if (step === 'complete') {
      resetAfterComplete()
    }
    setOpenState(true)
  }, [resetAfterComplete, step])

  const updateDraft = React.useCallback((patch: Partial<BookingDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }))
  }, [])

  const validateAppointment = React.useCallback(() => {
    const next: { slot?: string; meetingType?: string } = {}
    if (!draft.slotId) next.slot = 'Select a date and time.'
    if (!draft.meetingType) next.meetingType = 'Choose video or in person.'
    setAppointmentErrors(next)
    return Object.keys(next).length === 0
  }, [draft.meetingType, draft.slotId])

  const validateDetails = React.useCallback(() => {
    const next: { name?: string; email?: string } = {}
    if (!draft.name.trim()) next.name = 'Enter your name.'
    if (!draft.email.trim()) next.email = 'Enter your email.'
    else if (!isValidEmail(draft.email.trim())) next.email = 'Enter a valid email address.'
    setDetailsErrors(next)
    return Object.keys(next).length === 0
  }, [draft.email, draft.name])

  const completeBooking = React.useCallback(() => {
    setStep('complete')
  }, [])

  const value: BookingContextValue = {
    open,
    setOpen,
    openBooking,
    step,
    setStep,
    draft,
    updateDraft,
    slots,
    selectedSlot,
    practiceAreaLabel,
    meetingTypeLabel,
    completeBooking,
    appointmentErrors,
    detailsErrors,
    validateAppointment,
    validateDetails,
    clearAppointmentErrors: () => setAppointmentErrors({}),
    clearDetailsErrors: () => setDetailsErrors({}),
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const ctx = React.useContext(BookingContext)
  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return ctx
}
