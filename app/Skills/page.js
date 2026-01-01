'use client';

import Navbar from '@/components/navbar';
import React from 'react';
import { TECHNICAL_SKILLS } from '@/constants/constants';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import { Code2, Globe, Layers, Wrench } from 'lucide-react';

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.languages,
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.webDevelopment,
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.frameworks,
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.tools,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 glow-text">
            <SplitText text="My Skills" delay={50} />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card p-4 sm:p-5 md:p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-glow-blue">
                  {category.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  <SplitText text={category.title} delay={100 + index * 50} />
                </h2>
              </div>

              <motion.div
                className="flex flex-wrap gap-1.5 md:gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ staggerChildren: 0.05 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={badgeVariants}>
                    <Badge variant="secondary" className="text-xs sm:text-sm px-2 py-0.5">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
