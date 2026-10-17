import { Outlet } from 'react-router-dom'

import { BookingDialog } from '@/components/booking/BookingDialog'
import { BookingProvider, useBooking } from '@/components/booking/BookingContext'
import { NavigationEffects } from '@/components/NavigationEffects'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { cn } from '@/lib/utils'

/**
 * Shared site chrome for every route: sticky header, page outlet, footer,
 * mobile booking bar, and booking dialog.
 */
function SiteChrome() {
  const { open } = useBooking()

  return (
    <div className={cn('flex min-h-dvh flex-col', !open && 'pb-[4.75rem] md:pb-0')}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <NavigationEffects />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <StickyMobileCta />
      <BookingDialog />
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
