'use client'

import { useEffect, useState } from 'react'

interface CaseStudySideNavProps {
  sections: { id: string; number: string; label: string }[]
}

export function CaseStudySideNav({ sections }: CaseStudySideNavProps) {
  const [activeId, setActiveId] = useState<string | undefined>(undefined)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
      aria-label="Case study section navigation"
    >
      {sections.map(({ id, number, label }) => {
        const isActive = id === activeId
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3"
            aria-current={isActive ? 'true' : undefined}
            aria-label={`${number} — ${label}`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-widest whitespace-nowrap transition-opacity ${
                isActive ? 'opacity-100 text-accent' : 'opacity-0 group-hover:opacity-70 text-muted-foreground'
              }`}
            >
              {number} / {label}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? 'w-6 bg-accent' : 'w-4 bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
              aria-hidden="true"
            />
          </a>
        )
      })}
    </nav>
  )
}
