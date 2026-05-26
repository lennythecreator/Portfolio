'use client';

import { Badge } from '@/components/ui/badge';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from "@/lib/utils";

export default function SkillsCard({ skillCategories }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-4xl bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 cursor-pointer transition-all duration-500 ease-out shadow-[20px_20px_40px_rgba(0,0,0,0.5),-10px_-10px_20px_rgba(255,255,255,0.02)] hover:shadow-[30px_30px_60px_rgba(0,0,0,0.6),-10px_-10px_30px_rgba(255,255,255,0.03)] group overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full border border-white/5 opacity-20 pointer-events-none" />
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full border border-white/[0.02] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Left Column: Title & Intro */}
          <div className="md:w-1/3">
            <div className="font-mono text-[10px] text-[#3b82f6] uppercase tracking-[0.3em] mb-4">
              ARCH_v2.0 // CORE_SYSTEM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-none">
              SKILLS_<br />MATRIX
            </h2>
            <p className="font-mono text-sm text-muted-foreground/60 leading-relaxed mb-8">
              Visual map of technical competencies and toolchain integration.
            </p>
            <div className="w-12 h-1 bg-[#3b82f6] rounded-full mb-8 opacity-50" />

            <div className="font-mono text-[10px] text-muted-foreground/30 uppercase space-y-1">
              <div>STATUS: NOMINAL</div>
              <div>AUTH: LENNY_CODE_v1.0</div>
              <div>DATE: {new Date().getFullYear()}</div>
            </div>
          </div>

          {/* Right Column: Skill Lists */}
          <div className="md:w-2/3 space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-white/80">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 text-muted-foreground border border-white/5 hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Corner Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-[#3b82f6]/5 rounded-tl-full pointer-events-none" />
    </motion.div>
  );
}

