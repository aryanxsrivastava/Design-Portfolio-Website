
'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '@/context/CartContext';

export default function FloatingCart() {
  const { cart } = useContext(CartContext);
  const pathname = usePathname();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Don't show the cart on the cart or payment success pages
  if (pathname === '/cart' || pathname === '/payment-success') {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="/cart">
        <div className="relative flex items-center justify-center h-16 w-16 bg-primary rounded-full shadow-lg border-2 border-primary-foreground">
          <ShoppingCart className="h-8 w-8 text-primary-foreground" />
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold border-2 border-primary"
            >
              {totalItems}
            </motion.span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
