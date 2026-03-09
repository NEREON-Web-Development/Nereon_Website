import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const quickActions = [
  {
    label: '🚀 Explore Services',
    response: "NEREON offers three core service pillars:\n\n• **IT Advisory** — Digital transformation strategy, tech consulting, and enterprise architecture.\n• **Web Development** — Custom web apps, business websites, and serious games built with modern frameworks.\n• **Gaming Studio** — Original game titles and Web3 gaming experiences (coming soon!).\n\nWould you like to learn more about any specific service?",
    route: '/services'
  },
  {
    label: '🎮 Browse Games',
    response: "NEREON Gaming Studio is building the next generation of interactive experiences!\n\n• Immersive serious games for training and education\n• Original indie titles with unique gameplay mechanics\n• Web3 blockchain gaming — wallet integration coming soon!\n\nHead to our Games page to see what's in development.",
    route: '/games'
  },
  {
    label: '💼 Get a Consultation',
    response: "Ready to transform your digital strategy? Our consultants specialize in:\n\n• Digital transformation roadmaps\n• Technology stack assessment\n• Product development strategy\n• IT infrastructure optimization\n\nSchedule a free 30-minute discovery call — no commitment required!",
    route: '/contact'
  },
  {
    label: '📋 Submit a Project Brief',
    response: "Let's build something amazing together! To get started:\n\n1. Head to our Contact page\n2. Fill out the Project Brief form\n3. Include your vision, timeline, and budget range\n4. Our team will respond within 24 hours\n\nWe work with startups, enterprises, and everything in between.",
    route: '/contact'
  },
]

export default function MasterPrompt() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleQuickAction(action) {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: action.label },
      { type: 'bot', text: action.response, route: action.route },
    ])
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    setMessages(prev => [
      ...prev,
      { type: 'user', text: input },
      { type: 'bot', text: "Thank you for reaching out! 🎉 Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our services or browse our games portfolio." },
    ])
    setInput('')
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(16,185,129,0.05))', border: '1px solid rgba(124,58,237,0.3)'}}>
      <div className="p-6 border-b" style={{borderColor: 'rgba(124,58,237,0.2)', background: 'rgba(15,23,42,0.8)'}}>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#10B981'}}></div>
          <h3 className="text-lg font-bold text-white">How can NEREON help you today?</h3>
        </div>
        <p className="text-gray-400 text-sm mt-1">Choose a quick action or type your own question below</p>
      </div>

      {/* Quick action buttons */}
      <div className="p-4 grid grid-cols-2 gap-2" style={{backgroundColor: 'rgba(15,23,42,0.6)'}}>
        {quickActions.map((action) => (
          <button
            key={action.label}
            onClick={() => handleQuickAction(action)}
            className="text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:scale-[1.02]"
            style={{backgroundColor: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)'}}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Chat messages */}
      {messages.length > 0 && (
        <div className="px-4 py-2 max-h-64 overflow-y-auto space-y-3" style={{backgroundColor: 'rgba(15,23,42,0.6)'}}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.type === 'bot' && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold" style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}>
                  N
                </div>
              )}
              <div
                className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl text-sm whitespace-pre-line"
                style={msg.type === 'user'
                  ? {backgroundColor: '#7C3AED', color: 'white', borderBottomRightRadius: '4px'}
                  : {backgroundColor: 'rgba(30,41,59,0.9)', color: '#E2E8F0', borderBottomLeftRadius: '4px', border: '1px solid rgba(124,58,237,0.2)'}
                }
              >
                {msg.text}
                {msg.route && (
                  <button
                    onClick={() => navigate(msg.route)}
                    className="block mt-2 text-xs font-semibold underline"
                    style={{color: '#10B981'}}
                  >
                    Go there →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4 flex space-x-2" style={{backgroundColor: 'rgba(15,23,42,0.8)', borderTop: '1px solid rgba(124,58,237,0.2)'}}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask us anything about our services..."
          className="flex-1 px-4 py-2 rounded-lg text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7C3AED]"
          style={{backgroundColor: 'rgba(30,41,59,0.8)', border: '1px solid rgba(124,58,237,0.3)'}}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{background: 'linear-gradient(135deg, #7C3AED, #10B981)'}}
        >
          Send
        </button>
      </form>
    </div>
  )
}
