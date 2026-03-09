export default function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <div
      className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
      style={{
        background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))',
        border: '1px solid rgba(124,58,237,0.2)',
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7C3AED] transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-1">
          {features.map(f => (
            <li key={f} className="text-gray-500 text-xs flex items-center space-x-2">
              <span style={{color: '#10B981'}}>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
