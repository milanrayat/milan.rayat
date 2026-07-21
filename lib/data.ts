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
    id: 'ai-quality-management',
    slug: 'ai-quality-management',
    company: 'Sprinklr',
    year: '2022–2026',
    role: 'Product Manager',
    duration: '0-to-1 build',
    teamSize: '12 people · India',
    tags: ['50+ Customers Live', 'AI-Powered Scoring', '100% Coverage', 'Co-Led Build'],
    outcomeStat: { value: '100%', label: 'Interaction coverage, up from ~5%' },
    title: 'Making AI Quality Scores Something Managers Trust',
    tagline:
      "Quality evaluations shape agent coaching, performance reviews, and sometimes pay — so when AI started scoring conversations instead of a person, accuracy wasn't the hard part. Earning the trust of a manager who couldn't interrogate the AI's reasoning was. I co-led the configuration layer, evidence system, and override loop that took AI quality scoring from an unproven idea to something 50+ enterprise customers now rely on for 100% of their interactions.",
    metaDescription:
      "Contact-center quality scoring used to reach ~5% of conversations by hand. I co-led the AI system that scores 100% of them — and the evidence, override, and validation layers built specifically to earn a skeptical manager's trust. 50+ customers live, 55+ languages.",
    coverImage: '/ai-quality-management-case-study.png',
    coverImageCaption:
      "The case review screen — the AI Insights panel breaking a conversation down by parameter, with the evidence behind each score (here, why Agent Introduction scored low) surfaced right next to the transcript.",
    heroQuote:
      "Before this existed, quality evaluation lived entirely in human hands — and human hands could only reach about 5% of conversations. Early AI scores didn't fix that trust gap on their own: when even simple parameters came back inconsistent, managers drew an obvious conclusion — if the AI struggles here, how can I trust it on judgment calls that affect coaching, reviews, and pay? That question became the real problem to solve.",
    heroStats: [
      { value: '100%', label: 'Interaction coverage, up from ~5%' },
      { value: '50+', label: 'Enterprise customers using AQM' },
      { value: '≥80%', label: 'Per-parameter accuracy gate' },
      { value: '55+', label: 'Languages supported' },
    ],
    sections: [
      {
        id: 'overview',
        number: '01',
        label: 'Overview',
        heading: 'What changed, and what I co-owned.',
        paragraphs: [
          "I joined Sprinklr as a Product Analyst and was involved in building AQM from the very start, working alongside a Product Manager. As the scope grew — more features, more cross-functional teams, deeper AI complexity — my responsibilities expanded, and I moved into co-owning AQM alongside another PM. No prior AI scoring existed in the product; this was built from scratch. The first version had no real interface — all the scoring logic lived in the backend, was deployed manually, and was difficult to configure. We put it in front of early customers, iterated heavily, and that iteration is where the product became a differentiator — flexible enough to adapt to the very different quality-evaluation logics used across industries, instead of forcing one rigid scoring model on everyone.",
        ],
        beforeAfter: {
          beforeTitle: 'Before',
          beforeItems: [
            'Quality evaluation done entirely by humans, reviewing roughly 5% of daily conversations',
            'Even well-trained evaluators introduced bias and inconsistency interpreting the same criterion',
            '95% of interactions carried zero quality visibility — no signal on agent performance or emerging issues',
            "The first version's scoring logic lived in the backend only, deployed manually and hard to configure",
          ],
          afterTitle: 'What I Built',
          afterItems: [
            'A no-code configuration layer where managers define scoring criteria and pick the right AI method per criterion',
            'An evidence layer showing exactly why the AI scored what it scored — proof messages, voice-signal timelines, plain-language explanations',
            'A structured override-and-feedback loop that routes human disagreement into prompt tuning and model retraining',
            'A gated accuracy-validation pipeline — no parameter ships below an 80% threshold',
          ],
        },
      },
      {
        id: 'problem',
        number: '02',
        label: 'The Problem',
        heading: 'The 5% sampling ceiling, and what hid behind it.',
        pills: [
          {
            title: 'For Quality Managers',
            items: [
              'Only about 5% of daily conversations could ever be reviewed — the industry-standard ceiling',
              'Bias and drift crept in even with a hard rubric — no two evaluators scored identically',
              'An underperforming agent could go months without a low-scoring call landing in the sample',
              'Manual review meant delayed feedback — issues surfaced days or weeks after a call closed',
            ],
          },
          {
            title: 'For the Business',
            items: [
              '95% of interactions carried zero quality visibility — agent performance, emerging issues, and compliance breaches all invisible',
              'Competitors were beginning to integrate AI into quality workflows',
              'Quality Management was a new product line at Sprinklr — an AI-powered version was the natural next step given the scale of the problem',
            ],
          },
          {
            title: 'Under the Hood',
            items: [
              'Every industry and client defined "quality" differently — no single rubric would work for everyone',
              'Some criteria are objective and rule-based; others require human judgment that even humans disagree on',
              'No existing product infrastructure let non-engineers configure AI scoring logic themselves',
            ],
          },
        ],
      },
      {
        id: 'discovery',
        number: '03',
        label: 'Discovery & Insights',
        heading: 'What research revealed — and the trust gap that reframed the build.',
        paragraphs: [
          "Customer interviews with existing manual-QM users tested whether they'd actually rely on AI-generated scores. Analysis of real evaluation forms across industries separated criteria that follow a strict, objective rule from criteria that require human judgment — the judgment-heavy ones are the hardest to automate, because even humans disagree on them. Competitive analysis looked at whether other vendors let AI only suggest while a human decides, or let AI score directly. A review of how quality managers spent their time surfaced where AI could give back the most hours.",
        ],
        insightShifts: [
          {
            number: '01',
            title: 'Accuracy and Transparency Mattered More Than Capability',
            insight:
              "We assumed customers would be excited that AI was entering QM. Instead, most weren't worried about whether AI could handle complex parameters — they wanted to know at what accuracy it performed consistently, and they wanted configuration in their own hands, at their own pace.",
            shiftTitle: 'Built for control, not just capability',
            shift:
              'The product had to prove itself on the basics before customers would extend any trust to the complex judgment calls — configurability and demonstrated consistency became prerequisites, not features.',
          },
          {
            number: '02',
            title: 'Aggregate Insight Mattered as Much as Per-Conversation Evidence',
            insight:
              "Customers weren't only interested in single-conversation analysis. They were far more convinced by the bigger picture — which parameters were consistently scored low, which agents were underperforming, which supervisor's team was struggling.",
            shiftTitle: 'Designed for the pattern, not just the case',
            shift:
              'Executive-level, aggregate reporting became as central to the product as the individual case review screen.',
          },
          {
            number: '03',
            title: 'Different Criteria Need Fundamentally Different Detection Methods',
            insight:
              'Some evaluation criteria are a literal string match — did the agent say the brand name. Others need the context of an entire conversation — did the agent actually resolve the issue. Others are positional, voice-based signals — hold, mute, dead air.',
            shiftTitle: 'Matched the AI method to the criterion, not the other way around',
            shift:
              "This became the configuration layer's core judgment — keyword matching, LLMs, and voice-signal detectors each assigned to the criteria they could honestly evaluate, rather than forcing one model type to do everything.",
          },
          {
            number: '04',
            title: 'The Trust Gap Surfaced After Launch, Not Before',
            insight:
              "Early scores were sometimes inconsistent, and even simple parameters didn't reach an acceptable accuracy level. That created an obvious inference in customers' minds: if the AI struggles on the simple parameters, how can I trust it on the complex ones?",
            shiftTitle: 'Reframed the problem from "capable" to "transparent"',
            shift:
              'This was the moment that reframed the whole product. The problem was no longer just making the AI capable — it was making its judgments transparent, verifiable, and correctable. Everything built afterward — the evidence layer, the override loop, the accuracy gate — was a direct answer to this.',
          },
        ],
        image: {
          src: '/ai-quality-management-rule-builder.png',
          alt: 'A configured scoring rule shown as a condition-and-action tree, combining a keyword-style customer-name condition with a sentiment-and-brand-mention condition, each adjusting the Quality Score',
          caption:
            "Insight 03 in practice — a rule combining a simple keyword-style condition with a more nuanced sentiment-and-brand-mention condition, both feeding the same Quality Score. Matching the method to what each criterion actually needs was the configuration layer's core judgment.",
        },
      },
      {
        id: 'decisions',
        number: '04',
        label: 'Key Decisions',
        heading: "Five decisions built around one question: how do you earn a skeptical manager's trust?",
        decisions: [
          {
            number: '01',
            tag: 'Model Selection as Product Judgment',
            title: 'Match the AI detection method to the type of criterion, not one model for everything.',
            chose:
              "Used keyword and pattern matching for simple, objective criteria — did the agent say the brand name — since it's deterministic and can't hallucinate. Used LLMs for judgment-heavy criteria that need the context of a whole conversation — did the agent actually resolve the issue. Used voice-signal detectors for hold, mute, dead air, and transfers, later feeding that signal into an LLM for deeper analysis as models improved.",
            result:
              'Shipped an out-of-the-box parameter library spanning all three methods, so most customers could start from a proven template instead of a blank canvas.',
          },
          {
            number: '02',
            tag: 'Explainability vs. One Unified View',
            title: 'Build a taxonomy of evidence types instead of forcing everything into one format.',
            chose:
              'Evidence looks different depending on how it was generated — an Empathy score needs a highlighted proof message and an explanation; a Dead Air score needs a highlighted range on a call timeline; a keyword match needs an honest, unembellished string match. Flattening all three into one card format would have over-explained simple evidence and under-explained complex evidence.',
            result:
              "Managers could interrogate the AI's reasoning in the format that actually matched how that evidence was produced — the difference between reacting to a verdict and reacting to proof.",
          },
          {
            number: '03',
            tag: 'Human Correction vs. Silent Automation',
            title: 'Make every override structured, auditable, and permanent — not a silent edit.',
            chose:
              'Built a one-time override per item per case, with no back-and-forth toggling, requiring a reason from a structured taxonomy — Incorrect Score, Incorrect Evidence, Missing Evidence, or Comments — instead of a blind score edit.',
            result:
              'Every disagreement became usable signal for prompt tuning and retraining, not just a corrected number, while the manager kept the final word on any individual judgment.',
          },
          {
            number: '04',
            tag: 'Feedback Loop vs. Automatic Retraining',
            title: 'Route human disagreement through two supervised paths, never an automatic pipeline.',
            chose:
              'Fast path: implementation consultants tune prompts directly in a no-code configuration studio when a pattern emerges. Slow path: systematic model failures go to the model team as labeled ground truth, validated against a golden test set before any retrain ships.',
            result:
              'Avoided the failure mode of an automatic pipeline — inconsistent overrides across managers, gaming, or unchecked drift — while still turning disagreement into structured, actionable improvement.',
          },
          {
            number: '05',
            tag: 'Validation Gate vs. Ship-and-Iterate',
            title: 'Enforce a hard ≥80% per-parameter accuracy threshold before anything reaches a client.',
            chose:
              'Built a gated pipeline: bulk validation across 200+ diverse cases, manual accuracy review of ~50 cases per parameter, a hard 80% pass/fail gate, then continuous post-launch sampling of up to ~1,000 conversations per parameter to catch drift.',
            result:
              "Any parameter below the threshold doesn't ship, full stop — accuracy became a repeating, enforced pipeline instead of a number stamped once at launch.",
          },
        ],
        image: {
          src: '/ai-quality-management-override-flow.png',
          alt: 'The override feedback dialog, showing a structured reason taxonomy — Incorrect Score, Incorrect Evidences, Missing Evidences — an expected-score field, and a Send Feedback & Override action',
          caption:
            "Decision 03 in practice — the override flow's structured reason taxonomy and expected score, captured as an auditable record before it replaces the AI's original evaluation.",
        },
      },
      {
        id: 'team',
        number: '05',
        label: 'The Partners',
        heading: 'Twelve people. One trust problem to solve together.',
        paragraphs: [
          'AQM required a close, evolving partnership with the model team. Product fully owned requirements and evaluation criteria — what to evaluate, scoring logic, output contracts, and the ≥80% accuracy threshold. Prompt engineering started as model-team-only, requiring a support ticket for every change, and shifted toward product-owned once the model pipeline moved into a no-code configuration studio. Model architecture, training, and infrastructure stayed model-team territory throughout.',
        ],
        team: [
          {
            role: 'Product',
            count: 2,
            location: 'India',
            body: 'Co-owned AQM as it grew from a supporting analyst role into full product decision-making — defining evaluation criteria, prompt framing, and validating accuracy through bulk testing before any parameter shipped.',
          },
          {
            role: 'Engineers',
            count: 4,
            location: 'India',
            body: 'Built the configuration layer, the case review screen, the evidence taxonomy, and the override-and-feedback infrastructure end to end.',
          },
          {
            role: 'ML Engineers',
            count: 2,
            location: 'India',
            body: 'Owned model architecture, training, and the golden-test-set methodology behind retraining cycles.',
          },
          {
            role: 'Product Designer',
            count: 1,
            location: 'India',
            body: "Designed the case review screen's evidence taxonomy — distinct card formats for AI-model, keyword, voice-signal, and activity evidence.",
          },
          {
            role: 'QA Engineers',
            count: 2,
            location: 'India',
            body: 'Validated scoring consistency across configuration changes, override flows, and the accuracy-gate pipeline.',
          },
        ],
      },
      {
        id: 'outcome',
        number: '06',
        label: 'The Outcome',
        heading: 'From 5% sampling to 100% coverage.',
        impactCards: [
          {
            category: 'Coverage',
            value: '100%',
            label: 'of interactions now scored, up from ~5% under manual QM',
            description:
              'Every voice, chat, email, and social interaction scored against the configured checklist — no sampling, no lucky misses, no quality blind spots.',
          },
          {
            category: 'Adoption',
            value: '50+',
            label: 'enterprise customers running AQM',
            description:
              'Across 55+ languages and every major industry vertical, each with its own configured scoring checklist.',
          },
          {
            category: 'Accuracy',
            value: '≥80%',
            label: 'per-parameter accuracy, enforced as a hard gate',
            description:
              'No parameter ships below threshold — validated through bulk testing, manual review, and continuous post-launch sampling.',
          },
        ],
        bullets: [
          '25% improvement in agent performance following the shift to full-coverage evaluation',
          '20% reduction in resolution times as issues surface immediately instead of during periodic sampling',
          '15% increase in customer satisfaction tied to faster, more consistent quality feedback loops',
        ],
      },
    ],
  },
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
    coverImageCaption:
      'The masking template builder — where admins set up and test data-protection rules before turning them on.',
    heroQuote:
      "The old approach: hand-written rules, one for every kind of sensitive detail, built to match an exact format. A card number read out with a slight pause could slip past it. Names and addresses were never something a rule like that could catch — that's simply outside what pattern-matching can do.",
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
          "As Product Manager at Sprinklr, I led the build of a tool that lets admins set up and test data-protection rules themselves — no engineers needed. I scoped the solution end-to-end, from discovery with legal and implementation teams through to customer rollout, coordinating across three cross-functional pods over two quarters.",
        ],
        beforeAfter: {
          beforeTitle: 'Before',
          beforeItems: [
            'Manual, hand-written rules for every type of sensitive detail',
            'Rules only worked if the data matched an exact format',
            'No way to catch names or addresses at all',
            'No way to test a rule before turning it on',
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
              'Proving exactly what was protected, channel by channel, wasn\'t straightforward — making it hard to give auditors or legal teams a clear answer',
            ],
          },
          {
            title: 'Under the Hood',
            items: [
              'Rules only matched exact, predictable formats',
              "Names and addresses can't be captured by a fixed pattern",
              'Every small tweak — even a single regex change — meant re-testing the whole rule by hand, and it was easy to get wrong',
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
            "Here's the actual mechanism: each call is transcribed, AI flags anything sensitive, and that exact moment in the recording gets muted automatically.",
        },
        insightShifts: [
          {
            number: '01',
            title: 'Wide Open by Default',
            insight:
              "At one customer alone, out of 32,000+ daily conversations, roughly 1 in 10 contained something sensitive — card numbers, home addresses. Whatever slipped past the existing rules wasn't just sitting there unseen: over 3,000 people on that customer's platform had open access to recordings and most chats, with no restrictions at all.",
            shiftTitle: 'Made privacy the default, everywhere',
            shift:
              "This changed how we framed the baseline state of the platform. Protection could not be opt-in when most users had no awareness of their own exposure. The default had to flip — open access needed to become the exception that required justification, not the norm.",
          },
          {
            number: '02',
            title: 'A Rule That Broke Real Work',
            insight:
              "Legal's rule: hide every flagged sensitive detail before anyone on the platform could see it — reasonable on paper. But agents told us they often need to read those same details back to a customer mid-call to do their job, and the rule blocked that outright.",
            shiftTitle: 'Gave teams control over timing',
            shift:
              'This reframed the compliance requirement itself. The question was no longer whether data should be masked. It was when in the interaction lifecycle masking should happen. Compliance and operational utility were not opposing forces; they needed different execution points, not different rules.',
          },
          {
            number: '03',
            title: "Sound Can't Be Edited Like Text",
            insight:
              "You can't edit an audio file directly — you can only act on the transcript made from it. A transcript can point to one exact word. Audio can't be trimmed that precisely; muting it means losing a few seconds, not just a word.",
            shiftTitle: 'Shipped a working version, queued the upgrade',
            shift:
              "This reframed the audio redaction problem from a filtering challenge to a synchronisation challenge. The transcript is the source of truth for what was said, but the audio operates at a coarser level of granularity. Any muting strategy had to be designed around segments, not words, and the definition of accurate enough to ship had to account for that gap rather than pretend it did not exist.",
          },
          {
            number: '04',
            title: 'One Problem, Four Different Fixes',
            insight:
              "This wasn't a missing feature — it was a scattered one. Four product suites had each quietly built their own version of the same fix, with no shared standard and nothing another suite could reuse.",
            shiftTitle: 'Built it once, for everyone',
            shift:
              'This changed what kind of problem we were actually solving. It was not a product gap in one suite. It was an organisational coordination failure that had been silently multiplying. Building another point solution would have added a fifth workaround, not solved the problem. The right frame was infrastructure, not feature.',
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
              'Made platform-level masking the out-of-the-box default for seven to eight high-risk sensitive data categories, with a single configuration toggle to disable it for teams with a legitimate operational need. No underlying customer data is altered by this setting.',
            result:
              "Zero compliance issues after launch. The only flags were for languages outside our AI's current range — already on the roadmap.",
          },
          {
            number: '02',
            tag: 'Compliance timing vs. Workflow continuity',
            title: 'Let teams choose when protection kicks in — not just whether it does.',
            chose:
              "Moved away from a fixed pre-display masking trigger and built a user-configurable model. Admins set redaction to execute either at data ingestion or after an agent closes a query, depending on their team's live interaction requirements.",
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
              'Two Sprinklr product teams adopted the framework independently with no custom builds. Twenty-plus customers now run on the base architecture. Approximately ten hours per week previously lost to maintaining isolated workarounds were reclaimed across support, product, and engineering teams.',
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
              'All onboarded within the first release cycle · voice recordings, transcripts, and digital conversations protected across the board',
          },
          {
            category: 'Risk Eliminated',
            value: '0',
            label: 'compliance issues after launch',
            description:
              "AI covers 50+ types of sensitive info · Only open item: languages outside the AI's current range — already known and planned for",
          },
          {
            category: 'Internal Adoption',
            value: '2',
            label: 'internal product teams onboarded',
            description:
              'Both teams integrated the redaction framework directly into their own products · No custom builds, no duplicated engineering effort',
          },
        ],
      },
    ],
  },
  {
    id: 'calibration',
    slug: 'calibration',
    company: 'Sprinklr',
    year: '2024',
    role: 'Product Manager',
    duration: '0-to-1 build',
    teamSize: '7 people · India',
    tags: ['60+ Customers Live', '0-to-1 Build', 'QM Add-on', '~20K Sessions/Month'],
    outcomeStat: { value: '60+', label: 'Enterprise customers active' },
    title: 'Making Evaluator Scores Consistent, At Scale',
    tagline:
      "Quality evaluations in contact centers shape coaching plans, performance reviews, and careers. But there was no way to check if the evaluators themselves were scoring consistently. I built Calibration from zero — giving quality teams a way to audit their own auditors and turn evaluator consistency into something measurable.",
    metaDescription:
      "Contact center quality scores shape agent careers, but evaluators were never checked for consistency. I led the 0-to-1 build of a tool that audits the auditors — 60+ customers live, ~20K sessions run monthly.",
    coverImage: '/calibration-case-study.png',
    coverImageCaption:
      "ATA in practice — a QM Lead's audit of the same call, broken down section by section against the original evaluation, with score gaps flagged at every level.",
    heroQuote:
      "Before this existed, a quality team had no way to know if their evaluators were aligned. Supervisors ran monthly sessions where QMs scored the same agent call on paper, compared notes, and debated differences out loud. None of it was recorded — no data on which criteria caused friction, no way to tell whether a score reflected an agent's work or just which manager happened to review it that week.",
    heroStats: [
      { value: '60+', label: 'Enterprise customers active' },
      { value: '~20K', label: 'Monthly calibration sessions' },
      { value: '40%', label: 'QM client adoption rate' },
      { value: '~5%', label: 'Reduction in agent disputes' },
    ],
    sections: [
      {
        id: 'overview',
        number: '01',
        label: 'Overview',
        heading: 'What changed, and what I owned.',
        paragraphs: [
          "As the sole PM, I owned Calibration end-to-end — growing from a supporting analyst role during early discovery into full ownership across a 7-person team. This was a 0-to-1 build with no prior foundation in the platform, shipped in two phases: ATA (Audit the Auditor) first, then P2P (Peer-to-Peer) calibration.",
        ],
        beforeAfter: {
          beforeTitle: 'Before',
          beforeItems: [
            'No way to check if QM managers were scoring consistently',
            'Evaluator alignment handled offline — spreadsheets, monthly sessions, ad hoc reviews',
            'Score variance between evaluators invisible in the product — no data, no trend',
            "Agent scores varied depending on which QM happened to evaluate them",
            "No structured way for a QM to dispute a calibrator's assessment",
          ],
          afterTitle: 'What I Built',
          afterItems: [
            'ATA: QM Leads score the same interaction as their QMs, then see exactly where their scores diverge',
            'P2P: QMs score the same interaction independently, blinded to each other, against a reference evaluator',
            'Configurable score correction — overwrite the score, exclude it from metrics, or leave it untouched',
            'Calibration reporting — alignment %, question-level variance, deviation trends, session volumes',
          ],
        },
      },
      {
        id: 'problem',
        number: '02',
        label: 'The Problem',
        heading: 'Three pressures pointing at the same gap.',
        pills: [
          {
            title: 'For Agents',
            items: [
              'Same interaction, different evaluator, different score — no way to flag it',
              'No visibility into evaluator consistency — couldn\'t tell a fair score from a biased one',
              'Disputed evaluations resolved by manager discretion, not by process',
              'Coaching plans built on inconsistent scores misdirected agent development',
            ],
          },
          {
            title: 'For the Business',
            items: [
              'As QM adoption grew, so did the scale of undetected scoring inconsistency',
              'No credible link between QM activity and agent quality if scoring standards were unverified',
              'Enterprise clients expected calibration as a baseline QM capability',
              'Performance actions on biased evaluations created legal and compliance exposure',
            ],
          },
          {
            title: 'Under the Hood',
            items: [
              'Manual workarounds — spreadsheets, offline sessions — left no auditable trail',
              'No standard industry definition of calibration metrics; every customer measured it differently',
              'No data model or workflow support for multi-party blinded evaluation sessions',
            ],
          },
        ],
      },
      {
        id: 'discovery',
        number: '03',
        label: 'Discovery & Insights',
        heading: 'What research revealed.',
        paragraphs: [
          "Competitive analysis across QM vendors, structured interviews with QM leads and supervisors, and platform data on scoring drift surfaced four realities that shaped the build.",
        ],
        insightShifts: [
          {
            number: '01',
            title: 'The Offline Workaround Was Universal — and Invisible',
            insight:
              "Calibration was already happening at every customer we talked to — just outside the product. One ran monthly paper-scoring sessions and debated differences out loud. Others used 1-on-1 reviews. Some did nothing. None of it left a record, and none of it showed whether alignment improved over time.",
            shiftTitle: 'Brought an existing practice into the product',
            shift:
              "Customers didn't need to be taught what calibration was — they'd already built workarounds around its absence. The job was to bring an established practice into the platform and give it the data layer offline sessions never had.",
          },
          {
            number: '02',
            title: 'Competitors Had Half the Picture',
            insight:
              "Most QM vendors offered either ATA-style or P2P-style calibration, not both — and the ones with P2P often didn't enforce blinding rigorously. Across the board, the UIs were complex enough to create real adoption friction.",
            shiftTitle: 'Made calibration feel native, not bolted on',
            shift:
              "The gap wasn't in the individual capabilities — it was in how disconnected they felt. A QM manager already using the platform daily should meet calibration as an extension of that workflow, not a separate system to learn.",
          },
          {
            number: '03',
            title: 'One Metric Broke on Non-Scoring Forms',
            insight:
              "After the reporting design was finalized, a customer flagged that their evaluation forms used response-based criteria with no numeric scoring — so the core metric (% alignment, computed by comparing scores) had nothing to compare. This wasn't an edge case; it broke reporting for any customer using checklist-style forms.",
            shiftTitle: 'Made the metric configurable, not fixed',
            shift:
              "Alignment doesn't mean the same thing across every evaluation form — the product couldn't impose one fixed definition. A single hard-coded metric was the wrong answer; a configurable one was the right one.",
          },
          {
            number: '04',
            title: 'QM Leads Wanted to Coach, Not Catch People Out',
            insight:
              "Platform data showed some QM managers consistently scored higher or lower than their peers, but that pattern was invisible in standard QM reporting. In interviews, QM leads described the goal not as catching a wrong score, but as knowing which evaluators needed coaching on which criteria.",
            shiftTitle: 'Reframed it as coaching, not a verdict',
            shift:
              "This changed what kind of product Calibration needed to be — not a system for ruling an evaluator right or wrong, but the same coaching loop the QM product already ran between managers and agents, just applied one level up.",
          },
        ],
      },
      {
        id: 'decisions',
        number: '04',
        label: 'Key Decisions',
        heading: 'Five choices that shaped what shipped.',
        decisions: [
          {
            number: '01',
            tag: 'Continuity vs. Differentiation',
            title: 'Anchor calibration to the existing QM evaluation screen.',
            chose:
              'Built both calibration modes inside the same QM interface, with distinct visual cues to set calibration sessions apart — instead of a separate module. Reasoning: no one navigating a new platform should face a second learning curve for a closely related workflow.',
            result:
              'The first customers onboarded to P2P reported minimal ramp-up time, citing direct continuity with the evaluation flow they already knew.',
          },
          {
            number: '02',
            tag: 'Standard Metrics vs. Form Diversity',
            title: 'Make alignment metrics configurable, not fixed.',
            chose:
              "After a customer's non-scoring forms broke the score-based % alignment metric, rebuilt reporting so alignment can be computed by score comparison, response comparison, or both.",
            result:
              'Removed a hard adoption blocker for non-scoring customers — Calibration Reporting now works across every evaluation form configuration on the platform.',
          },
          {
            number: '03',
            tag: 'Score Integrity vs. Flexibility',
            title: 'Let clients decide what calibration does to the original score.',
            chose:
              'Built three options instead of one fixed behavior: overwrite the original score, exclude the interaction from performance metrics, or leave the original score untouched. Different clients had very different stakes riding on agent scores.',
            result:
              'Clients with performance-linked compensation used score correction; coaching-focused clients used non-destructive calibration. One product, both use cases, no compromise.',
          },
          {
            number: '04',
            tag: 'Statistical Rigor vs. Social Pressure',
            title: 'Enforce blinding through group completion, not individual submission.',
            chose:
              "In P2P, results become visible to the group only once every participant has submitted independently — enforced by a group-level completion flag. Participants also can't see who else is in the group until results are revealed.",
            result:
              "Each score reflected independent judgment against the reference evaluator, making the variance a clean signal of where standards drifted — not a socially-influenced consensus.",
          },
          {
            number: '05',
            tag: 'Accountability vs. Adoption Risk',
            title: 'Ship the dispute flow as opt-in, not default-on.',
            chose:
              "Built the ability to formally dispute a calibrator's assessment as a configurable toggle, not a default. A default-on dispute mechanism would introduce conflict right when a new team most needs to build trust in the process.",
            result:
              'Clients could roll out Calibration as a pure coaching tool first, then turn on formal dispute accountability once the practice was established — minimizing friction at launch.',
          },
        ],
        image: {
          src: '/calibration-p2p-results.png',
          alt: 'Peer-to-peer calibration results screen showing auditor scores compared against a reference evaluator, with the call transcript alongside',
          caption:
            "Decision 04 in practice — auditor scores compared against the reference evaluator only after every participant has submitted independently, with the original call transcript shown alongside for context.",
        },
      },
      {
        id: 'team',
        number: '05',
        label: 'The Partners',
        heading: 'Seven people. One geography. One PM.',
        team: [
          {
            role: 'Engineers',
            count: 4,
            location: 'India',
            body: 'Built both calibration modes end to end — the blinding mechanism for group-completion, configurable score correction, the dispute flow, and the reporting infrastructure behind all of it.',
          },
          {
            role: 'Product Designer',
            count: 1,
            location: 'India',
            body: 'Designed calibration inside the existing QM interface — keeping visual continuity with regular evaluations while making calibration sessions clearly distinct.',
          },
          {
            role: 'QA Engineers',
            count: 2,
            location: 'India',
            body: 'Covered both calibration modes, blinding enforcement, every score-correction behavior, and edge cases in the opt-in dispute flow.',
          },
        ],
      },
      {
        id: 'outcome',
        number: '06',
        label: 'The Outcome',
        heading: 'Sixty-plus enterprise teams. One consistent standard.',
        impactCards: [
          {
            category: 'Adoption',
            value: '60+',
            label: 'enterprise customers active on Calibration',
            description:
              '40% of all QM clients, spanning retail, telecom, and financial services · Shipped as a default QM feature, no extra licensing required',
          },
          {
            category: 'Scale',
            value: '~20K',
            label: 'monthly calibration sessions run in-platform',
            description:
              'Replaced offline spreadsheets and verbal reviews that left no record and no way to track improvement over time',
          },
          {
            category: 'Quality Impact',
            value: '~5%',
            label: 'reduction in agent dispute rates',
            description:
              'At customers with high Calibration adoption — consistent evaluator standards linked to fewer contested assessments downstream',
          },
        ],
        quote:
          'The Calibration functionality has been extremely helpful — working without any issues to coach our QMs and improve our internal audit processes.',
        quoteAttribution: 'QM Lead, US Enterprise Retail Client · Internal QBR',
      },
    ],
  },
]

/**
 * Independent work — self-funded / founder projects, kept deliberately separate
 * from CASE_STUDIES so they never read as employer work. No metric cards and no
 * Outcome section: pre-launch products have no traction data, and inventing some
 * would undercut the only thing this story has going for it.
 */
export const INDEPENDENT_PROJECTS = [
  {
    id: 'ctrl',
    slug: 'ctrl',
    kind: 'independent' as const,
    company: 'Ctrl',
    role: 'Head of Product · Co-founder',
    duration: 'Started 2026 · Launching Fall 2026',
    teamSize: '3 people · India + US',
    stageBadge: 'Launching Fall 2026',
    website: 'https://getctrl.in',
    websiteLabel: 'getctrl.in',
    title: 'Ctrl',
    cardTitle: 'A physical tap-to-focus device, built India-first',
    tagline:
      'A physical tap-to-focus device for people who keep losing hours to their phones — built India-first, priced for India, and designed by me from the ground up.',
    oneLiner:
      'An NFC metal card that locks your distracting apps on a tap. Co-founded with a friend, currently pre-launch: first production batch built, packaging and go-to-market in motion.',
    metaDescription:
      'Ctrl is a physical NFC card that locks distracting apps on a tap — built India-first and priced for India. My founder case study: the problem, the form-factor pivot from magnet to metal card, the app UX I own, and where it goes next.',
    infoChips: [
      'Head of Product',
      '0-to-1 physical + software',
      'NFC — tap to lock',
      'India-first, building toward Europe',
    ],
    tags: ['Consumer Hardware', 'iOS + Android', 'Pre-launch'],
    heroQuote:
      "I'd sit down to study or start a work block, get through ten minutes, and then just pick up my phone — not even meaning to, just a reflex. A minute on Instagram became twenty. That's the moment Ctrl came from: not a market report, just watching my own thumb do the same thing every day and deciding to build something that would physically get in its way.",
    sections: [
      {
        id: 'problem',
        number: '01',
        label: 'The Problem',
        heading: 'A reflex, not a decision — and nothing on the shelf built for India.',
        paragraphs: [
          "Long stretches of study or focused work kept getting fractured by short reflexive checks — Instagram, Snapchat, YouTube. Not planned breaks. A few minutes of \"just checking\" routinely turned into a much longer detour, and it was happening every day, to a student and a working professional alike. Screen-time settings and app timers already existed and were already being ignored: anything you can dismiss with a tap gets dismissed with a tap.",
          'Physical anti-distraction devices did exist — but they were designed, priced, and distributed for US and European buyers. For an Indian student or an early-career professional, the price alone put them out of reach, and none of them had a local go-to-market behind them. That gap was the opening: bring the same category of solution natively to India, at a price India would actually pay.',
        ],
        pills: [
          {
            title: 'The personal pain',
            body: 'Reflexive phone checks fracturing every study or work block — a habit loop that software timers were too easy to dismiss to break.',
          },
          {
            title: 'The market gap',
            body: 'Existing focus devices were built and priced for US and European consumers, with no India distribution and no India price point.',
          },
          {
            title: 'Why it is hard',
            body: 'It only works if both halves ship in lockstep — an object small and durable enough to carry everywhere, and an app where setting a restriction takes seconds, not a settings maze.',
          },
        ],
      },
      {
        id: 'origin',
        number: '02',
        label: 'Origin & The Team',
        heading: 'Three people, no design function, no QA function.',
        paragraphs: [
          "The idea came from a friend, who brought me the concept; I joined to build it with him. It's been roughly three to four months since we started, and in that time we've gone from a printed prototype to a first production batch.",
          "We're three people, and none of us has the luxury of a narrow job description. There's no dedicated designer and no dedicated QA — which means product and engineering roles blur by necessity. That's worth naming plainly rather than smoothing over, because it's what building lean actually looks like: I write the product spec, design the screens, and test the builds, and the boundaries only exist where they're useful.",
        ],
        pills: [
          {
            title: 'CEO — my co-founder',
            body: 'Company operations, manufacturing coordination, and go-to-market execution.',
          },
          {
            title: 'Me — Head of Product',
            body: 'The product and UX layer: the analytics experience, settings and app-selection flow, and the overall navigation and information architecture.',
          },
          {
            title: 'Engineering partner — remote, US',
            body: 'The underlying software logic connecting the NFC tap to the app-locking mechanism, across both iOS and Android.',
          },
        ],
      },
      {
        id: 'build',
        number: '03',
        label: 'The Build',
        heading: 'The product changed shape before it changed features.',
        paragraphs: [
          'Version one of Ctrl was a 3D-printed fridge magnet. Tap your phone against it and your chosen set of apps locked for a set duration, with a lock animation confirming it on screen; tap again to unlock everything. It worked, and it proved the core mechanic — but it had a limitation baked into its form factor. A fridge magnet lives on a fridge. It served the at-home use case well and nothing else.',
          "Rather than assume the form factor needed to change, we tested it. We ran an informal market survey — friends, colleagues, people we met on trips — with one specific question: does the magnet work once you leave the house? The answer came back consistent. A magnet is genuinely awkward to carry, easy to leave behind, and easy to lose. But everyone was already carrying a card-shaped object everywhere they went. A card wouldn't have to fight an existing habit; it could ride on one.",
          'So Ctrl became a metal card — credit-card sized, with an NFC tag embedded inside. The interaction is identical: tap the card with the app open, your chosen apps lock, tap again to unlock. What changed is that it now travels naturally in a wallet or a pocket, for a student between classes or a professional at a desk. We didn\'t discard the magnet; it still serves the original at-home case. The card just became the primary product.',
        ],
        decisions: [
          {
            number: '01',
            tag: 'Form factor',
            title: 'Change the object, not the interaction',
            chose:
              'Redesigned the device from a 3D-printed fridge magnet into a credit-card-sized metal card with an embedded NFC tag — while keeping the tap-to-lock mechanic exactly as it was.',
            result:
              'The habit loop that already worked stayed untouched; only the constraint that limited it to one room got removed.',
          },
          {
            number: '02',
            tag: 'Validation',
            title: 'Test the pivot before paying for it',
            chose:
              'Ran an informal qualitative survey with friends, colleagues, and people met on trips specifically to probe portability — before committing to a manufacturing run.',
            result:
              'A form-factor decision made on direct user signal rather than a hunch, at a stage where getting it wrong would have meant a batch of unsellable inventory.',
          },
        ],
        insightShifts: [
          {
            number: '01',
            title: 'Where the magnet actually failed',
            insight:
              'The magnet was never rejected for how it worked — every person we spoke to understood the tap instantly. It failed on where it could be. Distraction does not stay at home, so a device that does is only ever solving part of the problem.',
            shiftTitle: 'Stop designing an object, start designing for a pocket',
            shift:
              'The design constraint stopped being "what shape holds an NFC tag" and became "what shape do people already carry without thinking about it."',
          },
        ],
      },
      {
        id: 'my-role',
        number: '04',
        label: 'My Role',
        heading: 'Designing an app that makes you want to keep the streak.',
        paragraphs: [
          "I own the product and UX layer of the Ctrl app — the analytics experience, the settings and app-selection flow, and the overall navigation and information architecture. Both the iOS and Android builds are ready.",
          'The stats section was designed around one question: does seeing your own focus data make you want to keep going? That question decided the information architecture. Rather than dumping every statistic onto one screen, the app layers data the way a habit actually gets reinforced — a single glanceable streak number first, a personal-records card for the proud-of-yourself moments second, and a full historical drill-down for anyone who wants to dig.',
        ],
        pills: [
          {
            title: 'Streaks & personal records',
            body: 'Current streak and longest streak as the two headline numbers, a monthly roll-up beneath them, and a records card surfacing longest session, best day, and best week.',
          },
          {
            title: 'Monthly trend',
            body: 'Every month broken down by total focused time and session count — so progress reads month over month, not just day to day.',
          },
          {
            title: 'Weekly view',
            body: 'A day-by-day bar chart plus a calendar heatmap with a three-tier intensity legend, drilling into a per-week daily breakdown with the current day highlighted.',
          },
        ],
        bullets: [
          'Every number in the app is computed and stored on the device — the analytics you see are never sent anywhere.',
        ],
      },
      {
        id: 'vision',
        number: '05',
        label: 'The Vision',
        heading: 'Ship India first. Let the move to Paris open Europe.',
        paragraphs: [
          'The first production batch of the physical card exists. Packaging and distribution logistics are being finalised, and the website is live in an early form at getctrl.in with a design refresh underway — the positioning holds, the visual design changes.',
          "On price, Ctrl sits at roughly a quarter to a third of what Brick and Bloom charge. That isn't a discount strategy; it's the direct product of designing, sourcing, and manufacturing for India instead of importing a US price point into an Indian market.",
          "And the part that could read as a pause isn't one. As I move to Paris for my MBA, that move becomes the on-ramp for Ctrl's entry into Europe — a founder on the ground in the market we want next, rather than a venture on hold.",
        ],
        pills: [
          {
            title: 'College students',
            body: 'The primary wedge — reached directly through top colleges\' technical fests and existing student networks rather than cold marketing.',
          },
          {
            title: 'Corporate professionals',
            body: 'A second segment still being shaped, with short-form Instagram content the leading channel under consideration.',
          },
          {
            title: 'Everyone else',
            body: 'Individual buyers are expected to arrive alongside those two organically — real, but deliberately not a targeted bracket at this stage.',
          },
        ],
        bullets: [
          'Offline and private by construction: Ctrl works through a local NFC tap with no cloud dependency, so no usage data is collected or transmitted anywhere. That is a deliberate design principle, not a gap in the roadmap — and it is a genuine advantage heading into a European market where GDPR and data-privacy expectations are front of mind.',
          'Priced at roughly one-quarter to one-third of international competitors Brick and Bloom, because the product was designed for the Indian market rather than adapted to it.',
        ],
        closingQuote:
          "There's no traction data in this case study yet, and I'm not going to manufacture any. What there is: a real problem I had, a pivot we tested before we paid for it, and a product that exists in a box.",
      },
    ],
  },
]
