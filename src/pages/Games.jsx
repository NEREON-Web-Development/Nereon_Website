import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import GameCard from '../components/GameCard'

const portfolioGames = [
  {
    title: 'DegenGaming',
    genre: 'Gaming Platform',
    description: 'A next-generation gaming platform blending competitive play with community-driven experiences. Built for the modern gamer.',
    emoji: '🎮',
    accentColor: '#7B2FBE',
    slug: 'degengaming',
  },
]

const serviceTypes = [
  {
    icon: '🏢',
    title: 'Corporate Training Simulations',
    description: 'Immersive scenario-based games that train employees in decision-making, leadership, crisis management, and operational procedures.',
    tag: 'Training',
    accent: '#7B2FBE',
  },
  {
    icon: '📋',
    title: 'Compliance & Safety Training',
    description: 'Engaging compliance games that replace dry e-learning modules. Staff learn GDPR, health & safety, and industry regulations through play.',
    tag: 'Compliance',
    accent: '#00D2FF',
  },
  {
    icon: '🎓',
    title: 'Gamified Learning Platforms',
    description: 'Full-featured learning platforms with progression systems, badges, leaderboards, and rewards that keep learners motivated and coming back.',
    tag: 'Education',
    accent: '#22C55E',
  },
  {
    icon: '🧩',
    title: 'Onboarding & Culture Games',
    description: 'Interactive onboarding experiences that introduce new hires to your company culture, values, and processes in a memorable, engaging way.',
    tag: 'Onboarding',
    accent: '#F59E0B',
  },
  {
    icon: '📊',
    title: 'Data Literacy & Skills Training',
    description: 'Quest-based games that teach analytical thinking, data interpretation, and digital skills to staff at all levels — no prior experience needed.',
    tag: 'Skills',
    accent: '#FF6B35',
  },
  {
    icon: '🤝',
    title: 'Customer & Sales Simulations',
    description: 'Role-play simulations that train sales teams, customer service agents, and client-facing staff in negotiation, empathy, and product knowledge.',
    tag: 'Sales',
    accent: '#EC4899',
  },
]

const conceptExamples = [
  {
    title: 'SimCorp Academy',
    genre: 'Corporate Decision-Making',
    description: 'A concept for a corporate training simulation that trains staff in decision-making, leadership, and compliance scenarios through branching story gameplay.',
    emoji: '🏢',
    accentColor: '#00D2FF',
  },
  {
    title: 'EcoBuilder',
    genre: 'Sustainability Learning',
    description: 'A concept for an educational strategy game where players build sustainable operations and learn about real-world environmental and ESG impact.',
    emoji: '🌱',
    accentColor: '#22C55E',
  },
  {
    title: 'DataQuest',
    genre: 'Data Skills RPG',
    description: 'A concept for a quest-based RPG that teaches data literacy and analytics skills to employees across 50+ missions — from data novice to analytics hero.',
    emoji: '📊',
    accentColor: '#F59E0B',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Learning Design',
    description: 'We work with your L&D and subject matter experts to define learning objectives, target audience, and success metrics.',
    accent: '#7B2FBE',
  },
  {
    step: '02',
    title: 'Game Design & Prototyping',
    description: 'Our designers create mechanics, narrative structures, and a playable prototype — all aligned to your learning goals.',
    accent: '#00D2FF',
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'We build the full game with your branding, integrate it with your LMS or HR platform, and handle all technical delivery.',
    accent: '#22C55E',
  },
  {
    step: '04',
    title: 'Launch & Iterate',
    description: 'We deploy, measure real learning outcomes, and iterate based on data — ensuring your game stays effective over time.',
    accent: '#FF6B35',
  },
]

export default function Games() {
  useEffect(() => {
    document.title = 'Serious Games & Gaming Studio | NEREON Greece — Enterprise Training Simulations'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'NEREON Gaming Studio develops serious games, enterprise training simulations, and Web3 gaming experiences. Based in Greece — custom gamified learning for businesses.')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://nereon.gr/games')
  }, [])

  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: '#7B2FBE' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#00D2FF' }} />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{ backgroundColor: 'rgba(123,47,190,0.12)', border: '1px solid rgba(123,47,190,0.3)', color: '#A78BFA' }}
          >
            <span className="dot-live" />
            <span>Serious Games for Business — Service Offering</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            GAMES THAT
            <br />
            <span className="gradient-text">MEAN BUSINESS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We design and build serious games for enterprises — custom training simulations, gamified learning platforms, and compliance tools that actually engage your people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary">
              Explore Services →
            </a>
            <NavLink to="/contact" className="btn-outline">
              Discuss Your Project
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── OUR GAMES PORTFOLIO ────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>Portfolio</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Our Games</h2>
            <p className="text-gray-400 max-w-xl">
              Products built and operated by NEREON — from standalone platforms to fully launched titles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioGames.map(game => (
              <Link key={game.slug} to={`/games/${game.slug}`} className="block no-underline">
                <GameCard
                  title={game.title}
                  genre={game.genre}
                  description={game.description}
                  emoji={game.emoji}
                  accentColor={game.accentColor}
                  status="coming-soon"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT ARE SERIOUS GAMES ─────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(123,47,190,0.15), rgba(0,210,255,0.08))', border: '1px solid rgba(123,47,190,0.3)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B2FBE, #00D2FF, transparent)' }} />
            <div className="flex items-center space-x-5">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(123,47,190,0.3), rgba(0,210,255,0.2))', border: '1px solid rgba(123,47,190,0.4)' }}
              >
                🎯
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  What are Serious Games?
                </h3>
                <p className="text-gray-400 text-sm max-w-xl">
                  Serious games are purpose-built interactive experiences designed to train, educate, or change behaviour — not just to entertain. They apply game mechanics (progression, challenge, reward) to real business learning objectives, dramatically improving engagement and knowledge retention.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="dot-live" />
              <span className="text-sm font-semibold" style={{ color: '#00D2FF' }}>Our Core Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPES ──────────────────────────────── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>What We Build</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Serious Games We Develop</h2>
            <p className="text-gray-400 max-w-xl">
              From compliance training to leadership simulations, we build games tailored to your industry, audience, and learning goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map(service => (
              <div
                key={service.title}
                className="p-8 rounded-2xl card-hover relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${service.accent}06)`, border: `1px solid ${service.accent}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }} />
                <div className="text-4xl mb-4">{service.icon}</div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
                >
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00D2FF' }}>Our Process</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              From Brief to Launch
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A proven four-step process that delivers games your staff actually want to play — and that move the learning metrics you care about.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(step => (
              <div
                key={step.step}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${step.accent}06)`, border: `1px solid ${step.accent}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }} />
                <div
                  className="text-4xl font-black mb-4 leading-none"
                  style={{ color: step.accent, fontFamily: 'Syne, sans-serif' }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCEPT EXAMPLES ───────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#F59E0B' }}>Concept Examples</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>What We Could Build</h2>
            <p className="text-gray-400 max-w-xl">
              These are illustrative concepts showing the kinds of games we can create — not released products. A real interactive demo is coming soon.
            </p>
          </div>
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{ backgroundColor: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}
          >
            <span>💡</span>
            <span>These are concept examples, not released titles</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conceptExamples.map(game => (
              <div
                key={game.title}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${game.accentColor}06)`, border: `1px solid ${game.accentColor}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${game.accentColor}, transparent)` }} />
                <div className="text-4xl mb-4">{game.emoji}</div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: 'rgba(245,158,11,0.12)', color: '#F59E0B' }}
                >
                  Concept
                </span>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{game.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: game.accentColor }}>{game.genre}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{game.description}</p>
              </div>
            ))}
          </div>

          {/* Demo Coming Soon Banner */}
          <div
            className="mt-10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(0,210,255,0.06))', border: '1px solid rgba(34,197,94,0.3)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #22C55E, #00D2FF, transparent)' }} />
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                🚀
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Real Demo Coming Soon
                </h3>
                <p className="text-gray-400 text-sm">We're building a live playable demo of a serious game built by NEREON. Watch this space.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="dot-live" />
              <span className="text-sm font-semibold" style={{ color: '#22C55E' }}>In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#0C0C14' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#7B2FBE' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready to Gamify<br />
            <span className="gradient-text">Your Training?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tell us your learning challenge. We'll design a serious game that engages your people and delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="btn-primary">
              Start a Conversation →
            </NavLink>
            <NavLink to="/services" className="btn-outline">
              View All Services
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
