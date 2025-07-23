import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Hero from '@/components/hero';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <Separator className="my-12 md:my-24 bg-border/20" />
        <About />
        <Separator className="my-12 md:my-24 bg-border/20" />
        <ContactForm />
      </main>
      <footer className="bg-background py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aryxn Designs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
