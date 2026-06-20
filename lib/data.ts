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
        id: 'summary',
        number: '01',
        label: 'Executive Summary',
        heading: 'Zero to fully shipped, in three connected capabilities.',
        paragraphs: [
          "Sprinklr is a B2B software platform used by large organisations to manage their customer service operations. Inside those organisations, quality review teams are responsible for evaluating recorded agent interactions and scoring how well each agent performed.",
          'As Product Manager, I led the integration of screen recording into this review process. Before this work, screen recording did not exist anywhere in Sprinklr. I scoped and delivered three tightly connected capabilities across three quarters: a playback viewer that lets reviewers watch screen recordings alongside the voice call inside their existing workflow, a role-based access system that controls who can see each recording, and a reporting dashboard that tracks whether recordings are being captured successfully.',
          "While competing platforms offered screen recording as a standalone capability, Sprinklr's approach was built for how enterprise quality teams actually work. Reviewers stay in a single workspace, seeing the screen recording alongside the call transcript, CSAT scores, conversation moments such as transfers, contact intent signals, and audit history for the same interaction. When a conversation spans multiple channels, such as a voice call that continues over email or chat, the reviewer stays on the same page throughout, with screen recording tied to the relevant channel automatically.",
        ],
      },
      {
        id: 'context',
        number: '02',
        label: 'Context',
        heading: 'What I walked into.',
        paragraphs: [
          "Sprinklr's platform is used by large companies to run their customer service teams: the people who answer phone calls, live chats, and emails when customers need help. These companies also employ quality reviewers whose job is to regularly evaluate how well each agent handled their interactions and provide coaching based on what they observe.",
          'When reviewing a phone interaction, a quality reviewer had the audio recording of the call along with a text transcript automatically generated from it. For chat or email conversations, they had the message log. In both situations, there was one complete blind spot. They could not see what the agent was doing on their computer screen during the interaction. What did the agent look up? What did they click? Did they navigate to the right resources? None of that was visible.',
        ],
        quote: 'Screen recording as a capability did not exist anywhere in Sprinklr when this work started in 2024. Competing platforms had it. Customers were asking for it. The gap was clear.',
      },
      {
        id: 'problem',
        number: '03',
        label: 'The Problem',
        heading: 'Customer pain, business pain, and a hard technical constraint.',
        pills: [
          {
            title: 'Customer pain',
            body: 'Quality reviewers could not verify on-screen agent behaviour. Did the agent look up the right help article? Did they follow the required compliance process? Did they take the correct next steps? All of this was invisible with audio-only review.',
          },
          {
            title: 'Business pain',
            body: 'Sprinklr was losing competitive evaluations to platforms that already offered screen recording. For customers who required it, there was no workaround. It was a hard product gap with no substitute.',
          },
          {
            title: 'Compliance constraint',
            body: 'Enterprise contact centres handle sensitive interactions, including calls where personal financial details are discussed on screen. In calls involving multiple agents, each reviewer could only be permitted to see recordings of agents within their own reporting structure. This was a hard compliance requirement, not a configuration option.',
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
          'Quality review is rarely a single-channel activity. Customer sessions revealed that a conversation might begin as a voice call, transfer to a different agent, and then continue over chat or email. Each channel transition produced a distinct recording context with its own access rules and display logic. The scenarios multiplied because enterprise workflows multiplied, not because the feature was technically complex in isolation, but because it had to reflect how contact centres actually operate.',
          'Silent failures were more damaging than visible ones. For voice calls, the screen recording had to be combined with the audio file to produce a single synchronised playback. If that combining step failed without any visible signal, reviewers had no way to know. They would assume no recording existed for that interaction and move on, leaving a gap in quality coverage with no alert triggered. This specific failure mode shaped how we designed failure states and was the direct reason we built a reporting dashboard from day one rather than as a later addition.',
          'Access control was significantly more complex than initially scoped. When a customer call is transferred between multiple agents, the recording captures all of them in sequence. Ensuring each reviewer could only see recordings within their own team structure, and not those of agents belonging to other supervisors, was a firm compliance requirement that had to be met before any customer could go live.',
        ],
      },
      {
        id: 'decisions',
        number: '05',
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
        number: '06',
        label: 'The Partners',
        heading: 'Six teams, four disciplines, two pods.',
        team: [
          { role: 'PM', count: '1 partner PM', body: 'Owned the screen capture infrastructure as a parallel workstream. Collaborated on feature scoping, edge case coverage, and integration hand-offs throughout the project.' },
          { role: 'ENG', count: '6 engineers (India and Singapore)', body: 'Split across two product pods. Covered frontend playback integration, backend combining pipeline, permissions logic, and the reporting data foundation.' },
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
          '$5M in contract value is directly tied to this feature. $3M came from securing a renewal with a key existing client where screen recording was central to their continued investment. $2M came from new enterprise contracts where screen recording was a stated evaluation requirement.',
          '8 enterprise organisations are live on screen recording within the first release cycle, with 3 more in active onboarding. All 8 adopted a capability that did not exist in Sprinklr before this work began.',
          '93% of eligible agent interactions now have a screen recording captured and available for quality review, up from 0% before the feature launched. Active work continues toward full coverage.',
          'Quality reviewers now work in a single workspace, seeing screen recording alongside call transcript, CSAT scores, conversation moments, and audit history for the same interaction, across any channel the conversation passed through.',
          'The feature closed a hard competitive gap that had previously blocked certain contract evaluations from progressing, enabling sales conversations that were not possible before.',
        ],
      },
    ],
  },
]
