import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { homeHeroForm } from '@/content/home'
import type { RequestReceivedState } from '@/content/requestReceived'
import {
  capitalizeFirstOnly,
  formatUsPhone,
  isValidEmailAddress,
  isValidUsPhone,
  toInitialCaps,
} from '@/lib/inputFormat'
import { cn } from '@/lib/utils'

type FormState = {
  firstName: string
  lastName: string
  phone: string
  email: string
  caseType: string
  contactMethod: 'phone' | 'email' | 'text' | ''
  contactWindow: string
  details: string
}

type FieldKey = keyof FormState

const emptyForm: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  caseType: '',
  contactMethod: '',
  contactWindow: '',
  details: '',
}

const fieldClass =
  'flex h-10 w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm text-navy shadow-soft placeholder:text-muted/70 focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25 sm:text-base'

const selectChevron = {
  backgroundColor: 'var(--color-surface)',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235f6165' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.85rem center',
  backgroundSize: '1rem',
} as const

type HeroLeadFormProps = {
  className?: string
  /** Prefix for field ids when the form appears more than once on a page. */
  idPrefix?: string
  /** Dark charcoal panel (hero) or white surface panel (closing). */
  tone?: 'dark' | 'light'
}

/**
 * Consultation request intake — same field layout as the hero lead panel.
 */
export function HeroLeadForm({
  className,
  idPrefix = 'hero',
  tone = 'dark',
}: HeroLeadFormProps) {
  const navigate = useNavigate()
  const [form, setForm] = React.useState<FormState>(emptyForm)
  const [errors, setErrors] = React.useState<Partial<Record<FieldKey, string>>>({})
  const [submitting, setSubmitting] = React.useState(false)
  const submitTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const light = tone === 'light'

  const id = React.useCallback((name: string) => `${idPrefix}-${name}`, [idPrefix])
  const errorClass = light ? 'mt-1 text-sm text-teal' : 'mt-1 text-sm text-red-300'

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
    const nextState: RequestReceivedState = {
      firstName: form.firstName.trim(),
      contactMethod: form.contactMethod || undefined,
      caseType: form.caseType || undefined,
    }
    submitTimeoutRef.current = setTimeout(() => {
      submitTimeoutRef.current = null
      navigate('/request-received', { state: nextState })
    }, 2000)
  }

  return (
    <div
      id={id('form')}
      className={cn(
        'flex h-full min-h-0 flex-col rounded-sm px-3.5 py-3.5 sm:px-4 sm:py-4',
        light
          ? 'border border-border bg-white'
          : 'border border-brass/35 bg-navy',
        className,
      )}
    >
      <h2
        className={cn(
          'shrink-0 font-serif text-lg leading-tight sm:text-xl',
          light ? 'text-navy' : 'text-ivory',
        )}
      >
        {homeHeroForm.heading}
      </h2>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-2.5 flex min-h-0 flex-1 flex-col gap-2 sm:mt-3 sm:gap-2.5"
      >
        <div className="grid shrink-0 grid-cols-2 gap-3">
          <div>
            <label htmlFor={id('first-name')} className="sr-only">
              {homeHeroForm.firstNamePlaceholder}
            </label>
            <input
              id={id('first-name')}
              name="firstName"
              autoComplete="given-name"
              autoCapitalize="words"
              placeholder={homeHeroForm.firstNamePlaceholder}
              value={form.firstName}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? id('first-name-error') : undefined}
              onChange={(event) => update('firstName', toInitialCaps(event.target.value))}
              className={fieldClass}
            />
            {errors.firstName ? (
              <p id={id('first-name-error')} className={errorClass} role="alert">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor={id('last-name')} className="sr-only">
              {homeHeroForm.lastNamePlaceholder}
            </label>
            <input
              id={id('last-name')}
              name="lastName"
              autoComplete="family-name"
              autoCapitalize="words"
              placeholder={homeHeroForm.lastNamePlaceholder}
              value={form.lastName}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? id('last-name-error') : undefined}
              onChange={(event) => update('lastName', toInitialCaps(event.target.value))}
              className={fieldClass}
            />
            {errors.lastName ? (
              <p id={id('last-name-error')} className={errorClass} role="alert">
                {errors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="shrink-0">
          <label htmlFor={id('phone')} className="sr-only">
            {homeHeroForm.phonePlaceholder}
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            placeholder={homeHeroForm.phonePlaceholder}
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? id('phone-error') : undefined}
            onChange={(event) => update('phone', formatUsPhone(event.target.value))}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id={id('phone-error')} className={errorClass} role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="shrink-0">
          <label htmlFor={id('email')} className="sr-only">
            {homeHeroForm.emailPlaceholder}
          </label>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={homeHeroForm.emailPlaceholder}
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? id('email-error') : undefined}
            onChange={(event) => update('email', capitalizeFirstOnly(event.target.value))}
            className={fieldClass}
          />
          {errors.email ? (
            <p id={id('email-error')} className={errorClass} role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="shrink-0">
          <label htmlFor={id('case-type')} className="sr-only">
            Practice area
          </label>
          <select
            id={id('case-type')}
            name="caseType"
            value={form.caseType}
            aria-invalid={Boolean(errors.caseType)}
            aria-describedby={errors.caseType ? id('case-type-error') : undefined}
            onChange={(event) => update('caseType', event.target.value)}
            className={cn(
              fieldClass,
              'appearance-none pr-10 [color-scheme:light]',
              !form.caseType && 'text-muted',
            )}
            style={selectChevron}
          >
            <option value="">{homeHeroForm.caseTypePlaceholder}</option>
            {homeHeroForm.practiceTopics.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.caseType ? (
            <p id={id('case-type-error')} className={errorClass} role="alert">
              {errors.caseType}
            </p>
          ) : null}
        </div>

        <fieldset className="shrink-0">
          <legend
            className={cn(
              'mb-2 text-xs tracking-wide uppercase',
              light ? 'text-muted' : 'text-ivory/65',
            )}
          >
            {homeHeroForm.formatLabel}
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {homeHeroForm.formats.map((option) => {
              const selected = form.contactMethod === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => update('contactMethod', option.value)}
                  aria-pressed={selected}
                  className={cn(
                    'flex min-h-10 items-center justify-center rounded-sm border px-2 py-2 text-sm font-medium transition-colors',
                    selected
                      ? light
                        ? 'border-teal bg-teal/10 text-navy ring-1 ring-teal/30'
                        : 'border-brass bg-ivory/10 text-ivory ring-1 ring-brass/40'
                      : light
                        ? 'border-border bg-surface text-navy hover:border-navy/30'
                        : 'border-border/40 bg-surface text-navy hover:border-brass/50',
                  )}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </fieldset>

        <div className="shrink-0">
          <label htmlFor={id('contact-window')} className="sr-only">
            Best time to reach you
          </label>
          <select
            id={id('contact-window')}
            name="contactWindow"
            value={form.contactWindow}
            onChange={(event) => update('contactWindow', event.target.value)}
            className={cn(
              fieldClass,
              'appearance-none pr-10 [color-scheme:light]',
              !form.contactWindow && 'text-muted',
            )}
            style={selectChevron}
          >
            <option value="">{homeHeroForm.contactWindowPlaceholder}</option>
            {homeHeroForm.contactWindows.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <label htmlFor={id('details')} className="sr-only">
            What you would like to discuss
          </label>
          <textarea
            id={id('details')}
            name="details"
            rows={3}
            placeholder={homeHeroForm.detailsPlaceholder}
            value={form.details}
            onChange={(event) => update('details', event.target.value)}
            className="min-h-[4.5rem] w-full flex-1 resize-none rounded-sm border border-border bg-surface px-3 py-2 text-sm text-navy shadow-soft placeholder:text-muted/70 focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25 sm:text-base"
          />
        </div>

        <p
          className={cn(
            'shrink-0 text-xs',
            light ? 'text-muted' : 'text-brass-muted',
          )}
        >
          {homeHeroForm.consultationNote}
        </p>

        <div
          className={cn(
            'shrink-0 space-y-2 text-[0.65rem] leading-relaxed sm:text-[0.7rem]',
            light ? 'text-muted' : 'text-ivory/70',
          )}
        >
          <p>
            {homeHeroForm.termsLead}{' '}
            <Link
              to="/terms"
              className={cn(
                'underline underline-offset-2',
                light ? 'text-teal hover:text-teal-hover' : 'text-brass-muted hover:text-brass',
              )}
            >
              {homeHeroForm.termsLinkLabel}
            </Link>{' '}
            {homeHeroForm.privacyLead}{' '}
            <Link
              to="/privacy"
              className={cn(
                'underline underline-offset-2',
                light ? 'text-teal hover:text-teal-hover' : 'text-brass-muted hover:text-brass',
              )}
            >
              {homeHeroForm.privacyLinkLabel}
            </Link>
            .
          </p>
          <p>{homeHeroForm.consentCopy}</p>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          aria-busy={submitting}
          className="w-full shrink-0"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              {homeHeroForm.submittingLabel}
            </>
          ) : (
            homeHeroForm.submitLabel
          )}
        </Button>

        <p
          className={cn(
            'shrink-0 text-center text-[0.65rem] leading-snug sm:text-[0.7rem]',
            light ? 'text-muted' : 'text-ivory/55',
          )}
        >
          {homeHeroForm.footerLine}
        </p>
      </form>
    </div>
  )
}
