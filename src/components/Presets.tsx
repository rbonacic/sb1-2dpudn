import React from 'react';
import PresetCard from './PresetCard';
import type { Preset } from '../types';

const presets: Preset[] = [
  {
    id: 'preset-1',
    type: 'preset',
    title: 'Urban Moody',
    description: 'Perfect for city photography with a dramatic, moody atmosphere',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    price: 49,
    compatibility: ['Lightroom Mobile', 'Lightroom Desktop'],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80'
    }
  },
  {
    id: 'preset-2',
    type: 'preset',
    title: 'Nature Vibrant',
    description: 'Enhance outdoor shots with rich, vibrant colors',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    price: 39,
    compatibility: ['Lightroom Mobile', 'Lightroom Desktop', 'Capture One'],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80'
    }
  }
];

export default function Presets() {
  return (
    <section id="presets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Lightroom Presets</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your photos with our professional presets, crafted for both mobile and desktop editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {presets.map((preset) => (
            <PresetCard key={preset.id} preset={preset} />
          ))}
        </div>
      </div>
    </section>
  );
}