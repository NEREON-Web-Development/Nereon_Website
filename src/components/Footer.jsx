import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-new.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#04040A', borderTop: '1px solid rgba(123,47,190,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="NEREON" style={{ height: '90px', width: 'auto', maxWidth: '300px', objectFit: 'contain' }} />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building tomorrow's digital experiences — from enterprise IT advisory to immersive games and cutting-edge web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/games', label: 'Games' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['IT Advisory', 'Web Development', 'Serious Games', 'Web3 Gaming', 'Digital Strategy'].map(s => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-600 text-sm">© {year} NEREON. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-gray-600 text-xs">
            <span className="dot-live mr-2" />
            <span>Systems Operational</span>
          </div>
          <div className="flex space-x-6">
            <NavLink to="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</NavLink>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
