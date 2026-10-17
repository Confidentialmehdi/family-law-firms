import { Link } from 'react-router-dom'

import { footerLegal, footerNav, site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
          <div className="max-w-sm shrink-0">
            <p className="font-serif text-xl">{site.firmName}</p>
            <p className="mt-1 text-sm text-ivory/70">{site.location}</p>
            <p className="mt-4 text-sm text-ivory/65">{site.footerDisclaimer}</p>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 sm:gap-12 md:max-w-xl md:gap-16">
            <nav aria-label="Footer pages">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">Explore</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
                {footerNav.map((link) => (
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
            </nav>

            <nav aria-label="Legal">
              <p className="text-[0.7rem] tracking-[0.16em] text-brass uppercase">Legal</p>
              <ul className="mt-4 space-y-2.5">
                {footerLegal.map((link) => (
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
