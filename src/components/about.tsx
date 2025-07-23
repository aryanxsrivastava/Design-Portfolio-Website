import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-card border-y">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <Avatar className="h-40 w-40 border-4 border-primary/20 shadow-lg">
              <AvatarImage src="https://placehold.co/200x200.png" alt="Aryxn" data-ai-hint="designer portrait" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline mb-4 sm:text-4xl">About Aryxn</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              I'm Aryxn, a passionate designer with a keen eye for aesthetics and a love for creating intuitive, beautiful user experiences. My philosophy is rooted in the belief that great design is not just about looks, but about creating a seamless connection between people and technology. With a background in both graphic arts and user interface design, I strive to blend creativity with functionality to deliver products that are both engaging and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
