import { HeroSection } from "@/components/hero-section";
import { ScrollSequence } from "@/components/scroll-sequence";
import { Shield, Smartphone, Zap, Globe2, ChevronRight, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#e0e0e0] selection:bg-cyan-500/30">
      <HeroSection />
      
      {/* Introduction text bridging the hero and the app showcase */}
      <section className="py-24 md:py-32 bg-[#080808] flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 mb-8">
          <Smartphone className="w-4 h-4" /> Available for Android
        </div>
        <h2 className="text-3xl md:text-5xl font-serif max-w-4xl leading-tight text-white mb-6">
          The definitive conversion tool <br className="hidden md:block" />
          <span className="italic text-cyan-500">for modern professionals.</span>
        </h2>
        <p className="text-white/40 max-w-2xl text-lg font-light">
          Scroll down to see the app in action.
        </p>
      </section>

      {/* The main scroll sequence featuring the phone */}
      <ScrollSequence />

      {/* Additional Details Grid */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Engineered for precision</h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto font-light">Everything you need to convert complex units without compromising on accuracy or speed.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "26 Categories", desc: "From common metrics to highly specialized professional units.", icon: Globe2 },
              { title: "Lightning Fast", desc: "Instantaneous conversions powered by a robust native engine.", icon: Zap },
              { title: "Smart History", desc: "Save your favorites and track past conversions with secure local persistence.", icon: Shield },
            ].map((feature, i) => (
              <div key={i} className="bg-[#111111] border border-white/5 p-8 rounded-3xl hover:bg-[#1a1a1a] transition-colors">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
                   <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="relative pt-32 pb-12 bg-[#080808] border-t border-white/5 overflow-hidden">
         {/* Footer background glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-600/10 blur-[120px] rounded-t-full pointer-events-none"></div>
         
         <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
           <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[0.9]">
             Enhance your workflow.
           </h2>
           <p className="text-xl text-white/40 font-light mb-12">
             Download UnitForge for Android today and experience precision at your fingertips.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
             <button className="flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-full text-sm hover:bg-cyan-400 transition-colors">
               <Download className="w-5 h-5" /> Get it on Google Play
             </button>
             <button className="flex items-center justify-center gap-3 bg-[#111111] text-white border border-white/10 font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors">
               View Full Category List <ChevronRight className="w-5 h-5 text-white/40" />
             </button>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20">
             <p>© 2026 UnitForge. All rights reserved.</p>
             <div className="flex items-center gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Twitter</a>
               <a href="#" className="hover:text-white transition-colors">GitHub</a>
               <a href="#" className="hover:text-white transition-colors">Discord</a>
             </div>
           </div>
         </div>
      </footer>
    </main>
  );
}
