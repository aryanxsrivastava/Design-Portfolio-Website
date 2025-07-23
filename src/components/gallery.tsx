
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

type Design = {
  id: number;
  title: string;
  category: 'Photo Manipulation' | 'Graphic Design' | 'Digital Painting' | 'Concept Art';
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
};

const featuredDesigns: Design[] = [
  { id: 1, title: "Surreal Dreamscape", category: "Photo Manipulation", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "surreal dreamscape" },
  { id: 2, title: "Vintage Movie Poster", category: "Graphic Design", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "vintage poster" },
  { id: 3, title: "Fantasy Character", category: "Digital Painting", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "fantasy character" },
  { id: 4, title: "Sci-Fi Concept Art", category: "Concept Art", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "scifi concept" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default function Gallery() {

  return (
    <motion.section 
      id="work" 
      className="py-12 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A selection of projects that showcase my passion for creating elegant and effective designs.
          </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
          {featuredDesigns.map((design) => (
             <motion.div
              key={design.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
             >
              <div className="group relative bg-card p-4 rounded-lg border border-border shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                <div className="overflow-hidden rounded-md mb-4 aspect-video">
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={design.imageWidth}
                    height={design.imageHeight}
                    data-ai-hint={design.aiHint}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{design.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{design.category}</p>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </motion.section>
  );
}
