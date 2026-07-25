import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudySection } from '@/components/case-study-section'
import { CaseStudySideNav } from '@/components/case-study-side-nav'
import { getCaseStudies, getIndependentProjects, getProfile } from '@/lib/db'
import { getReadingStats } from '@/lib/reading-time'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  const independent = await getIndependentProjects()
  return [...caseStudies, ...independent].map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudies = await getCaseStudies()
  const independent = await getIndependentProjects()
  const cs = [...caseStudies, ...independent].find((c) => c.slug === slug)
  if (!cs) return {}
  const PERSON = await getProfile()
  return {
    title: `${cs.title} — ${PERSON.name}`,
    description: cs.metaDescription,
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const CASE_STUDIES = await getCaseStudies()
  const INDEPENDENT = await getIndependentProjects()

  const project = INDEPENDENT.find((p) => p.slug === slug)
  if (project) return <IndependentProjectPage project={project} />

  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) notFound()

  const { minutes, sectionCount } = getReadingStats(cs.sections)

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
              {cs.company} &middot; Case Study
            </p>
            <h1
              id="cs-heading"
              className="font-heading font-bold text-3xl lg:text-5xl text-foreground mb-3 text-balance"
            >
              {cs.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {cs.role} &middot; {cs.duration} &middot; ~{minutes} min read &middot; {sectionCount} sections
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
              <figure className="mt-10">
                <div className="relative w-full rounded-xl border border-border/50 overflow-hidden">
                  <Image
                    src={cs.coverImage}
                    alt={`${cs.title} — product screenshot`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {cs.coverImageCaption && (
                  <figcaption className="text-sm text-muted-foreground mt-3 text-pretty">
                    {cs.coverImageCaption}
                  </figcaption>
                )}
              </figure>
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

type IndependentProject = Awaited<ReturnType<typeof getIndependentProjects>>[number]

/**
 * Independent-project layout: no metric cards and no Outcome section. A
 * pre-launch product has no traction data, and faking some would cost the
 * story the one thing it has. Info chips carry the framing that heroStats
 * carry on the enterprise case studies.
 */
function IndependentProjectPage({ project }: { project: IndependentProject }) {
  return (
    <>
      <Navbar />
      <CaseStudySideNav
        sections={project.sections.map(({ id, number, label }) => ({ id, number, label }))}
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
        <section
          className="py-12 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="project-heading"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center rounded-md bg-accent/10 border border-accent/30 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Independent build
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary border border-border/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
                {project.stageBadge}
              </span>
            </div>

            <h1
              id="project-heading"
              className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-4 tracking-tight"
            >
              {project.title}
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              {project.tagline}
            </p>

            <p className="text-sm text-muted-foreground mt-6">
              {project.role} &middot; {project.teamSize}
              {project.website && (
                <>
                  {' '}&middot;{' '}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {project.websiteLabel}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </>
              )}
            </p>

            {/* Info chips, deliberately not metric cards */}
            <ul className="flex flex-wrap gap-2 mt-8" aria-label="Project at a glance">
              {project.infoChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center rounded-md border border-border/50 bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground tracking-wide"
                >
                  {chip}
                </li>
              ))}
            </ul>

            {project.heroQuote && (
              <blockquote className="border-l-2 border-accent pl-6 mt-10">
                <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty">
                  {project.heroQuote}
                </p>
              </blockquote>
            )}
          </div>
        </section>

        {/* Content sections */}
        {project.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}

        {/* Closing */}
        <section className="py-14 px-6 lg:px-8" aria-label="See the product">
          <div className="max-w-3xl mx-auto rounded-xl border border-accent/25 bg-accent/5 p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {project.stageBadge}
            </p>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-3 text-balance">
              Ctrl is real, and it&rsquo;s nearly out.
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-7 text-pretty">
              First batch built, packaging in motion. The site is live in an early form,
              with a design refresh on the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Visit {project.websiteLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-border/60 text-sm font-medium text-muted-foreground px-6 py-3 rounded-md hover:text-foreground hover:border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                All Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
