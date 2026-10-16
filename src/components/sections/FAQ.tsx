import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/content/faq'

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-border/60 bg-surface/40"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="faq-heading" className="font-serif text-3xl text-navy md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lg text-muted">
            Practical answers about the first appointment and this prototype.
          </p>
        </div>

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
    </section>
  )
}
