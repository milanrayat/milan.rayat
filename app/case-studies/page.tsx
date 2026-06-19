import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudyCard } from '@/components/case-study-card'
import { getCaseStudies } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Milan Rayat | Senior AI PM',
  description:
    'Deep-dive case studies covering $20M ARR quality monitoring, $10M EU telecom deal, and 20K daily call automation. STAR-format with concrete metrics.',
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
              Three enterprise product challenges. STAR-format. Every metric is real. No fluff, no proxies — just outcomes that moved the business.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 px-6 lg:px-8" aria-label="Case studies list">
          <div className="max-w-6xl mx-auto">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Case studies"
            >
              {CASE_STUDIES.map((cs, i) => (
                <div key={cs.id} role="listitem">
                  <CaseStudyCard
                    id={cs.id}
                    slug={cs.slug}
                    title={cs.title}
                    tagline={cs.tagline}
                    tags={cs.tags}
                    metrics={cs.metrics}
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
