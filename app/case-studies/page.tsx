import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudyCard } from '@/components/case-study-card'
import { getCaseStudies } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Milan Rayat | Senior AI PM',
  description:
    'A deep dive into shipping screen recording for customer service quality review at Sprinklr — playback, access control, and reporting, end to end.',
}

export default async function CaseStudiesPage() {
  const CASE_STUDIES = await getCaseStudies()

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="cs-index-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Deep Dives
            </p>
            <h1
              id="cs-index-heading"
              className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance"
            >
              Case Studies
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              An enterprise product challenge, end to end. Every detail is real — the constraints, the trade-offs, and what shipped.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 px-6 lg:px-8" aria-label="Case studies list">
          <div className="max-w-6xl mx-auto">
            <div
              className="grid grid-cols-1 max-w-2xl"
              role="list"
              aria-label="Case studies"
            >
              {CASE_STUDIES.map((cs, i) => (
                <div key={cs.id} role="listitem">
                  <CaseStudyCard
                    slug={cs.slug}
                    title={cs.title}
                    tagline={cs.tagline}
                    company={cs.company}
                    duration={cs.duration}
                    heroStats={cs.heroStats}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
