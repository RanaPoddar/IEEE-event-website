'use client';
import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#262626] text-white">
        <div className="flex flex-col items-center space-y-6">
          {/* Spinning Gear Animation */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-[#F4A261] border-[#333333]"></div>
            <div className="absolute inset-2 animate-spin-slow rounded-full border-4 border-t-[#333333] border-[#F4A261]"></div>
          </div>

          {/* Loading Text */}
          <p className="text-lg font-semibold tracking-wide animate-pulse">
            Loading Engineering Insights...
          </p>
        </div>
      </div>
    );
  }

  // Render the actual content after loading
  return null; // Or replace with your main content
};

export default Loading;