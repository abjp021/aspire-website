export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 w-3/4 mx-auto bg-white/20 rounded-lg mb-6"></div>
          <div className="h-6 w-2/3 mx-auto bg-white/20 rounded-lg"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-pulse"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
              <div className="h-8 w-3/4 bg-white/20 rounded-lg mb-3"></div>
              <div className="h-20 bg-white/20 rounded-lg mb-6"></div>
              <div className="h-12 bg-white/20 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 