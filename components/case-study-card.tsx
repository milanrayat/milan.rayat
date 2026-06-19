'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SkillTag } from './skill-tag'

interface CaseStudyCardProps {
  id: string
  slug: string
  title: string
  tagline: string
  tags: string[]
  metrics: { value: string; label: string }[]
  index?: number
}

export function CaseStudyCard({
  slug,
  title,
  tagline,
  tags,
  metrics,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        href={`/case-studies/${slug}`}
        className="group flex flex-col gap-5 rounded-lg border border-border/50 bg-card p-6 lg:p-8 hover:border-accent/40 hover:bg-card/70 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Read case study: ${title}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading font-semibold text-foreground text-lg leading-snug text-pretty group-hover:text-accent transition-colors">
            {title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-0.5"
            aria-hidden="true"
          />
        </div>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground leading-relaxed">{tagline}</p>

        {/* Metrics strip */}
        <div
          className="grid grid-cols-2 gap-3 py-4 border-y border-border/30"
          role="list"
          aria-label="Key metrics"
        >
          {metrics.slice(0, 4).map((m) => (
            <div key={m.label} role="listitem">
              <p className="font-heading font-bold text-xl text-accent">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2" role="list" aria-label="Topic tags">
          {tags.map((tag) => (
            <SkillTag key={tag} label={tag} variant="ghost" role="listitem" />
          ))}
        </div>
      </Link>
    </motion.article>
  )
}
