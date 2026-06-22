'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface RotatingWordProps {
  words: string[]
  intervalMs?: number
  className?: string
}

export function RotatingWord({ words, intervalMs = 2500, className }: RotatingWordProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [words.length, intervalMs])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span className={`relative inline-grid align-bottom ${className ?? ''}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="col-start-1 row-start-1 text-accent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
