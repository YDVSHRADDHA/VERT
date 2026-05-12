import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold font-heading tracking-widest text-brand-offwhite">
            VERT<span className="text-brand-acid">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-brand-offwhite/80">
            <a href="#services" className="hover:text-brand-acid transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-brand-acid transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-brand-acid transition-colors">Pricing</a>
          </div>
          <button className="bg-brand-acid text-brand-black px-6 py-2 font-bold hover:bg-white transition-colors text-sm uppercase tracking-wider">
            WhatsApp Us
          </button>
        </div>
      </nav>

      <Hero />
      <TrustBar />

      {/* BEFORE / AFTER SLIDER PLACEHOLDER */}
      <section className="py-24 bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-brand-offwhite">
            See the <span className="text-brand-acid">Difference.</span>
          </h2>
          <div className="w-full max-w-5xl mx-auto h-[60vh] bg-brand-gray/30 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            {/* Split simulation */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000')] bg-cover bg-center grayscale opacity-40">
              <div className="absolute top-8 left-8 bg-black/80 px-4 py-2 font-bold text-white uppercase text-sm tracking-widest">Before</div>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000')] bg-cover bg-center opacity-90 border-l-2 border-brand-acid shadow-[-10px_0_20px_rgba(166,255,0,0.1)]">
               <div className="absolute top-8 right-8 bg-brand-acid px-4 py-2 font-bold text-black uppercase text-sm tracking-widest">After</div>
            </div>
            {/* Slider Handle */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-12 h-12 bg-brand-acid rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(166,255,0,0.4)]">
                 <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
          <p className="mt-8 text-brand-offwhite/50">Interactive comparison: Drag to reveal modern transformation.</p>
        </div>
      </section>

      <ServicesGrid id="services" />

      {/* PROCESS SECTION */}
      <section className="py-24 bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brand-offwhite">How it Works.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Submit Shop Photo", desc: "Send us a picture of your current storefront on WhatsApp." },
              { num: "02", title: "Receive Free Mockup", desc: "We'll send back a realistic 3D mockup of your new sign within 48h." },
              { num: "03", title: "Approve & Print", desc: "Once you love it, we provide print-ready files or connect you with local vendors." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4 border border-white/10 p-8 bg-brand-gray/10 relative">
                <div className="text-6xl font-heading font-bold text-brand-acid/20 absolute top-4 right-4">{step.num}</div>
                <div className="w-12 h-12 bg-brand-acid text-black flex items-center justify-center font-bold text-xl mb-4 relative z-10">{step.num}</div>
                <h3 className="text-2xl font-heading font-bold text-brand-offwhite relative z-10">{step.title}</h3>
                <p className="text-brand-offwhite/60 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="portfolio" className="py-24 bg-brand-black border-b border-white/10">
         <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-brand-offwhite">Recent Transformations.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { name: "Bombay Pharmacy", type: "Medical", color: "#A6FF00" },
               { name: "Urban Chai", type: "Cafe", color: "#FF3366" },
               { name: "Style Fix Salon", type: "Beauty", color: "#33CCFF" },
               { name: "Tech Point", type: "Mobile Repair", color: "#FF9933" }
             ].map((item, i) => (
               <div key={i} className="group relative aspect-[4/3] overflow-hidden bg-brand-gray/40 border border-white/10">
                  {/* Mock content */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 bg-gradient-to-br from-brand-gray/20 to-black/80">
                     <div className="text-4xl font-heading font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.name}</div>
                     <div className="px-4 py-1 border text-sm font-bold tracking-wider" style={{ borderColor: item.color, color: item.color }}>{item.type}</div>
                  </div>
                  <div className="absolute inset-0 bg-brand-acid translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center items-center text-black p-8 text-center">
                    <h4 className="text-3xl font-heading font-bold mb-2">{item.name}</h4>
                    <p className="font-bold mb-6">Complete visual overhaul & neon signage</p>
                    <button className="flex items-center gap-2 border-b-2 border-black pb-1 font-bold uppercase tracking-wider">
                      View Case Study <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
               </div>
             ))}
          </div>
         </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-brand-offwhite">Simple, transparent pricing.</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Basic */}
             <div className="border border-white/10 p-8 flex flex-col gap-6 bg-brand-gray/10">
                <div className="text-xl font-bold uppercase tracking-widest text-brand-offwhite/60">Start</div>
                <div className="text-5xl font-heading font-bold text-brand-offwhite">₹999</div>
                <p className="text-brand-offwhite/60 border-b border-white/10 pb-6">Perfect for small shops needing a quick facelift.</p>
                <ul className="flex flex-col gap-4 flex-1">
                  {['Basic redesign', 'JPG preview', '1 revision'].map((f,i)=>(
                    <li key={i} className="flex items-center gap-3 text-brand-offwhite/80">
                      <CheckCircle2 className="w-5 h-5 text-brand-acid" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-brand-offwhite/20 text-brand-offwhite font-bold hover:bg-white/5 transition-colors">Choose Start</button>
             </div>

             {/* Pro */}
             <div className="border border-brand-acid p-8 flex flex-col gap-6 bg-brand-acid/5 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-acid text-black px-4 py-1 font-bold text-sm uppercase tracking-widest">Recommended</div>
                <div className="text-xl font-bold uppercase tracking-widest text-brand-acid">Pro</div>
                <div className="text-5xl font-heading font-bold text-brand-offwhite">₹2999</div>
                <p className="text-brand-offwhite/60 border-b border-white/10 pb-6">Complete visual system for serious businesses.</p>
                <ul className="flex flex-col gap-4 flex-1">
                  {['Full storefront system', 'Realistic 3D Mockups', 'Print-ready exports', '3 revisions', 'Source files'].map((f,i)=>(
                    <li key={i} className="flex items-center gap-3 text-brand-offwhite">
                      <CheckCircle2 className="w-5 h-5 text-brand-acid" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-brand-acid text-black font-bold hover:bg-white transition-colors shadow-[0_0_30px_rgba(166,255,0,0.1)]">Choose Pro</button>
             </div>

             {/* Full Install */}
             <div className="border border-white/10 p-8 flex flex-col gap-6 bg-brand-gray/10">
                <div className="text-xl font-bold uppercase tracking-widest text-brand-offwhite/60">Full Install</div>
                <div className="text-5xl font-heading font-bold text-brand-offwhite">₹6999+</div>
                <p className="text-brand-offwhite/60 border-b border-white/10 pb-6">End-to-end design and installation coordination.</p>
                <ul className="flex flex-col gap-4 flex-1">
                  {['Custom Design', 'Print coordination', 'Vendor support', 'Installation guidance'].map((f,i)=>(
                    <li key={i} className="flex items-center gap-3 text-brand-offwhite/80">
                      <CheckCircle2 className="w-5 h-5 text-brand-acid" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-brand-offwhite/20 text-brand-offwhite font-bold hover:bg-white/5 transition-colors">Contact Us</button>
             </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-brand-offwhite text-center">Trusted by Local Owners.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Since installing our new glow sign, walk-ins have literally doubled. People stop to take photos now.", author: "Rajesh S.", business: "Urban Chai", bg: "bg-brand-gray/20" },
              { text: "VERT made the whole process effortless. The 3D mockup showed exactly what we were getting. So premium.", author: "Anjali M.", business: "Style Fix Salon", bg: "bg-brand-acid/5 border border-brand-acid/30" },
              { text: "Best investment for my shop. Finally looks like a trusted modern brand, not just another store.", author: "Vikram P.", business: "Bombay Pharmacy", bg: "bg-brand-gray/20" }
            ].map((t, i) => (
              <div key={i} className={`p-8 border border-white/10 ${t.bg}`}>
                <div className="flex gap-1 text-brand-acid mb-6">
                  {[...Array(5)].map((_,j) => <span key={j}>★</span>)}
                </div>
                <p className="text-xl font-bold font-heading text-brand-offwhite mb-8 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-brand-offwhite">{t.author}</div>
                  <div className="text-brand-offwhite/50 text-sm">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-black border-b border-white/10">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-brand-offwhite text-center">Questions? Answered.</h2>
           <div className="flex flex-col gap-4">
              {[
                { q: "How long does the mockup take?", a: "You'll receive your first high-quality 3D mockup within 48 hours of submitting your shop photo." },
                { q: "Do you support Hindi typography?", a: "Yes. We specialize in dual-language (Hindi + English) modern typography systems." },
                { q: "Do you print and install?", a: "We provide print-ready files and connect you with verified local printers for our Start and Pro tiers. Full Install covers everything end-to-end." },
                { q: "How many revisions do I get?", a: "Our Pro plan includes up to 3 revisions to make sure your storefront is perfect." }
              ].map((faq, i) => (
                <div key={i} className="border border-white/10 p-6 bg-brand-gray/5">
                  <h3 className="text-xl font-bold font-heading text-brand-offwhite mb-3 flex gap-3">
                    <span className="text-brand-acid">Q.</span> {faq.q}
                  </h3>
                  <p className="text-brand-offwhite/70 pl-8 font-body leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-brand-acid text-black text-center px-6">
         <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight">Your storefront is your <br />first impression.</h2>
         <p className="text-xl mb-12 max-w-2xl mx-auto font-bold opacity-80">Stop losing customers to bad signage. Upgrade your shop's visual identity today.</p>
         <button className="bg-black text-white px-12 py-5 text-xl font-bold hover:bg-white hover:text-black transition-colors shadow-2xl">
           Get Free Shop Mockup
         </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-brand-offwhite py-16 border-t border-white/10">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-3xl font-bold font-heading tracking-widest text-brand-offwhite mb-6">
                VERT<span className="text-brand-acid">.</span>
              </div>
              <p className="text-brand-offwhite/50">Transforming local commerce through high-contrast visual identity systems.</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-brand-offwhite/60">
                <li><a href="#" className="hover:text-brand-acid">Home</a></li>
                <li><a href="#portfolio" className="hover:text-brand-acid">Portfolio</a></li>
                <li><a href="#services" className="hover:text-brand-acid">Services</a></li>
                <li><a href="#pricing" className="hover:text-brand-acid">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Contact</h4>
              <ul className="flex flex-col gap-3 text-brand-offwhite/60">
                <li>Mumbai, India</li>
                <li>hello@vert.studio</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Socials</h4>
              <ul className="flex flex-col gap-3 text-brand-offwhite/60">
                <li><a href="#" className="hover:text-brand-acid">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-acid">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-acid">Twitter</a></li>
              </ul>
            </div>
         </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <div className="fixed bottom-8 right-8 z-50">
         <button className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
           <MessageSquare className="w-8 h-8" />
         </button>
      </div>
    </main>
  );
}
