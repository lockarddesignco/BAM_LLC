import React from 'react';
import { Phone, Mail, MapPin, Linkedin, ArrowRight, ShieldCheck, Twitter, Facebook, Clock } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#265A4A] text-[#F7F9F8] border-t border-[#A7D7C5]/20 overflow-hidden font-sans">
      {/* Background Pattern: Subtle institutional grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#A7D7C5 1px, transparent 1px), linear-gradient(90deg, #A7D7C5 1px, transparent 1px)`, 
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Identity (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            {/* Logo Lockup */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 transition-transform duration-500 group-hover:rotate-180">
                 <svg viewBox="0 0 100 100" className="w-full h-full" aria-labelledby="footerLogo">
                   <title id="footerLogo">BAM Logo</title>
                   <circle cx="50" cy="50" r="48" fill="#F7F9F8" />
                   <circle cx="50" cy="50" r="43" fill="none" stroke="#265A4A" strokeWidth="5" strokeDasharray="4 3" />
                   <circle cx="50" cy="50" r="38" fill="#F7F9F8" />
                   <text x="50" y="63" fontSize="34" fontWeight="800" fill="#265A4A" textAnchor="middle" fontFamily="sans-serif" style={{ letterSpacing: '-1px' }}>BAM</text>
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-white leading-none">BAM</span>
                <span className="text-[10px] text-[#A7D7C5] uppercase tracking-wider font-bold mt-1">Building & Air Maintenance</span>
              </div>
            </div>

            <p className="text-[#D7DDDA] text-sm leading-relaxed max-w-sm opacity-90">
              Serving all of Pennsylvania with emphasis on commercial, healthcare, and government facilities in Central and Eastern PA.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e483b] rounded-full border border-[#A7D7C5]/20 mt-2">
                <ShieldCheck className="w-4 h-4 text-[#A7D7C5]" />
                <span className="text-xs font-semibold text-[#D7DDDA] tracking-wide">NADCA & ASHRAE Member</span>
             </div>

            <div className="flex gap-3 pt-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-sm bg-[#1e483b] border border-[#A7D7C5]/20 flex items-center justify-center text-[#A7D7C5] hover:bg-[#A7D7C5] hover:text-[#265A4A] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {['Coil Restoration', 'Duct Cleaning', 'Cooling Towers', 'IAQ Monitoring', 'Compliance Testing', 'Filter Management'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#D7DDDA] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 text-[#A7D7C5]">- </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Sectors</h4>
            <ul className="space-y-3">
              {['Healthcare', 'Education', 'Government', 'Industrial', 'Commercial Real Estate', 'Life Sciences'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#D7DDDA] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 text-[#A7D7C5]">- </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & CTA (Span 3) */}
          <div className="lg:col-span-3">
             <h4 className="text-[#A7D7C5] font-bold text-xs uppercase tracking-[0.15em] mb-6">Contact Us</h4>
             <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4 text-[#D7DDDA]">
                  <div className="p-2 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0 mt-[-4px]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    <strong>Headquarters</strong><br/>
                    196 Dadburnhams Road<br/>
                    Pine Grove, PA 17963
                  </span>
                </li>
                <li className="flex items-center gap-4 text-[#D7DDDA]">
                  <div className="p-2 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:570-900-5827" className="text-sm hover:text-white transition-colors font-medium tracking-wide">(570) 900-5827</a>
                </li>
                <li className="flex items-center gap-4 text-[#D7DDDA]">
                  <div className="p-2 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:kyle@buildingandair.com" className="text-sm hover:text-white transition-colors">kyle@buildingandair.com</a>
                </li>
                <li className="flex items-start gap-4 text-[#D7DDDA]">
                   <div className="p-2 bg-[#1e483b] rounded-sm text-[#A7D7C5] shrink-0 mt-[-4px]">
                      <Clock className="w-4 h-4" />
                   </div>
                   <span className="text-sm leading-relaxed">
                      Mon – Fri: 7:00 AM – 5:00 PM<br/>
                      Sat – Sun: By appointment
                   </span>
                </li>
             </ul>

             <Button 
                variant="primary" 
                size="lg" 
                className="!bg-[#A7D7C5] !text-[#265A4A] hover:!bg-white font-bold w-full sm:w-auto shadow-[0_10px_30px_-10px_rgba(167,215,197,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(167,215,197,0.6)] border-none group transform hover:-translate-y-1 transition-all duration-300"
             >
                <span className="text-lg tracking-wide">Request a Site Visit</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#A7D7C5]/10 bg-[#1e483b]/30 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D7DDDA]/60">
          <p>© {new Date().getFullYear()} Building & Air Maintenance, LLC. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-[#A7D7C5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A7D7C5] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#A7D7C5] transition-colors">Sitemap</a>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};