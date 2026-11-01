import { firmContact } from '@/content/site'

export type AttorneyEducation = {
  school: string
  detail: string
}

export type AttorneyProfile = {
  id: string
  slug: string
  name: string
  role: string
  location: string
  phone: string
  email: string
  imageSrc: string
  imageAlt: string
  /** Short line for About Us team cards. */
  summary: string
  education: readonly AttorneyEducation[]
  bio: readonly string[]
  practiceAreas: readonly string[]
  quote: string
}

export const attorneyProfiles: AttorneyProfile[] = [
  {
    id: 'robert',
    slug: 'robert-j-whitfield',
    name: 'Robert J. Whitfield, Esq.',
    role: 'Lead Attorney',
    location: firmContact.location,
    phone: firmContact.phone,
    email: 'robert@whitfieldlaw.com',
    imageSrc: '/images/portraits/robert.jpg',
    imageAlt: 'Portrait of attorney Robert J. Whitfield, Esq.',
    summary:
      'Leads consultations about client priorities, family law questions, and possible next steps.',
    education: [
      { school: 'Columbia Law School', detail: 'J.D.' },
      { school: 'New York University', detail: 'B.A.' },
    ],
    bio: [
      'Robert J. Whitfield, Esq. begins with what you want to discuss. Family, finances, and timing often arrive together. He listens carefully, explains options in plain language, and helps you separate questions that need attention now from those that can wait.',
      'At Whitfield Law Group, the initial consultation is a defined first step: organize your priorities, understand possible paths, and decide—at your own pace—what you want to do next.',
      'He works with people facing divorce, parenting arrangements, support questions, property decisions, and agreements before or during marriage—always starting from the concerns that feel most urgent to them.',
    ],
    practiceAreas: [
      'Divorce',
      'Child Custody & Parenting Time',
      'Child Support',
      'Spousal Support',
      'Property Division',
      'Prenuptial & Postnuptial Agreements',
    ],
    quote: 'A useful first conversation starts with your questions.',
  },
  {
    id: 'avery',
    slug: 'avery-morgan',
    name: 'Avery Morgan',
    role: 'Family Law Attorney',
    location: firmContact.location,
    phone: firmContact.phone,
    email: 'avery@whitfieldlaw.com',
    imageSrc: '/images/portraits/avery.jpg',
    imageAlt: 'Portrait of Avery Morgan',
    summary:
      'Supports discussion and preparation of family law matters, with attention to clear communication.',
    education: [
      { school: 'Fordham University School of Law', detail: 'J.D.' },
      { school: 'Barnard College', detail: 'B.A.' },
    ],
    bio: [
      'Avery Morgan helps clients prepare for thoughtful conversations about family law questions. She focuses on clear communication so people can name priorities, understand how issues connect, and gather information that will help a next discussion.',
      'She works closely with Robert J. Whitfield, Esq. on matters involving parenting arrangements, support, and property—translating complex topics into ordinary language without rushing decisions.',
      'Clients often meet Avery when they need help organizing documents, clarifying questions before a consultation, or following up on topics raised in an earlier conversation.',
    ],
    practiceAreas: [
      'Divorce',
      'Child Custody & Parenting Time',
      'Child Support',
      'Spousal Support',
      'Property Division',
    ],
    quote: 'Clear language makes hard decisions easier to approach.',
  },
  {
    id: 'taylor',
    slug: 'taylor-reed',
    name: 'Taylor Reed',
    role: 'Client Services Coordinator',
    location: firmContact.location,
    phone: firmContact.phone,
    email: 'taylor@whitfieldlaw.com',
    imageSrc: '/images/portraits/taylor.jpg',
    imageAlt: 'Portrait of Taylor Reed',
    summary:
      'Coordinates consultations and answers practical questions about preparing for a meeting.',
    education: [
      { school: 'Hunter College', detail: 'B.A.' },
    ],
    bio: [
      'Taylor Reed coordinates consultations and helps people prepare for a first conversation with the firm. That includes scheduling, format choices (online or in person), and practical questions about what to bring or expect.',
      'Taylor is often the first person you speak with—answering logistics questions so the consultation itself can focus on your priorities rather than process details.',
      'If you are unsure which practice area fits, Taylor can help you book with “Not sure” selected and start from what you want to discuss.',
    ],
    practiceAreas: [
      'Consultation coordination',
      'Scheduling & format',
      'Preparation guidance',
    ],
    quote: 'A calm first step starts with clear logistics.',
  },
]

export const attorneyProfilePage = {
  breadcrumbHome: 'Home',
  breadcrumbAttorneys: 'Attorneys',
  breadcrumbAbout: 'About Us',
  educationLabel: 'Education',
  practiceAreasLabel: 'Practice areas',
  quoteLabel: 'In their words',
  backLabel: 'Back to About Us',
  softNextPrompt: 'Ready for a defined first conversation?',
  softNextLabel: 'Book a consultation',
  softNextTo: '/book-consultation',
} as const

export function getAttorneyBySlug(slug: string) {
  return attorneyProfiles.find((profile) => profile.slug === slug)
}

export function getAttorneyById(id: string) {
  return attorneyProfiles.find((profile) => profile.id === id)
}
