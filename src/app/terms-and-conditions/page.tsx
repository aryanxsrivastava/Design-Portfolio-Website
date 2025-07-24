
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8">[ Terms & Conditions ]</h1>
          <div className="prose prose-invert lg:prose-xl space-y-6 text-muted-foreground">
            <p><strong>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
            
            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website (the "Service") operated by Aryxn Designs ("us", "we", or "our").</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Acceptance of Terms ]</h2>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Purchases ]</h2>
            <p>If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your email address. All payments are processed through Razorpay.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Content ]</h2>
            <p>All designs, graphics, and content on this Service are the property of Aryxn Designs. The purchase of a design grants you a license for personal use only. You may not resell, redistribute, or use the designs for commercial purposes without explicit permission.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Disclaimer ]</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Governing Law ]</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Changes ]</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Contact Us ]</h2>
            <p>If you have any questions about these Terms, please contact us at aryan.srivastava101203@gmail.com.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
