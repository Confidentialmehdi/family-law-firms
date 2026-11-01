import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { homePractice } from '@/content/home'
import { getPracticeArea } from '@/content/practiceAreas'

export function HomePracticeSection() {
  const [openAreaId, setOpenAreaId] = useState<string | null>(null)
  const activeConcern =
    homePractice.concerns.find((item) => item.areaId === openAreaId) ?? null
  const activeArea = activeConcern ? getPracticeArea(activeConcern.areaId) : null

  return (
    <section className="border-b border-border/60" aria-labelledby="home-practice-heading">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-16 lg:gap-20">
          <div className="md:sticky md:top-28">
            <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
              {homePractice.eyebrow}
            </p>
            <h2
              id="home-practice-heading"
              className="mt-4 font-serif text-3xl leading-[1.15] text-navy md:text-4xl lg:text-[2.75rem]"
            >
              {homePractice.heading}
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
              {homePractice.introduction}
            </p>
            <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
            <Button asChild variant="outline" size="sm" className="mt-8">
              <Link to="/practice-areas">{homePractice.linkLabel}</Link>
            </Button>
          </div>

          <ul className="border-t border-border">
            {homePractice.concerns.map((item) => {
              const area = getPracticeArea(item.areaId)
              if (!area) return null
              return (
                <li key={area.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenAreaId(item.areaId)}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left outline-none transition-colors focus-visible:bg-surface/80 md:py-6"
                  >
                    <div className="min-w-0">
                      <p className="font-serif text-xl text-navy transition-colors group-hover:text-teal md:text-[1.35rem]">
                        {item.concern}
                      </p>
                      <p className="mt-1.5 text-sm tracking-wide text-brass">{area.title}</p>
                      <p className="mt-1.5 text-base leading-relaxed text-muted">
                        {item.outcome}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-brass transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <Dialog
        open={Boolean(openAreaId)}
        onOpenChange={(open) => {
          if (!open) setOpenAreaId(null)
        }}
      >
        <DialogContent>
          {activeConcern && activeArea ? (
            <>
              <DialogHeader>
                <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
                  {activeArea.title}
                </p>
                <DialogTitle className="mt-2 text-2xl leading-snug md:text-[1.65rem]">
                  {activeConcern.concern}
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed text-muted">
                  {activeConcern.dialogBody}
                </DialogDescription>
              </DialogHeader>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-2">
                <p className="text-sm font-medium text-navy">
                  {homePractice.dialogTopicsLabel}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeConcern.dialogPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brass"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <DialogFooter className="flex-col gap-2 sm:flex-col sm:justify-stretch">
                <Button asChild size="lg" className="w-full">
                  <Link to="/book-consultation" onClick={() => setOpenAreaId(null)}>
                    {homePractice.dialogCtaLabel}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link
                    to={`/practice-areas#${activeArea.id}`}
                    onClick={() => setOpenAreaId(null)}
                  >
                    {homePractice.linkLabel}
                  </Link>
                </Button>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
