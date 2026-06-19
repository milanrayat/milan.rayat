import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkillTag } from '@/components/skill-tag'
import { getCaseStudies, getProfile } from '@/lib/db'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudies = await getCaseStudies()
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  const PERSON = await getProfile()
  return {
    title: `${cs.title} — ${PERSON.name}`,
    description: cs.tagline,
  }
}

const STAR_SECTIONS = [
  {
    key: 'situation' as const,
    label: 'Situation',
    sublabel: 'Context & Problem',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10 border-sky-400/20',
  },
  {
    key: 'task' as const,
    label: 'Task',
    sublabel: 'My Responsibility',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
  },
  {
    key: 'result' as const,
    label: 'Result',
    sublabel: 'Measurable Outcomes',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
  },
]

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const CASE_STUDIES = await getCaseStudies()
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) notFound()

  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug)
  const prevCs = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null
  const nextCs = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="px-6 lg:px-8 pt-8 pb-0">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label="Back to all case studies"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All Case Studies
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section
          className="py-12 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="cs-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Case study tags">
              {cs.tags.map((tag) => (
                <SkillTag key={tag} label={tag} variant="ghost" role="listitem" />
              ))}
            </div>
            <h1
              id="cs-heading"
              className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4 text-balance"
            >
              {cs.title}
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl leading-relaxed text-pretty">
              {cs.tagline}
            </p>
          </div>
        </section>

        {/* Metrics Dashboard */}
        <section
          className="py-12 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="metrics-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Key Metrics
            </p>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              role="list"
              aria-label="Key metrics for this case study"
            >
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  role="listitem"
                  className="flex flex-col gap-1.5 rounded-lg border border-border/50 bg-card p-5"
                  aria-label={`${m.value} — ${m.label}`}
                >
                  <p className="font-heading font-bold text-3xl text-accent leading-none">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAR: Situation, Task, Result */}
        <section
          className="py-12 px-6 lg:px-8 border-b border-border/30"
          aria-label="Case study STAR framework"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {STAR_SECTIONS.map(({ key, label, sublabel, color, bg }) => (
              <div
                key={key}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-3">
                  <div className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 ${bg}`}>
                    <span className={`font-heading font-bold text-sm ${color}`}>{label}</span>
                    <span className="text-xs text-muted-foreground">{sublabel}</span>
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {cs[key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Actions — listed separately since it's an array */}
        <section
          className="py-12 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="actions-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-md border border-amber-400/20 bg-amber-400/10 px-3 py-1.5">
                  <span className="font-heading font-bold text-sm text-amber-400">Action</span>
                  <span className="text-xs text-muted-foreground">What I Did</span>
                </div>
              </div>
              <div className="lg:col-span-9">
                <ol
                  className="flex flex-col gap-4"
                  aria-label="Actions taken"
                >
                  {cs.actions.map((action, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4"
                    >
                      <span
                        className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/25 text-xs font-bold text-amber-400 mt-0.5"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {action}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation between case studies */}
        <section className="py-12 px-6 lg:px-8" aria-label="Navigate between case studies">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              {prevCs ? (
                <Link
                  href={`/case-studies/${prevCs.slug}`}
                  className="flex-1 flex items-center gap-4 rounded-lg border border-border/50 bg-card p-5 hover:border-accent/40 hover:bg-card/70 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Previous case study: ${prevCs.title}`}
                >
                  <ArrowLeft
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Previous</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {prevCs.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextCs ? (
                <Link
                  href={`/case-studies/${nextCs.slug}`}
                  className="flex-1 flex items-center justify-end gap-4 rounded-lg border border-border/50 bg-card p-5 hover:border-accent/40 hover:bg-card/70 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-right"
                  aria-label={`Next case study: ${nextCs.title}`}
                >
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Next</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {nextCs.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
