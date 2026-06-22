export const PERSON = {
  name: 'Milan Rayat',
  title: 'Product Manager · AI & Enterprise B2B SaaS',
  tagline: 'IIT Guwahati Engineer turned Product Manager.',
  uvp: 'PM at Sprinklr. Shipped AI products that drive $20M+ ARR and 10x customer growth.',
  email: 'milanrayat99@gmail.com',
  linkedin: 'https://www.linkedin.com/in/milan-rayat/',
  calendly: 'https://calendly.com/milanrayat99/30min',
  resumeUrl: '/resume.pdf',
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
    teamSize: '6 teams · 2 pods',
    tags: ['Access Control', 'Compliance', 'Reporting'],
    outcomeStat: { value: '$5M', label: 'Contract value tied to feature' },
    title: 'Screen Recording for Customer Service Quality Review',
    tagline:
      'Customer service agents handle thousands of calls and chats every day. When quality teams reviewed those interactions, they had audio and message logs but no way to see what the agent was doing on screen. I led product strategy and delivery for the feature that changed that.',
    coverImage: '/screen-recording-case-study.png',
    heroQuote:
      'A quality reviewer would open an interaction, listen to the audio of the call, read through the transcript, and score the agent. But if the agent had navigated to the wrong help article, skipped a required compliance step, or spent three minutes on the wrong screen entirely, the reviewer had no way of knowing. The call audio sounded fine. The problem was invisible.',
    heroStats: [
      { value: '3 quarters', label: 'End-to-end delivery' },
      { value: '6 teams', label: 'Coordinated across 2 pods' },
      { value: '10+', label: 'Customers onboarded' },
      { value: '$5M', label: 'In contract value tied to feature' },
    ],
    sections: [
      {
        id: 'overview',
        number: '01',
        label: 'Overview',
        heading: 'A 0-to-1 build, end to end.',
        paragraphs: [
          "As Product Manager at Sprinklr, I owned the integration of screen recording into the platform's quality review system — from the playback viewer to access controls to reporting. This was a 0-to-1 build, coordinated across two product pods over three quarters.",
        ],
        beforeAfter: {
          beforeTitle: 'Before',
          beforeItems: [
            'Reviewers had audio recordings and auto-generated transcripts for voice calls only',
            'Chat and email conversations had message logs with no visual context',
            'No visibility into what agents did on screen during any interaction',
            'No way to verify compliance steps, help article lookups, or navigation decisions',
            'Competing platforms offered screen recording. Sprinklr did not.',
          ],
          afterTitle: 'What I Built',
          afterItems: [
            'Synchronised screen and audio playback inside the existing review workflow, across voice and digital channels',
            "Role-based access controls tied to each reviewer's team reporting structure",
            'Omnichannel continuity — screen recording follows a conversation across voice, chat, and email without the reviewer leaving the page',
            'Reporting dashboard tracking recording coverage and failure reasons from day one',
          ],
        },
      },
      {
        id: 'problem',
        number: '02',
        label: 'The Problem',
        heading: 'Customer pain, business pain, and compliance pain.',
        pills: [
          {
            title: 'Customer Pain',
            items: [
              'Could not verify on-screen agent behaviour',
              'No way to confirm help article lookups',
              'No way to confirm compliance steps were followed',
              'No way to confirm correct next steps were taken',
              'Invisible with audio-only review',
            ],
          },
          {
            title: 'Business Pain',
            items: [
              'Losing competitive evaluations to platforms with screen recording',
              'No workaround for customers who required it',
              'Hard product gap, no substitute',
            ],
          },
          {
            title: 'Compliance Pain',
            items: [
              'Sensitive interactions, including on-screen financial details',
              'Multi-agent calls required strict reviewer-level access boundaries',
              'Hard compliance requirement, not configurable',
            ],
          },
        ],
      },
      {
        id: 'discovery',
        number: '03',
        label: 'Discovery & Insights',
        heading: 'Three realities that reshaped the build.',
        paragraphs: [
          'Competitive benchmarking and co-design sessions with the enterprise clients who requested this feature rewrote our initial assumptions in three ways.',
        ],
        insightShifts: [
          {
            number: '01',
            title: 'The Cross-Channel Reality',
            insight:
              'Quality review is rarely linear — a single interaction often starts as a voice call, transfers to a second agent, and concludes over chat.',
            shiftTitle: 'Architected omnichannel playback',
            shift:
              'Pivoted from a standalone screen recorder to a recording context that maps display logic across every channel transition.',
          },
          {
            number: '02',
            title: 'The Danger of "Silent Failures"',
            insight:
              'When screen and audio failed to stitch together, it failed silently — reviewers assumed no recording existed, creating undetected compliance gaps.',
            shiftTitle: 'Prioritised system health UI',
            shift:
              'Re-prioritised the roadmap to ship a real-time reporting dashboard from day one, not as a post-launch fast-follow.',
          },
          {
            number: '03',
            title: 'High-Stakes Access Control',
            insight:
              'When a call transfers across teams, one continuous recording captures multiple agents — risking supervisor-level data privacy violations.',
            shiftTitle: 'Injected role-based playback gates',
            shift:
              'Built access controls directly into the playback player, so supervisors only see segments filmed within their own team hierarchy.',
          },
        ],
      },
      {
        id: 'decisions',
        number: '04',
        label: 'Key Decisions',
        heading: 'The work — key decisions and trade-offs.',
        decisions: [
          {
            number: '01',
            tag: 'Control vs. compatibility',
            title: "Extend the existing permissions framework — don't build a new one",
            chose:
              "Extended Sprinklr's existing case visibility system with team hierarchy rules layered on top for multi-agent calls",
            result: 'Minimal new complexity, no conflicts with existing systems, full compliance coverage',
          },
          {
            number: '02',
            tag: 'Coverage vs. reliability',
            title: 'Scope v1 to single-screen only — backed by customer data, not caution',
            chose:
              '3 of 4 initial customers had single-monitor setups. Validated the full pipeline before adding multi-screen complexity',
            result: 'Covered 75% of rollout needs while proving end-to-end reliability',
          },
          {
            number: '03',
            tag: 'Performance vs. completeness',
            title: "Absorb the engineering constraint into the design — don't pass it to the user",
            chose:
              'Toggle between screens on demand instead of simultaneous playback, which caused performance issues',
            result: 'Full multi-screen access, zero performance cost to the reviewer',
          },
          {
            number: '04',
            tag: 'Speed vs. visibility',
            title: 'Ship reporting on day one — observability is not a follow-up project',
            chose: 'Scoped the reporting dashboard as part of the initial launch, not phase two',
            result: 'Ops teams had immediate visibility into coverage and failures from day one',
          },
        ],
      },
      {
        id: 'team',
        number: '05',
        label: 'The Partners',
        heading: 'Six teams, four disciplines, two pods.',
        team: [
          {
            role: 'Partner PM',
            count: 1,
            body: 'Owned the screen capture infrastructure as a parallel workstream. Collaborated on feature scoping, edge case coverage, and integration hand-offs throughout the project.',
          },
          {
            role: 'Engineers',
            count: 6,
            location: 'India & Singapore',
            body: 'Split across two product pods. Covered frontend playback integration, backend combining pipeline, permissions logic, and the reporting data foundation.',
          },
          {
            role: 'Designer',
            count: 1,
            location: 'US',
            body: 'Designed the playback interface inside the review workflow, the multi-screen toggle layout, and the access configuration screens.',
          },
          {
            role: 'QA Engineers',
            count: 2,
            body: 'End-to-end testing across phone and digital recording paths, multi-agent transfer scenarios, and all permission combinations.',
          },
        ],
      },
      {
        id: 'outcome',
        number: '06',
        label: 'The Outcome',
        heading: 'A hard competitive gap, closed.',
        impactCards: [
          {
            category: 'Revenue',
            value: '$5M',
            label: 'in contract value',
            description: '$3M renewal secured with key existing client · $2M from new enterprise contracts where screen recording was a stated requirement',
          },
          {
            category: 'Adoption',
            value: '10+',
            label: 'enterprise clients onboarded',
            description: 'All adopted a capability that did not exist in Sprinklr before this work · delivered within the first release cycle',
          },
          {
            category: 'Reliability',
            value: '93%',
            label: 'recording capture rate',
            description: 'Up from 0% before launch · active work continues toward full coverage',
          },
        ],
      },
    ],
  },
]
