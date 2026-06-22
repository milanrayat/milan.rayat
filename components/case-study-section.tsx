'use client'

import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = (index: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.35, delay: index * 0.06, ease: 'easeOut' as const },
})

interface Pill {
  title: string
  body?: string
  items?: string[]
}

interface Decision {
  number: string
  tag: string
  title: string
  chose: string
  result: string
}

interface TeamMember {
  role: string
  count: number
  location?: string
  body: string
}

interface ImpactCard {
  category: string
  value: string
  label: string
  description: string
}

interface BeforeAfter {
  beforeTitle: string
  beforeItems: string[]
  afterTitle: string
  afterItems: string[]
}

interface InsightShift {
  number: string
  title: string
  insight: string
  shiftTitle: string
  shift: string
}

export interface CaseStudySectionData {
  id: string
  number: string
  label: string
  heading: string
  paragraphs?: string[]
  quote?: string
  beforeAfter?: BeforeAfter
  pills?: Pill[]
  decisions?: Decision[]
  team?: TeamMember[]
  insightShifts?: InsightShift[]
  impactCards?: ImpactCard[]
  bullets?: string[]
}

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const {
    id,
    number,
    label,
    heading,
    paragraphs,
    quote,
    beforeAfter,
    pills,
    decisions,
    team,
    insightShifts,
    impactCards,
    bullets,
  } = section

  return (
    <section
      id={id}
      className="py-16 px-6 lg:px-8 border-b border-border/30 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          {number} / {label}
        </p>
        <h2
          id={`${id}-heading`}
          className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-6 text-balance"
        >
          {heading}
        </h2>

        {paragraphs && (
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed text-pretty">
                {p}
              </p>
            ))}
          </div>
        )}

        {quote && (
          <p className="text-xl lg:text-2xl font-heading text-foreground/80 leading-snug text-pretty mt-8 text-balance">
            &ldquo;{quote}&rdquo;
          </p>
        )}

        {beforeAfter && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-lg border border-border/50 bg-secondary/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {beforeAfter.beforeTitle}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {beforeAfter.beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-muted-foreground mt-1.5 shrink-0 text-xs" aria-hidden="true">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-accent/25 bg-accent/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                {beforeAfter.afterTitle}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {beforeAfter.afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0 text-xs" aria-hidden="true">&mdash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {pills && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {pills.map(({ title, body, items }, i) => (
              <motion.div
                key={title}
                {...fadeInUp(i)}
                className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <p className="font-heading font-semibold text-accent text-sm mb-1">{title}</p>
                {items ? (
                  <ul className="flex flex-col gap-2" role="list">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                        <span className="text-accent mt-1.5 shrink-0 text-[10px]" aria-hidden="true">&mdash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {decisions && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {decisions.map(({ number: n, tag, title, chose, result }, i) => (
              <motion.div
                key={n}
                {...fadeInUp(i)}
                className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">{n}</span>
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                    {tag}
                  </span>
                </div>
                <p className="font-heading font-semibold text-foreground text-base leading-snug text-pretty">
                  {title}
                </p>
                <div className="flex flex-col gap-1.5 pt-3 border-t border-border/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Chose
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{chose}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    Result
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed italic">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {team && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {team.map(({ role, count, location, body }, i) => (
              <motion.div
                key={role}
                {...fadeInUp(i)}
                className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <p className="font-heading font-bold text-3xl text-accent leading-none">{count}</p>
                <div className="flex gap-1" role="img" aria-label={`${count} people`}>
                  {Array.from({ length: Math.min(count, 8) }).map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="font-heading font-semibold text-foreground text-sm mt-1">{role}</p>
                {location && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin size={12} aria-hidden="true" />
                    {location}
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        )}

        {insightShifts && (
          <div className="flex flex-col gap-4 mt-2">
            {insightShifts.map(({ number: n, title, insight, shiftTitle, shift }, i) => (
              <motion.div
                key={n}
                {...fadeInUp(i)}
                className="rounded-lg border border-border/50 bg-card p-5 lg:p-6 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold text-muted-foreground tracking-wide mb-3">
                  {n} &middot; {title}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-0.5">
                      Insight
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
                  </div>
                  <div className="flex gap-3 pt-3 border-t border-border/30">
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-accent mt-0.5">
                      Shift
                    </span>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      <span className="font-semibold text-foreground">{shiftTitle}.</span> {shift}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {impactCards && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {impactCards.map(({ category, value, label: cardLabel, description }, i) => (
              <motion.div
                key={category}
                {...fadeInUp(i)}
                className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category}
                </span>
                <p className="font-heading font-bold text-3xl lg:text-4xl text-accent leading-none mt-2">
                  {value}
                </p>
                <p className="text-sm font-semibold text-foreground mt-1">{cardLabel}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {bullets && (
          <ul className={`flex flex-col gap-3 ${impactCards ? 'mt-6' : 'mt-2'}`} role="list">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <span className="text-accent mt-1.5 shrink-0 text-xs" aria-hidden="true">
                  &mdash;
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
