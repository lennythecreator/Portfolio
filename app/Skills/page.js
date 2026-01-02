'use client';

import Navbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import { TECHNICAL_SKILLS } from '@/constants/constants';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from '@/components/split-text';
import { Code2, Globe, Layers, Wrench, Box, Grid3x3 } from 'lucide-react';
import SkillsCard from '@/components/skills-card';

export default function SkillsPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'card'
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.languages,
      color: '#3B82F6', // blue
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.webDevelopment,
      color: '#10B981', // green
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.frameworks,
      color: '#8B5CF6', // purple
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.tools,
      color: '#F59E0B', // amber
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

  const toggleView = () => {
    setViewMode(viewMode === 'grid' ? 'card' : 'grid');
  };

  const handleKeyPress = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleView();
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3 md:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold glow-text break-words">
              <SplitText text="My Skills" delay={50} />
            </h1>
            
            {/* View Toggle Button */}
            <motion.button
              onClick={toggleView}
              onKeyPress={handleKeyPress}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow text-sm font-medium group min-h-[44px] w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${viewMode === 'grid' ? 'Card' : 'Grid'} view`}
            >
              {viewMode === 'grid' ? (
                <>
                  <Box className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                  <span>Card View</span>
                </>
              ) : (
                <>
                  <Grid3x3 className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                  <span>Grid View</span>
                </>
              )}
            </motion.button>
          </div>
          
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        {/* View Container with Transitions */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <motion.div
                className="contents"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-card p-4 sm:p-5 md:p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="p-2 md:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-glow-blue flex-shrink-0">
                        {category.icon}
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold break-words">
                        <SplitText text={category.title} delay={100 + index * 50} />
                      </h2>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2 md:gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ staggerChildren: 0.05 }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} variants={badgeVariants}>
                          <Badge variant="secondary" className="text-xs sm:text-sm px-2.5 py-1 break-words">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="card-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsCard skillCategories={skillCategories} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
