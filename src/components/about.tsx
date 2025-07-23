import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 items-center gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                    src="https://placehold.co/400x500.png" 
                    alt="Aryxn" 
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="designer portrait" 
                    className="transform transition-transform duration-500 hover:scale-105"
                />
            </div>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-4xl font-headline font-bold mb-4 sm:text-5xl lg:text-6xl text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm Aryxn, a passionate designer with a keen eye for aesthetics and a love for creating intuitive, beautiful user experiences. My philosophy is rooted in the belief that great design is not just about looks, but about creating a seamless connection between people and technology. With a background in both graphic arts and user interface design, I strive to blend creativity with functionality to deliver products that are both engaging and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
