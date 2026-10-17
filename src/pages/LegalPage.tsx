import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

type LegalPageProps = {
  title: string
  updated: string
  paragraphs: readonly string[]
  formIdPrefix: string
}

export function LegalPage({ title, updated, paragraphs, formIdPrefix }: LegalPageProps) {
  useDocumentTitle(title)

  return (
    <main id="main">
      <div className="border-b border-border/60 bg-ivory">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>{title}</PageHeading>
          <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
          <div className="mt-10 max-w-2xl space-y-5 text-lg text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <ClosingConversion formIdPrefix={formIdPrefix} />
    </main>
  )
}
