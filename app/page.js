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

export default function Home() {
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
    <div className="min-h-screen relative">
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 md:py-40 min-h-screen"
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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 max-w-5xl glow-text px-2"
        >
          <SplitText
            text={HERO_CONTENT.headline}
            className="inline-block"
            delay={50}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl px-4"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-14 max-w-4xl px-4"
        >
          {HERO_CONTENT.value_props.map((prop, index) => {
            const IconComponent = iconMap[prop.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="p-2 md:p-3 rounded-full bg-primary/10 mb-3">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1">
                  {prop.text}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-md px-4">
          <MagneticElement strength={0.2} className="w-full sm:w-auto">
            <Link
              href={BOOKING.calendly_link}
              className="flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-blue hover:scale-105 text-sm md:text-base w-full sm:w-auto font-semibold"
            >
              <Calendar size={16} className="md:w-[18px] md:h-[18px]" />
              {HERO_CONTENT.primary_cta}
            </Link>
          </MagneticElement>

          <MagneticElement strength={0.2} className="w-full sm:w-auto">
            <Link
              href="/Services"
              className="flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm md:text-base w-full sm:w-auto font-semibold"
            >
              {HERO_CONTENT.secondary_cta}
              <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </Link>
          </MagneticElement>
        </motion.div>
      </motion.div>
    </div>
  );
}