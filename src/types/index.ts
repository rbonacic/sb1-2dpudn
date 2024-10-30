export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  type: 'print' | 'preset';
}

export interface Print extends Product {
  type: 'print';
  quote: string;
}

export interface Preset extends Product {
  type: 'preset';
  compatibility: string[];
  beforeAfter: {
    before: string;
    after: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
  clearCart: () => void;
}