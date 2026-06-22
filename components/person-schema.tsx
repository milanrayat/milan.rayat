import { PERSON } from '@/lib/data'

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON.name,
    jobTitle: PERSON.title,
    worksFor: {
      '@type': 'Organization',
      name: PERSON.company,
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology Guwahati' },
      { '@type': 'CollegeOrUniversity', name: 'HEC Paris' },
    ],
    email: PERSON.email,
    sameAs: [PERSON.linkedin],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
