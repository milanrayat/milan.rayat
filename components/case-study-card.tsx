'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, MonitorPlay } from 'lucide-react'
import { SkillTag } from './skill-tag'

interface CaseStudyCardProps {
  slug: string
  title: string
  tagline: string
  company: string
  role: string
  teamSize: string
  tags: string[]
  outcomeStat?: { value: string; label: string }
  coverImage?: string
  index?: number
}

export function CaseStudyCard({
  slug,
  title,
  tagline,
  company,
  role,
  teamSize,
  tags,
  outcomeStat,
  coverImage,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        href={`/case-studies/${slug}`}
        className="group flex flex-col h-full rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_30px_-8px_rgba(59,130,246,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Read case study: ${title}`}
      >
        {/* Banner */}
        <div className="relative aspect-video bg-secondary/60 p-3">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/90 to-accent/40">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={`${title} — product screenshot`}
                fill
                className="object-cover object-top"
              />
            ) : (
              <MonitorPlay
                size={100}
                className="absolute -bottom-5 -right-5 text-foreground/15"
                aria-hidden="true"
              />
            )}
            {!coverImage && (
              <div className="absolute top-4 left-5 text-foreground font-heading font-bold text-base tracking-tight drop-shadow">
                {company}
              </div>
            )}
          </div>
          <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            Case Study
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 gap-4 p-6 lg:p-7">
          <div>
            <span className="inline-flex items-center rounded-md bg-secondary border border-border/40 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground mb-3">
              {company}
            </span>
            <h3 className="font-heading font-semibold text-foreground text-xl leading-snug text-pretty group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{tagline}</p>

          {/* Meta chip row */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Role and team details">
            <SkillTag label={role} variant="accent" role="listitem" />
            <SkillTag label={teamSize} variant="default" role="listitem" />
            {tags.slice(0, 2).map((tag) => (
              <SkillTag key={tag} label={tag} variant="ghost" role="listitem" />
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/30">
            {outcomeStat && (
              <div>
                <p className="font-heading font-bold text-base text-foreground leading-none">
                  {outcomeStat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{outcomeStat.label}</p>
              </div>
            )}
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
              Read
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
