import { NavLink } from 'react-router-dom'
import MasterPrompt from '../components/MasterPrompt'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Enterprise Clients' },
  { value: '6', label: 'Games in Pipeline' },
  { value: '24h', label: 'Avg. Response Time' },
]

const services = [
  {
    number: '01',
    title: 'IT Advisory',
    description: 'Strategic technology consulting that drives real business outcomes. We guide enterprises through digital transformation, cloud migration, security hardening, and IT strategy.',
    tags: ['Digital Transformation', 'Cloud Strategy', 'IT Audit', 'Enterprise Architecture'],
    accent: '#7B2FBE',
  },
  {
    number: '02',
    title: 'Web & App Development',
    description: 'From concept to production — we build high-performance web applications, business websites, and SaaS platforms using modern frameworks and best practices.',
    tags: ['React / Vue', 'Node.js', 'Full-Stack', 'API Design'],
    accent: '#00D2FF',
  },
  {
    number: '03',
    title: 'Gaming Studio',
    description: 'NEREON develops original game titles, serious games for enterprise training, and next-generation Web3 gaming experiences with true asset ownership.',
    tags: ['Original IP', 'Serious Games', 'Web3 Gaming', 'Simulations'],
    accent: '#FF6B35',
  },
]

const projects = [
  {
    tag: 'IT Advisory',
    title: 'FinTech Digital Overhaul',
    description: 'Led a complete infrastructure modernization for a leading fintech, reducing OpEx by 40% while tripling performance.',
    color: '#7B2FBE',
    stats: ['40% Cost Reduction', '3× Performance', '6 Months'],
  },
  {
    tag: 'Web Development',
    title: 'Enterprise SaaS Platform',
    description: 'Built a multi-tenant SaaS platform from MVP to 10K+ active users in under 12 months.',
    color: '#00D2FF',
    stats: ['10K+ Users', '99.9% Uptime', 'Full-Stack'],
  },
  {
    tag: 'Serious Game',
    title: 'Corporate Training Sim',
    description: 'Immersive browser-based simulation for Fortune 500 compliance training — 85% engagement rate.',
    color: '#FF6B35',
    stats: ['85% Engagement', '5K+ Completions', 'Multi-Language'],
  },
]

const partners = ['Accenture', 'Microsoft', 'AWS Partner', 'Google Cloud', 'Salesforce', 'SAP', 'IBM', 'Oracle', 'Deloitte', 'PwC']

export default function Home() {
  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: '#7B2FBE' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#00D2FF' }} />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{ backgroundColor: 'rgba(123,47,190,0.12)', border: '1px solid rgba(123,47,190,0.3)', color: '#A78BFA' }}
          >
            <span className="dot-live" />
            <span>Now accepting new enterprise clients</span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            WE BUILD
            <br />
            <span className="gradient-text">DIGITAL FUTURES</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NEREON fuses enterprise IT strategy, world-class web development, and immersive gaming to create digital experiences that define industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/services" className="btn-primary">
              Explore Services →
            </NavLink>
            <NavLink to="/games" className="btn-outline">
              🎮 Browse Games
            </NavLink>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0C0C14', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black mb-1 gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="section-divider" style={{ margin: '0 0 16px' }} />
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Three Capabilities.<br />One Visionary Team.
            </h2>
          </div>

          <div className="space-y-6">
            {services.map(svc => (
              <div
                key={svc.number}
                className="group p-8 rounded-2xl card-hover cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <span
                    className="text-7xl font-black leading-none flex-shrink-0 w-24 text-center"
                    style={{ fontFamily: 'Syne, sans-serif', color: svc.accent, opacity: 0.15 }}
                  >
                    {svc.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">{svc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: `${svc.accent}18`, color: svc.accent, border: `1px solid ${svc.accent}30` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <NavLink
                    to="/services"
                    className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{ border: `1px solid ${svc.accent}40`, color: svc.accent }}
                  >
                    Learn More →
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ──────────────────────────────── */}
      <section className="py-28 px-6" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00D2FF' }}>Case Studies</p>
              <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Featured Work
              </h2>
            </div>
            <NavLink to="/services" className="hidden md:block btn-outline text-sm" style={{ padding: '10px 24px' }}>
              View All →
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => (
              <div
                key={p.title}
                className="group relative p-8 rounded-2xl overflow-hidden card-hover"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${p.color}08)`, border: `1px solid ${p.color}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}
                >
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stats.map(stat => (
                    <span key={stat} className="text-xs px-2 py-1 rounded-lg font-medium text-gray-400" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS MARQUEE ───────────────────────────── */}
      <section
        className="py-14 overflow-hidden"
        style={{ backgroundColor: '#080810', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">Trusted by leading companies</p>
        </div>
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...partners, ...partners].map((name, i) => (
              <div key={i} className="flex-shrink-0 mx-12 text-gray-600 font-semibold text-lg hover:text-gray-400 transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASTER PROMPT ──────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>AI-Powered</p>
            <h2 className="text-4xl font-black text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
              Talk to NEREON
            </h2>
            <p className="text-gray-400">Get instant answers about our services or kick-start your project</p>
          </div>
          <MasterPrompt />
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#0C0C14' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: '#7B2FBE' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready to Build<br />
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">Let's discuss your project. Our team responds within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="btn-primary">
              Start Your Project →
            </NavLink>
            <NavLink to="/services" className="btn-outline">
              View Services
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
