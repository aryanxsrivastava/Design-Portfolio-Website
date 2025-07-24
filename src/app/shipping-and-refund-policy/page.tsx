
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShippingAndRefundPolicyPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8">[ Shipping & Refund Policy ]</h1>
          <div className="prose prose-invert lg:prose-xl space-y-6 text-muted-foreground">
            <p><strong>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Shipping Policy ]</h2>
            <p>All products sold on Aryxn Designs are digital and delivered electronically. After a successful purchase, you will receive an email containing a download link for your purchased design(s).</p>
            <p>There are no physical goods shipped and therefore no shipping costs.</p>
            <p>If you do not receive your download email within one hour of your purchase, please check your spam folder and then contact us at aryan.srivastava101203@gmail.com with your order details.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Refund Policy ]</h2>
            <p>Due to the digital nature of our products, all sales are final. We do not offer refunds or exchanges once a purchase has been made and the digital file has been delivered.</p>
            <p>We encourage you to review the product descriptions carefully before making a purchase.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Issues with Files ]</h2>
            <p>If you encounter any issues with downloading or using your files, please contact us immediately at aryan.srivastava101203@gmail.com. We are committed to ensuring you are satisfied with your purchase and will work with you to resolve any technical problems.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Contact Us ]</h2>
            <p>If you have any questions about our Shipping & Refund Policy, please contact us at aryan.srivastava101203@gmail.com.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
