'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, MonitorPlay } from 'lucide-react'

interface CaseStudyCardProps {
  slug: string
  title: string
  tagline: string
  company: string
  duration: string
  heroStats: { value: string; label: string }[]
  index?: number
}

export function CaseStudyCard({
  slug,
  title,
  tagline,
  company,
  duration,
  heroStats,
  index = 0,
}: CaseStudyCardProps) {
  const headline = heroStats[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        href={`/case-studies/${slug}`}
        className="group flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden hover:border-accent/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Read case study: ${title}`}
      >
        {/* Banner */}
        <div className="relative h-48 lg:h-56 bg-gradient-to-br from-accent/90 to-accent/40 overflow-hidden">
          <div className="absolute top-5 left-6 text-accent-foreground font-heading font-bold text-lg tracking-tight">
            {company}
          </div>
          <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            Case Study
          </div>
          <MonitorPlay
            size={120}
            className="absolute -bottom-6 -right-6 text-accent-foreground/15"
            aria-hidden="true"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 p-6 lg:p-8">
          <div>
            <span className="inline-flex items-center rounded-md bg-secondary border border-border/40 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground mb-3">
              {company} &middot; {duration}
            </span>
            <h3 className="font-heading font-semibold text-foreground text-xl leading-snug text-pretty group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{tagline}</p>

          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            {headline && (
              <div>
                <p className="font-heading font-bold text-base text-foreground leading-none">
                  {headline.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{headline.label}</p>
              </div>
            )}
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
              Read
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
