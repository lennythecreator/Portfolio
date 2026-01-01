'use client';

import React from 'react';
import { Home, User, Briefcase, Code2, FolderGit2, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TypingEffect from './typing-effect';

const Navbar = () => {
  return (
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
      
      <motion.div 
        className="max-w-fit my-2 md:my-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="flex flex-row justify-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 border border-border rounded-full bg-card/50 backdrop-blur-sm">
          <NavItem icon={<Home size={14} />} text="Home" link="/"/>
          <NavItem icon={<User size={14} />} text="About" link="/About"/>
          <NavItem icon={<Briefcase size={14} />} text="Services" link="/Services"/>
          <NavItem icon={<Code2 size={14} />} text="Skills" link="/Skills"/>
          <NavItem icon={<FolderGit2 size={14} />} text="Projects" link="/Projects"/>
        </ul>
      </motion.div>
      
      <motion.div 
        className='hidden lg:flex gap-2 items-center text-sm text-muted-foreground'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <MapPin size={16}/>
        <p>Maryland, USA</p>
      </motion.div>
    </nav>
  );
};

const NavItem = ({ icon, text, link }) => {
  const pathname = usePathname();
  const isActive = pathname === link || (link !== '/' && pathname.startsWith(link));
  
  return (
    <li className={`flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full cursor-pointer transition-all duration-300 text-xs md:text-sm font-medium ${
      isActive 
        ? 'bg-primary text-primary-foreground shadow-glow-blue' 
        : 'hover:bg-secondary hover:shadow-glow-sm hover:scale-105'
    }`}>
      <Link href={link} className='flex gap-1 md:gap-2 items-center'>
        {icon}
        <span className="hidden sm:inline">{text}</span>
      </Link>
    </li>
  );
};

export default Navbar;