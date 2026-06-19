'use client'

import { motion } from 'framer-motion'

interface HighlightCardProps {
  category: string
  headline: string
  body: string
  index?: number
}

export function HighlightCard({ category, headline, body, index = 0 }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-6 hover:border-border hover:bg-card/80 transition-all duration-200"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
        {category}
      </span>
      <h3 className="font-heading font-semibold text-foreground text-base leading-snug">
        {headline}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </motion.div>
  )
}
