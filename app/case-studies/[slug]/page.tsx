import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudySection } from '@/components/case-study-section'
import { CaseStudySideNav } from '@/components/case-study-side-nav'
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
      <CaseStudySideNav
        sections={cs.sections.map(({ id, number, label }) => ({ id, number, label }))}
      />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="px-6 lg:px-8 pt-8 pb-0">
          <div className="max-w-3xl mx-auto">
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
        <section className="py-12 px-6 lg:px-8 border-b border-border/30" aria-labelledby="cs-heading">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {cs.company} &middot; Case Study &middot; {cs.year}
            </p>
            <h1
              id="cs-heading"
              className="font-heading font-bold text-3xl lg:text-5xl text-foreground mb-3 text-balance"
            >
              {cs.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {cs.role} &middot; {cs.duration}
            </p>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              {cs.tagline}
            </p>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              role="list"
              aria-label="Headline stats"
            >
              {cs.heroStats.map((stat) => (
                <div key={stat.label} role="listitem" className="rounded-lg border border-border/50 bg-card p-5">
                  <p className="font-heading font-bold text-2xl text-foreground leading-none">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {cs.coverImage && (
              <div className="relative w-full mt-10 rounded-xl border border-border/50 overflow-hidden">
                <Image
                  src={cs.coverImage}
                  alt={`${cs.title} — product screenshot`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {cs.heroQuote && (
              <blockquote className="border-l-2 border-accent pl-6 mt-10">
                <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty">
                  {cs.heroQuote}
                </p>
              </blockquote>
            )}
          </div>
        </section>

        {/* Content sections */}
        {cs.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}

        {/* Navigation between case studies */}
        {(prevCs || nextCs) && (
          <section className="py-12 px-6 lg:px-8" aria-label="Navigate between case studies">
            <div className="max-w-3xl mx-auto">
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
        )}
      </main>
      <Footer />
    </>
  )
}
