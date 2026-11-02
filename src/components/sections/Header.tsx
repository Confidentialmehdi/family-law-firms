import { Menu, X } from 'lucide-react'
import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { headerNav, site } from '@/content/site'
import { cn } from '@/lib/utils'

const BOOK_PATH = '/book-consultation'

export function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const onBookingPage = pathname === BOOK_PATH

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
      'rounded-sm px-2 py-3 text-base transition-colors',
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

        <div className="flex items-center gap-2 sm:gap-5 lg:gap-6">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {headerNav.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          {!onBookingPage ? (
            <Button asChild className="hidden sm:inline-flex">
              <Link to={BOOK_PATH}>{site.ctaLabel}</Link>
            </Button>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative size-4" aria-hidden="true">
              <Menu
                className={cn(
                  'absolute inset-0 size-4 transition-[opacity,transform] duration-300 ease-out',
                  menuOpen
                    ? 'scale-75 rotate-90 opacity-0'
                    : 'scale-100 rotate-0 opacity-100',
                )}
              />
              <X
                className={cn(
                  'absolute inset-0 size-4 transition-[opacity,transform] duration-300 ease-out',
                  menuOpen
                    ? 'scale-100 rotate-0 opacity-100'
                    : 'scale-75 -rotate-90 opacity-0',
                )}
              />
            </span>
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden',
          menuOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'pointer-events-none grid-rows-[0fr] opacity-0',
        )}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className="min-h-0 overflow-hidden border-t border-border">
          <nav
            className={cn(
              'mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3 transition-transform duration-300 ease-out md:px-8',
              menuOpen ? 'translate-y-0' : '-translate-y-2',
            )}
            aria-label="Mobile"
          >
            {headerNav.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    mobileLinkClass({ isActive }),
                    'transition-[opacity,transform] duration-300 ease-out',
                    menuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1 opacity-0',
                  )
                }
                style={{
                  transitionDelay: menuOpen ? `${80 + index * 40}ms` : '0ms',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {!onBookingPage ? (
              <Button asChild className="mt-2 sm:hidden">
                <Link to={BOOK_PATH} onClick={() => setMenuOpen(false)}>
                  {site.ctaLabel}
                </Link>
              </Button>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  )
}
