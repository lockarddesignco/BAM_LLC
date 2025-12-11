import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ShieldCheck, Wind, HardHat, ChevronDown, ChevronRight, FileText, Download, Activity, Zap, Thermometer } from 'lucide-react';
import { Button } from './Button';

// --- Navigation Data Structure ---

type NavItem = {
  label: string;
  href: string;
  type: 'mega' | 'dropdown' | 'link';
  columns?: {
    title?: string;
    items: { label: string; href: string; icon?: React.ElementType }[];
  }[];
};

const navData: NavItem[] = [
  {
    label: 'Services',
    href: '#services',
    type: 'mega',
    columns: [
      {
        title: "Core Services",
        items: [
          { label: "Cooling Tower Restoration", href: "#" },
          { label: "Chiller Restoration", href: "#" },
          { label: "AHU & Coil Restoration", href: "#" },
          { label: "NADCA-Aligned Duct Cleaning", href: "#" },
          { label: "Commercial Indoor Air Quality", href: "#" },
          { label: "Mold Remediation (Commercial)", href: "#" },
          { label: "Preventive Maintenance Programs", href: "#" },
        ]
      },
      {
        title: "Specialty Services",
        items: [
          { label: "Epoxy Coating & Lining", href: "#" },
          { label: "Tube Brushing & Descaling", href: "#" },
          { label: "Cooling Tower Basin Restoration", href: "#" },
          { label: "HEPA & Filter Management", href: "#" },
          { label: "UV-C & Air Purification", href: "#" },
          { label: "Fire Damper Compliance", href: "#" },
          { label: "IAQ Monitoring & Reporting", href: "#" },
        ]
      }
    ]
  },
  {
    label: 'Industries',
    href: '#industries',
    type: 'mega',
    columns: [
      {
        items: [
          { label: "Healthcare", href: "#" },
          { label: "Education — K–12 & Higher Ed", href: "#" },
          { label: "Government & Municipal", href: "#" },
          { label: "Industrial & Manufacturing", href: "#" },
        ]
      },
      {
        items: [
          { label: "Commercial Properties", href: "#" },
          { label: "Retail & Chain Stores", href: "#" },
          { label: "Senior Care / Assisted Living", href: "#" },
          { label: "Life Sciences & Labs", href: "#" },
          { label: "Cold Storage", href: "#" },
        ]
      }
    ]
  },
  {
    label: 'Case Studies',
    href: '#case-studies',
    type: 'link'
  },
  {
    label: 'Resources',
    href: '#resources',
    type: 'dropdown',
    columns: [
      {
        items: [
          { label: "Capabilities Statement (PDF)", href: "#", icon: Download },
          { label: "Energy Savings Guide", href: "#", icon: Zap },
          { label: "Legionella Prevention Brief", href: "#", icon: Activity },
          { label: "IAQ Technical Brief", href: "#", icon: Wind },
          { label: "Thermal Imaging Gallery", href: "#", icon: Thermometer },
          { label: "Pilot Program Overview", href: "#", icon: FileText },
        ]
      }
    ]
  },
  {
    label: 'About',
    href: '#about',
    type: 'dropdown',
    columns: [
      {
        items: [
          { label: "Our Story", href: "#" },
          { label: "The BAM Standard", href: "#" },
          { label: "The BAM Method", href: "#" },
          { label: "Certifications & Compliance", href: "#" },
          { label: "Careers", href: "#" },
        ]
      }
    ]
  },
  {
    label: 'Contact',
    href: '#contact',
    type: 'dropdown',
    columns: [
      {
        items: [
          { label: "Request a Site Visit", href: "#" },
          { label: "Service Areas", href: "#" },
          { label: "Location & Hours", href: "#" },
        ]
      }
    ]
  }
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileItem = (label: string) => {
    if (mobileExpandedItem === label) {
      setMobileExpandedItem(null);
    } else {
      setMobileExpandedItem(label);
    }
  };

  return (
    <>
      {/* --- Top Authority Bar --- */}
      <div className="w-full bg-[#0B1110] border-b border-[#265A4A]/30 min-h-[44px] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 relative z-50 py-2 md:py-0 transition-all duration-300 font-sans">
        
        {/* Left: Territory */}
        <div className="flex items-center gap-2 mb-1 md:mb-0">
           <MapPin className="w-3.5 h-3.5 text-[#A7D7C5]" />
           <span className="text-[11px] md:text-xs font-bold tracking-widest text-[#D7DDDA] uppercase">
             Serving PA • NJ • MD • DE • NY
           </span>
        </div>

        {/* Right: Credentials */}
        <div className="flex items-center gap-4 md:gap-6">
           <div className="flex items-center gap-1.5 opacity-90 group cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">NADCA Certified</span>
           </div>
           
           <div className="hidden md:block w-px h-3 bg-[#265A4A]/50"></div>
           
           <div className="flex items-center gap-1.5 opacity-90 group cursor-default">
              <Wind className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">ASHRAE Member</span>
           </div>

           <div className="hidden md:block w-px h-3 bg-[#265A4A]/50"></div>

           <div className="hidden sm:flex items-center gap-1.5 opacity-90 group cursor-default">
              <HardHat className="w-3.5 h-3.5 text-[#A7D7C5] group-hover:text-white transition-colors" />
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[#5E7A86] group-hover:text-[#A7D7C5] transition-colors uppercase">OSHA-30</span>
           </div>
        </div>
      </div>

      {/* --- Main Header Container - Sticky --- */}
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-[#1e483b] font-sans ${
          isScrolled || isMobileMenuOpen ? 'bg-[#265A4A]/98 backdrop-blur-md shadow-lg' : 'bg-[#265A4A]'
        }`}
      >
        <div className="w-full px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                 <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm" aria-labelledby="logoTitle">
                   <title id="logoTitle">BAM Logo</title>
                   <circle cx="50" cy="50" r="48" fill="#265A4A" stroke="#374151" strokeOpacity="0.2" strokeWidth="1" />
                   <circle cx="50" cy="50" r="43" fill="none" stroke="#A7D7C5" strokeWidth="5" strokeDasharray="4 3" />
                   <circle cx="50" cy="50" r="38" fill="#265A4A" />
                   <text x="50" y="63" fontSize="34" fontWeight="800" fill="#F7F9F8" textAnchor="middle" fontFamily="sans-serif" style={{ letterSpacing: '-1px' }}>BAM</text>
                 </svg>
              </div>

              <div className="h-12 w-[1.5px] bg-[#A7D7C5]/50 mx-4 md:mx-6 rounded-full hidden sm:block"></div>

              <div className="flex flex-col justify-center pl-2 sm:pl-0">
                <span className="text-sm md:text-lg font-bold uppercase tracking-widest text-[#F7F9F8] leading-tight drop-shadow-sm">
                  Building & <br className="hidden md:inline" />Air Maintenance
                </span>
              </div>
            </div>

            {/* --- Desktop Navigation --- */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navData.map((item) => (
                <div key={item.label} className="relative group">
                  <a 
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-bold text-[#D7DDDA] hover:text-white transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                    {item.type !== 'link' && <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </a>

                  {/* Mega Menu / Dropdown Container */}
                  {item.type !== 'link' && item.columns && (
                    <div className="absolute top-full left-0 mt-0 w-max min-w-[200px] max-w-screen-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {/* Spacer to bridge hover gap */}
                      <div className="h-4 w-full bg-transparent"></div>
                      
                      {/* Menu Body */}
                      <div className="bg-white border-t-4 border-[#265A4A] shadow-2xl rounded-b-sm overflow-hidden">
                         <div className={`grid ${item.columns.length > 1 ? 'grid-cols-2 gap-12 p-8' : 'grid-cols-1 p-6'} min-w-[${item.type === 'mega' ? '600px' : '260px'}]`}>
                            {item.columns.map((col, idx) => (
                              <div key={idx} className="flex flex-col space-y-4">
                                {col.title && (
                                  <h4 className="text-[#265A4A] font-bold text-xs uppercase tracking-[0.15em] border-b border-[#D7DDDA] pb-2 mb-2">
                                    {col.title}
                                  </h4>
                                )}
                                <ul className="space-y-3">
                                  {col.items.map((subItem, sIdx) => (
                                    <li key={sIdx}>
                                      <a href={subItem.href} className="group/item flex items-center text-[#5E7A86] hover:text-[#265A4A] transition-colors text-sm font-medium">
                                        {subItem.icon && <subItem.icon className="w-4 h-4 mr-2 text-[#A7D7C5] group-hover/item:text-[#265A4A] transition-colors" />}
                                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">{subItem.label}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                         </div>
                         {/* Bottom Accent */}
                         <div className="bg-[#F7F9F8] py-2 px-6 border-t border-[#D7DDDA] text-right">
                            <span className="text-[10px] uppercase font-bold text-[#A7D7C5] tracking-widest">Institutional Grade Service</span>
                         </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* --- Right Actions (Desktop) --- */}
            <div className="hidden xl:flex items-center gap-6 pl-6 ml-2 border-l border-[#A7D7C5]/20">
              <a href="tel:570-900-5827" className="flex items-center gap-2 text-[#A7D7C5] hover:text-white transition-colors font-bold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>(570) 900-5827</span>
              </a>

              <Button 
                  variant="primary" 
                  size="sm" 
                  animated={false}
                  onClick={() => console.log('CTA Clicked')}
                  className="!bg-white !text-[#265A4A] hover:!bg-[#F7F9F8] border-none font-bold shadow-md tracking-wide"
              >
                Request a Site Visit
              </Button>
            </div>

            {/* --- Mobile Menu Toggle --- */}
            <div className="xl:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#A7D7C5] p-2 focus:outline-none hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Navigation Drawer --- */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[96px] left-0 w-full h-[calc(100vh-96px)] bg-[#265A4A] border-t border-[#1e483b] overflow-y-auto animate-in slide-in-from-right-5 duration-300">
            <div className="flex flex-col p-6 pb-24 space-y-2">
              
              {navData.map((item) => (
                <div key={item.label} className="border-b border-[#1e483b]/50">
                  {item.type === 'link' ? (
                     <a 
                       href={item.href} 
                       className="flex items-center justify-between py-4 text-lg font-bold text-white uppercase tracking-wider"
                       onClick={() => setIsMobileMenuOpen(false)}
                     >
                       {item.label}
                     </a>
                  ) : (
                    <>
                      <button 
                        onClick={() => toggleMobileItem(item.label)}
                        className="w-full flex items-center justify-between py-4 text-lg font-bold text-white uppercase tracking-wider focus:outline-none"
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 text-[#A7D7C5] transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Accordion Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${mobileExpandedItem === item.label ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-[#1e483b]/50 rounded-sm p-4 space-y-6">
                           {item.columns?.map((col, cIdx) => (
                             <div key={cIdx} className="space-y-3">
                               {col.title && (
                                 <h5 className="text-[#A7D7C5] text-xs font-bold uppercase tracking-[0.15em] opacity-80 mb-2">{col.title}</h5>
                               )}
                               <ul className="space-y-3 pl-2 border-l border-[#265A4A]">
                                 {col.items.map((subItem, sIdx) => (
                                   <li key={sIdx}>
                                     <a 
                                      href={subItem.href} 
                                      className="block text-[#D7DDDA] text-sm font-medium hover:text-white"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                     >
                                       {subItem.label}
                                     </a>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-8 space-y-4">
                <a href="tel:570-900-5827" className="flex items-center justify-center gap-3 text-white font-bold text-lg bg-[#1e483b] py-4 rounded-sm border border-[#A7D7C5]/20">
                    <Phone className="w-5 h-5 text-[#A7D7C5]" />
                    <span>(570) 900-5827</span>
                </a>

                <Button 
                  fullWidth 
                  variant="primary" 
                  animated={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="!bg-white !text-[#265A4A] font-bold py-4 text-lg shadow-lg"
                >
                  Request a Site Visit
                </Button>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
};