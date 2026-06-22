'use client'

import { useEffect, useState } from 'react'

interface ScrollProgressDotsProps {
  sections: { id: string; label: string }[]
}

export function ScrollProgressDots({ sections }: ScrollProgressDotsProps) {
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
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
      aria-label="Page section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = id === activeId
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center justify-center p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
            aria-current={isActive ? 'true' : undefined}
            aria-label={label}
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-2.5 bg-accent'
                  : 'w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
              aria-hidden="true"
            />
          </a>
        )
      })}
    </nav>
  )
}
