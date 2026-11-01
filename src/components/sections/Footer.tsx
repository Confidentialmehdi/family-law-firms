import { Link } from 'react-router-dom'

import { firmContact, footerLegal, footerNav, site } from '@/content/site'

export function Footer() {
  const exploreMid = Math.ceil(footerNav.length / 2)
  const exploreLeft = footerNav.slice(0, exploreMid)
  const exploreRight = footerNav.slice(exploreMid)

  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-[1200px] space-y-8 px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <p className="font-serif text-xl">{site.firmName}</p>
            <p className="mt-2 text-sm text-ivory/65">{site.footerDisclaimer}</p>
          </div>
          <div className="text-sm leading-relaxed text-ivory/70 sm:text-right">
            <p>
              {firmContact.address}, {firmContact.location}
            </p>
            <p className="mt-1">
              <a
                href={`tel:${firmContact.phone.replace(/\D/g, '')}`}
                className="transition-colors hover:text-ivory"
              >
                {firmContact.phone}
              </a>
              <span className="mx-2 text-ivory/35" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${firmContact.email}`}
                className="transition-colors hover:text-ivory"
              >
                {firmContact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-ivory/15 pt-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <nav aria-label="Footer pages" className="min-w-0 flex-1">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">Explore</p>
              <div className="mt-3 grid max-w-lg grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {exploreLeft.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {exploreRight.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <nav aria-label="Legal" className="min-w-0 lg:pt-6">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase lg:sr-only">
                Legal
              </p>
              <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ivory/70 lg:mt-0">
                {footerLegal.map((link, index) => (
                  <li key={link.to} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span className="text-ivory/35" aria-hidden="true">
                        ·
                      </span>
                    ) : null}
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
