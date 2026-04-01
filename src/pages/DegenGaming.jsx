import { NavLink } from 'react-router-dom'

const features = [
  {
    icon: '🏆',
    title: 'Competitive Play',
    description: 'Ranked modes and tournament brackets for players who want to test their skills against the best.',
    accent: '#7B2FBE',
  },
  {
    icon: '🌐',
    title: 'Community-Driven',
    description: 'Built around players — from content creation to voting on new game modes and features.',
    accent: '#00D2FF',
  },
  {
    icon: '🎯',
    title: 'Skill-Based Rewards',
    description: 'Earn rewards through performance, not chance. Every achievement reflects real in-game skill.',
    accent: '#22C55E',
  },
]

export default function DegenGaming() {
  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
            style={{ backgroundColor: '#7B2FBE' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
            style={{ backgroundColor: '#00D2FF' }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{
              backgroundColor: 'rgba(123,47,190,0.12)',
              border: '1px solid rgba(123,47,190,0.3)',
              color: '#A78BFA',
            }}
          >
            <span className="dot-live" />
            <span>A NEREON Platform — Coming Soon</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            DEGEN
            <br />
            <span className="gradient-text">GAMING</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A next-generation gaming platform where competition meets community. Built for players who take their game seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              disabled
              className="btn-primary opacity-60 cursor-not-allowed"
            >
              Launching Soon
            </button>
            <NavLink to="/contact" className="btn-outline">
              Get Early Access
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ backgroundColor: '#0C0C14' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(123,47,190,0.15), rgba(0,210,255,0.08))',
              border: '1px solid rgba(123,47,190,0.3)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B2FBE, #00D2FF, transparent)' }} />
            <div className="flex items-center space-x-5">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,47,190,0.3), rgba(0,210,255,0.2))',
                  border: '1px solid rgba(123,47,190,0.4)',
                }}
              >
                🎮
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  What is DegenGaming?
                </h3>
                <p className="text-gray-400 text-sm max-w-xl">
                  DegenGaming is a competitive gaming platform designed and operated by NEREON. It brings together skill-based play, community features, and a fair reward system — all on a single, modern platform.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="dot-live" />
              <span className="text-sm font-semibold" style={{ color: '#A78BFA' }}>In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#7B2FBE' }}>Platform</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Built Different
            </h2>
            <p className="text-gray-400 max-w-xl">
              DegenGaming is being designed from the ground up with competitive players and community builders in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(feature => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${feature.accent}06)`,
                  border: `1px solid ${feature.accent}20`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)` }}
                />
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON CTA ────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#0C0C14' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-15"
            style={{ backgroundColor: '#7B2FBE' }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              backgroundColor: 'rgba(123,47,190,0.1)',
              border: '1px solid rgba(123,47,190,0.3)',
              color: '#A78BFA',
            }}
          >
            <span>🚀</span>
            <span>Platform launch coming soon</span>
          </div>
          <h2 className="text-4xl font-black text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
            Be First to Play
            <br />
            <span className="gradient-text">DegenGaming</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            We're putting the finishing touches on the platform. Get in touch to register your interest and be notified at launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="btn-primary">
              Register Interest →
            </NavLink>
            <NavLink to="/games" className="btn-outline">
              Back to Games
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
