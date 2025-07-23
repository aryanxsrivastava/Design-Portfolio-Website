"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] } }
}

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.5
    }
  })
}

const NavLink = ({ href, children, i, onClick }: { href: string, children: React.ReactNode, i: number, onClick?: () => void }) => (
  <motion.div variants={navItemVariants} custom={i}>
    <Link href={href} className="font-bold uppercase px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200" onClick={onClick}>
      {children}
    </Link>
  </motion.div>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 bg-background border-b-2 border-l-2 border-r-2 border-foreground">
            <motion.div variants={navItemVariants} custom={0}>
              <Link href="/" className="font-bold text-xl md:text-2xl uppercase px-4">
                Aryxn Designs
              </Link>
            </motion.div>
            <nav className="hidden md:flex items-center border-l-2 border-foreground h-full">
              <NavLink href="#work" i={1} />
              <NavLink href="#about" i={2} />
              <NavLink href="#contact" i={3} />
            </nav>
            <div className="md:hidden px-4">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Menu className="h-8 w-8 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button onClick={toggleMenu} className="absolute top-8 right-8 focus:outline-none">
              <X className="h-10 w-10 text-foreground" />
            </button>
            <nav className="flex flex-col items-center text-center gap-8">
              <motion.a href="#work" onClick={closeMenu} className="font-bold uppercase text-4xl" variants={mobileLinkVariants} initial="hidden" animate="visible" custom={1}>Work</motion.a>
              <motion.a href="#about" onClick={closeMenu} className="font-bold uppercase text-4xl" variants={mobileLinkVariants} initial="hidden" animate="visible" custom={2}>About</motion.a>
              <motion.a href="#contact" onClick={closeMenu} className="font-bold uppercase text-4xl" variants={mobileLinkVariants} initial="hidden" animate="visible" custom={3}>Contact</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}