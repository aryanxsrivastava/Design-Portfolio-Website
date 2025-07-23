"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Design = {
  id: number;
  title: string;
  category: 'Photo Manipulation' | 'Graphic Design' | 'Digital Painting' | 'Concept Art' | 'Download Link' | 'Product Design';
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
  link: string;
};

const featuredDesigns: Design[] = [
  {
    id: 1,
    title: "Karan Aujla Wallpaper",
    category: "Download Link",
    imageUrl: "/images/wallpaper_aujla.png",
    imageWidth: 800,
    imageHeight: 600,
    aiHint: "karan aujla poster",
    link: "https://drive.google.com/file/d/1pfqKvHvifb-Z1bQjara1xV7P045t-8kv/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Karan Aujla Poster",
    category: "Graphic Design",
    imageUrl: "/images/02.png",
    imageWidth: 800,
    imageHeight: 600,
    aiHint: "vintage poster",
    link: "https://www.instagram.com/p/DMcHjj-TwS3/?igsh=MWh2OWVlcmt2YnE4"
  },
  {
    id: 3,
    title: "Phone Cases Design",
    category: "Product Design",
    imageUrl: "/images/cases_post.png",
    imageWidth: 800,
    imageHeight: 600,
    aiHint: "fantasy character",
    link: "https://www.instagram.com/p/CuT9i89Bvi4/?igsh=MXN3eWR5MzA0cGNzYg=="
  },
  {
    id: 4,
    title: "Music Typography Posters",
    category: "Graphic Design",
    imageUrl: "/images/typo_poster.png",
    imageWidth: 800,
    imageHeight: 600,
    aiHint: "scifi concept",
    link: "https://www.instagram.com/p/Cu1BUSDhjbp/?igsh=aXlzcG1qZXMzY2ty"
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }
};

const hoverVariants = {
  rest: {
    backgroundColor: "hsl(var(--background))",
    color: "hsl(var(--foreground))"
  },
  hover: {
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
    transition: { duration: 0.2 }
  }
};

export default function Gallery() {
  return (
    <motion.section
      id="work"
      className="py-24 sm:py-32 border-t-2 border-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="grid md:grid-cols-5 gap-8 items-start mb-16 px-4">
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold">[ Featured Work ]</h2>
        </motion.div>
        <motion.div className="md:col-span-3" variants={itemVariants}>
          <p className="text-2xl md:text-3xl font-bold leading-tight">
            A curated selection of projects that break the mold and leave a lasting impression.
          </p>
        </motion.div>
      </div>

      <motion.div className="flex flex-col" variants={sectionVariants}>
        {featuredDesigns.map((design, index) => (
          <motion.div key={design.id} variants={itemVariants}>
            <a
              href={design.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t-2 border-foreground group"
            >
              <motion.div
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 sm:p-8 gap-4"
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground group-hover:text-primary-foreground">
                    [ {String(index + 1).padStart(2, '0')} ]
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">
                    {design.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 md:gap-8 self-end md:self-center">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground">
                    {design.category}
                  </p>
                  <div className="w-16 h-16 sm:w-24 sm:h-24 relative overflow-hidden hidden md:block">
                    <Image
                      src={design.imageUrl}
                      alt={design.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={design.aiHint}
                      className="transform scale-150 transition-transform duration-300 group-hover:scale-100"
                    />
                  </div>
                  <motion.div
                    initial={{ rotate: -45, scale: 1 }}
                    whileHover={{ rotate: 0, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="hidden sm:block"
                  >
                    <ArrowRight className="h-10 w-10" />
                  </motion.div>
                </div>
              </motion.div>
            </a>
          </motion.div>
        ))}
        <div className="border-t-2 border-b-2 border-foreground"></div>
      </motion.div>
    </motion.section>
  );
}
