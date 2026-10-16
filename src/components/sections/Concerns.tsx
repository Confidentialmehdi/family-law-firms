import { concerns } from '@/content/concerns'

export function Concerns() {
  return (
    <section
      id="concerns"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="concerns-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="concerns-heading" className="font-serif text-3xl text-navy md:text-4xl">
            Common client concerns
          </h2>
          <p className="mt-3 text-lg text-muted">
            Reassuring answers aligned with this demo booking experience.
          </p>
        </div>

        <ul className="mt-12 max-w-3xl space-y-8">
          {concerns.map((item) => (
            <li key={item.id}>
              <h3 className="font-serif text-xl text-navy">{item.question}</h3>
              <p className="mt-2 text-base text-muted">{item.response}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
