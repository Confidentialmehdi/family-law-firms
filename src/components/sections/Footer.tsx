import { Link } from 'react-router-dom'

import { footerNav, site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-xl">{site.firmName}</p>
            <p className="mt-1 text-sm text-ivory/70">{site.location}</p>
            <p className="mt-4 max-w-sm text-sm text-ivory/65">{site.footerDisclaimer}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3 md:text-right">
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
        </div>
      </div>
    </footer>
  )
}
