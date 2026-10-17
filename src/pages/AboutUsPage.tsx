import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ImageFallback } from '@/components/ImageFallback'
import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { aboutPage, attorney, teamMembers } from '@/content/attorney'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function AboutUsPage() {
  useDocumentTitle('About Us')

  return (
    <main id="main">
      {/* Robert Whitfield — main profile */}
      <section
        id="robert-whitfield"
        className="scroll-mt-28 border-b border-border bg-ivory"
        aria-labelledby="page-heading"
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:items-start md:gap-14 md:px-8 md:py-20 lg:gap-16">
          <ImageFallback
            src={attorney.imageSrc}
            alt={attorney.imageAlt}
            className="w-full max-w-md border border-border md:max-w-none"
          />

          <div>
            <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">
              {attorney.role}
            </p>
            <PageHeading className="mt-3 text-[2rem] leading-[1.15] text-navy md:text-[2.75rem] lg:text-[3rem]">
              {attorney.name}
            </PageHeading>
            <p className="mt-2 text-lg text-muted">{attorney.role}</p>

            <div className="mt-8 space-y-5 text-lg text-muted">
              {attorney.bio.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l border-brass pl-5">
              <p className="font-serif text-2xl leading-snug text-navy md:text-[1.85rem]">
                {attorney.approachStatement}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Team roster */}
      <section
        className="border-b border-border bg-[#f0ebe3]/45"
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
                <ImageFallback
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  aspect="square"
                  className="w-full border border-border"
                />
                <h3 className="mt-5 font-serif text-xl text-navy md:text-2xl">
                  {member.profileHref ? (
                    <a
                      href={member.profileHref}
                      className="underline-offset-4 hover:text-teal hover:underline"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
                <p className="mt-3 text-base text-muted">{member.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section
        className="border-b border-border bg-ivory"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <h2
            id="approach-heading"
            className="max-w-2xl font-serif text-[2rem] leading-[1.15] text-navy md:text-[2.5rem]"
          >
            {aboutPage.values.heading}
          </h2>

          <ol className="mt-12 divide-y divide-border border-y border-border">
            {aboutPage.values.items.map((item) => (
              <li
                key={item.number}
                className="grid gap-4 py-10 md:grid-cols-[5rem_minmax(0,0.4fr)_minmax(0,0.7fr)] md:items-baseline md:gap-10"
              >
                <span className="font-serif text-sm text-brass tabular-nums">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl text-navy md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="text-lg text-muted">{item.description}</p>
              </li>
            ))}
          </ol>

          <Link
            to="/what-to-expect"
            className="mt-10 inline-flex items-center gap-2 text-base text-teal underline-offset-4 hover:underline"
          >
            {aboutPage.values.linkLabel}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ClosingConversion formIdPrefix="about-closing" />
    </main>
  )
}
