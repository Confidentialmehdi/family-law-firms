import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { ImageFallback } from '@/components/ImageFallback'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Button } from '@/components/ui/button'
import {
  attorneyProfilePage,
  getAttorneyBySlug,
} from '@/content/attorneys'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function AttorneyProfilePage() {
  const { slug = '' } = useParams()
  const profile = getAttorneyBySlug(slug)

  useDocumentTitle(profile?.name)

  if (!profile) {
    return <Navigate to="/about-us" replace />
  }

  return (
    <main id="main">
      <section className="border-b border-border bg-ivory" aria-labelledby="attorney-heading">
        <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-14 md:px-8 md:pt-10 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-navy">
                  {attorneyProfilePage.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li>
                <Link to="/about-us" className="transition-colors hover:text-navy">
                  {attorneyProfilePage.breadcrumbAbout}
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li className="text-navy">{profile.name}</li>
            </ol>
          </nav>

          <div className="mt-8 overflow-hidden rounded-sm border border-border lg:grid lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
            {/* Sidebar — Whitfield navy panel */}
            <aside className="bg-navy px-6 py-8 text-ivory md:px-8 md:py-10">
              <ImageFallback
                src={profile.imageSrc}
                alt={profile.imageAlt}
                className="w-full border border-ivory/15"
              />

              <h1
                id="attorney-heading"
                className="mt-6 font-serif text-3xl leading-tight text-ivory md:text-[2rem]"
              >
                {profile.name}
              </h1>
              <p className="mt-2 text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                {profile.role}
              </p>

              <ul className="mt-8 space-y-4 border-t border-ivory/15 pt-6 text-sm text-ivory/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span>{profile.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <a
                    href={`tel:${profile.phone.replace(/\D/g, '')}`}
                    className="transition-colors hover:text-ivory"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all transition-colors hover:text-ivory"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Download className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                  <span className="text-ivory/55">Full bio (demo)</span>
                </li>
              </ul>

              <div className="mt-8 border-t border-ivory/15 pt-6">
                <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                  {attorneyProfilePage.educationLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {profile.education.map((item) => (
                    <li key={`${item.school}-${item.detail}`}>
                      <p className="text-base text-ivory">{item.school}</p>
                      <p className="text-sm text-ivory/60">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main narrative */}
            <div className="bg-surface px-6 py-8 md:px-8 md:py-10 lg:px-10">
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="font-serif text-2xl text-navy">
                  {attorneyProfilePage.practiceAreasLabel}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {profile.practiceAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-sm border border-border bg-ivory px-3 py-1.5 text-sm text-navy"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
                  {attorneyProfilePage.quoteLabel}
                </p>
                <blockquote className="mt-4 border-l-2 border-brass pl-5">
                  <p className="font-serif text-2xl leading-snug text-navy md:text-[1.85rem]">
                    “{profile.quote}”
                  </p>
                </blockquote>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal underline-offset-4 hover:underline"
                >
                  {attorneyProfilePage.backLabel}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <Button asChild size="sm">
                  <Link to={attorneyProfilePage.softNextTo}>
                    {attorneyProfilePage.softNextLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingConversion formIdPrefix={`attorney-${profile.id}-closing`} />
    </main>
  )
}
