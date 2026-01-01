'use client';

import Navbar from '@/components/navbar';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PROJECTS, BOOKING } from '@/constants/constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import Link from 'next/link';
import MagneticElement from '@/components/magnetic-element';

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2 glow-text">
            <SplitText text="Projects" delay={50} />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 md:mt-4">
            Real solutions built for real challenges. See how I've leveraged AI and modern web technologies to solve complex problems and deliver measurable results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((proj, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full group hover:border-primary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative p-4 md:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {proj.name}
                    </CardTitle>
                    {proj.link && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 md:p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-blue hover:scale-110 flex-shrink-0"
                          >
                            <Github size={18} className="md:w-5 md:h-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View on GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                    {proj.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-[10px] md:text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative p-4 md:p-6">
                  {proj.description}
                </CardContent>
                
                <CardFooter className="text-[10px] sm:text-xs text-muted-foreground relative p-4 md:p-6">
                  {proj.date}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-12 md:mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Want Similar Results for Your Business?</h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Let's discuss how I can help you build custom software solutions that drive real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticElement strength={0.2}>
                <Link
                  href={BOOKING.calendly_link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-blue hover:scale-105 text-sm md:text-base font-semibold"
                >
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Link>
              </MagneticElement>
              
              <MagneticElement strength={0.2}>
                <Link
                  href="/Services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm md:text-base font-semibold"
                >
                  View All Services
                  <ArrowRight size={18} />
                </Link>
              </MagneticElement>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
