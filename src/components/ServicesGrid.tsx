"use client";

import { motion } from "framer-motion";
import { Store, Monitor, Lightbulb, Flag, Image, CreditCard, Building, Smartphone } from "lucide-react";

const services = [
  { icon: Store, title: "Shop Signage", desc: "Main exterior branding boards." },
  { icon: Monitor, title: "Fascia Boards", desc: "Clean, modern front panel designs." },
  { icon: Lightbulb, title: "Glow Signs", desc: "High-contrast LED illuminated signs." },
  { icon: Flag, title: "Banners", desc: "Promotional and temporary outdoor media." },
  { icon: Image, title: "Menu Boards", desc: "Easy-to-read pricing displays." },
  { icon: CreditCard, title: "Business Cards", desc: "Premium textured visiting cards." },
  { icon: Building, title: "Storefront Identity", desc: "Complete visual system overhaul." },
  { icon: Smartphone, title: "Social Media Covers", desc: "Digital extension of your physical brand." },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-brand-black text-brand-offwhite py-32 border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-acid/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Complete Visual Systems.</h2>
          <p className="text-brand-offwhite/60 text-xl max-w-2xl font-body leading-relaxed">
            Everything you need to transform your local shop into a modern, attractive destination. We focus on high contrast, readability, and extreme clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                className="group relative p-8 border border-white/10 bg-[#111111] hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer flex flex-col items-start gap-8 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Hover line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-acid scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                
                <div className="p-4 rounded-lg bg-white/5 text-brand-offwhite group-hover:bg-brand-acid group-hover:text-black transition-colors duration-500">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-brand-offwhite group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-brand-offwhite/50 group-hover:text-brand-offwhite/80 transition-colors duration-500 font-body leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
