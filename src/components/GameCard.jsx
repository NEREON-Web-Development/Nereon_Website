export default function GameCard({ title, genre, description, status = 'coming-soon', emoji = '🎮' }) {
  const isAvailable = status === 'available'
  return (
    <div
      className="p-6 rounded-2xl flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))',
        border: `1px solid ${isAvailable ? 'rgba(16,185,129,0.3)' : 'rgba(124,58,237,0.2)'}`,
      }}
    >
      <div className="text-5xl mb-4 text-center">{emoji}</div>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span
          className="text-xs font-semibold px-2 py-1 rounded-full ml-2 flex-shrink-0"
          style={isAvailable
            ? {backgroundColor: 'rgba(16,185,129,0.2)', color: '#10B981'}
            : {backgroundColor: 'rgba(124,58,237,0.2)', color: '#A78BFA'}
          }
        >
          {isAvailable ? 'Available' : 'Coming Soon'}
        </span>
      </div>
      <p className="text-xs font-medium mb-2" style={{color: '#7C3AED'}}>{genre}</p>
      <p className="text-gray-400 text-sm flex-1">{description}</p>
      <button
        className="mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-all duration-200"
        style={isAvailable
          ? {background: 'linear-gradient(135deg, #7C3AED, #10B981)', color: 'white'}
          : {backgroundColor: 'rgba(124,58,237,0.1)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.3)', cursor: 'not-allowed'}
        }
        disabled={!isAvailable}
      >
        {isAvailable ? 'Play Now →' : 'Notify Me'}
      </button>
    </div>
  )
}
