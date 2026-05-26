'use client';

import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { PROJECTS, BOOKING } from '@/constants/constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import Link from 'next/link';
import MagneticElement from '@/components/magnetic-element';
import EmailModal from '@/components/email-modal';
import { ReliefCard } from '@/components/relief-card';

export default function ProjectsPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
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
    <div className="min-h-screen relative bg-[#050505]">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 glow-text break-words">
            <SplitText text="Projects" delay={50} />
          </h1>
          <p className="text-muted-foreground font-mono text-sm sm:text-base md:text-lg mt-4 max-w-2xl">
            {"// SOLUTIONS_DRIVEN_BY_AI_AND_ENGINEERING.EXE"}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map((proj, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <ReliefCard
                className="h-full min-h-[400px]"
                dataText={`PROJECT_ID: ${proj.name.substring(0, 3).toUpperCase()} // ${proj.date.toUpperCase()}`}
                accentColor="#3b82f6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold group-hover:text-[#3b82f6] transition-colors duration-300 break-words leading-none">
                      {proj.name}
                    </h2>
                    {proj.link && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 hover:bg-[#3b82f6] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-110 flex-shrink-0 flex items-center justify-center group/btn"
                          >
                            <Github size={20} className="text-white" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View on GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow">
                    <p className="font-mono text-sm text-muted-foreground/70 leading-relaxed mb-8">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest">
                      {proj.date}
                    </span>
                    <div className="flex items-center gap-2 text-[#3b82f6] font-mono text-xs group-hover:translate-x-1 transition-transform">
                      VIEW_DETAILS <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </ReliefCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-24"
        >
          <div className="bg-[#0A0A0A] border border-white/5 shadow-2xl rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden group">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want Similar Results?</h3>
            <p className="text-muted-foreground font-mono text-sm md:text-base mb-8 italic">
              &quot;Building custom software solutions that drive real business value.&quot;
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticElement strength={0.2} className="w-full sm:w-auto">
                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 text-sm md:text-base font-bold min-h-[56px] w-full sm:w-auto"
                >
                  Book Free Consultation
                  <ArrowRight size={18} />
                </button>
              </MagneticElement>

              <MagneticElement strength={0.2} className="w-full sm:w-auto">
                <Link
                  href="/Services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:scale-105 text-sm md:text-base font-bold min-h-[56px] w-full sm:w-auto"
                >
                  View All Services
                  <ArrowRight size={18} />
                </Link>
              </MagneticElement>
            </div>
          </div>
        </motion.div>
      </div>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}
