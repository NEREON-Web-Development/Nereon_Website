import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const serviceDetails = [
  {
    id: 'advisory',
    label: 'IT Advisory',
    accent: '#7B2FBE',
    headline: 'Navigate Digital Transformation with Confidence',
    description: 'Our advisory team brings decades of combined experience in enterprise IT — helping organizations modernize, optimize, and future-proof their technology investments.',
    features: [
      { icon: '🗺️', title: 'Digital Transformation', desc: 'End-to-end modernization roadmaps tailored to your business' },
      { icon: '🏗️', title: 'Enterprise Architecture', desc: 'Scalable, resilient system design for complex organizations' },
      { icon: '🔒', title: 'Security Assessment', desc: 'Vulnerability analysis, risk scoring, and hardening plans' },
      { icon: '📊', title: 'Technology Strategy', desc: 'Aligning your technology investments with business goals' },
    ],
    deliverables: [
      'Comprehensive IT audit and gap analysis',
      'Technology stack recommendations',
      'Digital transformation roadmap',
      'Vendor evaluation and selection',
      'Change management support',
      'Ongoing strategic advisory retainer',
    ],
  },
  {
    id: 'webdev',
    label: 'Web & App Development',
    accent: '#00D2FF',
    headline: 'Crafting Digital Products Built to Scale',
    description: 'From concept to production deployment — NEREON builds high-performance web applications, SaaS platforms, and business websites using cutting-edge frameworks and engineering best practices.',
    features: [
      { icon: '⚛️', title: 'Custom Web Applications', desc: 'Full-stack apps with React, Vue, Node.js and modern tooling' },
      { icon: '🏢', title: 'Business Websites', desc: 'High-converting, SEO-optimized, CMS-powered sites' },
      { icon: '🎓', title: 'Serious Games & Simulations', desc: 'Browser-based interactive training tools that engage' },
      { icon: '🔗', title: 'API Design & Integration', desc: 'Connect your tech ecosystem seamlessly and securely' },
    ],
    deliverables: [
      'Architecture planning and technical scoping',
      'UI/UX design with interactive prototypes',
      'Agile development with bi-weekly demos',
      'Testing, QA, and performance optimization',
      'Deployment, CI/CD, and infrastructure setup',
      'Post-launch support and maintenance',
    ],
  },
  {
    id: 'gaming',
    label: 'Gaming Studio',
    accent: '#FF6B35',
    headline: 'Building the Next Generation of Interactive Experiences',
    description: 'NEREON Gaming Studio creates original game titles, enterprise training simulations, and pioneering Web3 gaming experiences — where players truly own their assets.',
    features: [
      { icon: '🎮', title: 'Original Game Titles', desc: 'In-house IP development across genres and platforms' },
      { icon: '🏢', title: 'Serious Games', desc: 'Enterprise training sims that drive measurable outcomes' },
      { icon: '⛓️', title: 'Web3 Gaming', desc: 'Blockchain-powered games with true asset ownership' },
      { icon: '🤖', title: 'Game AI & Simulation', desc: 'Intelligent NPCs and physics-based simulation environments' },
    ],
    deliverables: [
      'Game design document and concept art',
      'Core gameplay prototyping and testing',
      'Full production build and QA',
      'Multi-platform deployment',
      'Web3 smart contract integration (optional)',
      'Live ops and ongoing content updates',
    ],
  },
  {
    id: 'agentic',
    label: 'Agentic Automation',
    accent: '#22C55E',
    headline: 'Autonomous AI Agents That Work While You Sleep',
    description: 'NEREON designs and deploys intelligent autonomous agents that handle complex business workflows end-to-end — self-learning, self-executing systems that eliminate manual bottlenecks and scale without headcount.',
    features: [
      { icon: '🤖', title: 'AI Agents', desc: 'Purpose-built agents that reason, plan, and execute tasks autonomously' },
      { icon: '⚙️', title: 'Workflow Automation', desc: 'End-to-end process automation that adapts and learns over time' },
      { icon: '🧠', title: 'LLM Integration', desc: 'Embed frontier AI models into your existing tools and pipelines' },
      { icon: '🔄', title: 'Autonomous Systems', desc: 'Self-monitoring, self-correcting agents with minimal human oversight' },
    ],
    deliverables: [
      'Agent architecture design and scoping',
      'Workflow mapping and automation blueprint',
      'AI model selection and fine-tuning',
      'Agent build, integration, and deployment',
      'Monitoring dashboards and alerting',
      'Iterative improvement and ongoing optimization',
    ],
  },
]

const caseStudies = [
  {
    tag: 'Web Development',
    title: 'NEREON — Our Own Platform',
    description: 'Built NEREON\'s own consulting website from scratch — a fully custom React/Vite SPA with a dark aesthetic, animated components, and Tailwind CSS. This site is a live demonstration of what we deliver for clients.',
    metrics: ['React + Vite', 'Custom Design', 'Live Project'],
    color: '#00D2FF',
    link: 'https://nereon.gr',
    linkLabel: 'Visit nereon.gr →',
  },
  {
    tag: 'AI Automation',
    title: 'DegenTradingBot',
    description: 'A 24/7 automated, self-learning, self-executing trading bot designed and built by NEREON. It continuously monitors markets, adapts its strategies, and executes trades autonomously — zero human intervention required.',
    metrics: ['24/7 Autonomous', 'Self-Learning AI', 'Live Platform'],
    color: '#7B2FBE',
    link: 'https://degentradingbot.tech',
    linkLabel: 'Visit degentradingbot.tech →',
  },
  {
    tag: 'Serious Game',
    title: 'Corporate Training Simulation',
    description: 'An immersive browser-based simulation for enterprise compliance and crisis management training. Built for measurable workforce outcomes — currently in active development.',
    metrics: ['In Development', 'Coming Soon', 'Browser-Based'],
    color: '#FF6B35',
    link: null,
    linkLabel: null,
  },
]

const techStack = ['React', 'Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Unity', 'Solidity', 'Redis']

export default function Services() {
  useEffect(() => {
    document.title = 'Services | IT Advisory, Web Development, AI Automation & Serious Games — NEREON Greece'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'NEREON offers enterprise IT advisory, custom web development, agentic AI automation, and serious games development for businesses across Greece and Rodos.')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://nereon.gr/services')
  }, [])

  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{ backgroundColor: '#7B2FBE' }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10" style={{ backgroundColor: '#00D2FF' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{ backgroundColor: 'rgba(123,47,190,0.12)', border: '1px solid rgba(123,47,190,0.3)', color: '#A78BFA' }}
          >
            Our Services
          </span>
          <h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Enterprise-Grade
            <br />
            <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From strategy to execution — NEREON delivers end-to-end transformation across IT advisory, web development, game production, and agentic AI automation.
          </p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ───────────────────────────── */}
      {serviceDetails.map((svc, i) => (
        <section
          key={svc.id}
          className="py-24 px-6"
          style={{ backgroundColor: i % 2 === 0 ? '#080810' : '#0C0C14' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text side */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: svc.accent }}>{svc.label}</span>
                <h2
                  className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {svc.headline}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">{svc.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {svc.features.map(feat => (
                    <div
                      key={feat.title}
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${svc.accent}08`, border: `1px solid ${svc.accent}18` }}
                    >
                      <div className="text-2xl mb-2">{feat.icon}</div>
                      <div className="text-white font-semibold text-sm mb-1">{feat.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables side */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${svc.accent}0A, rgba(8,8,16,0.95))`, border: `1px solid ${svc.accent}25` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: svc.accent }} />
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>What You Get</h3>
                  </div>
                  <div className="space-y-4">
                    {svc.deliverables.map((item, idx) => (
                      <div key={item} className="flex items-start space-x-3">
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                          style={{ backgroundColor: `${svc.accent}20`, color: svc.accent }}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <NavLink
                    to="/contact"
                    className="mt-8 inline-block px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: `linear-gradient(135deg, ${svc.accent}, ${svc.accent}99)` }}
                  >
                    Get a Quote →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── TECH STACK ─────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: '#080810' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00D2FF' }}>Technology</p>
          <h2 className="text-3xl font-black text-white mb-10" style={{ fontFamily: 'Syne, sans-serif' }}>Our Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 transition-all duration-200 hover:text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>Proof of Work</p>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div
                key={cs.title}
                className="p-8 rounded-2xl flex flex-col card-hover relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${cs.color}06)`, border: `1px solid ${cs.color}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${cs.color}, transparent)` }} />
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                  style={{ backgroundColor: `${cs.color}18`, color: cs.color }}
                >
                  {cs.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{cs.title}</h3>
                <p className="text-gray-400 text-sm flex-1 mb-6 leading-relaxed">{cs.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.metrics.map(m => (
                    <span key={m} className="text-xs px-3 py-1 rounded-lg font-medium text-gray-400" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      {m}
                    </span>
                  ))}
                </div>
                {cs.link && (
                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                    style={{ color: cs.color }}
                  >
                    {cs.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#080810' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#7B2FBE' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready to Start<br />
            <span className="gradient-text">Your Project?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">Let's discuss how NEREON can help you achieve your digital goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="btn-primary">
              Get In Touch →
            </NavLink>
            <NavLink to="/games" className="btn-outline">
              Explore Games
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
