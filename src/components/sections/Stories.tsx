import { site } from '@/content/site'
import { stories } from '@/content/stories'

export function Stories() {
  return (
    <section
      id="stories"
      className="scroll-mt-24 border-b border-border/60 bg-surface/40"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="stories-heading" className="font-serif text-3xl text-navy md:text-4xl">
            Short transformation stories
          </h2>
          <p className="mt-3 text-lg text-muted">
            Illustrative journeys focused on understanding and preparation—not promised outcomes.
          </p>
          <p className="mt-2 text-sm text-muted">{site.fictionalLabel}</p>
        </div>

        <ul className="mt-12 grid gap-12 lg:grid-cols-3">
          {stories.map((story) => (
            <li key={story.id}>
              <h3 className="font-serif text-2xl text-navy">{story.title}</h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs tracking-[0.14em] text-brass uppercase">Situation</dt>
                  <dd className="mt-1 text-base text-muted">{story.situation}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-brass uppercase">Conversation</dt>
                  <dd className="mt-1 text-base text-muted">{story.conversation}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.14em] text-brass uppercase">Next step</dt>
                  <dd className="mt-1 text-base text-navy/90">{story.nextStep}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
