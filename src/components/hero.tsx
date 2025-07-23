"use client";

import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const textVariant = (delay: number) => ({
    hidden: { y: "100%", skewY: 10 },
    visible: {
        y: 0,
        skewY: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay
        }
    }
})

const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1,
            ease: "circOut",
            delay: 1.2
        }
    }
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen pt-24"
    >
      <motion.div 
        className="w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
      >
        <div className="font-bold uppercase text-[8vw] md:text-[10vw] leading-none tracking-tighter">
            <div className="overflow-hidden">
                 <motion.h1 variants={textVariant(0)}>Photoshop</motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant(0.2)}>Designer &</motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1 variants={textVariant(0.4)} className="text-primary">Digital Artist</motion.h1>
            </div>
        </div>
        <motion.div 
          className="h-0.5 bg-foreground mx-auto mt-8"
          style={{ width: "80%"}}
          variants={lineVariant}
        />
        <motion.p
            className="mt-8 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
        >
            [ Crafting raw, unapologetic visuals that demand attention ]
        </motion.p>
      </motion.div>
    </section>
  );
}
