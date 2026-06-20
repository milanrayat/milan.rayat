import { PERSON, METRICS, HIGHLIGHTS, SKILLS, CASE_STUDIES, COMING_SOON_CASE_STUDIES } from "@/lib/data";

export async function getProfile() {
  return PERSON;
}

export async function getMetrics() {
  return METRICS;
}

export async function getHighlights() {
  return HIGHLIGHTS;
}

export async function getSkills() {
  return SKILLS;
}

export async function getCaseStudies() {
  return CASE_STUDIES;
}

export async function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((cs) => cs.slug === slug) ?? null;
}

export async function getComingSoonCaseStudies() {
  return COMING_SOON_CASE_STUDIES;
}
