import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../context/CartContext';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Checkout() {
  const { items, total } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make a call to your backend to create a Stripe session
    // For demo purposes, we'll just show the cart contents
    console.log('Checkout items:', items);
    console.log('Total:', total);

    // The actual implementation would redirect to Stripe:
    // const { sessionId } = await createStripeSession(items);
    // await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
    >
      Checkout (${total})
    </button>
  );
}