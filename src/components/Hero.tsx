import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Symmetrykal</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Where symmetry meets artistry in every frame
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Explore Collection
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}