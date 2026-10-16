import { ImageFallback } from '@/components/ImageFallback'
import { PageHeading } from '@/components/PageHeading'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { attorney } from '@/content/attorney'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function AboutUsPage() {
  useDocumentTitle('About Us')

  return (
    <main id="main">
      <div className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>About Us</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">{attorney.firmIntro}</p>

          <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-14">
            <ImageFallback label="Portrait placeholder" className="w-full max-w-md" />

            <div>
              <p className="text-sm tracking-[0.12em] text-brass uppercase">Attorney</p>
              <h2 className="mt-2 font-serif text-3xl text-navy">{attorney.name}</h2>
              <p className="mt-2 text-lg text-muted">
                {attorney.role}, {attorney.firm}
              </p>
              <p className="mt-6 max-w-xl text-lg text-navy/90">{attorney.bio}</p>

              <h3 className="mt-8 font-serif text-xl text-navy">Our approach</h3>
              <ul className="mt-4 space-y-3">
                {attorney.approach.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-muted">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brass"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted/80">
                Sample profile content for this prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ClosingCta />
    </main>
  )
}
