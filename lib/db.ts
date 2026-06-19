import { prisma } from "@/lib/prisma";

export async function getProfile() {
  const profile = await prisma.profile.findFirst();
  if (!profile) throw new Error("No profile found — did you run `npx prisma db seed`?");
  return profile;
}

export async function getMetrics() {
  const metrics = await prisma.metric.findMany({ orderBy: { order: "asc" } });
  return metrics.map(({ value, label, category }) => ({ value, label, category }));
}

export async function getHighlights() {
  const highlights = await prisma.highlight.findMany({ orderBy: { order: "asc" } });
  return highlights.map(({ slug, category, headline, body }) => ({
    id: slug,
    category,
    headline,
    body,
  }));
}

export async function getSkills() {
  const skills = await prisma.skill.findMany({ orderBy: { order: "asc" } });
  return {
    technical: skills.filter((s) => s.category === "technical").map((s) => s.value),
    domain: skills.filter((s) => s.category === "domain").map((s) => s.value),
    softSkills: skills.filter((s) => s.category === "softSkills").map((s) => s.value),
  };
}

export async function getCaseStudies() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { order: "asc" },
    include: { metrics: { orderBy: { order: "asc" } } },
  });
  return caseStudies.map((cs) => ({
    id: cs.slug,
    slug: cs.slug,
    title: cs.title,
    tagline: cs.tagline,
    tags: JSON.parse(cs.tags) as string[],
    metrics: cs.metrics.map(({ value, label }) => ({ value, label })),
    situation: cs.situation,
    task: cs.task,
    actions: JSON.parse(cs.actions) as string[],
    result: cs.result,
  }));
}

export async function getCaseStudyBySlug(slug: string) {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}
