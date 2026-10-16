import { ImageFallback } from '@/components/ImageFallback'
import { attorney } from '@/content/attorney'

export function MeetRobert() {
  return (
    <section
      id="meet-robert"
      className="scroll-mt-24 border-b border-border/60 bg-surface/40"
      aria-labelledby="meet-robert-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-14 md:px-8 md:py-20">
        <ImageFallback label="Portrait placeholder" className="w-full max-w-md" />

        <div>
          <p className="text-sm tracking-[0.12em] text-brass uppercase">Meet the attorney</p>
          <h2 id="meet-robert-heading" className="mt-2 font-serif text-3xl text-navy md:text-4xl">
            {attorney.name}
          </h2>
          <p className="mt-2 text-lg text-muted">
            {attorney.role}, {attorney.firm}
          </p>
          <p className="mt-6 max-w-xl text-lg text-navy/90">{attorney.bio}</p>

          <h3 className="mt-8 font-serif text-xl text-navy">Approach</h3>
          <ul className="mt-4 space-y-3">
            {attorney.approach.map((item) => (
              <li key={item} className="flex gap-3 text-base text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted/80">Sample profile content for this prototype.</p>
        </div>
      </div>
    </section>
  )
}
