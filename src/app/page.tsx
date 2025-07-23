import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Gallery />
        <About />
        <ContactForm />
      </main>
      <footer className="py-8 border-t-2 border-foreground">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aryxn Designs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
