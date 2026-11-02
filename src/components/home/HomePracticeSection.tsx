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
        <DialogContent className="w-[min(100%-1.5rem,34rem)] gap-0 p-0 shadow-[0_18px_50px_rgb(37_38_41/0.14)]">
          {activeConcern && activeArea ? (
            <>
              <div className="h-1 w-full bg-brass/70" aria-hidden="true" />

              <DialogHeader className="gap-0 px-6 pt-6 pr-14 pb-5 md:px-7 md:pt-7">
                <p className="text-[0.7rem] tracking-[0.18em] text-brass uppercase">
                  {activeArea.title}
                </p>
                <div className="mt-4 h-px w-10 bg-brass" aria-hidden="true" />
                <DialogTitle className="mt-5 text-[1.65rem] leading-[1.15] md:text-[1.85rem]">
                  {activeConcern.concern}
                </DialogTitle>
                <p className="mt-4 font-serif text-lg leading-snug text-navy/85 md:text-xl">
                  {activeConcern.outcome}
                </p>
                <DialogDescription className="mt-4 text-base leading-relaxed text-muted">
                  {activeConcern.dialogBody}
                </DialogDescription>
              </DialogHeader>

              <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-2 md:px-7">
                <div className="border-y border-border py-5">
                  <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                    {homePractice.dialogTopicsLabel}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {activeConcern.dialogPoints.map((point, index) => (
                      <li key={point} className="flex gap-4">
                        <span
                          className="font-serif text-lg leading-none text-brass/55 tabular-nums"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="pt-0.5 text-base leading-relaxed text-navy">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <DialogFooter className="flex-col gap-3 border-t-0 bg-surface/70 px-6 py-5 sm:flex-col sm:justify-stretch md:px-7">
                <Button asChild size="lg" className="w-full">
                  <Link to="/book-consultation" onClick={() => setOpenAreaId(null)}>
                    {homePractice.dialogCtaLabel}
                  </Link>
                </Button>
                <Link
                  to={`/practice-areas#${activeArea.id}`}
                  onClick={() => setOpenAreaId(null)}
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  {homePractice.dialogSecondaryLabel}
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                </Link>
                <p className="text-center text-xs text-muted">
                  {homePractice.dialogFooterNote}
                </p>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
