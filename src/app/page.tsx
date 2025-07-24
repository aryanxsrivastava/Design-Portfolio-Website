import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Hero from '@/components/hero';
import Shop from '@/components/shop';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Gallery />
        <About />
        <Shop />
        <ContactForm />
      </main>
      <footer className="py-8 border-t-2 border-foreground">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex justify-center gap-4 md:gap-8 mb-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/shipping-and-refund-policy" className="hover:text-primary transition-colors">Shipping & Refund Policy</Link>
          </div>
          <div className="flex justify-center items-center gap-4">
             <p>&copy; {new Date().getFullYear()} Aryxn Designs. All Rights Reserved.</p>
             <a href="https://www.instagram.com/aryxndesigns/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
