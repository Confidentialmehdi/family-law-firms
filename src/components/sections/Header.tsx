import { Menu, X } from 'lucide-react'
import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { useBooking } from '@/components/booking/BookingContext'
import { Button } from '@/components/ui/button'
import { headerNav, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Header() {
  const { openBooking } = useBooking()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-teal' : 'text-navy/80 hover:text-teal',
    )

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-sm px-2 py-3 text-base',
      isActive ? 'bg-teal/10 text-teal' : 'text-navy hover:bg-navy/5',
    )

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-navy md:text-2xl"
        >
          {site.firmName}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {headerNav.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button type="button" className="hidden sm:inline-flex" onClick={openBooking}>
            {site.ctaLabel}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn('border-t border-border lg:hidden', menuOpen ? 'block' : 'hidden')}
      >
        <nav
          className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3 md:px-8"
          aria-label="Mobile"
        >
          {headerNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            type="button"
            className="mt-2 sm:hidden"
            onClick={() => {
              setMenuOpen(false)
              openBooking()
            }}
          >
            {site.ctaLabel}
          </Button>
        </nav>
      </div>
    </header>
  )
}
