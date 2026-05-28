"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, EyeOff, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#e0e0e0] relative overflow-hidden py-20 px-4 sm:px-6">
      {/* Background Glows for Premium Ambient Styling */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation / Back Button */}
        <div className="mb-12">
          <Link href="/">
            <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-white/20 transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>
        </div>

        {/* Title Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" /> Privacy First
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/40 font-light">
            Privacy Policy for{" "}
            <span className="text-cyan-400 font-normal">
              Convertix – Smart Unit Converter
            </span>
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-white/30">
            <span>Last Updated:</span>
            <span className="text-white/60">May 2026</span>
          </div>
        </div>

        {/* Quick Highlights Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: Lock,
              label: "100% Offline",
              desc: "No servers, no transmission",
            },
            {
              icon: EyeOff,
              label: "Zero Tracking",
              desc: "No personal data collected",
            },
            {
              icon: FileText,
              label: "Local Secure Storage",
              desc: "Hive DB storage on device",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-xs text-white/40 mt-1 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Card (Glassmorphism & Border) */}
        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="prose prose-invert max-w-none space-y-10 text-white/80 font-light leading-relaxed text-base sm:text-lg">
            <p className="text-white/60">
              Convertix is committed to protecting your privacy. This Privacy
              Policy describes how we handle information when you use our mobile
              application.
            </p>

            <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-3">
                <span className="text-cyan-500 text-lg font-mono">1.</span> No
                Personal Data Collection
              </h2>
              <p className="pl-6 text-white/50">
                Convertix does not collect, store, transmit, or share any
                personally identifiable information, location data, or user
                files. All unit conversions and logs are stored locally on your
                device in secure storage (Hive DB) and never uploaded to any
                servers.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-3">
                <span className="text-cyan-500 text-lg font-mono">2.</span>{" "}
                Offline Operations
              </h2>
              <p className="pl-6 text-white/50">
                The application operates completely offline and does not require
                internet access for core functionalities.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-3">
                <span className="text-cyan-500 text-lg font-mono">3.</span>{" "}
                Advertisements
              </h2>
              <p className="pl-6 text-white/50">
                Convertix uses the Google Mobile Ads SDK (AdMob) to display
                advertisements. AdMob may collect and use anonymous diagnostic
                data, device identifiers, or app performance logs for target
                selection, frequency capping, and analytics. This data is
                handled securely under Google's standard advertising policies.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-3">
                <span className="text-cyan-500 text-lg font-mono">4.</span>{" "}
                Children's Privacy
              </h2>
              <p className="pl-6 text-white/50">
                Since we do not collect any personal data, our application
                complies fully with COPPA and global child privacy regulations.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 pb-4">
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-3">
                <span className="text-cyan-500 text-lg font-mono">5.</span>{" "}
                Contact
              </h2>
              <p className="pl-6 text-white/50">
                For any privacy inquiries, support, or questions, please contact
                us at{" "}
                <a
                  href="vaibhavtech.studios@gmail.com"
                  className="text-cyan-400 hover:underline transition-all"
                >
                  vaibhavtech.studios@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs uppercase tracking-widest text-white/20">
          <p>© 2026 Convertix. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
