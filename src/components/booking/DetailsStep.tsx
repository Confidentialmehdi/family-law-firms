import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { practiceAreaOptions } from '@/content/practiceAreas'
import { contactForm } from '@/content/site'
import { capitalizeFirstOnly, formatUsPhone, toInitialCaps } from '@/lib/inputFormat'
import { cn } from '@/lib/utils'

import { useBooking } from './BookingContext'

export function DetailsStep() {
  const {
    draft,
    updateDraft,
    detailsErrors,
    clearDetailsErrors,
    validateDetails,
    setStep,
  } = useBooking()

  function handleContinue() {
    if (validateDetails()) {
      setStep('review')
    }
  }

  return (
    <div className="flex flex-col">
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="booking-first-name">
              First name <span className="text-muted">(required)</span>
            </Label>
            <Input
              id="booking-first-name"
              name="firstName"
              autoComplete="given-name"
              autoCapitalize="words"
              value={draft.firstName}
              aria-invalid={Boolean(detailsErrors.firstName)}
              aria-describedby={detailsErrors.firstName ? 'first-name-error' : undefined}
              onChange={(event) => {
                updateDraft({ firstName: toInitialCaps(event.target.value) })
                clearDetailsErrors()
              }}
            />
            {detailsErrors.firstName ? (
              <p id="first-name-error" className="text-sm text-red-800" role="alert">
                {detailsErrors.firstName}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-last-name">
              Last name <span className="text-muted">(required)</span>
            </Label>
            <Input
              id="booking-last-name"
              name="lastName"
              autoComplete="family-name"
              autoCapitalize="words"
              value={draft.lastName}
              aria-invalid={Boolean(detailsErrors.lastName)}
              aria-describedby={detailsErrors.lastName ? 'last-name-error' : undefined}
              onChange={(event) => {
                updateDraft({ lastName: toInitialCaps(event.target.value) })
                clearDetailsErrors()
              }}
            />
            {detailsErrors.lastName ? (
              <p id="last-name-error" className="text-sm text-red-800" role="alert">
                {detailsErrors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-email">
            Email address <span className="text-muted">(required)</span>
          </Label>
          <Input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
            value={draft.email}
            aria-invalid={Boolean(detailsErrors.email)}
            aria-describedby={detailsErrors.email ? 'email-error' : undefined}
            onChange={(event) => {
              updateDraft({ email: capitalizeFirstOnly(event.target.value) })
              clearDetailsErrors()
            }}
          />
          {detailsErrors.email ? (
            <p id="email-error" className="text-sm text-red-800" role="alert">
              {detailsErrors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-phone">
            Phone number <span className="text-muted">(required)</span>
          </Label>
          <Input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="(555) 123-4567"
            value={draft.phone}
            aria-invalid={Boolean(detailsErrors.phone)}
            aria-describedby={detailsErrors.phone ? 'phone-error' : undefined}
            onChange={(event) => {
              updateDraft({ phone: formatUsPhone(event.target.value) })
              clearDetailsErrors()
            }}
          />
          {detailsErrors.phone ? (
            <p id="phone-error" className="text-sm text-red-800" role="alert">
              {detailsErrors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-practice-area">
            Practice area <span className="text-muted">(required)</span>
          </Label>
          <select
            id="booking-practice-area"
            name="practiceArea"
            value={draft.practiceArea}
            aria-invalid={Boolean(detailsErrors.practiceArea)}
            aria-describedby={
              detailsErrors.practiceArea ? 'practice-area-error' : undefined
            }
            onChange={(event) => {
              updateDraft({ practiceArea: event.target.value })
              clearDetailsErrors()
            }}
            className={cn(
              'flex h-11 w-full rounded-sm border border-border bg-surface px-3 py-2 text-base text-navy shadow-soft focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25',
              !draft.practiceArea && 'text-muted',
            )}
          >
            <option value="">{contactForm.selectOption}</option>
            {practiceAreaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {detailsErrors.practiceArea ? (
            <p id="practice-area-error" className="text-sm text-red-800" role="alert">
              {detailsErrors.practiceArea}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-2 border-t border-border pt-4 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" onClick={() => setStep('consultation')}>
          Back
        </Button>
        <Button type="button" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  )
}
