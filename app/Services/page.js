'use client';

import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { SERVICES, BOOKING } from '@/constants/constants';
import { Globe, Server, ShoppingCart, Smartphone, Rocket, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import Link from 'next/link';
import MagneticElement from '@/components/magnetic-element';
import EmailModal from '@/components/email-modal';
import { ReliefCard } from '@/components/relief-card';

const iconMap = {
  Globe: Globe,
  Server: Server,
  ShoppingCart: ShoppingCart,
  Smartphone: Smartphone,
  Rocket: Rocket,
  Code: Code,
};

const ServiceInstance = ({ service }) => {
  const IconComponent = iconMap[service.icon];
  return (
    <ReliefCard
      statusText={service.timeline || "AVAILABLE"}
      dataText={`SYSTEM_ID: ${service.title.substring(0, 3).toUpperCase()}_${Math.floor(Math.random() * 999)} // STACK: NEXT.JS.TAILWIND`}
      className="h-[520px]"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <IconComponent className="w-6 h-6 text-[#3b82f6]" />
            <span className="font-mono text-xs text-muted-foreground/50 uppercase tracking-tighter">00{Math.floor(Math.random() * 9)} / SERVICE</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground leading-[0.95] mb-6 tracking-tight group-hover:text-[#3b82f6] transition-colors duration-300">
            {service.title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word} {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="font-mono text-sm text-muted-foreground/70 leading-relaxed max-w-[280px]">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="font-mono">
            <div className="text-[12px] text-foreground font-medium uppercase opacity-50">PRICE</div>
            <div className="text-[14px] text-[#3b82f6] font-bold">{service.pricing_range}</div>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center shadow-[6px_6px_15px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.02)] group-hover:bg-[#3b82f6] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
            <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </ReliefCard>
  );
};

export default function ServicesPage() {
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
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 glow-text mb-6">
            <SplitText text="Services" delay={50} />
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-mono">
            // DEVELOPING_HIGH_THROUGHPUT_SOLUTIONS.EXE
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="flex justify-center h-full">
              <ServiceInstance service={service} />
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Initialize Project_</h3>
            <p className="text-muted-foreground font-mono text-sm md:text-base mb-8">
              {BOOKING.consultation_price} // {BOOKING.response_time}
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
                  href="https://www.linkedin.com/in/lennythecreator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:scale-105 text-sm md:text-base font-bold min-h-[56px] w-full sm:w-auto font-mono"
                >
                  LINKEDIN.CONNECT
                  <ArrowRight size={18} />
                </Link>
              </MagneticElement>
            </div>
          </div>

          <p className="text-xs text-muted-foreground/50 font-mono uppercase tracking-widest">
            SOURCE_CODE_INCLUDED // POST_LAUNCH_SUPPORT_ENABLED
          </p>
        </motion.div>
      </div>

      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}

