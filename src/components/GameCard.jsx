export default function GameCard({ title, genre, description, status = 'coming-soon', emoji = '🎮', accentColor = '#7B2FBE' }) {
  const isAvailable = status === 'available'
  return (
    <div
      className="p-6 rounded-2xl flex flex-col card-hover"
      style={{
        background: `linear-gradient(135deg, rgba(8,8,16,0.95), ${accentColor}08)`,
        border: `1px solid ${accentColor}25`,
      }}
    >
      {/* Top accent line */}
      <div className="w-full h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
      <div className="text-5xl mb-4 text-center">{emoji}</div>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
        <span
          className="text-xs font-semibold px-2 py-1 rounded-full ml-2 flex-shrink-0"
          style={isAvailable
            ? { backgroundColor: 'rgba(0,210,255,0.15)', color: '#00D2FF' }
            : { backgroundColor: `${accentColor}20`, color: accentColor }
          }
        >
          {isAvailable ? 'Available' : 'Coming Soon'}
        </span>
      </div>
      <p className="text-xs font-medium mb-2" style={{ color: accentColor }}>{genre}</p>
      <p className="text-gray-400 text-sm flex-1 leading-relaxed">{description}</p>
      <button
        className="mt-5 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        style={isAvailable
          ? { background: `linear-gradient(135deg, ${accentColor}, #00D2FF)`, color: 'white' }
          : { backgroundColor: `${accentColor}12`, color: accentColor, border: `1px solid ${accentColor}30`, cursor: 'not-allowed' }
        }
        disabled={!isAvailable}
      >
        {isAvailable ? 'Play Now →' : 'Notify Me When Live'}
      </button>
    </div>
  )
}
