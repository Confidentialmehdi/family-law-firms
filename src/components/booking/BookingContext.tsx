import * as React from 'react'

import {
  bookingPage,
  generateAvailabilitySlots,
  meetingTypeLabels,
  type MeetingType,
  type TimeSlot,
} from '@/content/booking'
import { practiceAreaOptions } from '@/content/practiceAreas'
import { isValidEmailAddress, isValidUsPhone } from '@/lib/inputFormat'

export type BookingStep = 'consultation' | 'details' | 'review' | 'complete'

export type BookingDraft = {
  dateKey: string | null
  slotId: string | null
  meetingType: MeetingType | null
  name: string
  email: string
  phone: string
  practiceArea: string
}

type BookingContextValue = {
  step: BookingStep
  setStep: (step: BookingStep) => void
  draft: BookingDraft
  updateDraft: (patch: Partial<BookingDraft>) => void
  slots: TimeSlot[]
  selectedSlot: TimeSlot | null
  practiceAreaLabel: string | null
  meetingTypeLabel: string | null
  completeBooking: () => void
  resetBooking: () => void
  refreshAvailability: () => void
  dateStale: boolean
  clearDateStale: () => void
  consultationErrors: { date?: string; slot?: string; meetingType?: string }
  detailsErrors: { name?: string; email?: string; phone?: string }
  validateConsultation: () => boolean
  validateDetails: () => boolean
  clearConsultationErrors: () => void
  clearDetailsErrors: () => void
}

const emptyDraft: BookingDraft = {
  dateKey: null,
  slotId: null,
  meetingType: null,
  name: '',
  email: '',
  phone: '',
  practiceArea: '',
}

const BookingContext = React.createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = React.useState<BookingStep>('consultation')
  const [draft, setDraft] = React.useState<BookingDraft>(emptyDraft)
  const [slotVersion, setSlotVersion] = React.useState(0)
  const [dateStale, setDateStale] = React.useState(false)
  const [consultationErrors, setConsultationErrors] = React.useState<{
    date?: string
    slot?: string
    meetingType?: string
  }>({})
  const [detailsErrors, setDetailsErrors] = React.useState<{
    name?: string
    email?: string
    phone?: string
  }>({})

  const slots = React.useMemo(() => generateAvailabilitySlots(), [slotVersion])

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

  const resetBooking = React.useCallback(() => {
    setDraft(emptyDraft)
    setStep('consultation')
    setConsultationErrors({})
    setDetailsErrors({})
    setDateStale(false)
    setSlotVersion((version) => version + 1)
  }, [])

  const refreshAvailability = React.useCallback(() => {
    setSlotVersion((version) => version + 1)
  }, [])

  React.useEffect(() => {
    if (!draft.dateKey && !draft.slotId) return
    const dateStillValid =
      Boolean(draft.dateKey) && slots.some((slot) => slot.dateKey === draft.dateKey)
    const slotStillValid =
      Boolean(draft.slotId) && slots.some((slot) => slot.id === draft.slotId)

    if (!dateStillValid || (draft.slotId && !slotStillValid)) {
      setDraft((prev) => ({ ...prev, dateKey: null, slotId: null }))
      setDateStale(true)
    }
  }, [slots, draft.dateKey, draft.slotId])

  const updateDraft = React.useCallback((patch: Partial<BookingDraft>) => {
    setDraft((prev) => {
      const next = { ...prev, ...patch }
      if (patch.dateKey !== undefined && patch.dateKey !== prev.dateKey) {
        next.slotId = patch.slotId ?? null
      }
      return next
    })
  }, [])

  const validateConsultation = React.useCallback(() => {
    const next: { date?: string; slot?: string; meetingType?: string } = {}
    if (!draft.meetingType) next.meetingType = bookingPage.validation.meetingType
    if (!draft.dateKey) next.date = bookingPage.validation.date
    if (!draft.slotId) next.slot = bookingPage.validation.slot
    setConsultationErrors(next)
    return Object.keys(next).length === 0
  }, [draft.dateKey, draft.meetingType, draft.slotId])

  const validateDetails = React.useCallback(() => {
    const next: { name?: string; email?: string; phone?: string } = {}
    if (!draft.name.trim()) next.name = bookingPage.validation.name
    if (!draft.email.trim()) next.email = bookingPage.validation.email
    else if (!isValidEmailAddress(draft.email)) {
      next.email = bookingPage.validation.emailInvalid
    }
    if (!draft.phone.trim()) next.phone = bookingPage.validation.phone
    else if (!isValidUsPhone(draft.phone)) {
      next.phone = bookingPage.validation.phoneInvalid
    }
    setDetailsErrors(next)
    return Object.keys(next).length === 0
  }, [draft.email, draft.name, draft.phone])

  const completeBooking = React.useCallback(() => {
    setStep('complete')
  }, [])

  const value: BookingContextValue = {
    step,
    setStep,
    draft,
    updateDraft,
    slots,
    selectedSlot,
    practiceAreaLabel,
    meetingTypeLabel,
    completeBooking,
    resetBooking,
    refreshAvailability,
    dateStale,
    clearDateStale: () => setDateStale(false),
    consultationErrors,
    detailsErrors,
    validateConsultation,
    validateDetails,
    clearConsultationErrors: () => setConsultationErrors({}),
    clearDetailsErrors: () => setDetailsErrors({}),
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = React.useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
