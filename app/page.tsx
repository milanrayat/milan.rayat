import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CaseStudyCard } from '@/components/case-study-card'
import { RotatingWord } from '@/components/rotating-word'
import { ScrollProgressDots } from '@/components/scroll-progress-dots'
import { getProfile, getCaseStudies } from '@/lib/db'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'cta', label: 'Get in Touch' },
]

export default async function HomePage() {
  const PERSON = await getProfile()
  const CASE_STUDIES = await getCaseStudies()

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
                    alt="Milan Rayat — Senior PM at Sprinklr"
                    fill
                    sizes="(max-width: 1024px) 256px, 288px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Snapshot: experience + education */}
                <div className="w-64 lg:w-72 rounded-xl border border-border/50 bg-card p-4 flex flex-col gap-3 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 p-1.5">
                      <Image
                        src="/logos/sprinklr.png"
                        alt="Sprinklr logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Product Manager</p>
                      <p className="text-xs text-muted-foreground">Sprinklr &middot; 2022 — Present</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 p-1.5">
                      <Image
                        src="/logos/exl.svg"
                        alt="EXL logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Consultant</p>
                      <p className="text-xs text-muted-foreground">EXL &middot; 2021 — 2022</p>
                    </div>
                  </div>
                  <div className="h-px bg-border/50" aria-hidden="true" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 p-1.5">
                      <Image
                        src="/logos/hec-paris.svg"
                        alt="HEC Paris logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">MBA</p>
                      <p className="text-xs text-muted-foreground">HEC Paris &middot; 2026 — 2028</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 p-1 overflow-hidden">
                      <Image
                        src="/logos/iit-guwahati.png"
                        alt="IIT Guwahati logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Bachelors of Engineering</p>
                      <p className="text-xs text-muted-foreground">IIT Guwahati &middot; 2015 — 2019</p>
                    </div>
                  </div>
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
                  Case Studies
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

            <div className="mt-8 sm:hidden">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                View All Case Studies
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
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
