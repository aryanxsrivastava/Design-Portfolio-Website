"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Dribbble, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      className="py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            Hey, I'm Aryxn
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-primary mb-8"
            variants={itemVariants}
          >
            I'm a Photoshop Designer
          </motion.p>
          <motion.p 
            className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            I create visually stunning photo manipulations, digital paintings, and graphics that tell a story.
          </motion.p>
          <motion.div 
            className="flex justify-center md:justify-start items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Dribbble className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div className="flex justify-center md:justify-start gap-4" variants={itemVariants}>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#work">My Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="relative w-full max-w-sm mx-auto md:max-w-none h-auto"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }
          }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
}
