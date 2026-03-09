export default function ServiceCard({ icon, title, description, features = [], accent = '#7B2FBE' }) {
  return (
    <div
      className="p-6 rounded-2xl transition-all duration-300 card-hover group"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${accent}20`,
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className="text-xl font-bold text-white mb-2 transition-colors"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map(f => (
            <li key={f} className="text-gray-500 text-xs flex items-center space-x-2">
              <span style={{ color: accent }}>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
