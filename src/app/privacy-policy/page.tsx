
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8">[ Privacy Policy ]</h1>
          <div className="prose prose-invert lg:prose-xl space-y-6 text-muted-foreground">
            <p><strong>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
            
            <p>Welcome to Aryxn Designs. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this website.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Personal Information We Collect ]</h2>
            <p>When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your email address. We refer to this information as “Order Information.”</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ How Do We Use Your Personal Information? ]</h2>
            <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information and providing you with an order confirmation). Additionally, we use this Order Information to:</p>
            <ul>
                <li>Communicate with you;</li>
                <li>Screen our orders for potential risk or fraud; and</li>
                <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Sharing Your Personal Information ]</h2>
            <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Razorpay to power our online store—you can read more about how Razorpay uses your Personal Information here: [Link to Razorpay Privacy Policy].</p>
            <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Your Rights ]</h2>
            <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Data Retention ]</h2>
            <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

            <h2 className="text-2xl font-bold text-foreground pt-4">[ Changes ]</h2>
            <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
            
            <h2 className="text-2xl font-bold text-foreground pt-4">[ Contact Us ]</h2>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at aryan.srivastava101203@gmail.com or by using the contact form on our website.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
