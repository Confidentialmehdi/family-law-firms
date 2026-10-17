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
          compact ? 'gap-2.5 px-3.5 pt-3.5 pb-2.5' : 'gap-3 px-4 pt-4 pb-3',
        )}
      >
        <div
          className={cn(
            'flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e4e7eb] font-serif tracking-wide text-navy',
            compact ? 'size-9 text-[0.7rem]' : 'size-10 text-xs',
          )}
          aria-hidden="true"
        >
          <img
            src={story.imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="min-w-0">
          <p className={cn('truncate font-medium text-navy', compact ? 'text-sm' : 'text-sm')}>
            {story.name}
          </p>
          <p className="truncate text-xs text-muted">{story.city}</p>
        </div>
      </div>

      <div
        className={cn(
          'relative w-full overflow-hidden bg-[#e4e7eb]',
          compact ? 'aspect-[3/4]' : 'aspect-[4/5]',
        )}
      >
        <img
          src={story.imageSrc}
          alt={story.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
          aria-hidden="true"
        />
        <p className="absolute right-3 bottom-3 left-3 font-serif text-sm text-ivory/95">
          {story.practiceArea}
        </p>
      </div>

      <div className={cn('flex flex-1 flex-col', compact ? 'px-3.5 pt-3 pb-4' : 'px-4 pt-4 pb-5')}>
        <p className="text-[0.65rem] tracking-[0.14em] text-brass uppercase">
          {story.practiceArea}
        </p>
        <h3
          className={cn(
            'mt-2 font-serif leading-snug text-navy',
            compact ? 'text-lg' : 'text-xl',
          )}
        >
          {story.title}
        </h3>
        <p
          className={cn(
            'mt-2 flex-1 leading-relaxed text-muted',
            compact ? 'line-clamp-2 text-sm' : 'text-base',
          )}
        >
          {story.caption}
        </p>
      </div>
    </article>
  )
}
