import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Presets from './components/Presets';
import AdminPresets from './components/AdminPresets';

function App() {
  // In a real app, you'd check for admin authentication here
  const isAdmin = true;

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Gallery />
        <Presets />
        {isAdmin && <AdminPresets />}
      </div>
    </CartProvider>
  );
}

export default App;