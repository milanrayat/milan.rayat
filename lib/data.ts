export const PERSON = {
  name: 'Milan Rayat',
  title: 'Senior Product Manager · AI & Enterprise B2B SaaS',
  tagline: 'IIT Guwahati Engineer turned Product Manager.',
  uvp: 'From 0 to 1 to global scale — I discover the right problems, align teams around solutions, and ship products businesses rely on to grow.',
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
    id: 'screen-recording-quality-review',
    slug: 'screen-recording-quality-review',
    company: 'Sprinklr',
    year: '2024',
    role: 'Product Manager',
    duration: '3 quarters',
    title: 'Screen Recording for Customer Service Quality Review',
    tagline:
      'Customer service agents handle thousands of calls and chats every day. When quality teams reviewed those interactions, they had audio and message logs but no way to see what the agent was doing on screen. I built the feature that changed that.',
    heroStats: [
      { value: '3 quarters', label: 'End-to-end delivery' },
      { value: '6 teams', label: 'Coordinated across 2 pods' },
      { value: '3 capabilities', label: 'Playback · Access · Reporting' },
    ],
    sections: [
      {
        id: 'summary',
        number: '01',
        label: 'Executive Summary',
        heading: 'Zero to fully shipped, in three connected capabilities.',
        paragraphs: [
          "Sprinklr is a B2B software platform used by large organisations to manage their customer service operations. Inside those organisations, quality review teams are responsible for listening to recorded agent interactions and scoring how well each agent performed.",
          'As Product Manager, I led the integration of screen recording into this review process. Before this work, screen recording did not exist anywhere in Sprinklr. I scoped and delivered three tightly connected capabilities across three quarters: a playback viewer that lets reviewers watch screen recordings alongside the voice call inside their existing workflow, a role-based access system that controls who can see each recording, and a reporting dashboard that tracks whether recordings are being captured successfully. The work was driven by direct customer requests and the need to match capabilities that competing platforms were already offering.',
        ],
      },
      {
        id: 'context',
        number: '02',
        label: 'Context',
        heading: 'What I walked into.',
        paragraphs: [
          "Sprinklr's platform is used by large companies to run their customer service teams: the people who answer phone calls, live chats, and emails when customers need help. These companies also employ quality reviewers whose job is to regularly evaluate how well each agent handled their interactions and provide coaching based on what they observe.",
          'When reviewing a phone interaction, a quality reviewer had one thing to work with: the audio recording of the call, along with a text transcript that was automatically generated from it. For chat or email conversations, they had the message log. In both situations, there was one complete blind spot. They could not see what the agent was doing on their computer screen during the interaction. What did the agent look up? What did they click? Did they navigate to the right resources? None of that was visible.',
        ],
        quote: 'Screen recording did not exist anywhere in Sprinklr. Competing platforms had it. Customers were asking for it.',
      },
      {
        id: 'problem',
        number: '03',
        label: 'The Problem',
        heading: 'Customer pain, business pain, and a hard technical constraint.',
        pills: [
          {
            title: 'Customer pain',
            body: 'Quality reviewers could not verify on-screen agent behaviour. Did the agent look up the right help article? Did they follow the required compliance process? All of this was invisible with audio-only review.',
          },
          {
            title: 'Business pain',
            body: 'Sprinklr was losing competitive evaluations to platforms that already offered screen recording. For customers who required it, there was no workaround — a hard product gap with no substitute.',
          },
          {
            title: 'Technical constraint',
            body: "Any solution had to fit within Sprinklr's existing permission and visibility architecture, and had to be built in parallel with a separate team responsible for the screen capture infrastructure itself.",
          },
        ],
      },
      {
        id: 'discovery',
        number: '04',
        label: 'Discovery & Insights',
        heading: 'The edge cases were bigger than expected — and reliability was non-negotiable.',
        paragraphs: [
          'We ran competitive analysis, mapping how competing customer service platforms handled screen recording — what they captured, how reviewers accessed it, and what access controls they offered. We also ran customer sessions directly with the companies who had requested this feature, sharing early design concepts to validate the workflow before committing to build.',
          'The number of scenarios we had to cover was far larger than expected. Phone call recordings and chat or email conversation recordings each had their own distinct set of edge cases — what to show, what to hide, and what should happen when a recording partially fails. Every scenario needed a clearly defined expected outcome before we could begin building.',
          'Reliability had to be treated as a core requirement, not an assumption. For phone calls, the screen recording needed to be combined with the audio file to produce a single synchronised playback. If this combining step failed without any visible indication, reviewers would assume no recording existed and move on — getting this to succeed consistently was not optional.',
          'Access control was significantly more complex than initially scoped. When a customer call is transferred between multiple agents, the recording captures all of them in sequence. Each quality reviewer could only see the portion of the recording belonging to agents within their own team reporting structure — a firm compliance requirement that had to be met before any customer could go live.',
        ],
      },
      {
        id: 'decisions',
        number: '05',
        label: 'Key Decisions',
        heading: 'The work — key decisions and trade-offs.',
        decisions: [
          {
            title: 'Building permissions that worked without breaking what existed',
            body: "The hardest design challenge was determining how detailed the access controls needed to be. Too fine-grained and the new rules would conflict with Sprinklr's existing voice recording permission system. Too loose and recordings would be accessible to people who had no business seeing them. The solution was to extend the existing case visibility framework rather than introduce a new one, with team hierarchy rules layered on top for calls involving multiple agents.",
          },
          {
            title: 'Launching with single-screen recording before expanding to multiple screens',
            body: 'Many agents work across more than one monitor at a time. We deliberately scoped the first version to single-screen recording only — we needed to prove the full end-to-end flow, from capture through combining to playback, was reliable before adding the complexity of multiple simultaneous screens. A risk-reduction choice, not a permanent capability limit.',
          },
          {
            title: 'Choosing toggling over simultaneous multi-screen playback',
            body: "When we did build multi-screen support, our engineers identified that playing all screens at exactly the same time would cause meaningful performance issues. Rather than accept degraded playback quality, we redesigned the experience so reviewers see the primary screen with the ability to switch between the agent's other monitors on demand.",
          },
          {
            title: 'Shipping reporting on day one rather than as a follow-up',
            body: 'There was no pre-existing way to track whether screen recordings were actually being captured correctly. Rather than treating a reporting dashboard as a phase-two addition, I scoped it as part of the initial launch — giving operations teams immediate visibility into recording coverage and failure reasons from day one.',
          },
        ],
      },
      {
        id: 'team',
        number: '06',
        label: 'The Partners',
        heading: 'Six teams, four disciplines, two pods.',
        team: [
          { role: 'PM', count: '1 partner PM', body: 'Owned the screen capture infrastructure as a parallel workstream. We collaborated on feature scoping, edge case coverage, and integration hand-offs throughout the project.' },
          { role: 'ENG', count: '6 engineers (India and Singapore)', body: 'Split across my product pod and the partner PM’s pod. Covered frontend playback integration, backend combining pipeline, permissions logic, and the reporting data foundation.' },
          { role: 'DES', count: '1 designer (US)', body: 'Designed the playback interface inside the review workflow, the multi-screen toggle layout, and the access configuration screens.' },
          { role: 'QA', count: '2 QA engineers (India and Singapore)', body: 'End-to-end testing across phone and digital recording paths, multi-agent transfer scenarios, and all permission combinations.' },
        ],
      },
      {
        id: 'outcome',
        number: '07',
        label: 'The Outcome',
        heading: 'A hard competitive gap, closed.',
        bullets: [
          'Sprinklr went from zero screen recording capability to a fully shipped feature covering playback, access control, and reporting across all supported interaction types.',
          'Quality reviewers can now play back synchronised voice and screen recordings directly inside their existing review workflow, with support for agents working across up to four monitors simultaneously.',
          'The feature closed a hard competitive gap that had previously blocked certain customer conversations from progressing.',
        ],
      },
      {
        id: 'reflection',
        number: '08',
        label: 'Reflection',
        heading: 'What I would do differently.',
        paragraphs: [
          'The testing phase was the biggest drag on delivery speed. This feature required coordination across two product pods, the voice infrastructure team, and our QA engineers, and getting all the prerequisite system configurations in place before testing could begin took longer than it needed to.',
          'Looking back, I would have mapped every dependency with the QA team and the partner PM much earlier, and made sure the baseline environment was fully validated before any feature work entered the testing queue. Getting ahead of setup blockers rather than unblocking them reactively would have saved two to three weeks.',
        ],
      },
    ],
  },
]
