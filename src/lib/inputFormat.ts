/** Capitalize the first letter of each alphabetic run (title-style initial caps). */
export function toInitialCaps(value: string): string {
  return value.replace(/(^|[^A-Za-z])([A-Za-z])/g, (_, sep: string, char: string) => {
    return `${sep}${char.toUpperCase()}`
  })
}

/** Capitalize only the first letter of the whole string; leave the rest unchanged. */
export function capitalizeFirstOnly(value: string): string {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * Require local@domain.tld — rejects bare domains like "example.com"
 * and incomplete values like "user@" or "user@example".
 */
export function isValidEmailAddress(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed.includes('@')) return false
  return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(trimmed)
}

/** Digits only, max 10, for US phone numbers. */
export function phoneDigits(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10)
}

/** Format as (XXX) XXX-XXXX while typing. */
export function formatUsPhone(value: string): string {
  const digits = phoneDigits(value)
  if (digits.length === 0) return ''
  if (digits.length < 4) return `(${digits}`
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export function isValidUsPhone(value: string): boolean {
  return phoneDigits(value).length === 10
}
