import { BadgeCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

type VerifiedClientNameProps = {
  name: string
  className?: string
  /** Size of the name text; badge scales with the row. */
  nameClassName?: string
}

/** Client name with a golden Instagram-style verified badge. */
export function VerifiedClientName({
  name,
  className,
  nameClassName,
}: VerifiedClientNameProps) {
  return (
    <span className={cn('inline-flex min-w-0 items-center gap-1.5', className)}>
      <span className={cn('truncate font-medium text-navy', nameClassName)}>{name}</span>
      <span
        className="inline-flex shrink-0 items-center gap-1 text-[#c9a227]"
        title="Verified"
      >
        <BadgeCheck
          className="size-4 fill-[#c9a227] text-white"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
          Verified
        </span>
      </span>
    </span>
  )
}
