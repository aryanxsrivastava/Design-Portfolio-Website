
'use client';

import { useContext, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CartContext, CartItem } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


declare const window: any;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }


  const sendOrderEmails = async (customerEmail: string, orderCart: CartItem[], paymentId: string) => {
    const totalInRupees = (total * 80).toFixed(2);
    const itemsList = orderCart.map(item => 
        `- ${item.title} | Size: ${item.size} | Quantity: ${item.quantity} | Price: ₹${(item.price * 80).toFixed(2)}`
      ).join('\n');

    const emailSubject = `Order Confirmation #${paymentId.slice(-6)}`;
    const emailBody = `
Thank you for your order!

This email confirms your purchase. As the designs are digital, you should receive a separate email with download links shortly. If you have any questions, please reply to this email.

---
ORDER SUMMARY
---
Payment ID: ${paymentId}
Customer Email: ${customerEmail}

Items:
${itemsList}

Total: ₹${totalInRupees}
---

Thank you for supporting Aryxn Designs.
    `;
    
    try {
      if(formRef.current) {
        const formData = {
            'form-name': 'order-confirmation',
            'email': customerEmail,
            'subject': emailSubject,
            'message': emailBody,
        };
        
         await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode(formData)
        });
      }
    } catch (error) {
      console.error("Failed to send order email via Netlify forms:", error);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const makePayment = async () => {
    if (total <= 0) {
      toast({
        title: '[ ERROR ]',
        description: 'Your cart is empty.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      toast({
        title: '[ CONFIG ERROR ]',
        description: 'Razorpay Key ID is not configured. Please contact support.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total * 80 * 100, // Amount in paise
          currency: 'INR',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create order');
      }

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Aryxn Designs',
        description: 'Design Purchase',
        order_id: order.id,
        handler: async function (response: any) {
          await sendOrderEmails(email, cart, response.razorpay_payment_id);
          clearCart();
          router.push(`/payment-success?paymentId=${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: email,
        },
        theme: {
          color: '#FBBF24',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on('payment.failed', function (response: any) {
        toast({
          title: '[ PAYMENT FAILED ]',
          description: `Error: ${response.error.description}`,
          variant: 'destructive',
        });
      });

    } catch (error) {
      console.error(error);
      toast({
        title: '[ ERROR ]',
        description: 'Something went wrong with the payment process.',
        variant: 'destructive',
      });
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Hidden Netlify form for order confirmation */}
        <form name="order-confirmation" ref={formRef} data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="order-confirmation" />
            <p className="hidden">
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            <input type="email" name="email" />
            <input type="text" name="subject" />
            <textarea name="message"></textarea>
        </form>

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 bg-background border-b-2 border-l-2 border-r-2 border-foreground">
            <Link href="/" className="font-bold text-xl md:text-2xl px-4">
              @AryxnDesigns
            </Link>
             <Link href="/" className="font-bold uppercase px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Site
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-5xl md:text-7xl font-bold uppercase mb-12" variants={itemVariants}>
                [ Your Cart ]
            </motion.h1>

            {cart.length === 0 ? (
                <motion.div variants={itemVariants} className="border-y-2 border-foreground py-16 text-center">
                    <p className="text-2xl mb-4">Your cart is empty.</p>
                    <Link href="/#shop">
                        <Button className="w-full md:w-auto bg-primary text-primary-foreground rounded-none border-2 border-primary-foreground hover:bg-foreground hover:text-background font-bold text-lg py-6">
                            [ BROWSE DESIGNS ]
                        </Button>
                    </Link>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div className="lg:col-span-2 space-y-4" variants={containerVariants}>
                        {cart.map(item => (
                            <motion.div key={`${item.id}-${item.size}`} className="flex items-start gap-4 border-2 border-foreground p-4" variants={itemVariants}>
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 aspect-square">
                                    <Image 
                                        src={item.imageUrl} 
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="bg-muted"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-xl sm:text-2xl font-bold uppercase">{item.title}</h2>
                                    <p className="text-sm text-muted-foreground mb-2">[ SIZE: {item.size} ]</p>
                                    <p className="text-lg font-bold text-primary">₹{(item.price * 80).toFixed(2)}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Button size="icon" variant="outline" className="rounded-none h-8 w-8 border-foreground" onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <Input
                                            type="number"
                                            readOnly
                                            value={item.quantity}
                                            className="w-16 h-8 text-center bg-transparent border-y-2 border-x-0 border-foreground rounded-none focus-visible:ring-0"
                                        />
                                        <Button size="icon" variant="outline" className="rounded-none h-8 w-8 border-foreground" onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <Button size="icon" variant="ghost" className="rounded-none h-8 w-8 hover:bg-destructive" onClick={() => removeFromCart(item.id, item.size)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className="lg:col-span-1" variants={itemVariants}>
                        <div className="border-2 border-foreground p-6 sticky top-32">
                            <h2 className="text-3xl font-bold uppercase mb-6">[ SUMMARY ]</h2>
                            <div className="flex justify-between items-center text-lg border-b-2 border-foreground pb-4 mb-4">
                                <span>Subtotal</span>
                                <span>₹{(total * 80).toFixed(2)}</span>
                            </div>
                             <div className="flex justify-between items-center text-lg font-bold mb-6">
                                <span>Total</span>
                                <span>₹{(total * 80).toFixed(2)}</span>
                            </div>

                             <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="font-bold text-lg">[ EMAIL ]</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        className="bg-transparent border-2 border-foreground rounded-none focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground mt-2"
                                    />
                                </div>
                                <Button
                                    className="w-full bg-primary text-primary-foreground rounded-none border-2 border-primary-foreground hover:bg-foreground hover:text-background font-bold text-lg py-6 disabled:bg-muted disabled:text-muted-foreground disabled:border-muted-foreground disabled:cursor-not-allowed"
                                    onClick={makePayment}
                                    disabled={!validateEmail(email)}
                                >
                                    PROCEED TO PAYMENT
                                </Button>
                            </div>

                            <p className="text-xs text-muted-foreground mt-4 text-center">Shipping and taxes calculated at checkout (not really, this is a demo).</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </motion.div>
      </main>
    </div>
  );
}
