import React from "react";
import Image from "next/image";
import { motion, useTransform, useMotionValue } from "motion/react";

interface PhoneMockupProps {
  className?: string;
  images: string[];
  imageOpacities: any[]; 
  imageAlts?: string[];
}

export function PhoneMockup({ className, images, imageOpacities, imageAlts }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[280px] h-[580px] sm:w-[320px] sm:h-[660px] bg-[#1a1a1a] rounded-[3rem] border-[4px] sm:border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden shrink-0 ${className}`}
    >
      {/* Phone Frame details */}
      <div className="absolute top-0 inset-x-0 h-4 bg-[#1a1a1a] z-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#1a1a1a] rounded-b-3xl z-20 flex justify-center items-end pb-1">
          {/* Camera lens hole */}
          <div className="w-1.5 h-1.5 rounded-full bg-black/40 mb-1 ml-4 shadow-inner"></div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-2 bg-[#1a1a1a] z-20"></div>
      <div className="absolute inset-0 rounded-[3rem] ring-inset ring-2 ring-white/10 z-30 pointer-events-none"></div>

      {/* Screen Content Wrapper */}
      <div className="relative w-full h-full bg-[#0c0c0c] overflow-hidden rounded-[2.5rem] border border-white/5">
        {images.map((src, index) => (
          <ImageLayer
            key={index}
            src={src}
            alt={imageAlts?.[index] || `App Screen ${index + 1}`}
            opacity={imageOpacities[index]}
          />
        ))}
        {/* If no images, show a placeholder gradient */}
        {images.length === 0 && (
           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
             <span className="text-white/50 font-medium tracking-widest text-sm">APP SCREEN</span>
           </div>
        )}
      </div>
    </div>
  );
}

function ImageLayer({ src, alt, opacity }: { src: string; alt: string; opacity: any }) {
  // Using interpolation for z-index to bring fading images to front
  const defaultOpacity = useMotionValue(typeof opacity === "number" ? opacity : 1);
  const motionOpacity = typeof opacity === "number" ? defaultOpacity : opacity;
  const zIndex = useTransform(motionOpacity, (v: number) => Math.round(v * 10));
  
  return (
    <motion.div
      style={{ opacity: motionOpacity, zIndex }}
      className="absolute inset-0 w-full h-full will-change-[opacity,z-index]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        referrerPolicy="no-referrer"
        priority
      />
    </motion.div>
  );
}
