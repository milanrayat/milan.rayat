import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkillTag } from '@/components/skill-tag'
import { getSkills } from '@/lib/db'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Milan Rayat | Senior AI PM',
  description:
    'IIT Guwahati Mechanical Engineer turned Senior Product Manager. 5+ years building enterprise B2B SaaS at Sprinklr. Deep expertise in AI-powered contact center quality management.',
}

const CAREER_TIMELINE = [
  {
    period: '2020 — Present',
    role: 'Senior Product Manager',
    company: 'Sprinklr',
    type: 'Enterprise B2B SaaS',
    highlights: [
      'Owned quality monitoring and call analytics products for the contact center suite',
      'Led 14-member cross-functional teams across India and the US',
      'Drove $20M+ ARR, 10x customer growth, and org-wide adoption',
      'Spearheaded AI-powered QA features and EU regulatory compliance integrations',
    ],
  },
  {
    period: 'Earlier',
    role: 'Analytics & Product Roles',
    company: 'Enterprise B2B',
    type: 'Data & Product Analytics',
    highlights: [
      'Built large-scale data pipelines and analytics solutions',
      'Collaborated with C-suite stakeholders on data-driven roadmap decisions',
      'Laid the technical foundation for a PM career grounded in quantitative thinking',
    ],
  },
  {
    period: '2015 — 2019',
    role: 'B.Tech, Mechanical Engineering',
    company: 'IIT Guwahati',
    type: 'Education',
    highlights: [
      'Core engineering and systems thinking fundamentals',
      'Quantitative reasoning, analytical problem-solving',
      'Diverse technical foundation that informs product architecture decisions',
    ],
  },
]

export default async function AboutPage() {
  const SKILLS = await getSkills()

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* ── HEADER ──────────────────────────────────────── */}
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
              Engineer. Strategist. Builder.
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
              I started my career as a Mechanical Engineering graduate from IIT Guwahati — one of India&apos;s premier technical institutes. That foundation in first-principles thinking and systems design became the bedrock of everything I&apos;ve built since.
            </p>
          </div>
        </section>

        {/* ── PROFESSIONAL STORY ──────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="story-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2
                  id="story-heading"
                  className="font-heading font-semibold text-xl text-foreground mb-6 sticky top-28"
                >
                  The Journey
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6 text-muted-foreground leading-relaxed">
                <p>
                  After IIT Guwahati, I gravitated toward the intersection of data and product decisions. Before formal PM roles, I built and owned large-scale analytics pipelines — learning to translate raw data into executive-level narratives. That combination of engineering rigor and business fluency became my edge.
                </p>
                <p>
                  At Sprinklr, I stepped into product ownership of the <strong className="text-foreground font-medium">contact center quality monitoring</strong> suite — a complex, high-stakes domain where enterprise customers evaluate thousands of agent interactions daily. I owned everything: vision, roadmap, delivery, go-to-market, and customer adoption.
                </p>
                <p>
                  Over five years, I&apos;ve shipped products adopted by 100+ enterprise customers, generated $20M+ ARR, and closed a $10M deal for Europe&apos;s largest telecom provider through rigorous EU compliance work. I&apos;ve run 14-member cross-functional teams across India and the US, presented roadmaps to C-suite stakeholders, and earned a CTO Award for delivery quality.
                </p>
                <p>
                  Today, I&apos;m focused on the next frontier: <strong className="text-foreground font-medium">AI-powered product experiences</strong> that transform how enterprises evaluate quality, coach agents, and derive insight from unstructured conversational data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PM PHILOSOPHY ───────────────────────────────── */}
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
                  PM Philosophy
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: 'Outcomes over output',
                      body: 'I measure success in ARR, customer adoption, and time saved — not features shipped. Every roadmap decision maps to a business metric.',
                    },
                    {
                      label: 'Data before opinion',
                      body: "I run structured discovery before writing a single line of PRD. Customer interviews, usage data, and competitive signals inform every decision.",
                    },
                    {
                      label: 'Ship to learn',
                      body: 'Iterative delivery beats waterfall perfection. I scope for the smallest testable version, ship it, and build from validated learning.',
                    },
                    {
                      label: 'Executive-ready by default',
                      body: 'Every PM is a spokesperson for the product. I write and present at C-suite level — clear, crisp, and tied to the business case.',
                    },
                  ].map(({ label, body }) => (
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

        {/* ── AI SPECIALIZATION ───────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="ai-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2
                  id="ai-heading"
                  className="font-heading font-semibold text-xl text-foreground mb-2 sticky top-28"
                >
                  AI Product Specialization
                </h2>
                <p className="text-sm text-accent font-medium">
                  Beyond the buzzword
                </p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="rounded-lg border border-accent/25 bg-accent/5 p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    My AI product thinking goes beyond &quot;add LLM to feature.&quot; I work with structured prompt engineering workflows, understand LLM evaluation frameworks, and have hands-on experience integrating speech analytics and AI-driven quality scoring into enterprise contact center workflows.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I use AI tooling daily — Claude for structured analysis, Cursor and v0 for rapid prototyping — and bring that operator-level understanding to every AI product decision.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'AI Evals & Quality Scoring', desc: 'Designing rubrics and automated evaluation frameworks for LLM-generated outputs.' },
                    { label: 'Prompt Engineering', desc: 'Structured prompt workflows for consistent, auditable AI behavior in enterprise settings.' },
                    { label: 'Speech & NLP Analytics', desc: 'Contact center intelligence: sentiment, intent, topic classification at scale.' },
                    { label: 'LLM Fine-tuning Parameters', desc: 'Understanding temperature, sampling, context windows — and their product-level tradeoffs.' },
                  ].map(({ label, desc }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1.5 rounded-lg border border-border/40 bg-card p-4"
                    >
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider">{label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAREER TIMELINE ─────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="timeline-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="timeline-heading"
              className="font-heading font-semibold text-xl text-foreground mb-10"
            >
              Career Timeline
            </h2>
            <div className="flex flex-col gap-6" role="list" aria-label="Career timeline">
              {CAREER_TIMELINE.map((item) => (
                <div
                  key={item.period}
                  role="listitem"
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-border/30 last:border-0"
                >
                  <div className="md:col-span-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      {item.period}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground text-base">
                          {item.role}
                        </h3>
                        <p className="text-sm text-accent mt-0.5">{item.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground border border-border/50 rounded px-2 py-0.5 shrink-0">
                        {item.type}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-1.5" role="list">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1.5 shrink-0 text-xs" aria-hidden="true">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS MATRIX ───────────────────────────────── */}
        <section
          className="py-16 px-6 lg:px-8 border-b border-border/30"
          aria-labelledby="skills-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="skills-heading"
              className="font-heading font-semibold text-xl text-foreground mb-10"
            >
              Skills Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Technical
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technical skills">
                  {SKILLS.technical.map((s) => (
                    <SkillTag key={s} label={s} variant="accent" role="listitem" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Domain Expertise
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Domain expertise">
                  {SKILLS.domain.map((s) => (
                    <SkillTag key={s} label={s} variant="default" role="listitem" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Soft Skills
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Soft skills">
                  {SKILLS.softSkills.map((s) => (
                    <SkillTag key={s} label={s} variant="ghost" role="listitem" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERSONAL ────────────────────────────────────── */}
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
                      desc: 'Avid trekker with multiple Himalayan routes completed. The mountains teach patience and navigation — skills that transfer directly to product.',
                    },
                    {
                      icon: '🕺',
                      label: 'Dancer',
                      desc: 'Performance arts sharpen spatial awareness, rhythm, and the ability to read a room — all underrated PM skills.',
                    },
                    {
                      icon: '🏀',
                      label: 'Basketball Nerd',
                      desc: "Film study, play-calling, and team dynamics — basketball's analytical depth mirrors how I think about product strategy.",
                    },
                    {
                      icon: '🎯',
                      label: 'Jack of All Sports',
                      desc: 'Competitive by nature. Whether it&apos;s badminton, cricket, or table tennis — I show up to compete and learn.',
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
