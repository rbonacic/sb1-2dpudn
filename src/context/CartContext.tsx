import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Product, CartItem, CartContextType } from '../types';

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems(current => {
      const existingItem = current.find(item => item.product.id === product.id);
      if (existingItem) {
        return current.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems(current => current.filter(item => item.product.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems(current =>
      current.map(item =>
        item.product.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  }, []);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, updateQuantity, total }),
    [items, addToCart, removeFromCart, updateQuantity, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}