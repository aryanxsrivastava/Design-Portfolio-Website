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
      <div className="grid md:grid-cols-5 gap-8 items-center px-4">
        
        {/* Image */}
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <img 
            src="/images/profile.jpeg" 
            alt="Aryxn"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="md:col-span-3" variants={itemVariants}>
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">[ About Me ]</h2>
          <p className="text-xl md:text-3xl font-bold leading-tight mb-6">
            I’m Aryxn — a visual designer passionate about creating bold, impactful work that breaks convention.
          </p>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            I blend graphic design and UI principles to craft memorable digital experiences.
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
