import React from 'react';
import { Award, ShieldCheck, Building2, Leaf, FileCheck, HardHat } from 'lucide-react';

const badges = [
  { name: "NADCA Certified", icon: Award },
  { name: "BBB Accredited Business", icon: ShieldCheck },
  { name: "Schuylkill County Chamber", icon: Building2 },
  { name: "EPA Universal Certified", icon: Leaf },
  { name: "PA COSTARS Vendor", icon: FileCheck },
  { name: "OSHA-30 Certified", icon: HardHat }
];

// Quadruple the list to ensure seamless looping on large screens (4k+)
const displayBadges = [...badges, ...badges, ...badges, ...badges];

export const Accreditations: React.FC = () => {
  return (
    <section className="w-full pt-[80px] pb-[60px] bg-[#F2F6F5] border-b border-[#D7DDDA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        {/* Section Title */}
        <h3 className="text-center text-sm font-bold tracking-[1.2px] text-[#5E7A86] uppercase">
          Accreditations & Certifications
        </h3>
      </div>
      
      {/* Marquee Container with Fade Mask */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {/* Scrolling Track */}
        <div 
          className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused] pr-8 py-4"
        >
          {displayBadges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center flex-shrink-0 bg-white border border-[#D7DDDA] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-7 py-5 group hover:border-[#265A4A] hover:scale-[1.03] transition-all duration-300 transform origin-center cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex-shrink-0 bg-[#F7F9F8] border border-[#D7DDDA] rounded-md flex items-center justify-center group-hover:bg-[#265A4A]/5 group-hover:border-[#265A4A]/20 transition-colors">
                <badge.icon className="w-6 h-6 text-[#265A4A]" strokeWidth={1.5} />
              </div>
              
              {/* Certification Label */}
              <span className="ml-4 text-base font-medium text-[#1F2937] whitespace-nowrap group-hover:text-[#265A4A] transition-colors">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Subtext - Tagline */}
      <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
        <p className="text-[#5E7A86] text-lg md:text-[20px] font-semibold leading-relaxed">
          Trusted by hospitals · labs · government agencies · industrial facilities across the Mid-Atlantic
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Move exactly one set's width */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};