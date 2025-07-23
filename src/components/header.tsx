"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { type: "spring", stiffness: 100, damping: 15, delay: 1 } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { delay: 1 + i * 0.1, type: "spring", stiffness: 100 }
  }),
};

const NavLink = ({ href, children, i }: { href: string, children: React.ReactNode, i: number }) => (
  <motion.div variants={navItemVariants} custom={i}>
    <Link href={href} className="font-bold uppercase px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
      {children}
    </Link>
  </motion.div>
)

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 bg-background border-b-2 border-l-2 border-r-2 border-foreground">
          <motion.div variants={navItemVariants} custom={0}>
            <Link href="/" className="font-bold text-2xl uppercase px-4">
              Aryxn Designs
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center border-l-2 border-foreground h-full">
            <NavLink href="#work" i={1}>Work</NavLink>
            <NavLink href="#about" i={2}>About</NavLink>
            <NavLink href="#contact" i={3}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
