import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t" style={{backgroundColor: '#0F172A', borderColor: '#1E293B'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-black" style={{color: '#7C3AED'}}>NER</span>
              <span className="text-2xl font-black" style={{color: '#10B981'}}>EON</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Building tomorrow's digital experiences through innovative web applications, serious games, and strategic IT advisory services.
            </p>
            <div className="flex space-x-4 mt-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                <a key={s} href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[{to:'/', label:'Home'},{to:'/services', label:'Services'},{to:'/games', label:'Games'},{to:'/contact', label:'Contact'}].map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>IT Advisory</li>
              <li>Web Applications</li>
              <li>Serious Games</li>
              <li>Digital Strategy</li>
              <li>Gaming Studio</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center" style={{borderColor: '#1E293B'}}>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} NEREON. All rights reserved.</p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">Building Tomorrow's Digital Experiences</p>
        </div>
      </div>
    </footer>
  )
}
