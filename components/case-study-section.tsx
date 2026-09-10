'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ChevronDown, ArrowRight, ArrowDown, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

interface TimelineStep {
  stage: string
  title: string
  summary: string
  detail: {
    context: string
    takeaway: string
  }
}

interface SectionImage {
  src: string
  alt: string
  caption?: string
}

interface ArchitectureNode {
  layer: string
  title: string
  body: string
}

interface ArchitectureDiagram {
  nodes: ArchitectureNode[]
  onDeviceFrom: number
  note: string
}

export interface CaseStudySectionData {
  id: string
  number: string
  label: string
  heading: string
  image?: SectionImage
  paragraphs?: string[]
  quote?: string
  quoteAttribution?: string
  beforeAfter?: BeforeAfter
  pills?: Pill[]
  decisions?: Decision[]
  team?: TeamMember[]
  insightShifts?: InsightShift[]
  timeline?: TimelineStep[]
  architecture?: ArchitectureDiagram
  screens?: SectionImage[]
  impactCards?: ImpactCard[]
  bullets?: string[]
  /** A single standout claim, rendered as an emphasized callout rather than a plain bullet. */
  highlight?: string
  /** Same treatment as `quote`, but rendered last, for closing a section. */
  closingQuote?: string
}

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const {
    id,
    number,
    label,
    heading,
    image,
    paragraphs,
    quote,
    quoteAttribution,
    beforeAfter,
    pills,
    decisions,
    team,
    insightShifts,
    timeline,
    architecture,
    screens,
    impactCards,
    bullets,
    highlight,
    closingQuote,
  } = section

  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set())

  const toggleStep = (i: number) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

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
              <p key={i} className="text-base text-muted-foreground leading-relaxed text-pretty max-w-prose">
                {p}
              </p>
            ))}
          </div>
        )}

        {quote && (
          <div className="mt-8">
            <p className="text-xl lg:text-2xl font-heading text-foreground/80 leading-snug text-pretty text-balance">
              &ldquo;{quote}&rdquo;
            </p>
            {quoteAttribution && (
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-4">
                {quoteAttribution}
              </p>
            )}
          </div>
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

        {timeline && (
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-2">
              {timeline.map((step, i) => {
                const isOpen = expandedSteps.has(i)
                const isLast = i === timeline.length - 1
                const detailId = `${id}-timeline-detail-${i}`
                return (
                  <div key={step.stage} className="contents">
                    <motion.div
                      {...fadeInUp(i)}
                      className="flex-1 min-w-0 rounded-lg border border-border/50 bg-card p-5"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-1">
                        {step.stage}
                      </p>
                      <p className="font-heading font-semibold text-foreground text-base leading-snug text-pretty mb-1.5">
                        {step.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.summary}</p>
                      <button
                        type="button"
                        onClick={() => toggleStep(i)}
                        aria-expanded={isOpen}
                        aria-controls={detailId}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-2.5 hover:text-accent/80 transition-colors"
                      >
                        {isOpen ? 'Show less' : 'Read the full story'}
                        <ChevronDown
                          size={14}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={detailId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 pt-3">
                              <div className="flex flex-col gap-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                  What happened
                                </span>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {step.detail.context}
                                </p>
                              </div>
                              <div className="flex flex-col gap-1.5 pt-3 border-t border-border/30">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                                  Why it mattered
                                </span>
                                <p className="text-sm text-foreground/90 leading-relaxed">
                                  {step.detail.takeaway}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    {!isLast && (
                      <>
                        <ArrowRight
                          className="hidden sm:block text-accent/60 shrink-0 self-start mt-14"
                          size={18}
                          aria-hidden="true"
                        />
                        <ArrowDown
                          className="sm:hidden text-accent/60 shrink-0 mx-auto"
                          size={18}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {architecture && (
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2">
              {architecture.nodes.slice(0, architecture.onDeviceFrom).map((node) => (
                <div key={node.title} className="contents">
                  <div className="flex-1 min-w-0 rounded-lg border border-border/50 bg-card p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      {node.layer}
                    </p>
                    <p className="font-heading font-semibold text-foreground text-sm mb-1">{node.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{node.body}</p>
                  </div>
                  <ArrowRight
                    className="hidden sm:block text-muted-foreground/50 shrink-0"
                    size={16}
                    aria-hidden="true"
                  />
                  <ArrowDown
                    className="sm:hidden text-muted-foreground/50 shrink-0 mx-auto"
                    size={16}
                    aria-hidden="true"
                  />
                </div>
              ))}
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 border border-dashed border-accent/30 rounded-lg p-4 sm:p-3 flex-1">
                <span className="absolute -top-2.5 left-3 bg-background px-2 text-[10px] font-bold uppercase tracking-widest text-accent">
                  On-device
                </span>
                {architecture.nodes.slice(architecture.onDeviceFrom).map((node, i, arr) => (
                  <div key={node.title} className="contents">
                    <div className="flex-1 min-w-0 rounded-lg border border-border/50 bg-card p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {node.layer}
                      </p>
                      <p className="font-heading font-semibold text-foreground text-sm mb-1">{node.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{node.body}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <>
                        <ArrowRight
                          className="hidden sm:block text-muted-foreground/50 shrink-0"
                          size={16}
                          aria-hidden="true"
                        />
                        <ArrowDown
                          className="sm:hidden text-muted-foreground/50 shrink-0 mx-auto"
                          size={16}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {architecture.note && (
              <p className="text-xs text-muted-foreground leading-relaxed mt-4">{architecture.note}</p>
            )}
          </div>
        )}

        {image && (
          <figure className="mt-8 mb-2">
            <div className="relative w-full rounded-xl border border-border/50 overflow-hidden bg-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={1024}
                height={592}
                className="w-full h-auto"
              />
            </div>
            {image.caption && (
              <figcaption className="text-sm text-muted-foreground mt-3 text-pretty">
                {image.caption}
              </figcaption>
            )}
          </figure>
        )}

        {screens && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {screens.map((screen, i) => (
              <motion.figure key={`${screen.src}-${i}`} {...fadeInUp(i)}>
                <div className="relative w-full rounded-xl border border-border/50 overflow-hidden bg-card">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={640}
                    height={1280}
                    className="w-full h-auto"
                  />
                </div>
                {screen.caption && (
                  <figcaption className="text-sm text-muted-foreground mt-3 text-pretty">
                    {screen.caption}
                  </figcaption>
                )}
              </motion.figure>
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

        {highlight && (
          <div className="flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 px-5 py-4 mt-6">
            <ShieldCheck className="shrink-0 text-accent mt-0.5" size={20} aria-hidden="true" />
            <p className="font-heading font-semibold text-accent text-base leading-snug text-pretty">
              {highlight}
            </p>
          </div>
        )}

        {closingQuote && (
          <blockquote className="border-l-2 border-accent pl-6 mt-10">
            <p className="text-lg lg:text-xl font-heading text-foreground/85 leading-snug text-pretty">
              &ldquo;{closingQuote}&rdquo;
            </p>
          </blockquote>
        )}
      </div>
    </section>
  )
}
