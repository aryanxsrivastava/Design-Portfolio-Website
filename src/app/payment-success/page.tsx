
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId');

  return (
     <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 bg-background border-b-2 border-l-2 border-r-2 border-foreground">
            <Link href="/" className="font-bold text-xl md:text-2xl px-4">
              @AryxnDesigns
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          className="w-full max-w-2xl text-center border-2 border-foreground p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          </motion.div>
          <motion.h1 className="text-4xl md:text-6xl font-bold uppercase mb-4" variants={itemVariants}>
            [ Payment Successful ]
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg mb-8" variants={itemVariants}>
            Thank you for your purchase. Your printable designs are on their way (not really, this is a demo).
          </motion.p>
          {paymentId && (
            <motion.div className="bg-muted text-muted-foreground p-4 mb-8 border border-foreground" variants={itemVariants}>
              <p className="font-bold">[ PAYMENT ID ]</p>
              <p className="break-all font-mono text-sm">{paymentId}</p>
            </motion.div>
          )}
          <motion.div variants={itemVariants}>
            <Link href="/">
              <Button className="w-full md:w-auto bg-primary text-primary-foreground rounded-none border-2 border-primary-foreground hover:bg-foreground hover:text-background font-bold text-lg py-6">
                BACK TO SITE
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}


export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    )
}
