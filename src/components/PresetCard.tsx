import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Camera } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Preset } from '../types';

interface PresetCardProps {
  preset: Preset;
}

export default function PresetCard({ preset }: PresetCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg group"
    >
      <div className="relative aspect-video">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={preset.beforeAfter.before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white font-medium">Before</span>
            </div>
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={preset.beforeAfter.after}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white font-medium">After</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{preset.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{preset.description}</p>
          </div>
          <span className="text-xl font-bold">${preset.price}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Camera className="w-4 h-4" />
            <span>Compatible with: {preset.compatibility.join(', ')}</span>
          </div>

          <button
            onClick={() => addToCart(preset)}
            className="w-full bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}