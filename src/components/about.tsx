"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-24 sm:py-32 border-t-2 border-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="grid md:grid-cols-5 gap-8 items-start px-4">
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">[ About Me ]</h2>
        </motion.div>
        <motion.div className="md:col-span-3" variants={itemVariants}>
          <p className="text-xl md:text-3xl font-bold leading-tight mb-8">
            I'm Aryxn, a designer obsessed with crafting raw, impactful visuals. My design ethos is simple: break rules, challenge conventions, and create work that demands attention. 
          </p>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            With a background in both graphic arts and user interface design, I strive to blend creativity with functionality to deliver products that are both engaging and effective. My toolkit is my playground, and I'm always pushing the boundaries of what's possible in digital design.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center text-lg font-bold text-primary group"
            whileHover="hover"
          >
            <span>Let's Collaborate</span>
            <motion.div variants={{ hover: { x: 10 } }} transition={{ type: 'spring', stiffness: 300 }}>
              <ArrowRight className="ml-2 h-5 w-5"/>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}