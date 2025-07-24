import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/context/CartContext';
import Script from 'next/script';
import FloatingCart from '@/components/FloatingCart';

export const metadata: Metadata = {
  title: 'Aryxn Designs',
  description: 'Creative Portfolio of Aryxn Designs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <CartProvider>
          {children}
          <FloatingCart />
        </CartProvider>
        <Toaster />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
