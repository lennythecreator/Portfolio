import Navbar from "@/components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-6 p-5">
                    
                    <h1 className="font-bold text-5xl text-center max-w-3xl">
                    Hi I'm Lenny Uwaeme, a Software Engineer passionate about AI.
                    </h1>
                    <div className="flex gap-2">
                        {interests.map((interest, index) => (
                            <Badge key={index} className="bg-[#353839]">{interest}</Badge>
                            ))}
                    </div>
                    <Button className="font-bold w-40  rounded-full"><Link target="_blank" href=""></Link>Connect with me<LucideLink/></Button>
            </div>
        </div>
    </div>
  );
}
