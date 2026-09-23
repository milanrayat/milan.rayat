import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase, GraduationCap, type LucideIcon } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudyCard } from '@/components/case-study-card'
import { IndependentProjectCard } from '@/components/independent-project-card'
import { RotatingWord } from '@/components/rotating-word'
import { ScrollProgressDots } from '@/components/scroll-progress-dots'
import { getProfile, getCaseStudies, getIndependentProjects } from '@/lib/db'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'case-studies', label: 'My Work' },
  { id: 'independent-work', label: 'Independent Work' },
  { id: 'cta', label: 'Get in Touch' },
]

type SnapshotItem = { title: string; org: string; isNow?: boolean }
type SnapshotSection = { label: string; icon: LucideIcon; items: SnapshotItem[] }

const SNAPSHOT: SnapshotSection[] = [
  {
    label: 'Professional Experience',
    icon: Briefcase,
    items: [
      { title: 'Product Manager', org: 'Sprinklr' },
      { title: 'Consultant', org: 'EXL' },
    ],
  },
  {
    label: 'Education',
    icon: GraduationCap,
    items: [
      { title: 'MBA', org: 'HEC Paris', isNow: true },
      { title: 'B.Tech, Mechanical Engineering', org: 'IIT Guwahati' },
    ],
  },
]

export default async function HomePage() {
  const PERSON = await getProfile()
  const CASE_STUDIES = await getCaseStudies()
  const INDEPENDENT = await getIndependentProjects()

  return (
    <>
      <Navbar />
      <ScrollProgressDots sections={SECTIONS} />
      <main>
        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-16 px-6 lg:px-8"
          aria-labelledby="hero-heading"
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(oklch(0.96 0.005 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0.005 250) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text content */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div>
                  <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                    {PERSON.title}
                  </p>
                  <h1
                    id="hero-heading"
                    className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance"
                  >
                    Building Enterprise{' '}
                    <RotatingWord words={['AI Products', 'B2B SaaS Products', '0→1 Products']} /> That
                    Move the Needle.
                  </h1>
                </div>

                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  {PERSON.uvp}
                </p>
              </div>

              {/* Headshot */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <Image
                    src="/milan-rayat.jpg"
                    alt="Milan Rayat — Product Manager at Sprinklr"
                    fill
                    sizes="(max-width: 1024px) 256px, 288px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Snapshot: experience + education */}
                <div className="w-64 lg:w-72 rounded-xl border border-border/50 bg-card p-4 flex flex-col gap-4 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5">
                  {SNAPSHOT.map((section) => (
                    <div key={section.label} className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        <section.icon className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {section.label}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {section.items.map((item) => (
                          <div key={item.title} className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm font-medium text-foreground">{item.title}</p>
                              {item.isNow && (
                                <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-accent">
                                  Now
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">{item.org}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES PREVIEW ──────────────────────────── */}
        <section
          id="case-studies"
          className="py-16 px-6 lg:px-8 border-t border-border/30"
          aria-labelledby="case-studies-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Deep Dives
                </p>
                <h2
                  id="case-studies-heading"
                  className="font-heading font-bold text-2xl lg:text-3xl text-foreground"
                >
                  My Work
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                View All
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="My Work"
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

            <div className="mt-8 sm:hidden">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                View All My Work
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── INDEPENDENT WORK ──────────────────────────────── */}
        <section
          id="independent-work"
          className="py-16 px-6 lg:px-8 border-t border-border/30"
          aria-labelledby="independent-work-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2
                id="independent-work-heading"
                className="font-heading font-bold text-2xl lg:text-3xl text-foreground"
              >
                Independent Work
              </h2>
            </div>

            {INDEPENDENT.map((p, i) => (
              <IndependentProjectCard
                key={p.id}
                slug={p.slug}
                title={p.cardTitle}
                oneLiner={p.oneLiner}
                stageBadge={p.stageBadge}
                infoChips={p.infoChips}
                variant="spotlight"
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section
          id="cta"
          className="py-16 px-6 lg:px-8 border-t border-border/30"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Open to New Opportunities
            </p>
            <h2
              id="cta-heading"
              className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4 text-balance"
            >
              Ready to build something great?
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8 text-pretty">
              {"I'm actively exploring Senior PM and AI PM roles at AI-first B2B SaaS companies. Let's talk about how I can drive impact on your team."}
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {"Let's Connect"}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
