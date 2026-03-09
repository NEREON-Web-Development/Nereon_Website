import ServiceCard from '../components/ServiceCard'
import MasterPrompt from '../components/MasterPrompt'
import { NavLink } from 'react-router-dom'

const services = [
  {
    icon: '🧠',
    title: 'IT Advisory',
    description: 'Strategic technology consulting that drives real business outcomes. From digital transformation to enterprise architecture.',
    features: ['Digital Transformation', 'Tech Strategy', 'Enterprise Architecture', 'IT Audit & Assessment'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Cutting-edge web applications and websites built with modern frameworks for performance and scale.',
    features: ['Custom Web Apps', 'Business Websites', 'Serious Games', 'API Integrations'],
  },
  {
    icon: '🎮',
    title: 'Gaming Studio',
    description: "Original game titles and immersive experiences from NEREON's in-house gaming studio.",
    features: ['Original IP Games', 'Serious Games', 'Web3 Gaming (Soon)', 'Indie Titles'],
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{background: 'linear-gradient(135deg, #0F172A 0%, #1a0533 50%, #0F172A 100%)'}}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#7C3AED'}}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{backgroundColor: '#10B981'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#7C3AED'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold mb-8" style={{backgroundColor: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#A78BFA'}}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#10B981'}}></span>
            <span>Now accepting new enterprise clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Building{' '}
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #7C3AED, #10B981)'}}>
              Tomorrow's
            </span>
            <br />Digital Experiences
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            NEREON fuses cutting-edge web technology, strategic IT consulting, and immersive game design to create digital solutions that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/services"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg text-center"
              style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
            >
              Explore Services
            </NavLink>
            <NavLink
              to="/games"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 text-center"
              style={{backgroundColor: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)'}}
            >
              Browse Games 🎮
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4" style={{backgroundColor: '#0F172A'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Three powerful capabilities, one visionary team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(16,185,129,0.05))'}}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Enterprise Clients' },
            { value: '5+', label: 'Games in Dev' },
            { value: '24h', label: 'Response Time' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl font-black mb-1" style={{color: '#7C3AED'}}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Master Prompt */}
      <section className="py-24 px-4" style={{backgroundColor: '#0F172A'}}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Talk to NEREON</h2>
            <p className="text-gray-400">Get instant answers about our services or connect with a consultant</p>
          </div>
          <MasterPrompt />
        </div>
      </section>
    </div>
  )
}
