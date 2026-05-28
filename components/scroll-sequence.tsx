"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PhoneMockup } from "./phone-mockup";
import { Shield, Zap, Lock, Eye, Target, Sparkles, Clock, Star } from "lucide-react";

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const screens = [
    { src: "/screen6.png", alt: "Convertix Category Grid View" },
    { src: "/screen5.png", alt: "Convertix Category List View" },
    { src: "/screen4.png", alt: "Length Conversion Interface" },
    { src: "/screen3.png", alt: "Pressure Conversion Interface with Magnitudes" },
    { src: "/screen1.png", alt: "Saved Favorites Dashboard" },
    { src: "/screen2.png", alt: "Local Conversion History" },
  ];

  const images = screens.map((s) => s.src);
  const imageAlts = screens.map((s) => s.alt);

  // Map scroll progress to horizontal translation
  const phoneX = useTransform(scrollYProgress, 
    [0, 0.1, 0.15, 0.25, 0.3, 0.4, 0.45, 0.55, 0.6, 0.7, 0.75, 1], 
    ["0vw", "0vw", "-25vw", "-25vw", "25vw", "25vw", "-25vw", "-25vw", "25vw", "25vw", "-25vw", "-25vw"]
  );

  const phoneScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const phoneY = useTransform(scrollYProgress, [0, 0.1], ["20vh", "0vh"]);

  // Opacities for the screen images changing inside the device
  const img0Op = useTransform(scrollYProgress, [0, 0.15, 0.18], [1, 1, 0]);
  const img1Op = useTransform(scrollYProgress, [0.15, 0.18, 0.28, 0.31], [0, 1, 1, 0]);
  const img2Op = useTransform(scrollYProgress, [0.28, 0.31, 0.43, 0.46], [0, 1, 1, 0]);
  const img3Op = useTransform(scrollYProgress, [0.43, 0.46, 0.58, 0.61], [0, 1, 1, 0]);
  const img4Op = useTransform(scrollYProgress, [0.58, 0.61, 0.73, 0.76], [0, 1, 1, 0]);
  const img5Op = useTransform(scrollYProgress, [0.73, 0.76, 1], [0, 1, 1]);

  // View 1 (Right): 26 Categories
  const feat1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const feat1Y = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [40, 0, 0, -40]);

  // View 2 (Left): Precision
  const feat2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const feat2Y = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [40, 0, 0, -40]);

  // View 3 (Right): Quick Reference
  const feat3Opacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const feat3Y = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [40, 0, 0, -40]);

  // View 4 (Left): Favorites
  const feat4Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const feat4Y = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [40, 0, 0, -40]);

  // View 5 (Right): History
  const feat5Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0]);
  const feat5Y = useTransform(scrollYProgress, [0.7, 0.75, 0.95, 1], [40, 0, 0, -40]);

  return (
    <>
      {/* --- DESKTOP ANIMATED SEQUENCE --- */}
      <div ref={containerRef} className="relative h-[600vh] bg-[#080808] hidden md:block border-y border-white/5">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* TEXT BLOCKS */}
          
          {/* Feat 2: Precision Calculations (Left) */}
          <motion.div style={{ opacity: feat2Opacity, y: feat2Y }} className="absolute left-[10%] w-[35%] z-10">
            <div className="space-y-4 mb-4">
              <span className="text-cyan-500 font-serif italic text-lg opacity-80">02. Accuracy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Precision <br />
              <span className="italic text-cyan-500">Calculations.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-8">
              Handle complex formula-based conversions effortlessly. Whether you're converting standard length metrics or calculating precise thermodynamic temperatures, Convertix delivers instant accuracy.
            </p>
            <ul className="space-y-4 font-light text-white/60">
               <li className="flex items-center gap-3"><Target className="w-4 h-4 text-cyan-500" /> Error-free precision</li>
            </ul>
          </motion.div>

          {/* Feat 4: Favorites (Left) */}
          <motion.div style={{ opacity: feat4Opacity, y: feat4Y }} className="absolute left-[10%] w-[35%] z-10">
            <div className="space-y-4 mb-4">
              <span className="text-cyan-500 font-serif italic text-lg opacity-80">04. Efficiency</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Personalized <br />
              <span className="italic text-cyan-500">Favorites.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-8">
              Save your most frequently used conversions. The intuitive heart-toggle system lets you build a personalized dashboard of the metrics you rely on every day.
            </p>
            <ul className="space-y-4 font-light text-white/60">
               <li className="flex items-center gap-3"><Star className="w-4 h-4 text-cyan-500" /> One-tap access</li>
            </ul>
          </motion.div>

          {/* The Phone Overlay */}
          <motion.div style={{ x: phoneX, y: phoneY, scale: phoneScale }} className="z-20 will-change-transform">
            <PhoneMockup 
              images={images} 
              imageAlts={imageAlts}
              imageOpacities={[img0Op, img1Op, img2Op, img3Op, img4Op, img5Op]} 
            />
          </motion.div>

          {/* Feat 1: 26 Categories (Right) */}
          <motion.div style={{ opacity: feat1Opacity, y: feat1Y }} className="absolute right-[10%] w-[35%] z-10">
            <div className="space-y-4 mb-4">
              <span className="text-cyan-500 font-serif italic text-lg opacity-80">01. Comprehensive</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              26 Professional <br />
              <span className="italic text-cyan-500">Categories.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-8">
              From common distances and masses to highly specialized professional units like pressure and velocity. Toggle seamlessly between clean list and grid view layouts.
            </p>
            <ul className="space-y-4 font-light text-white/60">
               <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-cyan-500" /> Flexible UI layouts</li>
            </ul>
          </motion.div>

          {/* Feat 3: Quick Reference (Right) */}
          <motion.div style={{ opacity: feat3Opacity, y: feat3Y }} className="absolute right-[10%] w-[35%] z-10">
            <div className="space-y-4 mb-4">
              <span className="text-cyan-500 font-serif italic text-lg opacity-80">03. Convenience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Magnitude <br />
              <span className="italic text-cyan-500">References.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light text-left">
              Quickly grasp scale with built-in reference charts. Perfect for engineers needing to rapidly verify kilopascal thresholds or magnitudes without losing their place.
            </p>
          </motion.div>

          {/* Feat 5: History (Right) */}
          <motion.div style={{ opacity: feat5Opacity, y: feat5Y }} className="absolute right-[10%] w-[35%] z-10">
            <div className="space-y-4 mb-4">
              <span className="text-cyan-500 font-serif italic text-lg opacity-80">05. Intelligent</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Smart Local <br />
              <span className="italic text-cyan-500">Persistence.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed font-light mb-8">
              Experience offline-first productivity. Your history and settings are securely stored locally using Hive, ensuring instant access and complete privacy.
            </p>
            <ul className="space-y-4 font-light text-white/60">
               <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-cyan-500" /> Track past workflows</li>
               <li className="flex items-center gap-3"><Lock className="w-4 h-4 text-cyan-500" /> 100% Offline capability</li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* --- MOBILE FALLBACK STACK --- */}
      <div className="md:hidden flex flex-col py-20 bg-[#080808] gap-24 overflow-hidden border-y border-white/5">
        
         {/* Feature 1 */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="container mx-auto px-6 max-w-sm"
         >
            <span className="text-cyan-500 font-serif italic text-lg opacity-80 mb-2 block">01. Comprehensive</span>
            <h2 className="text-3xl font-serif text-white mb-4">
              26 Professional <span className="italic text-cyan-500">Categories.</span>
            </h2>
            <p className="text-white/40 font-light mb-8">
              From common metrics to highly specialized formulas. Toggle seamlessly between beautiful grid and list views.
            </p>
            <div className="flex justify-center -mb-20 opacity-90 grayscale-[0.2]">
              <PhoneMockup images={[images[1]]} imageOpacities={[1]} className="scale-90 origin-top" imageAlts={[imageAlts[1]]} />
            </div>
         </motion.div>

         {/* Feature 2 */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="container mx-auto px-6 max-w-sm"
         >
            <span className="text-cyan-500 font-serif italic text-lg opacity-80 mb-2 block mt-20">02. Accuracy</span>
            <h2 className="text-3xl font-serif text-white mb-4">
              Precision <span className="italic text-cyan-500">Calculations.</span>
            </h2>
            <p className="text-white/40 font-light mb-8">
              Handle complex formula-based conversions effortlessly with a powerful native computation engine.
            </p>
            <div className="flex justify-center -mb-20 opacity-90 grayscale-[0.2]">
              <PhoneMockup images={[images[2]]} imageOpacities={[1]} className="scale-90 origin-top" imageAlts={[imageAlts[2]]} />
            </div>
         </motion.div>

         {/* Feature 3 */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="container mx-auto px-6 max-w-sm"
         >
            <span className="text-cyan-500 font-serif italic text-lg opacity-80 mb-2 block mt-20">03. Convenience</span>
            <h2 className="text-3xl font-serif text-white mb-4">
              Magnitude <span className="italic text-cyan-500">References.</span>
            </h2>
            <p className="text-white/40 font-light mb-8">
              Quickly grasp scale with built-in reference charts directly below your conversion fields.
            </p>
            <div className="flex justify-center -mb-20 opacity-90 grayscale-[0.2]">
              <PhoneMockup images={[images[3]]} imageOpacities={[1]} className="scale-90 origin-top" imageAlts={[imageAlts[3]]} />
            </div>
         </motion.div>

         {/* Feature 4 */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="container mx-auto px-6 max-w-sm"
         >
            <span className="text-cyan-500 font-serif italic text-lg opacity-80 mb-2 block mt-20">04. Efficiency</span>
            <h2 className="text-3xl font-serif text-white mb-4">
              Personalized <span className="italic text-cyan-500">Favorites.</span>
            </h2>
            <p className="text-white/40 font-light mb-8">
              Save your most frequently used conversions to a dedicated dashboard for instant, one-tap access.
            </p>
            <div className="flex justify-center -mb-20 opacity-90 grayscale-[0.2]">
              <PhoneMockup images={[images[4]]} imageOpacities={[1]} className="scale-90 origin-top" imageAlts={[imageAlts[4]]} />
            </div>
         </motion.div>

         {/* Feature 5 */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="container mx-auto px-6 max-w-sm"
         >
            <span className="text-cyan-500 font-serif italic text-lg opacity-80 mb-2 block mt-20">05. Intelligent</span>
            <h2 className="text-3xl font-serif text-white mb-4">
              Smart Local <span className="italic text-cyan-500">Persistence.</span>
            </h2>
            <p className="text-white/40 font-light mb-8">
               Your workflow history is securely stored locally with Hive, ensuring privacy and offline-first performance.
            </p>
            <div className="flex justify-center pb-20">
              <PhoneMockup images={[images[5]]} imageOpacities={[1]} className="scale-90 origin-top" imageAlts={[imageAlts[5]]} />
            </div>
         </motion.div>

      </div>
    </>
  );
}
