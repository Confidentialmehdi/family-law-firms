import type { ClientStory } from '@/content/results'
import { cn } from '@/lib/utils'

type StoryCardProps = {
  story: ClientStory
  /** Compact cards suit homepage previews; full cards suit the results page. */
  variant?: 'full' | 'compact'
}

export function StoryCard({ story, variant = 'full' }: StoryCardProps) {
  const compact = variant === 'compact'

  return (
    <article
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-sm border border-border bg-surface',
      )}
    >
      <div
        className={cn(
          'flex items-center',
          compact ? 'gap-2 px-3 pt-3 pb-2' : 'gap-3 px-4 pt-4 pb-3',
        )}
      >
        <div
          className={cn(
            'flex shrink-0 items-center justify-center rounded-full bg-[#e8e2d8] font-serif tracking-wide text-navy',
            compact ? 'size-8 text-[0.65rem]' : 'size-10 text-xs',
          )}
          aria-hidden="true"
        >
          {story.initials}
        </div>
        <div className="min-w-0">
          <p
            className={cn(
              'truncate font-medium text-navy',
              compact ? 'text-xs' : 'text-sm',
            )}
          >
            {story.name}
          </p>
          <p className={cn('truncate text-muted', compact ? 'text-[0.7rem]' : 'text-xs')}>
            {story.city}
          </p>
        </div>
      </div>

      <div
        className={cn(
          'relative w-full bg-[#ebe4da]',
          compact ? 'aspect-[3/4]' : 'aspect-[4/5]',
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(165deg, rgb(23 43 58 / 0.06) 0%, transparent 50%),
              linear-gradient(0deg, rgb(165 139 96 / 0.1), transparent 45%),
              repeating-linear-gradient(
                -8deg,
                transparent,
                transparent 14px,
                rgb(165 139 96 / 0.04) 14px,
                rgb(165 139 96 / 0.04) 15px
              )
            `,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 text-center">
          <span
            className={cn(
              'font-serif text-navy/55',
              compact ? 'text-sm' : 'text-base',
            )}
          >
            {story.practiceArea}
          </span>
        </div>
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col',
          compact ? 'px-3 pt-2.5 pb-3' : 'px-4 pt-4 pb-5',
        )}
      >
        <p className="text-[0.65rem] tracking-[0.14em] text-brass uppercase">
          {story.practiceArea}
        </p>
        <h3
          className={cn(
            'mt-1.5 font-serif leading-snug text-navy',
            compact ? 'text-base' : 'text-xl',
          )}
        >
          {story.title}
        </h3>
        <p
          className={cn(
            'mt-1.5 flex-1 leading-relaxed text-muted',
            compact ? 'line-clamp-2 text-sm' : 'mt-2 text-base',
          )}
        >
          {story.caption}
        </p>
      </div>
    </article>
  )
}
