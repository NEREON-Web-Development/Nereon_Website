import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services' },
    { to: '/games', label: 'Games' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl' : 'bg-transparent'}`}
      style={scrolled ? { backgroundColor: 'rgba(8,8,16,0.9)', borderBottom: '1px solid rgba(123,47,190,0.15)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded rotate-45 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)' }}
            />
            <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              <span className="text-white">NERE</span>
              <span className="gradient-text">ON</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 relative group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        width: isActive ? '100%' : '0%',
                        background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)',
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="btn-primary text-sm"
              style={{ padding: '10px 24px', borderRadius: '8px' }}
            >
              Start a Project →
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-1"
          style={{ backgroundColor: 'rgba(8,8,16,0.98)', borderTop: '1px solid rgba(123,47,190,0.15)' }}
        >
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`
              }
              style={({ isActive }) => isActive ? { backgroundColor: 'rgba(123,47,190,0.15)' } : {}}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="block mt-3 btn-primary text-center text-sm"
            style={{ borderRadius: '8px', padding: '12px 24px' }}
          >
            Start a Project →
          </NavLink>
        </div>
      )}
    </nav>
  )
}
