import React from 'react';
import { Button } from './Button';
import { ShieldCheck, Leaf, FileCheck, HardHat, Building2, Wind, Download, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[850px] lg:h-screen lg:max-h-[900px] flex flex-col font-sans overflow-hidden bg-[#0B1110]">
      
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Commercial Facility Facade"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Overlays - Darkened for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1110] via-[#0B1110]/95 to-[#0B1110]/50"></div>
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 lg:pt-0">
        
        {/* Left Column: Messaging */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-white">
           
           <div className="mb-6 flex items-center gap-3 opacity-80 animate-fade-in-up">
              <div className="h-[2px] w-12 bg-[#A7D7C5]"></div>
              <span className="text-[#A7D7C5] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Mission Critical HVAC Services</span>
           </div>

           <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
             PRECISION HVAC <br/>
             RESTORATION FOR <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D7C5] to-white">CRITICAL FACILITIES</span>
           </h1>
           
           <p className="text-lg md:text-xl text-[#D7DDDA] max-w-xl leading-relaxed font-light mb-10 border-l-2 border-[#265A4A] pl-6 animate-fade-in-up delay-200 drop-shadow-lg">
             Extend equipment life, improve indoor air quality, and support ASHRAE-aligned compliance across healthcare, education, government, and industrial environments.
           </p>

           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up delay-300">
             <Button size="lg" className="font-bold tracking-wide shadow-[0_4px_14px_0_rgba(167,215,197,0.39)] text-lg px-10 py-4 border-none">
               Request On-Site Assessment
             </Button>
             
             <button className="group flex items-center gap-2 text-[#A7D7C5] hover:text-white transition-all text-sm md:text-base font-medium">
               <span className="border-b border-transparent group-hover:border-[#A7D7C5] pb-0.5">Download Capabilities Statement</span>
               <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
             </button>
           </div>
        </div>

        {/* Right Column: Facility Assessment Request Form */}
        <div className="w-full lg:w-[500px] animate-fade-in-up delay-150">
           <div className="w-full bg-white shadow-2xl rounded-sm overflow-hidden border-t-[6px] border-[#265A4A]">
              
              <div className="bg-[#265A4A] px-8 py-6">
                 <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight">Facility Assessment Request</h3>
                 <p className="text-[#A7D7C5] text-xs md:text-sm font-medium mt-2 leading-relaxed opacity-90">
                   Schedule a compliant on-site evaluation with a certified HVAC restoration team.
                 </p>
              </div>

              <div className="p-6 md:p-8 bg-white">
                 <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                   <div>
                     <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Full Name</label>
                     <input type="text" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm" placeholder="Enter your full name" />
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Phone Number</label>
                       <input type="tel" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm" placeholder="Your Phone Number" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Email Address</label>
                       <input type="email" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm" placeholder="name@org.com" />
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Facility Type</label>
                        <div className="relative">
                          <select className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm appearance-none cursor-pointer">
                             <option value="" disabled selected>Select...</option>
                             <option value="hospital">Hospital / Healthcare</option>
                             <option value="university">University / Education</option>
                             <option value="government">Government</option>
                             <option value="industrial">Industrial</option>
                             <option value="commercial">Commercial</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Facility Size</label>
                        <input type="text" className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm" placeholder="Sq. Ft." />
                      </div>
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-[#5E7A86] uppercase tracking-wider mb-2">Notes / Known Issues</label>
                      <textarea rows={2} className="w-full bg-[#F7F9F8] border border-[#D7DDDA] focus:border-[#265A4A] px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors rounded-sm resize-none" placeholder="Briefly describe the issues..."></textarea>
                   </div>

                   <div className="pt-2">
                      <Button fullWidth size="lg" className="rounded-sm font-bold uppercase tracking-wider py-4 shadow-md transition-all hover:shadow-lg text-base">
                        Request Site Visit
                      </Button>
                   </div>
                 </form>

                 <div className="mt-6 pt-5 border-t border-[#D7DDDA] grid grid-cols-3 sm:grid-cols-6 gap-2 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-col items-center gap-1 group" title="NADCA Certified">
                      <ShieldCheck className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">NADCA</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group" title="ASHRAE Member">
                      <Wind className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">ASHRAE</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group" title="EPA Universal">
                      <Leaf className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">EPA</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group" title="OSHA-30 Certified">
                      <HardHat className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">OSHA</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group" title="PA COSTARS Vendor">
                      <FileCheck className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">COSTARS</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 group" title="Chamber Member">
                      <Building2 className="w-5 h-5 text-[#265A4A]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-[#5E7A86] group-hover:text-[#265A4A]">CHAMBER</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};