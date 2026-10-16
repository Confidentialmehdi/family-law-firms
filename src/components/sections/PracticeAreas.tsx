import { practiceAreas } from '@/content/practiceAreas'

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="scroll-mt-24 border-b border-border/60"
      aria-labelledby="practice-areas-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 id="practice-areas-heading" className="font-serif text-3xl text-navy md:text-4xl">
            Practice areas
          </h2>
          <p className="mt-3 text-lg text-muted">
            Plain-language guidance for the matters families bring most often.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <li key={area.id} className="border-t border-brass/35 pt-5">
              <h3 className="font-serif text-xl text-navy">{area.title}</h3>
              <p className="mt-3 text-base text-muted">{area.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
