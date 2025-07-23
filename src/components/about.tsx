"use client";

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
        <motion.div 
          className="relative aspect-square rounded-lg overflow-hidden shadow-2xl mx-auto max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <Image 
                src="https://placehold.co/400x400.png" 
                alt="Aryxn" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="designer portrait" 
                className="transform transition-transform duration-500 hover:scale-105"
            />
        </motion.div>
        <div className="text-center md:text-left">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm Aryxn, a passionate designer with a keen eye for aesthetics and a love for creating intuitive, beautiful user experiences. My philosophy is rooted in the belief that great design is not just about looks, but about creating a seamless connection between people and technology. With a background in both graphic arts and user interface design, I strive to blend creativity with functionality to deliver products that are both engaging and effective.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">Download CV</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
