import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { disclaimerPage, privacyPage, termsPage } from '@/content/legal'
import { RootLayout } from '@/layouts/RootLayout'
import { AboutUsPage } from '@/pages/AboutUsPage'
import { BookConsultationPage } from '@/pages/BookConsultationPage'
import { ContactUsPage } from '@/pages/ContactUsPage'
import { FaqPage } from '@/pages/FaqPage'
import { HomePage } from '@/pages/HomePage'
import { LegalPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { OurResultsPage } from '@/pages/OurResultsPage'
import { PracticeAreasPage } from '@/pages/PracticeAreasPage'
import { WhatToExpectPage } from '@/pages/WhatToExpectPage'

export default function App() {
  return (
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
          <Route path="book-consultation" element={<BookConsultationPage />} />
          <Route
            path="privacy"
            element={
              <LegalPage
                title={privacyPage.title}
                updated={privacyPage.updated}
                paragraphs={privacyPage.paragraphs}
                formIdPrefix="privacy-closing"
              />
            }
          />
          <Route
            path="terms"
            element={
              <LegalPage
                title={termsPage.title}
                updated={termsPage.updated}
                paragraphs={termsPage.paragraphs}
                formIdPrefix="terms-closing"
              />
            }
          />
          <Route
            path="disclaimer"
            element={
              <LegalPage
                title={disclaimerPage.title}
                updated={disclaimerPage.updated}
                paragraphs={disclaimerPage.paragraphs}
                formIdPrefix="disclaimer-closing"
              />
            }
          />
          <Route path="meet-robert" element={<Navigate to="/about-us" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
