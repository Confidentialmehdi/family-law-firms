import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { practiceAreaOptions } from '@/content/practiceAreas'
import { contactForm, site } from '@/content/site'
import { formatUsPhone } from '@/lib/inputFormat'
import { cn } from '@/lib/utils'

type ContactMethod = 'email' | 'phone'

type FormState = {
  name: string
  method: ContactMethod
  email: string
  phone: string
  practiceArea: string
  message: string
  preferredTime: string
}

const emptyForm: FormState = {
  name: '',
  method: 'email',
  email: '',
  phone: '',
  practiceArea: '',
  message: '',
  preferredTime: '',
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10
}

type ContactRequestFormProps = {
  /** Compact closing-section form omits message and preferred time. */
  variant?: 'full' | 'compact'
  idPrefix?: string
}

export function ContactRequestForm({
  variant = 'full',
  idPrefix = 'contact',
}: ContactRequestFormProps) {
  const compact = variant === 'compact'
  const [form, setForm] = React.useState<FormState>(emptyForm)
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({})
  const [completed, setCompleted] = React.useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = contactForm.validation.name
    if (!form.email.trim()) next.email = contactForm.validation.email
    else if (!isValidEmail(form.email.trim())) next.email = contactForm.validation.emailInvalid
    if (!form.phone.trim()) next.phone = contactForm.validation.phone
    else if (!isValidPhone(form.phone.trim())) next.phone = contactForm.validation.phoneInvalid
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!validate()) return
    setCompleted(true)
  }

  function handleReset() {
    setForm(emptyForm)
    setErrors({})
    setCompleted(false)
  }

  if (completed) {
    return (
      <div className="rounded-sm border border-border bg-surface px-4 py-6 text-center" role="status" aria-live="polite">
        <p className="font-serif text-lg text-navy">{site.contactComplete}</p>
        <Button type="button" variant="outline" className="mt-5" onClick={handleReset}>
          {contactForm.startAgain}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn('space-y-4', compact && 'space-y-3.5')}>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-name`}>
          Full name <span className="text-muted">(required)</span>
        </Label>
        <Input
          id={`${idPrefix}-name`}
          name="name"
          autoComplete="name"
          value={form.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
          onChange={(event) => update('name', event.target.value)}
        />
        {errors.name ? (
          <p id={`${idPrefix}-name-error`} className="text-sm text-red-800" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-navy">
          Preferred contact method <span className="font-normal text-muted">(required)</span>
        </legend>
        <RadioGroup
          value={form.method}
          onValueChange={(value) => update('method', value as ContactMethod)}
          className="grid gap-2 sm:grid-cols-2"
        >
          {(
            [
              { value: 'email', label: 'Email' },
              { value: 'phone', label: 'Phone' },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 transition-colors has-[[data-state=checked]]:border-teal has-[[data-state=checked]]:bg-teal/5"
            >
              <RadioGroupItem value={option.value} id={`${idPrefix}-method-${option.value}`} />
              <span className="text-base text-navy">{option.label}</span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-email`}>
          Email address <span className="text-muted">(required)</span>
        </Label>
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
          onChange={(event) => update('email', event.target.value)}
        />
        {errors.email ? (
          <p id={`${idPrefix}-email-error`} className="text-sm text-red-800" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-phone`}>
          Phone number <span className="text-muted">(required)</span>
        </Label>
        <Input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="numeric"
          placeholder="(555) 123-4567"
          value={form.phone}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
          onChange={(event) => update('phone', formatUsPhone(event.target.value))}
        />
        {errors.phone ? (
          <p id={`${idPrefix}-phone-error`} className="text-sm text-red-800" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-practice-area`}>
          Practice area <span className="text-muted">(optional)</span>
        </Label>
        <select
          id={`${idPrefix}-practice-area`}
          name="practiceArea"
          value={form.practiceArea}
          onChange={(event) => update('practiceArea', event.target.value)}
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

      {!compact ? (
        <>
          <div className="space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <Label htmlFor={`${idPrefix}-message`}>
                Brief message <span className="text-muted">(optional)</span>
              </Label>
              <p className="text-sm text-muted">{contactForm.sensitiveNote}</p>
            </div>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              rows={4}
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              className="flex w-full rounded-sm border border-border bg-surface px-3 py-2 text-base text-navy shadow-soft focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-preferred-time`}>
              Preferred contact time <span className="text-muted">(optional)</span>
            </Label>
            <Input
              id={`${idPrefix}-preferred-time`}
              name="preferredTime"
              autoComplete="off"
              placeholder={contactForm.preferredTimePlaceholder}
              value={form.preferredTime}
              onChange={(event) => update('preferredTime', event.target.value)}
            />
          </div>
        </>
      ) : null}

      <Button type="submit" variant={compact ? 'outline' : 'default'} className="w-full sm:w-auto">
        {contactForm.submitLabel}
      </Button>
    </form>
  )
}
