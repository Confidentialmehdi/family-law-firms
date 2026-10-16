import { ClosingCta } from '@/components/sections/ClosingCta'
import { PageHeading } from '@/components/PageHeading'
import { practiceAreas } from '@/content/practiceAreas'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function PracticeAreasPage() {
  useDocumentTitle('Practice Areas')

  return (
    <main id="main">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>Practice Areas</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Plain-language guidance for divorce, parenting, support, property, and agreements.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <li key={area.id} className="border-t border-brass/35 pt-5">
                <h2 className="font-serif text-xl text-navy">{area.title}</h2>
                <p className="mt-3 text-base text-muted">{area.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ClosingCta />
    </main>
  )
}
