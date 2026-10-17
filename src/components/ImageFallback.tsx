import { cn } from '@/lib/utils'

type ImageFallbackProps = {
  label: string
  aspect?: 'portrait' | 'wide' | 'square'
  className?: string
}

export function ImageFallback({
  label,
  aspect = 'portrait',
  className,
}: ImageFallbackProps) {
  const aspectClass =
    aspect === 'wide' ? 'aspect-[16/10]' : aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'

  return (
    <figure className={cn('relative overflow-hidden bg-[#e8e2d8]', aspectClass, className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(165deg, rgb(23 43 58 / 0.08) 0%, transparent 45%),
            linear-gradient(0deg, rgb(165 139 96 / 0.12), transparent 40%),
            repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 11px,
              rgb(165 139 96 / 0.04) 11px,
              rgb(165 139 96 / 0.04) 12px
            )
          `,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-serif text-lg text-navy/70">{label}</span>
      </div>
    </figure>
  )
}
