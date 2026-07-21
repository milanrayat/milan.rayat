'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Nfc } from 'lucide-react'

interface IndependentProjectCardProps {
  slug: string
  title: string
  oneLiner: string
  stageBadge: string
  infoChips: string[]
  coverImage?: string
  variant?: 'spotlight' | 'grid'
  index?: number
}

/** Stand-in artwork until real product photography lands. */
function CardArt({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[oklch(0.19_0.03_262)]">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 25%, oklch(0.51 0.22 262 / 0.35), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.96 0.005 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.96 0.005 250) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      {/* The card itself */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative ${
            compact ? 'w-[58%]' : 'w-[62%]'
          } aspect-[1.586/1] rounded-xl border border-accent/40 bg-gradient-to-br from-[oklch(0.32_0.07_262)] to-[oklch(0.21_0.04_262)] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.65)] rotate-[-8deg] flex flex-col justify-between p-4`}
        >
          <span className="font-heading font-bold text-foreground text-lg leading-none tracking-tight">
            Ctrl
          </span>
          <Nfc
            size={compact ? 26 : 30}
            className="text-accent self-end"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

export function IndependentProjectCard({
  slug,
  title,
  oneLiner,
  stageBadge,
  infoChips,
  coverImage,
  variant = 'grid',
  index = 0,
}: IndependentProjectCardProps) {
  const isSpotlight = variant === 'spotlight'

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
        className={`group flex h-full rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_30px_-8px_rgba(59,130,246,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isSpotlight ? 'flex-col lg:flex-row' : 'flex-col'
        }`}
        aria-label={`Read the Ctrl independent build case study`}
      >
        {/* Visual */}
        <div
          className={
            isSpotlight
              ? 'relative shrink-0 w-full lg:w-[38%] aspect-video lg:aspect-auto lg:min-h-[280px]'
              : 'relative aspect-video'
          }
        >
          {coverImage ? (
            <Image
              src={coverImage}
              alt="Ctrl — the NFC focus card"
              fill
              className="object-cover"
            />
          ) : (
            <CardArt compact={!isSpotlight} />
          )}
        </div>

        {/* Body */}
        <div
          className={`flex flex-col flex-1 gap-4 ${
            isSpotlight ? 'p-6 lg:p-8' : 'p-6 lg:p-7'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-accent/15 border border-accent/25 px-2.5 py-0.5 text-xs font-medium text-accent">
              Independent build
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary border border-border/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                aria-hidden="true"
              />
              {stageBadge}
            </span>
          </div>

          <div>
            <h3
              className={`font-heading font-bold text-foreground leading-tight tracking-tight group-hover:text-accent transition-colors ${
                isSpotlight ? 'text-2xl lg:text-3xl' : 'text-xl'
              }`}
            >
              Ctrl
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5">{title}</p>
          </div>

          <p
            className={`text-sm text-muted-foreground leading-relaxed ${
              isSpotlight ? '' : 'line-clamp-3'
            }`}
          >
            {oneLiner}
          </p>

          <ul
            className="flex flex-wrap gap-2"
            aria-label="Project details"
          >
            {(isSpotlight ? infoChips : infoChips.slice(0, 2)).map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium tracking-wide bg-muted/40 text-muted-foreground border border-border/50"
              >
                {chip}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end pt-3 mt-auto border-t border-border/30">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
              Read case study
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
