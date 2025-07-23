import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Dribbble, Github, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Hey, I'm Aryxn
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-8">
            I'm a Photoshop Designer
          </p>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
            I create visually stunning photo manipulations, digital paintings, and graphics that tell a story.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 mb-8">
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
          <div className="flex justify-center md:justify-start gap-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#work">My Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto md:max-w-none h-auto">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <Image 
                src="https://placehold.co/500x500.png" 
                alt="Aryxn's Portrait"
                width={500}
                height={500}
                objectFit="cover"
                data-ai-hint="designer portrait" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
