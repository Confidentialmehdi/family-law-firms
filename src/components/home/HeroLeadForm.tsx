import * as React from 'react'
import { CircleCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { homeHeroForm } from '@/content/home'
import { practiceAreaOptions } from '@/content/practiceAreas'
import {
  capitalizeFirstOnly,
  formatUsPhone,
  formatUsZip,
  isValidEmailAddress,
  isValidUsPhone,
  isValidUsZip,
  toInitialCaps,
} from '@/lib/inputFormat'
import { cn } from '@/lib/utils'

type FormState = {
  firstName: string
  lastName: string
  phone: string
  zip: string
  email: string
  caseType: string
  details: string
}

type FieldKey = keyof FormState

const emptyForm: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  zip: '',
  email: '',
  caseType: '',
  details: '',
}

const fieldClass =
  'flex h-11 w-full rounded-md border-0 bg-[#dce3ec] px-3.5 py-2 text-base text-navy placeholder:text-navy/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c518]/65'

/**
 * Dark hero intake panel matching a common law-firm lead form layout:
 * two-up name/phone/zip rows, email, case type, details, consent, yellow CTA.
 */
export function HeroLeadForm() {
  const [form, setForm] = React.useState<FormState>(emptyForm)
  const [errors, setErrors] = React.useState<Partial<Record<FieldKey, string>>>({})
  const [completed, setCompleted] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const submitTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current)
    }
  }, [])

  function update<K extends FieldKey>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  function validate() {
    const next: Partial<Record<FieldKey, string>> = {}
    if (!form.firstName.trim()) next.firstName = homeHeroForm.validation.firstName
    if (!form.lastName.trim()) next.lastName = homeHeroForm.validation.lastName
    if (!form.phone.trim()) next.phone = homeHeroForm.validation.phone
    else if (!isValidUsPhone(form.phone)) next.phone = homeHeroForm.validation.phoneInvalid
    if (!form.zip.trim()) next.zip = homeHeroForm.validation.zip
    else if (!isValidUsZip(form.zip)) next.zip = homeHeroForm.validation.zipInvalid
    if (!form.email.trim()) next.email = homeHeroForm.validation.email
    else if (!isValidEmailAddress(form.email)) next.email = homeHeroForm.validation.emailInvalid
    if (!form.caseType) next.caseType = homeHeroForm.validation.caseType
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (submitting) return
    if (!validate()) return
    setSubmitting(true)
    submitTimeoutRef.current = setTimeout(() => {
      submitTimeoutRef.current = null
      setSubmitting(false)
      setCompleted(true)
    }, 2000)
  }

  function handleReset() {
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current)
      submitTimeoutRef.current = null
    }
    setForm(emptyForm)
    setErrors({})
    setSubmitting(false)
    setCompleted(false)
  }

  if (completed) {
    return (
      <div
        id="hero-form"
        className="rounded-sm border border-[#7eb6d9]/70 bg-[#0c2340] px-5 py-8 text-center sm:px-6"
        role="status"
        aria-live="polite"
      >
        <CircleCheck className="mx-auto size-12 text-[#f5c518]" strokeWidth={1.5} aria-hidden />
        <p className="mt-4 font-serif text-2xl text-white">{homeHeroForm.completeHeading}</p>
        <p className="mt-2 text-base text-white/75">{homeHeroForm.completeCopy}</p>
        <Button
          type="button"
          className="mt-6 w-full bg-[#f5c518] font-bold text-navy hover:bg-[#e6b800]"
          onClick={handleReset}
        >
          {homeHeroForm.startAgain}
        </Button>
        <p className="mt-5 text-sm text-white/65">{homeHeroForm.completeDemoNotice}</p>
      </div>
    )
  }

  return (
    <div
      id="hero-form"
      className="rounded-sm border border-[#7eb6d9]/70 bg-[#0c2340] px-4 py-5 sm:px-5 sm:py-6"
    >
      <h2 className="text-[1.65rem] leading-tight font-bold text-white sm:text-[1.85rem]">
        {homeHeroForm.heading}
      </h2>

      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="hero-first-name" className="sr-only">
              {homeHeroForm.firstNamePlaceholder}
            </label>
            <input
              id="hero-first-name"
              name="firstName"
              autoComplete="given-name"
              autoCapitalize="words"
              placeholder={homeHeroForm.firstNamePlaceholder}
              value={form.firstName}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? 'hero-first-name-error' : undefined}
              onChange={(event) => update('firstName', toInitialCaps(event.target.value))}
              className={fieldClass}
            />
            {errors.firstName ? (
              <p id="hero-first-name-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="hero-last-name" className="sr-only">
              {homeHeroForm.lastNamePlaceholder}
            </label>
            <input
              id="hero-last-name"
              name="lastName"
              autoComplete="family-name"
              autoCapitalize="words"
              placeholder={homeHeroForm.lastNamePlaceholder}
              value={form.lastName}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? 'hero-last-name-error' : undefined}
              onChange={(event) => update('lastName', toInitialCaps(event.target.value))}
              className={fieldClass}
            />
            {errors.lastName ? (
              <p id="hero-last-name-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
                {errors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="hero-phone" className="sr-only">
              {homeHeroForm.phonePlaceholder}
            </label>
            <input
              id="hero-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder={homeHeroForm.phonePlaceholder}
              value={form.phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'hero-phone-error' : undefined}
              onChange={(event) => update('phone', formatUsPhone(event.target.value))}
              className={fieldClass}
            />
            {errors.phone ? (
              <p id="hero-phone-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="hero-zip" className="sr-only">
              {homeHeroForm.zipPlaceholder}
            </label>
            <input
              id="hero-zip"
              name="zip"
              autoComplete="postal-code"
              inputMode="numeric"
              placeholder={homeHeroForm.zipPlaceholder}
              value={form.zip}
              aria-invalid={Boolean(errors.zip)}
              aria-describedby={errors.zip ? 'hero-zip-error' : undefined}
              onChange={(event) => update('zip', formatUsZip(event.target.value))}
              className={fieldClass}
            />
            {errors.zip ? (
              <p id="hero-zip-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
                {errors.zip}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="hero-email" className="sr-only">
            {homeHeroForm.emailPlaceholder}
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={homeHeroForm.emailPlaceholder}
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'hero-email-error' : undefined}
            onChange={(event) => update('email', capitalizeFirstOnly(event.target.value))}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="hero-email-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="hero-case-type" className="sr-only">
            Case Type
          </label>
          <select
            id="hero-case-type"
            name="caseType"
            value={form.caseType}
            aria-invalid={Boolean(errors.caseType)}
            aria-describedby={errors.caseType ? 'hero-case-type-error' : undefined}
            onChange={(event) => update('caseType', event.target.value)}
            className={cn(
              fieldClass,
              'appearance-none bg-[length:1rem] bg-[right_0.85rem_center] bg-no-repeat pr-10',
              !form.caseType && 'text-navy/55',
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23252629' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="">{homeHeroForm.caseTypePlaceholder}</option>
            {practiceAreaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.caseType ? (
            <p id="hero-case-type-error" className="mt-1 text-sm text-[#ffb4b4]" role="alert">
              {errors.caseType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="hero-details" className="sr-only">
            Case details
          </label>
          <textarea
            id="hero-details"
            name="details"
            rows={4}
            placeholder={homeHeroForm.detailsPlaceholder}
            value={form.details}
            onChange={(event) => update('details', event.target.value)}
            className="flex min-h-[6.5rem] w-full resize-y rounded-md border-0 bg-[#dce3ec] px-3.5 py-2.5 text-base text-navy placeholder:text-navy/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c518]/65"
          />
        </div>

        <div className="space-y-3 pt-1 text-[0.7rem] leading-relaxed text-white/90 sm:text-xs">
          <p>
            {homeHeroForm.termsLead}{' '}
            <Link to="/terms" className="underline underline-offset-2 hover:text-white">
              {homeHeroForm.termsLinkLabel}
            </Link>{' '}
            {homeHeroForm.privacyLead}{' '}
            <Link to="/privacy" className="underline underline-offset-2 hover:text-white">
              {homeHeroForm.privacyLinkLabel}
            </Link>
            .
          </p>
          <p>{homeHeroForm.consentCopy}</p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="flex h-12 w-full items-center justify-center rounded-md bg-[#f5c518] text-base font-bold text-navy transition-colors hover:bg-[#e6b800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c518] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c2340] disabled:opacity-60"
        >
          {submitting ? homeHeroForm.submittingLabel : homeHeroForm.submitLabel}
        </button>

        <div className="space-y-1 pt-1 text-center text-[0.65rem] leading-relaxed text-white/80 sm:text-[0.7rem]">
          <p>{homeHeroForm.resultsDisclaimer}</p>
          <p>{homeHeroForm.copyright}</p>
        </div>
      </form>
    </div>
  )
}
