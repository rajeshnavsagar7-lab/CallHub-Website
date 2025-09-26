export const phases = [
  {
    id: 'phase-0',
    phase: 0,
    title: 'Phase 0 — Planning & Requirements',
    duration: '1-2 weeks',
    description: 'Define MVP features and constraints',
    tasks: [
      'Define MVP features (call transcribe, simple intent routing, send SMS/msg, basic web actions)',
      'Decide \'no external paid APIs\' vs allowed services (e.g., SMS gateway, telephony)',
      'Identify privacy, legal and handset constraints',
      'Create detailed project specification document',
      'Set up project repository and documentation structure'
    ]
  },
  {
    id: 'phase-1',
    phase: 1,
    title: 'Phase 1 — Prototype',
    duration: '0-2 months',
    description: 'Build core functionality with local processing',
    tasks: [
      'Implement local voice → text using Whisper (small) or Vosk for offline speech recognition',
      'Build Intent & NLU system using Rasa / spaCy or small Hugging Face Transformers',
      'Create action handler with simple command router (Python)',
      'Connect to messaging (SMTP/Twilio optional)',
      'Optimize for laptop (CPU) performance and latency',
      'Test basic voice command processing pipeline'
    ]
  },
  {
    id: 'phase-2',
    phase: 2,
    title: 'Phase 2 — Expand & Integrate',
    duration: '2-6 months',
    description: 'Add advanced features and integrations',
    tasks: [
      'Add call-handling integration (Asterisk on local server) or VoIP gateway',
      'Build web automation modules using Selenium / Playwright',
      'Implement contextual memory and user profiles',
      'Add Hindi-specific tuning and language support',
      'Create fallback to cloud only when needed',
      'Develop comprehensive testing suite'
    ]
  },
  {
    id: 'phase-3',
    phase: 3,
    title: 'Phase 3 — Hardening & UI',
    duration: '6-12 months',
    description: 'Polish and secure the application',
    tasks: [
      'Build mobile interface or lightweight app for command sending/receiving',
      'Implement security, encryption of recordings and messages',
      'Add access control and user authentication',
      'Create monitoring, logging, and analytics dashboard',
      'Develop user feedback loop for continuous improvements',
      'Conduct security audits and penetration testing'
    ]
  },
  {
    id: 'phase-4',
    phase: 4,
    title: 'Phase 4 — Production & Scale',
    duration: 'Ongoing',
    description: 'Deploy and scale the solution',
    tasks: [
      'Consider GPU/cloud integration for larger LLM features',
      'Develop SaaS / Packaging strategy',
      'Decide on product model (local-first or cloud hybrid)',
      'Implement automated deployment and CI/CD pipelines',
      'Create comprehensive documentation and user guides',
      'Plan for commercial launch and user acquisition'
    ]
  }
];