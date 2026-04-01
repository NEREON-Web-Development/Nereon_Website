import { useState } from 'react'

const quickActions = [
  { id: 'services', label: '🧠 Explore Services', response: "NEREON offers four core services:\n\n**IT Advisory** — Strategic technology consulting, digital transformation, cloud migration, and enterprise architecture.\n\n**Web & App Development** — Custom web apps, SaaS platforms, business websites, and API integrations using modern frameworks.\n\n**Gaming Studio** — Original game titles, serious games for enterprise training, and upcoming Web3 gaming experiences.\n\n**Agentic Automation** — AI-powered autonomous agents for business workflows, LLM integrations, and intelligent process automation. Real example: degentradingbot.tech.\n\nWhich area would you like to learn more about?" },
  { id: 'games', label: '🎮 Serious Games', response: "NEREON designs and builds serious games for enterprise use:\n\n🏢 **Corporate Training Simulations** — Decision-making, leadership, and crisis management\n📋 **Compliance & Safety Training** — Engaging games for GDPR, H&S, and industry regulations\n🎓 **Gamified Learning Platforms** — Full LMS-integrated platforms with progression and rewards\n🧩 **Onboarding & Culture Games** — Memorable experiences for new hire orientation\n📊 **Data Literacy Training** — Quest-based games for analytical skills at all levels\n\n🚀 A live playable demo is currently in development. Want to discuss a custom serious game for your organisation?" },
  { id: 'consult', label: '📞 Get a Consultation', response: "Let's connect you with a NEREON consultant!\n\nOur advisory team can help with:\n✓ Technology strategy & roadmap\n✓ Digital transformation planning\n✓ Custom software requirements\n✓ Game development briefs\n\nHead to our **Contact page** to book a free 30-minute discovery call — or type your question below and we'll get back to you within 24 hours." },
  { id: 'brief', label: '📋 Submit a Brief', response: "Ready to start your project? Great!\n\nTo give you the best proposal, we'll need:\n📌 Project type (Web app / Website / Game / IT Advisory)\n📌 Timeline & budget range\n📌 Key requirements or challenges\n📌 Your industry / company size\n\nVisit our **Contact page** to submit a full project brief, or describe your project below and we'll follow up within 24 hours." },
]

export default function MasterPrompt() {
  const [messages, setMessages] = useState([
    { role: 'nereon', text: "Hello! I'm NEREON's virtual assistant. How can I help you today?\n\nClick a quick action or type your own question below." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const addMessage = (role, text) => {
    setMessages(prev => [...prev, { role, text }])
  }

  const handleQuick = (action) => {
    addMessage('user', action.label)
    setLoading(true)
    setTimeout(() => {
      addMessage('nereon', action.response)
      setLoading(false)
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = input.trim()
    addMessage('user', userMsg)
    setInput('')
    setLoading(true)
    setTimeout(() => {
      addMessage('nereon', `Thanks for reaching out! 🙏\n\nYour message has been noted: "${userMsg}"\n\nA NEREON specialist will get back to you within 24 hours. In the meantime, feel free to explore our **Services** or **Games** pages!`)
      setLoading(false)
    }, 800)
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(123,47,190,0.2)',
        boxShadow: '0 0 60px rgba(123,47,190,0.08)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(123,47,190,0.06)' }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)' }}
          >
            N
          </div>
          <div>
            <div className="text-white text-sm font-semibold">NEREON Assistant</div>
            <div className="flex items-center space-x-1.5">
              <span className="dot-live" style={{ width: '6px', height: '6px' }} />
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-72 overflow-y-auto p-6 space-y-4" id="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
              style={msg.role === 'user'
                ? { background: 'linear-gradient(135deg, #7B2FBE, #5B21B6)', color: 'white', borderBottomRightRadius: '4px' }
                : { background: 'rgba(255,255,255,0.05)', color: '#D1D5DB', border: '1px solid rgba(255,255,255,0.06)', borderBottomLeftRadius: '4px' }
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex space-x-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#7B2FBE', animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="px-6 pb-4 flex flex-wrap gap-2">
        {quickActions.map(action => (
          <button
            key={action.id}
            onClick={() => handleQuick(action)}
            className="text-xs px-3 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: 'rgba(123,47,190,0.12)', color: '#A78BFA', border: '1px solid rgba(123,47,190,0.25)' }}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-6 pb-6 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask anything about NEREON..."
          className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D2FF)' }}
        >
          Send
        </button>
      </form>
    </div>
  )
}
