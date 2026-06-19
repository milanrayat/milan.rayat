export const PERSON = {
  name: 'Milan Rayat',
  title: 'Senior Product Manager · AI & Enterprise B2B SaaS',
  tagline: 'IIT Guwahati Engineer turned Product Manager.',
  uvp: 'I build B2B SaaS products that make contact centers smarter — from AI-quality monitoring to call analytics. 4+ years shipping enterprise solutions adopted by 100+ customers, generating $20M+ ARR across global markets.',
  email: 'milanrayat99@gmail.com',
  linkedin: 'https://www.linkedin.com/in/milan-rayat/',
  calendly: 'https://calendly.com/milanrayat99/30min',
  company: 'Sprinklr',
}

export const METRICS = [
  { value: '$20M+', label: 'ARR — Quality Monitoring Product', category: 'Revenue' },
  { value: '10x', label: 'Customer Growth, 120% YoY', category: 'Growth' },
  { value: '$40M', label: 'ARR — Redaction & Compliance Tools', category: 'Revenue' },
  { value: '20K', label: 'Daily Calls Automated', category: 'Scale' },
  { value: '$10M', label: 'Deal Won — EU Telecom Compliance', category: 'Deal' },
  { value: '500+', label: 'Implementation Members Upskilled', category: 'Enablement' },
]

export const HIGHLIGHTS = [
  {
    id: 'quality-monitoring',
    category: 'Revenue Impact',
    headline: '$20M ARR · 10x Customer Growth',
    body: 'Led quality monitoring product strategy for a 14-member India-US team; drove 10x customer growth and $20M ARR with 120% YoY growth, adopted org-wide at Sprinklr.',
  },
  {
    id: 'redaction-compliance',
    category: 'Revenue Impact',
    headline: '$40M ARR · 30 Enterprise Clients',
    body: 'Owned end-to-end delivery of redaction tools for regulatory compliance; onboarded 30 enterprise clients generating $40M ARR across global markets.',
  },
  {
    id: 'ai-qm',
    category: 'AI & Innovation',
    headline: 'AI-Powered Quality Management',
    body: 'Spearheaded AI-powered quality management features in the contact center space; currently expanding adoption across enterprise customers.',
  },
  {
    id: 'call-analytics',
    category: 'Product Scale',
    headline: '20K Daily Calls · $6M EU Sales',
    body: 'Designed and shipped call analytics product automating 20,000 daily calls for a global consumer electronics leader; expanded from US to Europe and Korea, generating $6M in EU sales.',
  },
  {
    id: 'telecom-deal',
    category: 'Strategic Deal Win',
    headline: '$10M Deal · CTO Award',
    body: "Led EU compliance integration for Europe's largest telecom provider in an 18-member India-UAE team; directly won a $10M deal and earned CTO Award among 30 competing teams.",
  },
  {
    id: 'govt-dashboard',
    category: 'Global Impact',
    headline: '+25 Rank Rise in UN E-Gov Index',
    body: 'Equipped a MENA nation government with product dashboards to evaluate ministry performance; insights drove a 25-rank rise in the UN E-Government Development Index.',
  },
  {
    id: 'delivery-velocity',
    category: 'Operational Efficiency',
    headline: '30% Faster Delivery · $80K Saved',
    body: 'Owned sprint planning and backlog for a 14-member team; improved delivery velocity 30%, saving 3,600 hours annually and $80K in costs.',
  },
  {
    id: 'training',
    category: 'Team Enablement',
    headline: '500+ Upskilled · $40K/mo Saved',
    body: 'Built and delivered training programs upskilling 500+ Sprinklr implementation members; saved $40K and 50+ hours monthly for the Product team.',
  },
]

export const SKILLS = {
  technical: [
    'SQL',
    'Python',
    'Power BI',
    'Tableau',
    'JIRA',
    'Confluence',
    'Figma',
    'Lucid',
    'Claude',
    'Cursor',
    'Lovable',
    'v0',
  ],
  domain: [
    'Contact Center QM',
    'Call Analytics',
    'Speech Intelligence',
    'AI-Powered QA Workflows',
    'EU & GDPR Compliance',
    'B2B SaaS Enterprise',
    'Govt. Digital Transformation',
  ],
  softSkills: [
    'Cross-functional Leadership',
    'Stakeholder Management',
    'Executive Communication',
    'Mentoring & Enablement',
    'Data-driven Decisions',
  ],
}

export const CASE_STUDIES = [
  {
    id: 'quality-monitoring-20m-arr',
    slug: 'quality-monitoring-20m-arr',
    title: 'Scaling Quality Monitoring to Drive $20M ARR',
    tagline: '10x customer growth · 120% YoY revenue · Org-wide adoption at Sprinklr',
    tags: ['Quality Monitoring', 'Enterprise Scale', 'B2B SaaS', 'Cross-functional'],
    metrics: [
      { value: '$20M', label: 'Incremental ARR' },
      { value: '10x', label: 'Customer Growth' },
      { value: '120%', label: 'YoY Revenue Growth' },
      { value: '14', label: 'Member Cross-functional Team' },
    ],
    situation:
      "Sprinklr's contact center customers lacked a scalable way to monitor and evaluate call quality across large volumes of interactions. Quality management was manual, inconsistent, and not built for enterprise scale. Customers were losing operational efficiency and struggling to surface actionable coaching insights from thousands of daily calls.",
    task: 'As PM, own the end-to-end strategy and delivery of a quality monitoring product for a 14-member cross-functional team across India and the US. The scope included discovery, roadmap definition, stakeholder alignment, and shipping a scalable evaluation platform to production.',
    actions: [
      'Defined product vision and multi-quarter roadmap for quality monitoring tooling, anchored on the top pain points surfaced from 20+ enterprise customer interviews.',
      'Partnered with engineering and design to architect scalable evaluation workflows supporting custom scoring rubrics, auto-assignment, and calibration sessions.',
      'Drove org-wide adoption by building a joint GTM plan with sales, solutions, and customer success — including an enablement playbook and internal champion program.',
      'Ran weekly sprint reviews and stakeholder readouts with the India-US leadership team to maintain velocity and surface blockers early.',
    ],
    result:
      'Product was adopted org-wide at Sprinklr and became the primary quality monitoring offering in the contact center suite. Achieved 10x customer growth, $20M incremental ARR, and 120% YoY revenue growth within 18 months of launch.',
  },
  {
    id: 'telecom-eu-compliance-10m-deal',
    slug: 'telecom-eu-compliance-10m-deal',
    title: 'Winning a $10M Telecom Deal Through EU Compliance Integration',
    tagline: "Europe's largest telecom · $10M deal · CTO Award among 30 competing teams",
    tags: ['EU Compliance', 'GDPR', 'Regulatory', 'Enterprise Deal', 'Cross-geo'],
    metrics: [
      { value: '$10M', label: 'Deal Value' },
      { value: '18', label: 'Member India-UAE Team' },
      { value: '#1', label: 'CTO Award — 30 Teams' },
      { value: '4', label: 'Developers Coordinated' },
    ],
    situation:
      "Europe's largest telecom provider needed their contact center platform to comply with strict EU regulatory guidelines before committing to a major deal. No existing Sprinklr product configuration met their requirements, creating a hard technical and legal blocker that risked losing the deal entirely.",
    task: 'Lead the compliance integration workstream within an 18-member India-UAE cross-functional team to meet EU guidelines and close the deal within a fixed client deadline.',
    actions: [
      'Collaborated with 4 developers and the legal team to systematically map every regulatory gap against the existing product architecture.',
      'Defined a prioritized compliance feature set that balanced regulatory coverage with engineering feasibility under deadline constraints.',
      'Coordinated delivery across geographies and time zones using async standups, a shared risk register, and biweekly client alignment calls.',
      'Created detailed acceptance criteria and testing checklists to ensure zero compliance defects at handoff to the client.',
    ],
    result:
      'Successfully integrated EU guidelines into the product on schedule. Directly contributed to a $10M deal win for Sprinklr. Earned the CTO Award among 30 competing teams for execution quality and cross-functional coordination.',
  },
  {
    id: 'call-analytics-20k-daily',
    slug: 'call-analytics-20k-daily',
    title: 'Automating 20,000 Daily Calls for a Global Consumer Electronics Leader',
    tagline: '20K daily calls automated · $6M in EU sales · Expanded US → Europe → Korea',
    tags: ['Call Analytics', 'Speech Intelligence', 'Global Expansion', 'Automation'],
    metrics: [
      { value: '20K', label: 'Daily Calls Automated' },
      { value: '$6M', label: 'EU Market Sales' },
      { value: '3', label: 'Markets: US, Europe, Korea' },
      { value: '9', label: 'Member Product Team' },
    ],
    situation:
      'A global consumer electronics company operating in the US was manually reviewing customer support calls — a process that was slow, inconsistent, and impossible to scale across markets. With expansion into Europe and Asia on the roadmap, they needed an automated analytics solution before manual processes became a critical bottleneck.',
    task: 'Design and ship a call analytics product capable of automating analysis at enterprise scale (~20,000 daily calls), with architecture built for global market expansion from day one.',
    actions: [
      'Spearheaded collaboration across a 9-member team to design the product architecture and analytics workflows with multi-region, multi-language support in scope from the outset.',
      'Defined the core analytics taxonomy — including call categorization, sentiment scoring, and agent performance metrics — through iterative workshops with the client.',
      'Ensured multi-region readiness by designing configurable data residency controls and language model integrations for English, German, French, and Korean.',
      'Ran phased rollout: US pilot → EU validation → Korean market entry, with iterative feedback loops at each stage.',
    ],
    result:
      'Product successfully deployed in the US and expanded to Europe and Korea. EU market alone generated approximately $6M in sales. Demonstrated the value of multi-region-first architecture in reducing time-to-market for each new geography.',
  },
]
