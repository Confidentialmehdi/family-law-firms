import { PageHeading } from '@/components/PageHeading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ClosingConversion } from '@/components/sections/ClosingConversion'
import { faqItems, faqPage } from '@/content/faq'
import { useDocumentTitle } from '@/lib/useDocumentTitle'

export function FaqPage() {
  useDocumentTitle('FAQ')

  return (
    <main id="main">
      <div className="border-b border-border/60 bg-surface/40">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <PageHeading>FAQ</PageHeading>
          <p className="mt-4 max-w-2xl text-lg text-muted">{faqPage.supporting}</p>

          <div className="mt-10 max-w-3xl">
            <Accordion type="single" collapsible defaultValue={faqItems[0]?.id}>
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <ClosingConversion formIdPrefix="faq-closing" />
    </main>
  )
}
