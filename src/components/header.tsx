"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dribbble, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      <div className="container flex h-16 items-center">
        <motion.div className="mr-4 flex" variants={navItemVariants}>
          <Link href="/" className="mr-6 flex items-center space-x-2">
             <span className="font-bold text-lg">Aryxn Designs</span>
          </Link>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-1">
            <motion.div variants={navItemVariants}>
              <Button variant="ghost" asChild>
                <Link href="#home">Home</Link>
              </Button>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Button variant="ghost" asChild>
                <Link href="#about">About</Link>
              </Button>
            </motion.div>
             <motion.div variants={navItemVariants}>
               <Button variant="ghost" asChild>
                <Link href="#work">Work</Link>
              </Button>
             </motion.div>
          </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden md:flex items-center space-x-1">
            <motion.div variants={navItemVariants}>
              <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Button variant="ghost" size="icon">
                  <Dribbble className="h-5 w-5" />
              </Button>
            </motion.div>
           </div>
            <motion.div variants={navItemVariants}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
