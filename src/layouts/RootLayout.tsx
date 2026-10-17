import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { BookingProvider, useBooking } from '@/components/booking/BookingContext'
import { NavigationEffects } from '@/components/NavigationEffects'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { cn } from '@/lib/utils'

const BOOK_PATH = '/book-consultation'

function ClearCompletedOnLeave() {
  const { pathname } = useLocation()
  const { step, resetBooking } = useBooking()

  React.useEffect(() => {
    if (pathname !== BOOK_PATH && step === 'complete') {
      resetBooking()
    }
  }, [pathname, step, resetBooking])

  return null
}

/**
 * Shared site chrome for every route: sticky header, page outlet, footer,
 * and mobile booking bar (hidden on the booking page).
 */
function SiteChrome() {
  const { pathname } = useLocation()
  const onBookingPage = pathname === BOOK_PATH

  return (
    <div className={cn('flex min-h-dvh flex-col', !onBookingPage && 'pb-[4.75rem] md:pb-0')}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <NavigationEffects />
      <ClearCompletedOnLeave />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      {!onBookingPage ? <StickyMobileCta /> : null}
    </div>
  )
}

export function RootLayout() {
  return (
    <BookingProvider>
      <SiteChrome />
    </BookingProvider>
  )
}
