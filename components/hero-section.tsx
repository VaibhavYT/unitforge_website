"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Silk } from "./silk";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={1.5}
          scale={2}
          color="#06b6d4" /* cyan-500 */
          noiseIntensity={0.8}
          rotation={0}
          className="opacity-30"
        />
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] md:w-[24rem] md:h-[24rem] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen -z-10"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 md:px-12 flex items-center justify-between border-b border-white/5">
        <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4" /> About
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <h1 className="text-2xl font-serif tracking-tight text-white hidden md:block">
            Convertix
          </h1>
        </div>
        
        <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:bg-cyan-400 transition-colors">
          Get it on Play Store
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center -mt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-center text-white leading-[0.9] max-w-4xl"
        >
          Precision conversions <br className="hidden md:block" />
          <span className="italic text-cyan-500">for professionals.</span>
        </motion.h2>
      </div>

      {/* Bottom Right Decoration */}
      <div className="relative z-10 pb-12 pr-12 w-full flex justify-end">
         <div className="flex flex-col items-end gap-2">
            <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 flex items-center gap-2">
               26 Conversion Categories <ArrowLeft className="w-3 h-3" />
            </p>
         </div>
      </div>
    </section>
  );
}
