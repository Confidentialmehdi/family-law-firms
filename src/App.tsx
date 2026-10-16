import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { BookingProvider } from '@/components/booking/BookingContext'
import { RootLayout } from '@/layouts/RootLayout'
import { AboutUsPage } from '@/pages/AboutUsPage'
import { ContactUsPage } from '@/pages/ContactUsPage'
import { FaqPage } from '@/pages/FaqPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { OurResultsPage } from '@/pages/OurResultsPage'
import { PracticeAreasPage } from '@/pages/PracticeAreasPage'
import { WhatToExpectPage } from '@/pages/WhatToExpectPage'

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="practice-areas" element={<PracticeAreasPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
            <Route path="our-results" element={<OurResultsPage />} />
            <Route path="what-to-expect" element={<WhatToExpectPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="meet-robert" element={<Navigate to="/about-us" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  )
}
