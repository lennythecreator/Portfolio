import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideLink } from "lucide-react";
import { Link2 } from "lucide-react";
import Image from "next/image";
import { CONTACT_INFO } from "@/constants/constants";
import Link from "next/link";

export default function Home() {
  const interests = ["Front-end", "Backend", "Full Stack", "AI/ML"]
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <Navbar />
        <div className="w-32 h-32 rounded-full mb-8">
          <Avatar className='h-36 w-36'>
            <AvatarImage src="/my-notion-face-portrait.png" ></AvatarImage>
          </Avatar>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Hi I&apos;m Lenny Uwaeme, a Software Engineer passionate about AI.
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Front-end', 'Backend', 'Full Stack', 'AI/ML'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <Link2 size={18} />
            <Link href={"https://www.linkedin.com/in/lennythecreator/"} target="_blank">Connect with me</Link>
          </button>
          <button className="px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <Link href={"https://github.com/lennythecreator"} target="_blank">See my work</Link>
          </button>
        </div>
      </div>
    </div>

   
  );
}