'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  value: string
  label: string
  category?: string
  index?: number
  size?: 'sm' | 'md' | 'lg'
}

export function MetricCard({
  value,
  label,
  category,
  index = 0,
  size = 'md',
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-6 hover:border-accent/30 hover:bg-card/80 transition-all duration-200"
      role="figure"
      aria-label={`${value} — ${label}`}
    >
      {category && (
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          {category}
        </span>
      )}
      <p
        className={
          size === 'lg'
            ? 'font-heading font-bold text-4xl lg:text-5xl text-accent leading-none'
            : size === 'sm'
              ? 'font-heading font-bold text-2xl text-accent leading-none'
              : 'font-heading font-bold text-3xl lg:text-4xl text-accent leading-none'
        }
        aria-hidden="true"
      >
        {value}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover:bg-accent/20 transition-all duration-300 rounded-b-lg"
        aria-hidden="true"
      />
    </motion.div>
  )
}
