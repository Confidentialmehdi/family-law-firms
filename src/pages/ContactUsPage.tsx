import { PageHeading } from '@/components/PageHeading'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { sampleContact } from '@/content/site'
import { closingConversion } from '@/content/site'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function ContactUsPage() {
  useDocumentTitle('Contact Us')

  return (
    <main id="main">
      <div className="border-b border-border bg-ivory">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
          <PageHeading>{closingConversion.headline}</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">{closingConversion.supporting}</p>

          <section className="mt-12 max-w-xl" aria-labelledby="direct-contact-heading">
            <h2 id="direct-contact-heading" className="font-serif text-2xl text-navy">
              Contact us directly
            </h2>
            <p className="mt-2 text-sm text-muted">
              Details below are labeled sample content for this prototype.
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-sm text-muted">
                  Phone <span className="text-brass">· {sampleContact.sampleLabel}</span>
                </dt>
                <dd className="mt-1 text-lg text-navy">{sampleContact.phone}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">
                  Email <span className="text-brass">· {sampleContact.sampleLabel}</span>
                </dt>
                <dd className="mt-1 text-lg text-navy">{sampleContact.email}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Location</dt>
                <dd className="mt-1 text-lg text-navy">{sampleContact.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">
                  Office hours <span className="text-brass">· {sampleContact.sampleLabel}</span>
                </dt>
                <dd className="mt-1 text-lg text-navy">{sampleContact.officeHours}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>

      {/* Single two-option conversion — reuses compact contact form, no second form */}
      <ClosingConversion formIdPrefix="contact-page" />
    </main>
  )
}
