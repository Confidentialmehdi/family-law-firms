import { site } from '@/content/site'
import type { ClientStory } from '@/content/results'

type StoryCardProps = {
  story: ClientStory
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-surface">
      {/* Identity row */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e8e2d8] font-serif text-xs tracking-wide text-navy"
          aria-hidden="true"
        >
          {story.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-navy">{story.name}</p>
          <p className="truncate text-xs text-muted">{story.city}</p>
        </div>
      </div>

      {/* Main image — 4:5 */}
      <div className="relative aspect-[4/5] w-full bg-[#ebe4da]">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="font-serif text-base text-navy/55">{story.practiceArea}</span>
          <span className="text-[0.65rem] tracking-wide text-muted/80 uppercase">
            {site.sampleImageryLabel}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="flex flex-1 flex-col px-4 pt-4 pb-5">
        <p className="text-[0.65rem] tracking-[0.14em] text-brass uppercase">
          {story.practiceArea}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-navy">{story.title}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{story.caption}</p>
        <p className="mt-4 text-xs text-muted/75">Fictional client story</p>
      </div>
    </article>
  )
}
