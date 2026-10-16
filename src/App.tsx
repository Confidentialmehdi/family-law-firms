import { BookingDialog } from '@/components/booking/BookingDialog'
import { BookingProvider, useBooking } from '@/components/booking/BookingContext'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { Concerns } from '@/components/sections/Concerns'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { MeetRobert } from '@/components/sections/MeetRobert'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { Stories } from '@/components/sections/Stories'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhatToExpect } from '@/components/sections/WhatToExpect'
import { cn } from '@/lib/utils'

function PageShell() {
  const { open } = useBooking()

  return (
    <div className={cn('min-h-dvh', !open && 'pb-[4.75rem] md:pb-0')}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <PracticeAreas />
        <MeetRobert />
        <WhatToExpect />
        <BeforeAfter />
        <Stories />
        <Testimonials />
        <Concerns />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
      <StickyMobileCta />
      <BookingDialog />
    </div>
  )
}

export default function App() {
  return (
    <BookingProvider>
      <PageShell />
    </BookingProvider>
  )
}
