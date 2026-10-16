import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-serif text-xl">{site.firmName}</p>
          <p className="mt-1 text-sm text-ivory/70">{site.location}</p>
        </div>
        <p className="max-w-md text-sm text-ivory/65">{site.footerDisclaimer}</p>
      </div>
    </footer>
  )
}
