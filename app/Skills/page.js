'use client';

import Navbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import { TECHNICAL_SKILLS } from '@/constants/constants';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from '@/components/split-text';
import { Code2, Globe, Layers, Wrench, Box, Grid3x3, ArrowRight } from 'lucide-react';
import SkillsCard from '@/components/skills-card';
import { ReliefCard } from '@/components/relief-card';

export default function SkillsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [isMobile, setIsMobile] = useState(false);

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
      id: "LANG_CORE",
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.webDevelopment,
      id: "WEB_STACK",
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.frameworks,
      id: "FW_LIBS",
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: TECHNICAL_SKILLS.tools,
      id: "DEV_TOOLS",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen relative bg-[#050505]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 glow-text">
              <SplitText text="Technical Skills" delay={50} />
            </h1>

            <motion.button
              onClick={() => setViewMode(viewMode === 'grid' ? 'card' : 'grid')}
              className="px-6 py-2 rounded-xl bg-[#0A0A0A] border border-white/5 hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/50 transition-all duration-300 font-mono text-xs uppercase tracking-widest flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {viewMode === 'grid' ? (
                <>
                  <Box className="w-4 h-4 text-[#3b82f6]" />
                  <span>VIEW_MODE: RELIEF_CARD</span>
                </>
              ) : (
                <>
                  <Grid3x3 className="w-4 h-4 text-[#3b82f6]" />
                  <span>VIEW_MODE: MATRIX_GRID</span>
                </>
              )}
            </motion.button>
          </div>

          <p className="text-muted-foreground font-mono text-sm sm:text-base md:text-lg">
            // MAPPING_FULL_STACK_CAPABILITIES.EXE
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid-view"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {skillCategories.map((category, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <ReliefCard
                    className="h-full min-h-[350px]"
                    dataText={`SKILL_ID: ${category.id} // LOAD: 100%`}
                    accentColor="#3b82f6"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-white/5 text-[#3b82f6] border border-white/5 group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-500">
                          {category.icon}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-[#3b82f6] transition-colors duration-300">
                          {category.title}
                        </h2>
                      </div>

                      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="font-mono text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 text-muted-foreground border border-white/5 hover:border-[#3b82f6]/30 hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                        <span className="font-mono text-[10px] text-muted-foreground/30 uppercase tracking-tighter">
                          ACCESSING_MODULE... OK
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-all duration-500">
                          <ArrowRight className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                      </div>
                    </div>
                  </ReliefCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="card-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center py-10"
            >
              <div className="w-full max-w-4xl">
                <SkillsCard skillCategories={skillCategories} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
