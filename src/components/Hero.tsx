"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-brand-black overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/30 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Turn Your <br />
            <span className="text-brand-acid">Shop Into a</span> <br />
            Landmark.
          </h1>
          <p className="text-lg md:text-xl text-brand-offwhite/80 max-w-xl font-body leading-relaxed">
            Modern signage and storefront branding for local businesses that want more walk-ins and stronger first impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-brand-acid text-brand-black px-8 py-4 rounded-none font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group">
              Get Free Shop Mockup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border border-brand-offwhite/20 text-brand-offwhite px-8 py-4 rounded-none font-bold text-lg hover:bg-brand-offwhite/10 transition-colors">
              View Transformations
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div 
          className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md aspect-[4/5] bg-brand-gray border border-brand-offwhite/10 overflow-hidden shadow-2xl group">
            {/* Mock image placeholder - using generic color gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gray to-brand-black z-0"></div>
            
            {/* Glow Sign Simulation */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-32 border-2 border-brand-acid/40 flex items-center justify-center bg-brand-black/80 backdrop-blur-sm z-10 shadow-[0_0_50px_rgba(166,255,0,0.2)]">
              <h3 className="font-heading text-3xl font-bold text-brand-acid tracking-widest uppercase">The Local</h3>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end">
              <div>
                <p className="text-brand-acid text-sm font-bold tracking-wider uppercase mb-1">Before / After</p>
                <p className="text-white font-heading text-xl">Cafe Transformation</p>
              </div>
            </div>

            {/* Scanning line animation */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-brand-acid/50 z-20 shadow-[0_0_15px_rgba(166,255,0,0.8)]"
              animate={{ y: [0, 500, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
