import Header from '@/components/header';
import Gallery from '@/components/gallery';
import About from '@/components/about';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Gallery />
        <About />
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
