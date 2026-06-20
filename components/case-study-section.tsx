interface Pill {
  title: string
  body: string
}

interface TeamRow {
  role: string
  count: string
  body: string
}

interface ImpactCard {
  category: string
  value: string
  label: string
  description: string
}

export interface CaseStudySectionData {
  id: string
  number: string
  label: string
  heading: string
  paragraphs?: string[]
  quote?: string
  pills?: Pill[]
  decisions?: Pill[]
  team?: TeamRow[]
  impactCards?: ImpactCard[]
  bullets?: string[]
}

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const { id, number, label, heading, paragraphs, quote, pills, decisions, team, impactCards, bullets } = section

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

        {pills && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {pills.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-5">
                <p className="font-heading font-semibold text-accent text-sm">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        )}

        {decisions && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {decisions.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-5">
                <p className="font-heading font-semibold text-foreground text-sm">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        )}

        {team && (
          <div className="flex flex-col gap-5 mt-2">
            {team.map(({ role, count, body }) => (
              <div key={role} className="flex items-start gap-4">
                <span className="shrink-0 inline-flex items-center justify-center w-12 h-8 rounded-md bg-accent/15 border border-accent/25 text-xs font-bold text-accent">
                  {role}
                </span>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{count}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {impactCards && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {impactCards.map(({ category, value, label: cardLabel, description }) => (
              <div
                key={category}
                className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category}
                </span>
                <p className="font-heading font-bold text-3xl lg:text-4xl text-accent leading-none mt-2">
                  {value}
                </p>
                <p className="text-sm font-semibold text-foreground mt-1">{cardLabel}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{description}</p>
              </div>
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
