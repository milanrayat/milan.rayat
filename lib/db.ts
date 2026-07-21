import {
  PERSON,
  METRICS,
  HIGHLIGHTS,
  SKILLS,
  CASE_STUDIES,
  INDEPENDENT_PROJECTS,
} from "@/lib/data";

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

export async function getIndependentProjects() {
  return INDEPENDENT_PROJECTS;
}

export async function getIndependentProjectBySlug(slug: string) {
  return INDEPENDENT_PROJECTS.find((p) => p.slug === slug) ?? null;
}
