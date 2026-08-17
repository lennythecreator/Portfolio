'use client';

import Navbar from '@/components/navbar';
import React from 'react';
import { EXPERIENCE, EDUCATION } from '@/constants/constants';
import { Briefcase, GraduationCap, Guitar, Palette, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import { ReliefCard } from '@/components/relief-card';

export default function AboutPage() {
  const backGround =
    "I'm a software engineer with a diverse background in different areas of application development. I graduated from Morgan State University with a degree in Computer Science, specializing in Machine Learning. My work focuses on integrating ML models into applications for practical use, building custom web solutions, and helping non-technical founders deploy their AI-generated apps.";

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
    <div className="min-h-screen relative bg-[#050505]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 glow-text break-words">
            <SplitText text="Lenny Uwaeme" delay={30} />
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 font-mono">
            <span className="text-[#3b82f6]">{"//"}</span>
            <span>SOFTWARE_ENGINEER</span>
            <span className="text-muted-foreground/30 px-2">|</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> DMV area</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 md:mb-24"
        >
          <ReliefCard
            showGeo={true}
            showDataStrip={true}
            dataText="BIO_CORE_v1.0 // FOCUS: ML.WEB.ARCHITECTURE"
            className="md:p-12"
          >
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <span className="text-[#3b82f6]">./</span>About_Me
              </h2>
              <p className="font-mono text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-3xl">
                {backGround}
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 w-fit">
                <div className="flex gap-2">
                  <Guitar className="text-[#3b82f6] w-5 h-5" />
                  <Palette className="text-[#3b82f6] w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm font-mono text-foreground">
                  FUN_FACT: I play the guitar and love to draw.
                </p>
              </div>
            </div>
          </ReliefCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <span className="text-[#3b82f6]">./</span>Experience_
          </h2>

          <motion.div
            className="relative border-l-2 border-[#3b82f6]/20 py-2 sm:pl-6 md:pl-10 ml-4 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {EXPERIENCE.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute -left-[41px] sm:-left-[41px] md:-left-[57px] top-6 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#3b82f6] border-4 border-background shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20" />

                <ReliefCard
                  showGeo={false}
                  showDataStrip={true}
                  dataText={`EXP_LOG: 00${index + 1} // AUTH: ${exp.company.split(' ')[0].toUpperCase()}`}
                  className="rounded-[30px] p-6 sm:p-8"
                  accentColor="#3b82f6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#3b82f6] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50 font-mono italic">
                        <Calendar size={12} /> {exp.date}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#3b82f6] font-mono text-sm tracking-tight">
                      <Briefcase size={14} /> {exp.company}
                      <span className="text-muted-foreground/30">•</span>
                      <span className="text-xs text-muted-foreground/60">{exp.location}</span>
                    </div>

                    <p className="font-mono text-sm text-muted-foreground/70 leading-relaxed mt-2">
                      {exp.responsibilities}
                    </p>
                  </div>
                </ReliefCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
