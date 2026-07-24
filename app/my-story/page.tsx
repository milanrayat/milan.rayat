import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { JourneyTimeline, type JourneyEntry } from '@/components/journey-timeline'
import { getSkills } from '@/lib/db'
import type { Metadata } from 'next'
import { Sparkles, Building2, Wrench, Users, type LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Milan Rayat | AI Product Manager',
  description:
    'IIT Guwahati Mechanical Engineer turned Senior Product Manager. Four years building enterprise AI products at Sprinklr, now at HEC Paris for an MBA.',
}

const JOURNEY: JourneyEntry[] = [
  {
    label: 'Education',
    period: '2017 — 2021',
    title: 'B.Tech, Mechanical Engineering',
    subtitle: 'IIT Guwahati, Minor in Product Design',
    logo: { src: '/logos/iit-guwahati.png', alt: 'IIT Guwahati logo' },
  },
  {
    label: 'EXL Services',
    period: '2021 — 2022',
    title: 'Consultant',
    subtitle: 'Analytics and process optimization for enterprise clients',
    logo: { src: '/logos/exl.svg', alt: 'EXL logo' },
  },
  {
    label: 'Sprinklr',
    period: '2022 — 2026',
    title: 'Product Manager',
    subtitle: 'Enterprise B2B SaaS',
    logo: { src: '/logos/sprinklr.png', alt: 'Sprinklr logo' },
    bullets: [
      'Product Analyst to Senior Product Analyst to Associate PM to Product Manager',
      'Owned quality monitoring and AI-powered call analytics for the contact center suite',
      'Led cross-functional teams of 14, across India, the US, Europe and the Middle East',
      '$20M+ ARR and 10x customer growth, across 100+ enterprise customers',
      '30% faster delivery, 3.6K hours and $80K saved annually',
    ],
  },
  {
    label: 'HEC Paris',
    period: '2026 — 2028',
    title: 'MBA',
    subtitle: 'Paris, France',
    logo: { src: '/logos/hec-paris.svg', alt: 'HEC Paris logo' },
    paragraph:
      "Four years of running cross-border teams and shipping AI products end to end taught me a lot on the job. What I wanted next was the formal side of it, real grounding in AI strategy and leadership, rather than only what I'd picked up by doing. That's what brought me to HEC Paris.",
    bullets: ['Focus: AI strategy, leadership, scaling technology-led businesses'],
    isNow: true,
  },
]

const PHILOSOPHY = [
  {
    label: 'Better as a team',
    body: "The best work I've shipped came from genuinely building with the people around me. I'd rather slow down to get a team aligned than move fast by myself.",
  },
  {
    label: 'Ownership changes how you work',
    body: 'When something is truly mine end to end, I care about it differently, and it shows in the outcome. I try to give that same ownership to the people on my team.',
  },
  {
    label: 'Feedback early, not eventually',
    body: "I'd rather have an uncomfortable conversation early than a bigger problem later. That goes both ways, I want people to tell me when I'm wrong too.",
  },
  {
    label: 'Curious by design',
    body: "I trained as an engineer before I ever wrote a PRD, and that habit of taking a problem apart to see how it actually works never left. Going back to a classroom for an MBA wasn't a step back, it was choosing to stay a beginner on purpose.",
  },
]

const CAPABILITY_ICONS: Record<string, LucideIcon> = {
  'AI & Product': Sparkles,
  Domain: Building2,
  Tools: Wrench,
  'Working Style': Users,
}

function CapabilityGroup({ label, items }: { label: string; items: string[] }) {
  const Icon = CAPABILITY_ICONS[label]
  return (
    <div className="rounded-lg border border-border/50 bg-card p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
        </div>
        <p className="text-sm font-heading font-semibold text-foreground">{label}</p>
      </div>
      <div className="flex flex-wrap gap-2" role="list" aria-label={label}>
        {items.map((item) => (
          <span
            key={item}
            role="listitem"
            className="inline-flex items-center rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default async function AboutPage() {
  const SKILLS = await getSkills()

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="about-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              About
            </p>
            <h1
              id="about-heading"
              className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance"
            >
              Analyst. Strategist. Builder.
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
              I started as a Mechanical Engineer at IIT Guwahati. Four years at Sprinklr took
              that problem-solving mindset and pointed it at enterprise AI products, contact
              center quality, call analytics, the kind of problems where the stakes are real
              and the systems get messy fast. I&apos;m now at HEC Paris for my MBA, sharpening
              the strategy and leadership side of that same thread. Here&apos;s how it happened.
            </p>
          </div>
        </section>

        {/* ── MY JOURNEY ───────────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="journey-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="journey-heading"
              className="font-heading font-semibold text-xl text-foreground mb-10"
            >
              My Journey
            </h2>
            <JourneyTimeline entries={JOURNEY} />
          </div>
        </section>

        {/* ── MY PHILOSOPHY ───────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="philosophy-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2
                  id="philosophy-heading"
                  className="font-heading font-semibold text-xl text-foreground mb-6 sticky top-28"
                >
                  My Philosophy
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PHILOSOPHY.map(({ label, body }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-5"
                    >
                      <p className="font-heading font-semibold text-foreground text-sm">{label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MY CAPABILITIES ─────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="capabilities-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="capabilities-heading"
              className="font-heading font-semibold text-xl text-foreground mb-10"
            >
              My Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <CapabilityGroup label="AI & Product" items={SKILLS.aiProduct} />
              <CapabilityGroup label="Domain" items={SKILLS.domain} />
              <CapabilityGroup label="Tools" items={SKILLS.tools} />
              <CapabilityGroup label="Working Style" items={SKILLS.workingStyle} />
            </div>
          </div>
        </section>

        {/* ── BEYOND THE ROADMAP ──────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8"
          aria-labelledby="personal-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2
                  id="personal-heading"
                  className="font-heading font-semibold text-xl text-foreground mb-2 sticky top-28"
                >
                  Beyond the Roadmap
                </h2>
                <p className="text-sm text-muted-foreground">
                  The person behind the PM.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: '⛰',
                      label: 'Himalayas Trekker',
                      desc: 'Avid trekker with multiple Himalayan routes completed. The mountains teach patience and navigation, skills that transfer directly to product.',
                    },
                    {
                      icon: '🕺',
                      label: 'Dancer',
                      desc: 'Performance arts sharpen spatial awareness, rhythm, and the ability to read a room, all underrated PM skills.',
                    },
                    {
                      icon: '🏀',
                      label: 'Basketball Nerd',
                      desc: "Film study, play-calling, and team dynamics. Basketball's analytical depth mirrors how I think about product strategy.",
                    },
                    {
                      icon: '🎯',
                      label: 'Jack of All Sports',
                      desc: 'Competitive by nature. Whether it&apos;s badminton, cricket, or table tennis, I show up to compete and learn.',
                    },
                  ].map(({ icon, label, desc }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-2 rounded-lg border border-border/40 bg-card p-5"
                    >
                      <span className="text-2xl" role="img" aria-label={label}>{icon}</span>
                      <p className="font-heading font-semibold text-foreground text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
