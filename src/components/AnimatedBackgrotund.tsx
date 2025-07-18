import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Large blue-purple */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/60 to-purple-600/60 rounded-full blur-xl animate-blob"></div>
      
      {/* Blob 2 - Medium pink-orange */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-pink-400/50 to-orange-500/50 rounded-full blur-xl animate-blob animation-delay-2000"></div>
      
      {/* Blob 3 - Small green-blue */}
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/45 to-blue-500/45 rounded-full blur-xl animate-blob animation-delay-4000"></div>
      
      {/* Blob 4 - Medium purple-pink */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/45 to-pink-400/45 rounded-full blur-xl animate-blob animation-delay-1000"></div>
      
      {/* Blob 5 - Large cyan-blue */}
      <div className="absolute bottom-10 right-20 w-88 h-88 bg-gradient-to-br from-cyan-400/55 to-blue-600/55 rounded-full blur-xl animate-blob animation-delay-3000"></div>
      
      {/* Blob 6 - Small yellow-orange */}
      <div className="absolute top-10 left-1/3 w-56 h-56 bg-gradient-to-br from-yellow-400/50 to-orange-400/50 rounded-full blur-xl animate-blob animation-delay-5000"></div>
      
      {/* Additional floating particles */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/35 to-purple-400/35 rounded-full blur-lg animate-float"></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-br from-teal-400/35 to-cyan-400/35 rounded-full blur-lg animate-float animation-delay-2000"></div>
      <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-gradient-to-br from-rose-400/35 to-pink-400/35 rounded-full blur-lg animate-float animation-delay-4000"></div>
    </div>
  );
};

export default AnimatedBackground;