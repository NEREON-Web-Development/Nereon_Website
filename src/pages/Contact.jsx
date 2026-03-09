import { useState } from 'react'

function ConsultationForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const topics = ['Digital Transformation', 'Enterprise Architecture', 'Security Assessment', 'Tech Strategy', 'Other']

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.topic) e.topic = 'Please select a topic'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl text-center" style={{background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(124,58,237,0.05))', border: '1px solid rgba(16,185,129,0.3)'}}>
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Consultation Request Received!</h3>
        <p className="text-gray-400">We'll reach out within 24 hours to schedule your free discovery call.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-2xl space-y-4" style={{background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(124,58,237,0.2)'}}>
      <h2 className="text-2xl font-black text-white mb-6">Schedule a Consultation</h2>
      {[
        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
        { name: 'company', label: 'Company (optional)', type: 'text', placeholder: 'Acme Corp' },
      ].map(field => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-300 mb-1">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={e => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-2 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-[#7C3AED]"
            style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors[field.name] ? '#EF4444' : 'rgba(124,58,237,0.3)'}`, color: 'white'}}
          />
          {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Topic</label>
        <select
          value={form.topic}
          onChange={e => setForm({ ...form, topic: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#7C3AED]"
          style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors.topic ? '#EF4444' : 'rgba(124,58,237,0.3)'}`, color: form.topic ? 'white' : '#6B7280'}}
        >
          <option value="">Select a topic</option>
          {topics.map(t => <option key={t} value={t} style={{backgroundColor: '#1E293B', color: 'white'}}>{t}</option>)}
        </select>
        {errors.topic && <p className="text-red-400 text-xs mt-1">{errors.topic}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your goals..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#7C3AED] resize-none"
          style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors.message ? '#EF4444' : 'rgba(124,58,237,0.3)'}`, color: 'white'}}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
        style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
      >
        Schedule Free Consultation
      </button>
    </form>
  )
}

function ProjectBriefForm() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', budget: '', description: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const projectTypes = ['Web Application', 'Business Website', 'Serious Game', 'Mobile App', 'IT Advisory', 'Other']
  const budgets = ['< $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000 – $100,000', '$100,000+']

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.projectType) e.projectType = 'Please select a project type'
    if (!form.description.trim()) e.description = 'Description is required'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl text-center" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(16,185,129,0.05))', border: '1px solid rgba(124,58,237,0.3)'}}>
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-xl font-bold text-white mb-2">Project Brief Submitted!</h3>
        <p className="text-gray-400">Our team will review your brief and respond within 24 hours with a proposal.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-2xl space-y-4" style={{background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(16,185,129,0.2)'}}>
      <h2 className="text-2xl font-black text-white mb-6">Submit a Project Brief</h2>
      {[
        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
      ].map(field => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-300 mb-1">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={e => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
            style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors[field.name] ? '#EF4444' : 'rgba(16,185,129,0.3)'}`, color: 'white'}}
          />
          {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Project Type</label>
        <select
          value={form.projectType}
          onChange={e => setForm({ ...form, projectType: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
          style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors.projectType ? '#EF4444' : 'rgba(16,185,129,0.3)'}`, color: form.projectType ? 'white' : '#6B7280'}}
        >
          <option value="">Select project type</option>
          {projectTypes.map(t => <option key={t} value={t} style={{backgroundColor: '#1E293B', color: 'white'}}>{t}</option>)}
        </select>
        {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Budget Range (optional)</label>
        <select
          value={form.budget}
          onChange={e => setForm({ ...form, budget: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
          style={{backgroundColor: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.3)', color: form.budget ? 'white' : '#6B7280'}}
        >
          <option value="">Select budget range</option>
          {budgets.map(b => <option key={b} value={b} style={{backgroundColor: '#1E293B', color: 'white'}}>{b}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Project Description</label>
        <textarea
          rows={4}
          placeholder="Describe your project vision, goals, and requirements..."
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981] resize-none"
          style={{backgroundColor: 'rgba(15,23,42,0.8)', border: `1px solid ${errors.description ? '#EF4444' : 'rgba(16,185,129,0.3)'}`, color: 'white'}}
        />
        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
        style={{background: 'linear-gradient(135deg, #10B981, #7C3AED)'}}
      >
        Submit Project Brief
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <div style={{backgroundColor: '#0F172A'}}>
      {/* Hero */}
      <section
        className="pt-32 pb-12 px-4 text-center relative overflow-hidden"
        style={{background: 'linear-gradient(135deg, #0F172A 0%, #1a0533 60%, #0F172A 100%)'}}
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6" style={{backgroundColor: 'rgba(124,58,237,0.15)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.3)'}}>Get In Touch</span>
          <h1 className="text-5xl font-black text-white mb-4">Let's Build Something Together</h1>
          <p className="text-xl text-gray-400">Schedule a consultation or tell us about your project. We respond within 24 hours.</p>
        </div>
      </section>

      {/* Forms */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConsultationForm />
          <ProjectBriefForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📧', title: 'Email Us', value: 'hello@nereon.io', desc: 'We reply within 24 hours' },
            { icon: '💬', title: 'Live Chat', value: 'Available Soon', desc: 'Real-time support coming' },
            { icon: '📅', title: 'Book a Call', value: 'Free Discovery Call', desc: '30-min, no commitment' },
          ].map(info => (
            <div key={info.title} className="p-6 rounded-2xl text-center" style={{background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(124,58,237,0.15)'}}>
              <div className="text-3xl mb-3">{info.icon}</div>
              <h3 className="text-white font-bold mb-1">{info.title}</h3>
              <p className="text-sm font-medium mb-1" style={{color: '#10B981'}}>{info.value}</p>
              <p className="text-gray-500 text-xs">{info.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
