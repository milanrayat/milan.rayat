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
      { value: '8 clients', label: 'Live, 3 more in pipeline' },
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
            title: 'Building permissions that worked without breaking what already existed',
            body: "The hardest design challenge was determining how detailed the access controls needed to be. Too fine-grained and the new rules would conflict with Sprinklr's existing voice recording permission system. Too loose and recordings would be visible to people who had no business seeing them. The solution was to extend the existing case visibility framework rather than introduce a new one, with team hierarchy rules layered on top for calls involving multiple agents. This kept complexity minimal while covering all required scenarios.",
          },
          {
            title: 'Launching with single-screen recording before expanding to multiple screens',
            body: 'Many agents work across more than one monitor at a time. We scoped the first version to single-screen recording only. Of the 4 enterprise customers in the initial rollout, 3 had entirely single-monitor setups with no multi-screen requirement. The one customer that needed multi-screen had it deployed for only a portion of their agents, with roughly 40% still operating on single monitors. Single-screen coverage addressed the clear majority of the rollout while we validated the full end-to-end flow from capture through combining to playback. This was a data-backed scoping decision, not a conservative default.',
          },
          {
            title: 'Choosing a toggle approach over simultaneous multi-screen playback',
            body: "When we built multi-screen support, engineers identified that playing all screens at exactly the same time would cause meaningful performance issues for end users. Rather than accept degraded playback quality, we redesigned the experience so reviewers see the primary screen with the ability to switch between the agent's other monitors on demand. The technical constraint was absorbed into the design rather than passed on to the user.",
          },
          {
            title: 'Shipping reporting on day one rather than as a follow-up',
            body: 'There was no pre-existing way to track whether screen recordings were actually being captured correctly. Rather than treating a reporting dashboard as a phase-two addition, it was scoped as part of the initial launch. This gave operations teams immediate visibility into recording coverage and failure reasons from the first day the feature was live, rather than requiring a separate project to add observability later.',
          },
        ],
      },
      {
        id: 'team',
        number: '05',
        label: 'The Partners',
        heading: 'Six teams, four disciplines, two pods.',
        team: [
          { role: 'PM', count: '1 partner PM', body: 'Owned the screen capture infrastructure as a parallel workstream. Collaborated on feature scoping, edge case coverage, and integration hand-offs throughout the project.' },
          { role: 'ENG', count: '6 engineers (India and Singapore)', body: 'Split across two product pods. Covered frontend playback integration, backend combining pipeline, permissions logic, and the reporting data foundation.' },
          { role: 'DES', count: '1 designer (US)', body: 'Designed the playback interface inside the review workflow, the multi-screen toggle layout, and the access configuration screens.' },
          { role: 'QA', count: '2 QA engineers', body: 'End-to-end testing across phone and digital recording paths, multi-agent transfer scenarios, and all permission combinations.' },
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
