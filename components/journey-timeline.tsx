import Image from 'next/image'
import { cn } from '@/lib/utils'

export type JourneyEntry = {
  period: string
  label: string
  title: string
  subtitle: string
  logo?: { src: string; alt: string }
  paragraph?: string
  bullets?: string[]
  isNow?: boolean
}

export function JourneyTimeline({ entries }: { entries: JourneyEntry[] }) {
  return (
    <div className="relative" role="list" aria-label="Career journey timeline">
      <div
        aria-hidden="true"
        className="absolute left-[4px] top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-muted-foreground/30 via-muted-foreground/20 to-accent"
      />
      <div className="flex flex-col gap-10">
        {entries.map((entry, i) => (
          <div key={i} role="listitem" className="relative pl-9">
            {entry.isNow ? (
              <span aria-hidden="true" className="absolute left-0 top-1.5 flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                  style={{ animationDuration: '2.2s' }}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="absolute left-[1px] top-1.5 h-2 w-2 rounded-full bg-muted-foreground/60 border border-background"
              />
            )}

            <div
              className={cn(
                'rounded-lg border bg-card p-6 flex flex-col gap-3',
                entry.isNow
                  ? 'border-accent/40 shadow-[0_0_50px_-20px_var(--accent)]'
                  : 'border-border/50'
              )}
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  {entry.logo && (
                    <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center shrink-0 p-1.5 overflow-hidden">
                      <Image
                        src={entry.logo.src}
                        alt={entry.logo.alt}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {entry.label}
                    </p>
                    <p className="text-xs text-muted-foreground/70">{entry.period}</p>
                  </div>
                </div>
                {entry.isNow && (
                  <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                    Now
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg">
                  {entry.title}
                </h3>
                <p className="text-sm text-accent mt-0.5">{entry.subtitle}</p>
              </div>

              {entry.paragraph && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.paragraph}
                </p>
              )}

              {entry.bullets && (
                <ul className="flex flex-col gap-1.5 mt-1" role="list">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1.5 shrink-0 text-xs" aria-hidden="true">
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
