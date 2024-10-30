import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Print } from '../types';

const prints: Print[] = [
  {
    id: '1',
    title: 'Symmetrical Serenity',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    quote: "In nature's mirror, we find perfect balance",
    price: 299
  },
  {
    id: '2',
    title: 'Urban Reflections',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    quote: "Cities are poems written in steel and glass",
    price: 349
  },
  {
    id: '3',
    title: 'Geometric Dreams',
    image: 'https://images.unsplash.com/photo-1460411794035-42aac080490a',
    quote: "Where mathematics meets art, beauty emerges",
    price: 399
  }
];

export default function Gallery() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prints.map((print) => (
          <motion.div
            key={print.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={print.image}
                alt={print.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => addToCart(print)}
                  className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-medium text-gray-900">{print.title}</h3>
              <p className="text-gray-500 italic">&quot;{print.quote}&quot;</p>
              <p className="text-lg font-semibold">${print.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}