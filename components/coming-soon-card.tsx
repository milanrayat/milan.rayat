'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

interface ComingSoonCardProps {
  company: string
  title: string
  tagline: string
  outcomeStat?: { value: string; label: string }
  index?: number
}

export function ComingSoonCard({ company, title, tagline, outcomeStat, index = 0 }: ComingSoonCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="h-full"
    >
      <div
        className="flex flex-col h-full rounded-xl border border-border/40 bg-card/50 overflow-hidden opacity-70"
        aria-label={`${title} — case study coming soon`}
      >
        {/* Banner */}
        <div className="relative aspect-video bg-secondary/40 p-3">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
            <Lock size={32} className="text-muted-foreground/40" aria-hidden="true" />
          </div>
          <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" aria-hidden="true" />
            Coming Soon
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 gap-4 p-6 lg:p-7">
          <div>
            <span className="inline-flex items-center rounded-md bg-secondary border border-border/40 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground mb-3">
              {company}
            </span>
            <h3 className="font-heading font-semibold text-foreground text-xl leading-snug text-pretty">
              {title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{tagline}</p>

          <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/30">
            {outcomeStat && (
              <div>
                <p className="font-heading font-bold text-base text-foreground leading-none">
                  {outcomeStat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{outcomeStat.label}</p>
              </div>
            )}
            <span className="text-sm font-medium text-muted-foreground/60">Write-up in progress</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
