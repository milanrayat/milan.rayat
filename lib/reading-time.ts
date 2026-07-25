import type { CaseStudySectionData } from '@/components/case-study-section'

const WORDS_PER_MINUTE = 200

function countWords(text: string | undefined): number {
  if (!text) return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

function countSectionWords(section: CaseStudySectionData): number {
  let words = 0

  words += countWords(section.heading)
  section.paragraphs?.forEach((p) => (words += countWords(p)))
  words += countWords(section.quote)
  words += countWords(section.closingQuote)
  section.bullets?.forEach((b) => (words += countWords(b)))

  if (section.beforeAfter) {
    section.beforeAfter.beforeItems.forEach((i) => (words += countWords(i)))
    section.beforeAfter.afterItems.forEach((i) => (words += countWords(i)))
  }

  section.pills?.forEach((pill) => {
    words += countWords(pill.body)
    pill.items?.forEach((i) => (words += countWords(i)))
  })

  section.decisions?.forEach((d) => {
    words += countWords(d.title) + countWords(d.chose) + countWords(d.result)
  })

  section.insightShifts?.forEach((s) => {
    words += countWords(s.insight) + countWords(s.shift)
  })

  section.impactCards?.forEach((c) => (words += countWords(c.description)))

  section.team?.forEach((t) => (words += countWords(t.body)))

  return words
}

export function getReadingStats(sections: CaseStudySectionData[]) {
  const totalWords = sections.reduce((sum, section) => sum + countSectionWords(section), 0)
  return {
    minutes: Math.max(1, Math.round(totalWords / WORDS_PER_MINUTE)),
    sectionCount: sections.length,
  }
}
