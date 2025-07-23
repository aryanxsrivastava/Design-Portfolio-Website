import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dribbble, Github, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
             <span className="font-bold text-lg">Aryxn Designs</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link href="#home">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#about">About</Link>
            </Button>
             <Button variant="ghost" asChild>
              <Link href="#work">Work</Link>
            </Button>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Dribbble className="h-5 w-5" />
            </Button>
           </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Contact Me</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
