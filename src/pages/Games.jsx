import { NavLink } from 'react-router-dom'
import GameCard from '../components/GameCard'

const games = [
  {
    title: 'NeonVault',
    genre: 'Puzzle / Strategy',
    description: 'A cyberpunk puzzle game where you hack your way through neon-lit corporate vaults. Master the grid, outsmart the AI security systems.',
    status: 'coming-soon',
    emoji: '🔐',
    accentColor: '#7B2FBE',
  },
  {
    title: 'ChainRealms',
    genre: 'RPG / Web3',
    description: 'An epic fantasy RPG with true blockchain asset ownership. Your characters, items, and land parcels are yours — stored on-chain forever.',
    status: 'coming-soon',
    emoji: '⛓️',
    accentColor: '#00D2FF',
  },
  {
    title: 'SimCorp Academy',
    genre: 'Serious Game / Simulation',
    description: 'A corporate training simulation used by enterprises globally to train staff in decision-making, leadership, and compliance scenarios.',
    status: 'available',
    emoji: '🏢',
    accentColor: '#00D2FF',
  },
  {
    title: 'PixelWars',
    genre: 'Action / Arcade',
    description: 'A fast-paced retro arcade shooter with modern mechanics and real-time global leaderboards. Compete for top scores worldwide.',
    status: 'coming-soon',
    emoji: '👾',
    accentColor: '#FF6B35',
  },
  {
    title: 'EcoBuilder',
    genre: 'Strategy / Educational',
    description: 'Build sustainable cities and learn about real-world environmental impact through deeply engaging strategy gameplay mechanics.',
    status: 'coming-soon',
    emoji: '🌱',
    accentColor: '#22C55E',
  },
  {
    title: 'DataQuest',
    genre: 'Educational / RPG',
    description: 'Learn data science concepts through a quest-based RPG adventure. Progress from data novice to analytics hero across 50+ missions.',
    status: 'coming-soon',
    emoji: '📊',
    accentColor: '#F59E0B',
  },
]

const web3Features = [
  {
    icon: '💎',
    title: 'True Asset Ownership',
    desc: 'Blockchain-powered NFT items and characters that belong to you — not the game company. Trade, sell, or hold them forever.',
    tag: 'Web3',
    accent: '#7B2FBE',
  },
  {
    icon: '🌐',
    title: 'Cross-Game Economy',
    desc: 'Earn tokens in one game, spend them in another. A unified NEREON gaming economy spanning our entire portfolio.',
    tag: 'DeFi Gaming',
    accent: '#00D2FF',
  },
  {
    icon: '🏆',
    title: 'eSports & Tournaments',
    desc: 'Competitive tournaments with real prize pools. Rise through the ranks and compete in the NEREON Championship League.',
    tag: 'Competitive',
    accent: '#FF6B35',
  },
]

export default function Games() {
  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: '#7B2FBE' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#FF6B35' }} />
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
            <span>NEREON Gaming Studio — 6 Titles in Pipeline</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            PLAY THE
            <br />
            <span className="gradient-text">FUTURE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Immersive games, enterprise simulations, and next-gen Web3 experiences — all crafted by the NEREON studio team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#games"
              className="btn-primary"
            >
              Browse Games →
            </a>
            <NavLink to="/contact" className="btn-outline">
              Commission a Game
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── WEB3 BANNER ────────────────────────────────── */}
      <section className="px-6 py-6" style={{ backgroundColor: '#0C0C14' }}>
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
                ⛓️
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Web3 Integration — Coming Soon
                </h3>
                <p className="text-gray-400 text-sm">Wallet integration, NFT assets, and on-chain economies are in active development across our titles.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="dot-live" />
              <span className="text-sm font-semibold" style={{ color: '#00D2FF' }}>In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMES GRID ─────────────────────────────────── */}
      <section id="games" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>Game Portfolio</p>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Our Titles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map(game => <GameCard key={game.title} {...game} />)}
          </div>
        </div>
      </section>

      {/* ── WEB3 FEATURES ──────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00D2FF' }}>The Future of Gaming</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              NEREON Gaming Vision
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We're building the next generation of gaming — where players have real ownership, real economies, and real stakes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {web3Features.map(feat => (
              <div
                key={feat.title}
                className="p-8 rounded-2xl card-hover relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${feat.accent}06)`, border: `1px solid ${feat.accent}20` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)` }} />
                <div className="text-4xl mb-4">{feat.icon}</div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: `${feat.accent}18`, color: feat.accent }}
                >
                  {feat.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERIOUS GAMES CTA ──────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#FF6B35' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
            Need a Serious Game<br />
            <span className="gradient-text-warm">for Your Enterprise?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            NEREON builds custom training simulations and educational games for enterprise clients. Let's discuss your learning objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #FF6B35, #F7C948)' }}>
              Discuss Your Game →
            </NavLink>
            <NavLink to="/services" className="btn-outline">
              View Gaming Services
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
