
"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
  size: 'A4' | 'A3';
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: 'A4' | 'A3') => void;
  updateQuantity: (id: string, size: 'A4' | 'A3', quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (itemToAdd: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === itemToAdd.id && item.size === itemToAdd.size
      );

      if (existingItem) {
        // Increase quantity if item with same size already in cart
        return prevCart.map(item =>
          item.id === itemToAdd.id && item.size === itemToAdd.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Add new item to cart
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });

    toast({
        title: `[ ${itemToAdd.title} (${itemToAdd.size}) ADDED ]`,
        description: "Item added to your cart.",
        variant: 'default',
        className: 'bg-primary text-primary-foreground border-2 border-primary-foreground font-bold',
    });
  };

  const removeFromCart = (id: string, size: 'A4' | 'A3') => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.size === size)));
    toast({
        title: `[ ITEM REMOVED ]`,
        description: "Item removed from your cart.",
    });
  };

  const updateQuantity = (id: string, size: 'A4' | 'A3', quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        (item.id === id && item.size === size) ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
