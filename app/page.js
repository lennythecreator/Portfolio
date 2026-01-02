'use client';

import Navbar from "@/components/navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Zap, Award, Users, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticElement from "@/components/magnetic-element";
import SplitText from "@/components/split-text";
import { HERO_CONTENT, BOOKING } from "@/constants/constants";
import EmailModal from "@/components/email-modal";
import { useState } from "react";

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const iconMap = {
    DollarSign: DollarSign,
    Zap: Zap,
    Award: Award,
    Users: Users,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden max-w-full" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 min-h-screen w-full"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 ring-2 md:ring-4 ring-primary/20 ring-offset-2 md:ring-offset-4 ring-offset-background transition-all duration-300 hover:ring-primary/40 hover:scale-110">
            <AvatarImage src="/my-notion-face-portrait.png" alt="Lenny Uwaeme" />
          </Avatar>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 md:mb-6 w-full max-w-4xl glow-text px-2 leading-tight"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 w-full max-w-3xl px-2 leading-relaxed"
          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-14 w-full max-w-5xl mx-auto px-2"
        >
          {HERO_CONTENT.value_props.map((prop, index) => {
            const IconComponent = iconMap[prop.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow min-h-[140px] w-full"
                style={{ maxWidth: '100%' }}
              >
                <div className="p-2 md:p-3 rounded-full bg-primary/10 mb-3 flex-shrink-0">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5 w-full" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {prop.text}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground w-full leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-md px-2">
          <MagneticElement strength={0.2} className="w-full sm:w-auto flex-1">
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-blue hover:scale-105 text-sm md:text-base w-full font-semibold min-h-[48px]"
              style={{ whiteSpace: 'nowrap' }}
            >
              <Calendar size={18} className="flex-shrink-0" />
              <span className="truncate">{HERO_CONTENT.primary_cta}</span>
            </button>
          </MagneticElement>

          <MagneticElement strength={0.2} className="w-full sm:w-auto flex-1">
            <Link
              href="/Services"
              className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm md:text-base w-full font-semibold min-h-[48px]"
              style={{ whiteSpace: 'nowrap' }}
            >
              <span className="truncate">{HERO_CONTENT.secondary_cta}</span>
              <ArrowRight size={18} className="flex-shrink-0" />
            </Link>
          </MagneticElement>
        </motion.div>
      </motion.div>

      {/* Email Modal */}
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}