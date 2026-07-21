import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudyCard } from '@/components/case-study-card'
import {
  IndependentProjectCard,
  MoreBuildsCard,
} from '@/components/independent-project-card'
import { getCaseStudies, getIndependentProjects } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Milan Rayat | Senior AI PM',
  description:
    'Enterprise product deep dives from Sprinklr — AI quality management, calibration, PII masking, and screen recording — plus Ctrl, the NFC focus device I am building independently.',
}

export default async function CaseStudiesPage() {
  const CASE_STUDIES = await getCaseStudies()
  const INDEPENDENT = await getIndependentProjects()

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
        <section className="py-16 px-6 lg:px-8" aria-labelledby="professional-work-heading">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Sprinklr
              </p>
              <h2
                id="professional-work-heading"
                className="font-heading font-bold text-2xl lg:text-3xl text-foreground"
              >
                Professional Work
              </h2>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    role={cs.role}
                    teamSize={cs.teamSize}
                    tags={cs.tags}
                    outcomeStat={cs.outcomeStat}
                    coverImage={cs.coverImage}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Independent work */}
        <section
          className="py-16 px-6 lg:px-8 border-t border-border/30"
          aria-labelledby="independent-work-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-venture mb-2">
                Outside the Day Job
              </p>
              <h2
                id="independent-work-heading"
                className="font-heading font-bold text-2xl lg:text-3xl text-foreground"
              >
                Independent Work
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-2xl text-pretty">
                Products I&rsquo;m building outside of Sprinklr — no company behind them, no
                roadmap handed down, and no traction data to lean on yet.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Independent projects"
            >
              {/* A lone project spans two columns so the row reads deliberate
                  rather than half-empty; drops to a normal card once there are more. */}
              {INDEPENDENT.map((p, i) => (
                <div
                  key={p.id}
                  role="listitem"
                  className={INDEPENDENT.length === 1 ? 'lg:col-span-2' : undefined}
                >
                  <IndependentProjectCard
                    slug={p.slug}
                    title={p.cardTitle}
                    oneLiner={p.oneLiner}
                    stageBadge={p.stageBadge}
                    infoChips={p.infoChips}
                    variant={INDEPENDENT.length === 1 ? 'spotlight' : 'grid'}
                    index={i}
                  />
                </div>
              ))}
              <MoreBuildsCard index={INDEPENDENT.length} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
