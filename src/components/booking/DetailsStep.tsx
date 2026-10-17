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
        <div className="space-y-2">
          <Label htmlFor="booking-name">
            Full name <span className="text-muted">(required)</span>
          </Label>
          <Input
            id="booking-name"
            name="name"
            autoComplete="name"
            autoCapitalize="words"
            value={draft.name}
            aria-invalid={Boolean(detailsErrors.name)}
            aria-describedby={detailsErrors.name ? 'name-error' : undefined}
            onChange={(event) => {
              updateDraft({ name: toInitialCaps(event.target.value) })
              clearDetailsErrors()
            }}
          />
          {detailsErrors.name ? (
            <p id="name-error" className="text-sm text-red-800" role="alert">
              {detailsErrors.name}
            </p>
          ) : null}
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
            Practice area <span className="text-muted">(optional)</span>
          </Label>
          <select
            id="booking-practice-area"
            name="practiceArea"
            value={draft.practiceArea}
            onChange={(event) => updateDraft({ practiceArea: event.target.value })}
            className={cn(
              'flex h-11 w-full rounded-sm border border-border bg-surface px-3 py-2 text-base text-navy shadow-soft focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25',
            )}
          >
            <option value="">{contactForm.selectOption}</option>
            {practiceAreaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
