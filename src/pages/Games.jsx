import GameCard from '../components/GameCard'
import { NavLink } from 'react-router-dom'

const games = [
  {
    title: 'NeonVault',
    genre: 'Puzzle / Strategy',
    description: 'A cyberpunk puzzle game where you hack your way through neon-lit corporate vaults. Master the grid, outsmart the AI.',
    status: 'coming-soon',
    emoji: '🔐',
  },
  {
    title: 'ChainRealms',
    genre: 'RPG / Web3',
    description: 'An epic fantasy RPG with true asset ownership. Your characters, items, and land are yours — on-chain forever.',
    status: 'coming-soon',
    emoji: '⛓️',
  },
  {
    title: 'SimCorp Academy',
    genre: 'Serious Game / Simulation',
    description: 'A corporate training simulation game used by enterprises globally to train staff in decision-making and leadership.',
    status: 'available',
    emoji: '🏢',
  },
  {
    title: 'PixelWars',
    genre: 'Action / Arcade',
    description: 'A fast-paced retro arcade shooter with modern mechanics and leaderboards. Compete globally for top scores.',
    status: 'coming-soon',
    emoji: '👾',
  },
  {
    title: 'EcoBuilder',
    genre: 'Strategy / Educational',
    description: 'Build sustainable cities and learn about environmental impact through engaging gameplay mechanics.',
    status: 'coming-soon',
    emoji: '🌱',
  },
  {
    title: 'DataQuest',
    genre: 'Educational / RPG',
    description: 'Learn data science concepts through a quest-based RPG adventure. From novice to data hero.',
    status: 'coming-soon',
    emoji: '📊',
  },
]

export default function Games() {
  return (
    <div style={{backgroundColor: '#0F172A'}}>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 text-center relative overflow-hidden"
        style={{background: 'linear-gradient(135deg, #0F172A 0%, #0d0020 50%, #0F172A 100%)'}}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{backgroundColor: '#7C3AED'}}></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{backgroundColor: '#10B981'}}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🎮</div>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6" style={{backgroundColor: 'rgba(124,58,237,0.15)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.3)'}}>NEREON Gaming Studio</span>
          <h1 className="text-5xl font-black text-white mb-4">
            Play the{' '}
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #7C3AED, #10B981)'}}>
              Future
            </span>
          </h1>
          <p className="text-xl text-gray-400">Immersive games, serious simulations, and next-gen Web3 experiences — all from one studio.</p>
        </div>
      </section>

      {/* Web3 Banner */}
      <section className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
            style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(16,185,129,0.1))', border: '2px solid rgba(124,58,237,0.4)'}}
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">⛓️</span>
              <div>
                <h3 className="text-xl font-black text-white">Web3 Interactivity — Coming Soon!</h3>
                <p className="text-gray-400 text-sm">Wallet integration and blockchain gaming features are on the way.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#10B981'}}></span>
              <span className="text-sm font-semibold" style={{color: '#10B981'}}>In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-8">Our Game Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map(game => <GameCard key={game.title} {...game} />)}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(16,185,129,0.03))'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">The Future of NEREON Gaming</h2>
            <p className="text-gray-400">We're building the next generation of gaming experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💎', title: 'True Asset Ownership', desc: 'Blockchain-powered NFT items and characters that belong to you — not the game company.', tag: 'Web3' },
              { icon: '🌐', title: 'Cross-Game Economy', desc: 'Earn tokens in one game, spend them in another. A unified NEREON gaming economy.', tag: 'DeFi Gaming' },
              { icon: '🏆', title: 'eSports & Tournaments', desc: 'Competitive tournaments with real prize pools. Rise through the ranks in the NEREON League.', tag: 'Competitive' },
            ].map(feat => (
              <div key={feat.title} className="p-6 rounded-2xl" style={{background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(124,58,237,0.2)'}}>
                <div className="text-4xl mb-4">{feat.icon}</div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block" style={{backgroundColor: 'rgba(124,58,237,0.15)', color: '#A78BFA'}}>
                  {feat.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Interested in Game Development?</h2>
          <p className="text-gray-400 mb-8">NEREON also builds serious games and simulations for enterprise clients. Let's talk.</p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
          >
            Discuss Your Game Project →
          </NavLink>
        </div>
      </section>
    </div>
  )
}
