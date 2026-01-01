'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, FolderGit2, MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import TypingEffect from './typing-effect';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="w-full flex items-center justify-between p-3 px-4 md:p-6 md:px-8 lg:px-20 glass-morphism fixed top-0 left-0 right-0 z-50 border-b border-border/50">
        <motion.div 
          className='flex flex-col text-left'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='font-bold text-sm md:text-lg glow-text'>Lenny Uwaeme</h1>
          <p className='text-xs md:text-sm text-muted-foreground hidden sm:block'>
            <TypingEffect text="Software Engineer (AI/ML)" speed={80} showCursor={false} />
          </p>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex max-w-fit my-2 md:my-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex flex-row justify-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 border border-border rounded-full bg-card/50 backdrop-blur-sm">
            <NavItem icon={<Home size={18} />} text="Home" link="/" pathname={pathname} />
            <NavItem icon={<User size={18} />} text="About" link="/About" pathname={pathname} />
            <NavItem icon={<Briefcase size={18} />} text="Services" link="/Services" pathname={pathname} />
            <NavItem icon={<Code2 size={18} />} text="Skills" link="/Skills" pathname={pathname} />
            <NavItem icon={<FolderGit2 size={18} />} text="Projects" link="/Projects" pathname={pathname} />
          </ul>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-card/50 border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        
        <motion.div 
          className='hidden lg:flex gap-2 items-center text-sm text-muted-foreground'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MapPin size={16} className="flex-shrink-0"/>
          <p className="whitespace-nowrap">Maryland, USA</p>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[280px] bg-card border-l border-border z-50 md:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close button */}
                <button
                  className="self-end p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 mb-8 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

                {/* Mobile Navigation Items */}
                <nav className="flex flex-col gap-3">
                  <MobileNavItem 
                    icon={<Home size={20} />} 
                    text="Home" 
                    link="/"
                    pathname={pathname}
                  />
                  <MobileNavItem 
                    icon={<User size={20} />} 
                    text="About" 
                    link="/About"
                    pathname={pathname}
                  />
                  <MobileNavItem 
                    icon={<Briefcase size={20} />} 
                    text="Services" 
                    link="/Services"
                    pathname={pathname}
                  />
                  <MobileNavItem 
                    icon={<Code2 size={20} />} 
                    text="Skills" 
                    link="/Skills"
                    pathname={pathname}
                  />
                  <MobileNavItem 
                    icon={<FolderGit2 size={20} />} 
                    text="Projects" 
                    link="/Projects"
                    pathname={pathname}
                  />
                </nav>

                {/* Location at bottom */}
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="flex gap-2 items-center text-sm text-muted-foreground">
                    <MapPin size={16} className="flex-shrink-0"/>
                    <p className="whitespace-nowrap">Maryland, USA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ icon, text, link, pathname }) => {
  const isActive = pathname === link || (link !== '/' && pathname.startsWith(link));
  
  return (
    <li className={`flex items-center gap-1 md:gap-1.5 px-3 md:px-3 py-2 md:py-1.5 rounded-full cursor-pointer transition-all duration-300 text-xs md:text-sm font-medium min-h-[44px] min-w-[44px] justify-center ${
      isActive 
        ? 'bg-primary text-primary-foreground shadow-glow-blue' 
        : 'hover:bg-secondary hover:shadow-glow-sm hover:scale-105'
    }`}>
      <Link href={link} className='flex gap-1 md:gap-2 items-center justify-center'>
        {icon}
        <span className="hidden sm:inline whitespace-nowrap">{text}</span>
      </Link>
    </li>
  );
};

const MobileNavItem = ({ icon, text, link, pathname }) => {
  const isActive = pathname === link || (link !== '/' && pathname.startsWith(link));
  
  return (
    <Link
      href={link}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium min-h-[56px] ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-glow-blue'
          : 'bg-secondary/50 hover:bg-secondary hover:shadow-glow-sm'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Navbar;