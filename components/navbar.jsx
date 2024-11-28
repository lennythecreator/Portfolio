import React from 'react';
import { Home, User, Code2, FolderGit2, LocateIcon, MapPin } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-6 px-20 bg-background/80 backdrop-blur-sm z-50">
      <div className='flex flex-col text-left'>
        <h1 className='font-bold'>Lenny Uwame</h1>
        <p className='text-sm'>Software Engineer(AI/ML)</p>

      </div>
      <div className="max-w-fit mx-auto my-3">
        <ul className="flex flex-row justify-center gap-3 px-3 py-1.5 border border-slate-200 rounded-full bg-white/50">
          <NavItem icon={<Home size={16} />} text="Home" link="/"/>
          <NavItem icon={<User size={16} />} text="About me" link="About"/>
          <NavItem icon={<Code2 size={16} />} text="Skills" link="Skills"/>
          <NavItem icon={<FolderGit2 size={16} />} text="Projects" link="Projects"/>
        </ul>
      </div>
      <div className='flex gap-2'>
        <MapPin/>
        <p>Maryland, USA</p>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text,link }) => (
  <li className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#0e1111] hover:text-white cursor-pointer transition-all duration-300 text-sm font-medium">
   
    <Link href={link} className='flex gap-2 items-center'> {icon}{text}</Link>
  </li>
);

export default Navbar;