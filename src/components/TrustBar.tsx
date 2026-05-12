import { Clock, FileCheck, Languages, MapPin, MonitorPlay } from "lucide-react";

const trustItems = [
  { icon: Clock, text: "48 Hour Delivery" },
  { icon: FileCheck, text: "Print-Ready Files" },
  { icon: Languages, text: "Hindi + English Support" },
  { icon: MapPin, text: "Local Print Coordination" },
  { icon: MonitorPlay, text: "Free First Mockup" },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-brand-acid text-brand-black py-6 border-y border-brand-black/10">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 font-bold text-sm md:text-base uppercase tracking-wider">
                <Icon className="w-5 h-5" strokeWidth={2.5} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
