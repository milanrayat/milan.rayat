import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PERSON, METRICS, HIGHLIGHTS, SKILLS, CASE_STUDIES } from "../lib/data";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:/Users/milanrayat/Documents/pm-portfolio-generator/prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.contactSubmission.deleteMany();
  await prisma.caseStudyMetric.deleteMany();
  await prisma.caseStudy.deleteMany();
  await prisma.highlight.deleteMany();
  await prisma.metric.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({ data: PERSON });

  await prisma.metric.createMany({
    data: METRICS.map((m, order) => ({ ...m, order })),
  });

  await prisma.highlight.createMany({
    data: HIGHLIGHTS.map((h, order) => ({ slug: h.id, category: h.category, headline: h.headline, body: h.body, order })),
  });

  await prisma.skill.createMany({
    data: [
      ...SKILLS.technical.map((value, order) => ({ category: "technical", value, order })),
      ...SKILLS.domain.map((value, order) => ({ category: "domain", value, order })),
      ...SKILLS.softSkills.map((value, order) => ({ category: "softSkills", value, order })),
    ],
  });

  for (const [order, cs] of CASE_STUDIES.entries()) {
    await prisma.caseStudy.create({
      data: {
        slug: cs.slug,
        title: cs.title,
        tagline: cs.tagline,
        tags: JSON.stringify(cs.tags),
        situation: cs.situation,
        task: cs.task,
        actions: JSON.stringify(cs.actions),
        result: cs.result,
        order,
        metrics: {
          create: cs.metrics.map((m, mOrder) => ({ value: m.value, label: m.label, order: mOrder })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
