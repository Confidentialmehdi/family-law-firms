import { cn } from '@/lib/utils'

type PageHeadingProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

/** Sole page h1; receives focus after client-side navigation. */
export function PageHeading({
  children,
  className,
  id = 'page-heading',
}: PageHeadingProps) {
  return (
    <h1
      id={id}
      tabIndex={-1}
      className={cn(
        'font-serif text-4xl leading-[1.15] text-navy outline-none md:text-5xl',
        className,
      )}
    >
      {children}
    </h1>
  )
}
