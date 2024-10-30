import React, { useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Symmetrykal</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="text-gray-600 hover:text-black transition-colors">Gallery</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
            
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}