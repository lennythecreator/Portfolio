'use client';

import Navbar from '@/components/navbar';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES, BOOKING } from '@/constants/constants';
import { Globe, Server, ShoppingCart, Smartphone, Rocket, Code, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '@/components/split-text';
import Link from 'next/link';
import MagneticElement from '@/components/magnetic-element';

const iconMap = {
  Globe: Globe,
  Server: Server,
  ShoppingCart: ShoppingCart,
  Smartphone: Smartphone,
  Rocket: Rocket,
  Code: Code,
};

export default function ServicesPage() {
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
    <div className="min-h-screen relative">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2 glow-text mb-4 break-words">
            <SplitText text="Services" delay={50} />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
            Custom software solutions designed to help your business grow. From AI integration to full-stack development, I deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full group hover:border-primary/50 relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative p-4 sm:p-5 md:p-7">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="p-2.5 sm:p-3 md:p-3.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 mb-2 break-words">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-4 sm:p-5 md:p-7 pt-0 md:pt-0 flex-grow">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs sm:text-sm md:text-sm text-muted-foreground leading-relaxed break-words">
                          <span className="font-semibold text-foreground">Ideal for:</span> {service.ideal_for}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="relative p-4 sm:p-5 md:p-7 pt-4 md:pt-4 mt-auto border-t border-border/30">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-primary break-words">
                      {service.pricing_range}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 break-words">Ready to Get Started?</h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6 break-words">
              {BOOKING.consultation_price} • {BOOKING.response_time} • {BOOKING.timezone}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticElement strength={0.2} className="w-full sm:w-auto">
                <Link
                  href={BOOKING.calendly_link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-blue hover:scale-105 text-sm md:text-base min-h-[48px] w-full sm:w-auto whitespace-nowrap"
                >
                  Book Free Consultation
                  <ArrowRight size={18} className="flex-shrink-0" />
                </Link>
              </MagneticElement>
              
              <MagneticElement strength={0.2} className="w-full sm:w-auto">
                <Link
                  href="https://www.linkedin.com/in/lennythecreator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm md:text-base min-h-[48px] w-full sm:w-auto whitespace-nowrap"
                >
                  Discuss Your Project
                  <ArrowRight size={18} className="flex-shrink-0" />
                </Link>
              </MagneticElement>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground break-words">
            All projects include source code, documentation, and post-launch support
          </p>
        </motion.div>
      </div>
    </div>
  );
}

