import ServiceCard from '../components/ServiceCard'
import { NavLink } from 'react-router-dom'

const caseStudies = [
  {
    tag: 'IT Advisory',
    title: 'Digital Transformation for FinTech Leader',
    description: 'Guided a leading fintech company through a complete digital overhaul, migrating legacy infrastructure to cloud-native architecture, reducing operational costs by 40%.',
    metrics: ['40% Cost Reduction', '3x Performance Gain', '6 Month Timeline'],
    color: '#7C3AED',
  },
  {
    tag: 'Web Development',
    title: 'Enterprise SaaS Platform Build',
    description: 'Designed and built a scalable multi-tenant SaaS platform for an HR tech startup, from MVP to 10,000+ active users in under a year.',
    metrics: ['10K+ Users', '99.9% Uptime', 'Full-Stack Delivery'],
    color: '#10B981',
  },
  {
    tag: 'Serious Games',
    title: 'Corporate Training Simulation',
    description: 'Developed an immersive browser-based simulation game for a Fortune 500 company to train new employees in compliance and crisis management.',
    metrics: ['85% Engagement Rate', '5K+ Completions', 'Multi-Language'],
    color: '#F59E0B',
  },
]

export default function Services() {
  return (
    <div style={{backgroundColor: '#0F172A'}}>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 text-center relative overflow-hidden"
        style={{background: 'linear-gradient(135deg, #0F172A 0%, #1a0533 60%, #0F172A 100%)'}}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{backgroundColor: '#7C3AED'}}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6" style={{backgroundColor: 'rgba(124,58,237,0.15)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.3)'}}>Our Services</span>
          <h1 className="text-5xl font-black text-white mb-4">Enterprise-Grade Solutions for Modern Businesses</h1>
          <p className="text-xl text-gray-400">From strategy to execution — NEREON delivers end-to-end digital transformation.</p>
        </div>
      </section>

      {/* IT Advisory */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold" style={{color: '#7C3AED'}}>IT Advisory</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-4">Navigate the Digital Landscape with Confidence</h2>
              <p className="text-gray-400 mb-6">Our advisory team brings decades of combined experience in enterprise IT, helping organizations modernize, optimize, and future-proof their technology investments.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🗺️', title: 'Digital Transformation', desc: 'End-to-end modernization roadmaps' },
                  { icon: '🏗️', title: 'Enterprise Architecture', desc: 'Scalable, resilient system design' },
                  { icon: '🔒', title: 'Security Assessment', desc: 'Vulnerability analysis and hardening' },
                  { icon: '📊', title: 'Tech Strategy', desc: 'Align technology with business goals' },
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl" style={{backgroundColor: 'rgba(30,41,59,0.6)', border: '1px solid rgba(124,58,237,0.15)'}}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(16,185,129,0.05))', border: '1px solid rgba(124,58,237,0.2)'}}>
              <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
              {[
                'Comprehensive IT audit and gap analysis',
                'Technology stack recommendations',
                'Digital transformation roadmap',
                'Vendor evaluation and selection',
                'Change management support',
                'Ongoing strategic advisory retainer',
              ].map(item => (
                <div key={item} className="flex items-center space-x-3 mb-3">
                  <span className="text-lg" style={{color: '#10B981'}}>✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-20 px-4" style={{backgroundColor: 'rgba(30,41,59,0.2)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 p-8 rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(124,58,237,0.05))', border: '1px solid rgba(16,185,129,0.2)'}}>
              <h3 className="text-2xl font-bold text-white mb-6">Our Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {['React', 'Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL'].map(tech => (
                  <div key={tech} className="px-3 py-2 rounded-lg text-center text-xs font-semibold text-gray-300" style={{backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(124,58,237,0.15)'}}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold" style={{color: '#10B981'}}>Web Development</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-4">Crafting Digital Products That Scale</h2>
              <p className="text-gray-400 mb-6">From concept to deployment, NEREON builds robust, performant web solutions tailored to your business needs.</p>
              <div className="space-y-3">
                {[
                  { title: 'Custom Web Applications', desc: 'Full-stack apps with modern frameworks' },
                  { title: 'Business Websites', desc: 'High-converting, SEO-optimized sites' },
                  { title: 'Serious Games & Simulations', desc: 'Browser-based interactive training tools' },
                  { title: 'API & Integrations', desc: 'Connect your ecosystem seamlessly' },
                ].map(item => (
                  <div key={item.title} className="flex items-start space-x-3 p-3 rounded-lg" style={{backgroundColor: 'rgba(30,41,59,0.4)'}}>
                    <span style={{color: '#10B981'}} className="text-xl mt-0.5">→</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-3">Case Studies</h2>
            <p className="text-gray-400">Real results from real partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.title} className="p-6 rounded-2xl flex flex-col" style={{background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))', border: '1px solid rgba(124,58,237,0.15)'}}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start" style={{backgroundColor: `${cs.color}22`, color: cs.color}}>
                  {cs.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{cs.title}</h3>
                <p className="text-gray-400 text-sm flex-1 mb-4">{cs.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.metrics.map(m => (
                    <span key={m} className="text-xs px-2 py-1 rounded-full font-medium" style={{backgroundColor: 'rgba(15,23,42,0.8)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.2)'}}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(16,185,129,0.05))'}}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8">Let's discuss how NEREON can help you achieve your digital goals.</p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
          >
            Get In Touch →
          </NavLink>
        </div>
      </section>
    </div>
  )
}
