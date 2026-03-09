import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/games', label: 'Games' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{backgroundColor: '#0F172A', borderBottom: '1px solid #1E293B'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight" style={{color: '#7C3AED'}}>NER</span>
            <span className="text-2xl font-black tracking-tight" style={{color: '#10B981'}}>EON</span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-[#7C3AED]' : 'text-gray-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2" style={{backgroundColor: '#0F172A'}}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-semibold ${isActive ? 'text-[#7C3AED] bg-[#1E293B]' : 'text-gray-300 hover:text-white hover:bg-[#1E293B]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
