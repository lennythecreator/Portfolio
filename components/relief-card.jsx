'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";

const ReliefCard = ({
    children,
    className,
    showGeo = true,
    showDataStrip = true,
    dataText = "LATENCY_CORE_v2.0 // STACK:RUST.GO.AWS",
    statusText,
    accentColor = "#3b82f6",
}) => {
    const cardRef = useRef(null);

    // Motion values for 3D effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            className={cn(
                "relative w-full bg-[#0A0A0A] rounded-[40px] p-8 md:p-10 cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-[15px_15px_35px_rgba(0,0,0,0.5),-10px_-10px_20px_rgba(255,255,255,0.02)] hover:shadow-[25px_25px_50px_rgba(0,0,0,0.6),-10px_-10px_30px_rgba(255,255,255,0.03)] group",
                className
            )}
        >
            {/* Decorative Geometry - Floating Circle (Top Right) */}
            {showGeo && (
                <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-[#0A0A0A] shadow-[inset_10px_10px_20px_rgba(0,0,0,0.4),inset_-10px_-10px_20px_rgba(255,255,255,0.03)] z-0 group-hover:scale-110 transition-transform duration-500" />
            )}

            {/* Small Floating Circle (Bottom Left) */}
            {showGeo && (
                <motion.div
                    animate={{ translateY: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] left-[-20px] w-20 h-20 rounded-full bg-[#0A0A0A] shadow-[inset_6px_6px_12px_rgba(0,0,0,0.4),inset_-6px_-6px_12px_rgba(255,255,255,0.03)] z-0"
                />
            )}

            {/* Data Strip */}
            {showDataStrip && (
                <div className="absolute bottom-[130px] right-[-45px] rotate-[-90deg] font-mono text-[10px] text-muted-foreground/30 whitespace-nowrap pointer-events-none uppercase tracking-widest">
                    {dataText}
                </div>
            )}

            {/* Status Chip */}
            {statusText && (
                <div
                    className="relative z-10 w-fit px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-widest bg-[#0A0A0A] shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_8px_rgba(255,255,255,0.02)] mb-4"
                    style={{ color: accentColor }}
                >
                    {statusText}
                </div>
            )}

            {/* Content wrapper with Z-depth */}
            <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

export { ReliefCard };
