import { BadgeCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

type StoryClientIdentityProps = {
  name: string
  city: string
  className?: string
  nameClassName?: string
}

/**
 * Client identity for illustrative stories: gold check beside the name,
 * city, then a quiet “Illustrative story” label.
 */
export function StoryClientIdentity({
  name,
  city,
  className,
  nameClassName,
}: StoryClientIdentityProps) {
  return (
    <div className={cn('min-w-0', className)}>
      <span className="inline-flex min-w-0 items-center gap-1.5">
        <span className={cn('truncate font-medium text-navy', nameClassName)}>{name}</span>
        <BadgeCheck
          className="size-4 shrink-0 fill-[#c9a227] text-white"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
      <p className="truncate text-xs text-muted">{city}</p>
      <p className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.12em] text-[#c9a227] uppercase">
        Illustrative story
      </p>
    </div>
  )
}
