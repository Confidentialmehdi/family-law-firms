import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { practiceAreaOptions } from '@/content/practiceAreas'
import { site } from '@/content/site'
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

export function ContactRequestForm() {
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
    if (!form.name.trim()) next.name = 'Enter your full name.'
    if (form.method === 'email') {
      if (!form.email.trim()) next.email = 'Enter your email address.'
      else if (!isValidEmail(form.email.trim())) next.email = 'Enter a valid email address.'
    } else {
      if (!form.phone.trim()) next.phone = 'Enter your phone number.'
      else if (!isValidPhone(form.phone.trim())) next.phone = 'Enter a valid phone number.'
    }
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
      <div className="rounded-sm border border-border bg-surface px-5 py-8 text-center">
        <p className="font-serif text-xl text-navy" role="status">
          {site.contactDemoComplete}
        </p>
        <p className="mt-3 text-sm text-muted">
          Nothing was emailed, stored, or forwarded. You can reset the form to try again.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={handleReset}>
          Reset form
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-sm bg-brass/10 px-3 py-2 text-sm text-navy/80">
        {site.contactDemoBanner}
      </p>

      <div className="space-y-2">
        <Label htmlFor="contact-name">
          Full name <span className="text-muted">(required)</span>
        </Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={form.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          onChange={(event) => update('name', event.target.value)}
        />
        {errors.name ? (
          <p id="contact-name-error" className="text-sm text-red-800" role="alert">
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
              <RadioGroupItem value={option.value} id={`contact-method-${option.value}`} />
              <span className="text-base text-navy">{option.label}</span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      {form.method === 'email' ? (
        <div className="space-y-2">
          <Label htmlFor="contact-email">
            Email address <span className="text-muted">(required)</span>
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            onChange={(event) => update('email', event.target.value)}
          />
          {errors.email ? (
            <p id="contact-email-error" className="text-sm text-red-800" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="contact-phone">
            Phone number <span className="text-muted">(required)</span>
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            onChange={(event) => update('phone', event.target.value)}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="text-sm text-red-800" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="contact-practice-area">
          Practice area <span className="text-muted">(optional)</span>
        </Label>
        <select
          id="contact-practice-area"
          name="practiceArea"
          value={form.practiceArea}
          onChange={(event) => update('practiceArea', event.target.value)}
          className={cn(
            'flex h-11 w-full rounded-sm border border-border bg-surface px-3 py-2 text-base text-navy shadow-soft focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25',
          )}
        >
          <option value="">Select an option</option>
          {practiceAreaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <Label htmlFor="contact-message">
            Brief message <span className="text-muted">(optional)</span>
          </Label>
          <p className="text-sm text-muted">Please avoid including sensitive case details.</p>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          className="flex w-full rounded-sm border border-border bg-surface px-3 py-2 text-base text-navy shadow-soft focus-visible:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/25"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-preferred-time">
          Preferred contact time <span className="text-muted">(optional)</span>
        </Label>
        <Input
          id="contact-preferred-time"
          name="preferredTime"
          autoComplete="off"
          placeholder="e.g. Weekday mornings"
          value={form.preferredTime}
          onChange={(event) => update('preferredTime', event.target.value)}
        />
      </div>

      <Button type="submit">{'Request contact'}</Button>
    </form>
  )
}
