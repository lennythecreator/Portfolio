'use client';

import Navbar from '@/components/navbar';
import React from 'react';
import { EXPERIENCE, EDUCATION } from '@/constants/constants';
import { Briefcase, GraduationCap, Guitar, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const backGround =
    "I'm a freelance software engineer with a diverse background in different areas of application development. I graduated from Morgan State University with a degree in Computer Science, specializing in Machine Learning. My work focuses on integrating ML models into applications for practical use, building custom web solutions for small businesses, and helping non-technical founders deploy their AI-generated apps.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 glow-text break-words overflow-wrap-anywhere">
            <SplitText text="Chukwulenyeudo (Lenny) Uwaeme" delay={30} />
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 flex-wrap">
            <Briefcase className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base break-words">
              <strong className="text-foreground">Freelance Software Engineer</strong> | DMV Area
            </p>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <Card className="border-primary/20">
            <CardHeader className="p-4 sm:p-5 md:p-6">
              <CardTitle className="text-xl sm:text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 p-4 sm:p-5 md:p-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{backGround}</p>
              <div className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="flex gap-1.5 md:gap-2 mt-1 flex-shrink-0">
                  <Guitar className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  <Palette className="text-primary w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs sm:text-sm text-foreground break-words">
                  <strong>Fun fact:</strong> I play the guitar and love to draw in my free time.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <Briefcase className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            <SplitText text="Experience" delay={50} />
          </h2>

          <motion.div
            className="relative border-l-2 border-primary/30 pl-6 sm:pl-6 md:pl-8 ml-2 space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {EXPERIENCE.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute -left-[29px] sm:-left-[29px] md:-left-[33px] top-0 w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-primary border-2 sm:border-2 md:border-4 border-background shadow-glow-blue" />

                <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                  <CardHeader className="p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col gap-1.5 md:gap-2 mb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <CardTitle className="text-base sm:text-lg md:text-xl break-words">
                          <SplitText text={exp.title} delay={100 + index * 30} />
                        </CardTitle>
                        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">{exp.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-primary font-medium text-sm md:text-base flex-wrap">
                      <span className="break-words">{exp.company}</span>
                      <span className="text-muted-foreground hidden sm:inline">•</span>
                      <span className="text-xs sm:text-sm text-muted-foreground break-words">{exp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                      {exp.responsibilities}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
