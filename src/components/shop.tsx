
"use client";

import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { CartContext, type CartItem } from '@/context/CartContext';
import Image from 'next/image';

type ShopItemType = Omit<CartItem, 'size' | 'quantity'>;

const shopItems: ShopItemType[] = [
  {
    id: 'design-1',
    title: "Karan Aujla Poster",
    price: 1.25,
    imageUrl: "/images/aujla_poster.png",
    imageWidth: 800,
    imageHeight: 800,
    aiHint: "abstract design"
  },
  {
    id: 'design-2',
    title: "Oppenheimer Movie Concept Poster",
    price: 1.25,
    imageUrl: "/images/opp_b_w.png",
    imageWidth: 800,
    imageHeight: 800,
    aiHint: "skull art"
  },
  {
    id: 'design-3',
    title: "The Weeknd Poster",
    price: 1.25,
    imageUrl: "/images/dancinginflames.png",
    imageWidth: 800,
    imageHeight: 800,
    aiHint: "retro poster"
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function ShopItemCard({ item }: { item: ShopItemType }) {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState<'A4' | 'A3'>('A4');
  
  const handleAddToCart = () => {
    addToCart({ ...item, size: selectedSize, quantity: 1 });
  };

  return (
    <motion.div className="border-2 border-foreground p-4 flex flex-col" variants={itemVariants}>
      <div className="relative w-full h-96 mb-4">
        <Image 
          src={item.imageUrl} 
          alt={item.title}
          layout="fill"
          objectFit="contain"
          data-ai-hint={item.aiHint}
          className="bg-muted"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold uppercase mb-2">{item.title}</h3>
        <p className="text-primary text-xl font-bold mb-4">₹{(item.price * 80).toFixed(2)}</p>
      </div>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full bg-primary text-primary-foreground rounded-none border-2 border-primary-foreground hover:bg-foreground hover:text-background font-bold text-lg py-6 mt-4">
            ADD TO CART
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-background border-foreground border-2 rounded-none">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-bold text-2xl">[ SELECT SIZE ]</AlertDialogTitle>
            <AlertDialogDescription>
              Choose the printable version for "{item.title}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <RadioGroup defaultValue="A4" onValueChange={(value: 'A4' | 'A3') => setSelectedSize(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="A4" id={`a4-${item.id}`} className="border-foreground text-primary focus:ring-primary" />
                <Label htmlFor={`a4-${item.id}`} className="text-lg">[ A4 ] Standard Print Size</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="A3" id={`a3-${item.id}`} className="border-foreground text-primary focus:ring-primary"/>
                <Label htmlFor={`a3-${item.id}`} className="text-lg">[ A3 ] Large Poster Size</Label>
              </div>
            </RadioGroup>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-none bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAddToCart} className="rounded-none bg-primary text-primary-foreground border-2 border-primary-foreground hover:bg-foreground hover:text-background">
              Confirm & Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}


export default function Shop() {
  return (
    <motion.section 
      id="shop" 
      className="py-24 sm:py-32 border-t-2 border-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">[ Shop ]</h2>
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          Purchase high-resolution printable designs.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {shopItems.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </motion.section>
  );
}
