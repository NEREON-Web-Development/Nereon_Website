import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const serviceOptions = [
  'IT Advisory & Digital Transformation',
  'Web Application Development',
  'Business Website',
  'Serious Game / Simulation',
  'Web3 / Blockchain Gaming',
  'Strategic Consulting',
  'Other',
]

const contactInfo = [
  { icon: '📧', title: 'Email', value: 'nereondev@gmail.com', desc: 'We reply within 24 hours' },
  { icon: '📅', title: 'Discovery Call', value: '30-Min Free Consultation', desc: 'No commitment required' },
  { icon: '⚡', title: 'Response Time', value: 'Under 24 Hours', desc: 'Guaranteed on business days' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Please provide more detail (20+ chars)'
    return e
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const inputStyle = (field) => ({
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#EF4444' : 'rgba(123,47,190,0.25)'}`,
    color: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <div style={{ backgroundColor: '#080810' }}>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: '#7B2FBE' }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10" style={{ backgroundColor: '#00D2FF' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{ backgroundColor: 'rgba(123,47,190,0.12)', border: '1px solid rgba(123,47,190,0.3)', color: '#A78BFA' }}
          >
            Get In Touch
          </span>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Let's Build
            <br />
            <span className="gradient-text">Something Great</span>
          </h1>
          <p className="text-xl text-gray-400">
            Tell us about your project. Our team will respond within 24 hours with a tailored approach.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {contactInfo.map(info => (
              <div
                key={info.title}
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(123,47,190,0.15)' }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{info.title}</div>
                    <div className="text-sm font-medium mb-1" style={{ color: '#A78BFA' }}>{info.value}</div>
                    <div className="text-gray-600 text-xs">{info.desc}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(123,47,190,0.15)' }}
            >
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-3">
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map(s => (
                  <a
                    key={s}
                    href="#"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold"
                    style={{ border: '1px solid rgba(123,47,190,0.2)', backgroundColor: 'rgba(123,47,190,0.05)' }}
                    aria-label={s}
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(123,47,190,0.08), rgba(0,210,255,0.04))', border: '1px solid rgba(123,47,190,0.2)' }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <span className="dot-live" />
                <span className="text-white text-sm font-semibold">24h Response Guarantee</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Every inquiry receives a personal response from a NEREON specialist within one business day — no bots, no templates.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="p-12 rounded-2xl text-center h-full flex flex-col items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,210,255,0.2)' }}
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3
                  className="text-3xl font-black text-white mb-4"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  We've received your inquiry and a NEREON specialist will reach out within 24 hours.
                </p>
                <div className="flex gap-4">
                  <NavLink to="/services" className="btn-primary" style={{ padding: '12px 24px' }}>
                    Explore Services
                  </NavLink>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                    className="btn-outline"
                    style={{ padding: '12px 24px' }}
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xlgpjdky"
                method="POST"
                className="p-8 rounded-2xl space-y-5"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(123,47,190,0.15)' }}
                noValidate
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)' }} />
                  <h2 className="text-2xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Start Your Project
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle('name')}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle('email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => handleChange('company', e.target.value)}
                    placeholder="Acme Corporation (optional)"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={inputStyle('company')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Service Interest *</label>
                  <select
                    value={form.service}
                    onChange={e => handleChange('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ ...inputStyle('service'), color: form.service ? 'white' : '#6B7280' }}
                  >
                    <option value="" style={{ backgroundColor: '#0C0C14', color: '#6B7280' }}>Select a service area</option>
                    {serviceOptions.map(opt => (
                      <option key={opt} value={opt} style={{ backgroundColor: '#0C0C14', color: 'white' }}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project — goals, timeline, budget range, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={inputStyle('message')}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <input type="hidden" name="_replyto" value={form.email} />
                <input type="hidden" name="_subject" value={`Contact from ${form.name}`} />
                <input type="hidden" name="_redirect" value="/thank-you" />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)', boxShadow: '0 0 40px rgba(123,47,190,0.2)' }}
                >
                  Send Message — We'll Reply Within 24h →
                </button>

                <p className="text-center text-gray-600 text-xs">
                  No spam, ever. Your data is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
