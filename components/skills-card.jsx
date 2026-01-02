'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillsCard({ skillCategories }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="relative max-w-2xl mx-auto perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hanging Rope/String */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-24 w-0.5 bg-gradient-to-b from-border/50 to-border z-20">
        {/* String */}
      </div>
      
      {/* Rope Attachment Point (hole in badge) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-30 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-background border border-border/50" />
        </div>
      </div>

      <motion.div
        className="relative bg-card/95 backdrop-blur-sm border-2 border-border rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-50" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h2>
            <motion.div 
              className="h-[3px] w-24 bg-primary mx-auto opacity-70 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <h3
                  className="text-sm md:text-base font-bold uppercase mb-3 tracking-wide flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-300" />
                  <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text text-transparent blur-[1px]" aria-hidden="true">
                      {category.title}
                    </span>
                    {category.title}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="text-xs md:text-sm px-3 py-1 hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div 
            className="text-center mt-8 pt-6 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
              Technical Expertise
            </p>
          </motion.div>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Floating glow backdrop */}
      <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl opacity-40 rounded-2xl animate-pulse" 
        style={{ animationDuration: '3s' }} 
      />
    </motion.div>
  );
}

