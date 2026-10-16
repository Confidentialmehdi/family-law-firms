import { Outlet } from 'react-router-dom'

import { BookingDialog } from '@/components/booking/BookingDialog'
import { useBooking } from '@/components/booking/BookingContext'
import { NavigationEffects } from '@/components/NavigationEffects'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { cn } from '@/lib/utils'

export function RootLayout() {
  const { open } = useBooking()

  return (
    <div className={cn('min-h-dvh', !open && 'pb-[4.75rem] md:pb-0')}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <NavigationEffects />
      <Header />
      <Outlet />
      <Footer />
      <StickyMobileCta />
      <BookingDialog />
    </div>
  )
}
