import { site } from '@/content/site'
import { testimonials } from '@/content/testimonials'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="testimonials-heading" className="font-serif text-3xl text-navy md:text-4xl">
            What clarity can feel like
          </h2>
          <p className="mt-2 text-sm text-muted">{site.fictionalLabel}</p>
        </div>

        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.id} className="border-l-2 border-brass/50 pl-5">
              <blockquote className="font-serif text-xl leading-snug text-navy">
                <p>“{item.quote}”</p>
              </blockquote>
              <p className="mt-4 text-sm text-muted">{item.attribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
