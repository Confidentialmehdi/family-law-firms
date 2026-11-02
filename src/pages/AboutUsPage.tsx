import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ImageFallback } from '@/components/ImageFallback'
import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { Button } from '@/components/ui/button'
import { aboutPage, attorney, teamMembers } from '@/content/attorney'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function AboutUsPage() {
  useDocumentTitle('About Us')

  return (
    <main id="main">
      {/* Robert J. Whitfield, Esq. — main profile */}
      <section
        id="robert-whitfield"
        className="scroll-mt-28 border-b border-border bg-ivory"
        aria-labelledby="page-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-14 md:px-8 md:py-20 lg:gap-16">
          <ImageFallback
            src={attorney.imageSrc}
            alt={attorney.imageAlt}
            className="w-full max-w-sm border border-border md:max-w-none"
          />

          <div>
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {attorney.role}
            </p>
            <PageHeading className="mt-3 text-[2rem] leading-[1.15] text-navy md:text-[2.75rem] lg:text-[3rem]">
              {attorney.name}
            </PageHeading>
            <p className="mt-2 text-lg text-muted">{attorney.firm}</p>
            <div className="mt-5 h-px w-14 bg-brass" aria-hidden="true" />

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {attorney.bio.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-brass pl-5">
              <p className="font-serif text-2xl leading-snug text-navy md:text-[1.85rem]">
                {attorney.approachStatement}
              </p>
            </blockquote>

            <p className="mt-8 text-sm text-muted">
              {aboutPage.profileSoftNextPrompt}{' '}
              <Link
                to={aboutPage.profileSoftNextTo}
                className="font-medium text-teal underline-offset-4 hover:underline"
              >
                {aboutPage.profileSoftNextLabel}
              </Link>
              <span className="mx-2 text-border" aria-hidden="true">
                ·
              </span>
              <Link
                to={attorney.profileHref}
                className="font-medium text-teal underline-offset-4 hover:underline"
              >
                {aboutPage.profileFullLabel}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Team roster */}
      <section
        className="border-b border-border bg-[#efe9e2]/45"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <h2
              id="team-heading"
              className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
            >
              {aboutPage.team.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">{aboutPage.team.supporting}</p>
          </div>

          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
            {teamMembers.map((member) => (
              <li key={member.id} className="border-t border-border pt-6">
                <Link to={member.profileHref} className="block outline-none">
                  <ImageFallback
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    aspect="square"
                    className="w-full border border-border transition-opacity hover:opacity-95"
                  />
                </Link>
                <h3 className="mt-5 font-serif text-xl text-navy md:text-2xl">
                  <Link
                    to={member.profileHref}
                    className="underline-offset-4 hover:text-teal hover:underline"
                  >
                    {member.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
                <p className="mt-3 text-base text-muted">{member.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-5">
                  <Link to={member.profileHref}>{aboutPage.team.learnMoreLabel}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach — sticky intro + stacked principles */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-16 lg:gap-20">
            <div className="md:sticky md:top-28">
              <h2
                id="approach-heading"
                className="font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
              >
                {aboutPage.values.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                {aboutPage.values.supporting}
              </p>
              <div className="mt-6 h-px w-14 bg-brass" aria-hidden="true" />
              <Link
                to="/what-to-expect"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal underline-offset-4 hover:underline"
              >
                {aboutPage.values.linkLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <ol className="border-t border-border">
              {aboutPage.values.items.map((item) => (
                <li key={item.number} className="border-b border-border py-7 md:py-8">
                  <p className="font-serif text-sm text-brass tabular-nums">
                    {item.number}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-navy md:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ClosingConversion formIdPrefix="about-closing" />
    </main>
  )
}
