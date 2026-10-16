import { ContactRequestForm } from '@/components/contact/ContactRequestForm'
import { PageHeading } from '@/components/PageHeading'
import { sampleContact, site } from '@/content/site'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function ContactUsPage() {
  useDocumentTitle('Contact Us')

  return (
    <main id="main">
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>Let’s start with a conversation.</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Contact us directly, or leave your preferred details and ask us to get in touch.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <section aria-labelledby="direct-contact-heading">
              <h2 id="direct-contact-heading" className="font-serif text-2xl text-navy">
                Contact us directly
              </h2>
              <p className="mt-2 text-sm text-muted">
                Details below are labeled sample content for this prototype.
              </p>
              <dl className="mt-8 space-y-6">
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
              <p className="mt-8 text-sm text-muted">
                Prefer to schedule? Use{' '}
                <span className="font-medium text-navy">{site.ctaLabel}</span> in the header
                anytime.
              </p>
            </section>

            <section aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="font-serif text-2xl text-navy">
                Prefer us to contact you?
              </h2>
              <div className="mt-6">
                <ContactRequestForm />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
