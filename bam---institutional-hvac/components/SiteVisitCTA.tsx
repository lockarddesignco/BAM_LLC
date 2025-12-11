import React from 'react';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const SiteVisitCTA: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0B1110] pt-24 pb-20 border-t border-[#A7D7C5]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Copy & Value Props */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="text-[#A7D7C5] font-bold text-xs tracking-[0.12em] uppercase mb-4 block">
                Ready for a Facility-Grade Assessment?
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight mb-6">
                Request a Site Visit for Your Facility.
              </h2>
              <p className="text-[#5E7A86] text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Get a compliance-focused HVAC and air-quality assessment for your hospital, school, government building, or industrial site. No fluff, just a clear plan of action.
              </p>
            </div>

            <ul className="space-y-4 mt-2">
              {[
                "On-site inspection by restoration-focused HVAC specialists",
                "Photo documentation and preliminary findings",
                "Clear recommendations for restoration, IAQ, and long-term asset protection"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A7D7C5] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-[#D7DDDA] text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA Action Block */}
          <div className="w-full lg:max-w-md lg:ml-auto">
            <div className="bg-[#141A19] border border-[#265A4A]/30 rounded-lg p-8 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-6">
                Schedule your assessment
              </h3>
              
              <div className="space-y-4">
                {/* Simulated Input for "Institutional" feel (Optional per prompt, adding for completeness/seriousness) */}
                <div className="space-y-1">
                   <label htmlFor="email" className="text-[#5E7A86] text-xs font-semibold uppercase tracking-wider">Work Email</label>
                   <input 
                      type="email" 
                      id="email"
                      placeholder="name@facility.org" 
                      className="w-full bg-[#0B1110] border border-[#265A4A]/50 rounded text-white px-4 py-3 focus:outline-none focus:border-[#A7D7C5] transition-colors placeholder-[#5E7A86]/50"
                   />
                </div>

                <Button 
                  fullWidth 
                  size="lg"
                  className="!bg-[#A7D7C5] !text-[#0B1110] hover:!bg-white font-bold tracking-wide shadow-lg shadow-[#A7D7C5]/10"
                >
                  Request a Site Visit
                </Button>
              </div>

              {/* Secondary Contact Info */}
              <div className="mt-8 pt-6 border-t border-[#265A4A]/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                 <div className="p-2.5 bg-[#0B1110] rounded-full border border-[#265A4A]/30 text-[#A7D7C5]">
                    <Phone className="w-4 h-4" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[#5E7A86] text-xs font-medium mb-0.5">Prefer to talk it through?</span>
                    <a href="tel:570-900-5827" className="text-[#D7DDDA] hover:text-white font-semibold text-sm transition-colors">
                       Call (570) 900-5827 to discuss your facility.
                    </a>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};