import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-[80vh] min-h-[500px] bg-secondary/20">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-5xl font-headline font-bold sm:text-7xl lg:text-8xl text-primary">
          Design That Inspires
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Crafting beautiful and intuitive digital experiences. Blending creativity with functionality to build products that people love.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#work">Explore My Work</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
             <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
