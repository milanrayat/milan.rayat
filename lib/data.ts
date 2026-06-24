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
    metaDescription:
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
  {
    id: 'pii-data-masking',
    slug: 'pii-data-masking',
    company: 'Sprinklr',
    year: '2023–2024',
    role: 'Product Manager',
    duration: '2 quarters',
    teamSize: '5 people · 3 pods',
    tags: ['30+ Customers Live', 'Compliance', 'AI-Powered', '0 Incidents'],
    outcomeStat: { value: '0', label: 'Compliance issues after launch' },
    title: 'Building Privacy Protection That Scales',
    tagline:
      "Customers share sensitive details — card numbers, addresses, health info — on every support call and chat. One slip, and that's a legal problem for the company. I led the product work that closed the gap: turning a manual, error-prone process into an automatic safety net.",
    metaDescription:
      "Support teams handle sensitive customer details every day — card numbers, addresses, health info. I led the build of an AI-powered system that protects it automatically. 30+ customers live, 50+ data types covered, zero compliance issues.",
    coverImage: '/pii-masking-case-study.png',
    heroQuote:
      "Old way: an admin writes a rule by hand for every type of sensitive detail, then hopes the customer's words match it exactly. Say a card number with a pause in the wrong place, and it slips through. Names and addresses? No rule could catch those at all. Hours of setup — and still no real way to know what was actually being protected.",
    heroStats: [
      { value: '2 quarters', label: 'End-to-end delivery' },
      { value: '30+', label: 'Customers live within 8 months' },
      { value: '50+', label: 'Types of sensitive info covered' },
      { value: '0', label: 'Compliance issues after launch' },
    ],
    sections: [
      {
        id: 'overview',
        number: '01',
        label: 'Overview',
        heading: 'From manual rules to automatic protection.',
        paragraphs: [
          "As Product Manager at Sprinklr, I led the build of a tool that lets admins set up and test data-protection rules themselves — no engineers needed. I worked with legal and customer teams from day one, then rolled it out across three teams over two quarters.",
        ],
        beforeAfter: {
          beforeTitle: 'Before',
          beforeItems: [
            'Manual, hand-written rules for every type of sensitive detail',
            'Rules only worked if the data matched an exact format',
            'No way to catch names or addresses at all',
            'No way to test a rule before turning it on',
            'Four teams, four different homemade fixes — no shared standard',
          ],
          afterTitle: 'What I Built',
          afterItems: [
            'A no-code tool for setting up and testing data-protection rules',
            'AI that spots 50+ types of sensitive info, even outside fixed patterns',
            'Flexible timing — protect data the moment it arrives, or once a call wraps up',
            'One shared system any team at Sprinklr can plug into',
          ],
        },
      },
      {
        id: 'problem',
        number: '02',
        label: 'The Problem',
        heading: 'The cost of getting this wrong.',
        pills: [
          {
            title: 'For New Customers',
            items: [
              'Gaps kept surfacing during onboarding — friction on every rollout',
              "Sales couldn't confidently answer questions about voice-call protection",
              'No simple setup made it hard to hand off to customers cleanly',
              'Same problem, every time — not a one-off',
            ],
          },
          {
            title: 'For Compliance Teams',
            items: [
              'Legal rules (like PCI and HIPAA) required this data to stay protected — no exceptions',
              'Names and addresses had zero coverage',
              "No way to confirm what was actually protected, channel by channel",
              'Nothing to show auditors or legal teams on request',
            ],
          },
          {
            title: 'Under the Hood',
            items: [
              'Rules only matched exact, predictable formats',
              "Names and addresses can't be captured by a fixed pattern",
              'No interface — every change needed an engineer',
              'Four teams, four workarounds, zero consistency',
            ],
          },
        ],
      },
      {
        id: 'discovery',
        number: '03',
        label: 'Discovery & Insights',
        heading: 'Four things that changed how we built this.',
        paragraphs: [
          'Talking to admins, reviewing the legal requirements, and studying competitors surfaced four realities that turned a small fix into a company-wide rebuild.',
        ],
        image: {
          src: '/pii-masking-architecture.png',
          alt: 'Diagram showing how a sensitive phrase on a call is detected and muted in the recording',
          caption:
            'How it works, simplified: a call gets transcribed, AI flags the sensitive parts, and the matching moment in the recording is muted automatically.',
        },
        insightShifts: [
          {
            number: '01',
            title: 'Wide Open by Default',
            insight:
              "Out of 32,000+ daily conversations, about 1 in 10 had something sensitive in it — card numbers, home addresses. Yet over 3,000 people had open access to recordings and most chats, with no restrictions at all.",
            shiftTitle: 'Made privacy the default',
            shift:
              "The riskiest categories are now hidden automatically for everyone. Teams that genuinely need to see it can switch it back on with one toggle. Nothing about the underlying data changes — just who can see it.",
          },
          {
            number: '02',
            title: 'A Rule That Broke Real Work',
            insight:
              "Legal wanted everything hidden before an agent ever saw it. Made sense on paper. But agents told us they often need to read sensitive details back to a customer mid-call to do their job — and the rule blocked that outright.",
            shiftTitle: 'Gave teams control over timing',
            shift:
              'Admins can now choose: hide it the moment it comes in, or hide it once the conversation wraps up. Compliance stays the default. Teams that need a live read-back can have it.',
          },
          {
            number: '03',
            title: "Sound Can't Be Edited Like Text",
            insight:
              "You can't edit an audio file directly — you can only act on the transcript made from it. A transcript can point to one exact word. Audio can't be trimmed that precisely; muting it means losing a few seconds, not just a word.",
            shiftTitle: 'Shipped a working version, queued the upgrade',
            shift:
              "For now, muting covers the few-second window around a flagged moment. A more precise, word-level version needs its own AI model — that's scoped as a next step, not dropped.",
          },
          {
            number: '04',
            title: 'One Problem, Four Different Fixes',
            insight:
              "This wasn't a missing feature — it was a scattered one. Four teams at Sprinklr had each quietly built their own version of the same fix, with no shared standard and nothing a fifth team could reuse.",
            shiftTitle: 'Built it once, for everyone',
            shift:
              'The scope grew from "fix one team\'s gap" to "build the one system every team plugs into." A single setup, reusable everywhere — not another one-off fix.',
          },
        ],
      },
      {
        id: 'decisions',
        number: '04',
        label: 'Key Decisions',
        heading: 'The calls that shaped the build.',
        decisions: [
          {
            number: '01',
            tag: 'Safety vs. Convenience',
            title: 'Protect everything by default. Make turning it off easy, not turning it on.',
            chose:
              'Set the riskiest categories to hidden out of the box, with a single toggle for teams that genuinely need to turn it off.',
            result:
              "Zero compliance issues after launch. The only flags were for languages outside our AI's current range — already on the roadmap.",
          },
          {
            number: '02',
            tag: 'Rules vs. Real Workflows',
            title: 'Let teams choose when protection kicks in — not just whether it does.',
            chose:
              'Built timing as a setting, not a fixed rule: protect the moment data arrives, or once the conversation ends.',
            result:
              'Agents who need to read details back mid-call could keep doing their job — without lowering the compliance bar.',
          },
          {
            number: '03',
            tag: 'Perfect vs. Shipped',
            title: 'Ship a good-enough fix now. Build the precise version next.',
            chose:
              'Released muting at the few-second level instead of waiting on a more precise, AI-heavy version.',
            result:
              'Voice protection shipped on time. The more precise version is scoped and queued, not abandoned.',
          },
          {
            number: '04',
            tag: 'Spread Thin vs. Focused',
            title: "Give this its own team, instead of squeezing it into someone else's roadmap.",
            chose:
              'Since no existing team owned this or had room for it, pulled together a dedicated group with engineering, AI, and design — focused on just this.',
            result:
              'Shipped clean, with no rework. All three disciplines stayed aligned the whole way through.',
          },
          {
            number: '05',
            tag: 'Quick Fix vs. Built to Last',
            title: 'Build one system everyone can use — not another one-off patch.',
            chose:
              "Widened the scope from fixing one team's gap to building a shared system every team at Sprinklr could plug into.",
            result:
              '30+ teams now use it directly. 20+ more run on it without knowing it. About 10 hours a week, company-wide, no longer spent maintaining duplicate fixes.',
          },
        ],
      },
      {
        id: 'team',
        number: '05',
        label: 'The Partners',
        heading: 'Five people. One system built to last.',
        team: [
          {
            role: 'Engineers',
            count: 2,
            body: 'Built the whole thing end to end — the screen admins use to set up rules, and the system underneath that makes those rules actually work.',
          },
          {
            role: 'ML Engineer',
            count: 1,
            body: 'Built the AI from the ground up to recognize 50+ types of sensitive info, and the pipeline that runs it at scale across calls and chats.',
          },
          {
            role: 'Designer',
            count: 1,
            body: "Designed the setup screen to work for one team today and scale to the whole company tomorrow — no redesign needed later.",
          },
          {
            role: 'QA Engineer',
            count: 1,
            body: 'Pushed the system to its limits before anything shipped — real-world scenarios, heavy load, edge cases, across every channel.',
          },
        ],
      },
      {
        id: 'outcome',
        number: '06',
        label: 'The Outcome',
        heading: 'Zero incidents. Thirty-plus customers. One system.',
        impactCards: [
          {
            category: 'Adoption',
            value: '30+',
            label: 'customers live within 8 months',
            description:
              'Running across teams handling 32,000+ conversations a day · Covers calls, chats, and transcripts alike',
          },
          {
            category: 'Risk Eliminated',
            value: '0',
            label: 'compliance issues after launch',
            description:
              "AI covers 50+ types of sensitive info · Only open item: languages outside the AI's current range — already known and planned for",
          },
          {
            category: 'Scale',
            value: '4 teams',
            label: 'now running on one shared system',
            description:
              'Two more Sprinklr teams adopted it as-is, no custom work needed · Saves roughly 10 hours a week once spent on duplicate fixes',
          },
        ],
      },
    ],
  },
]
