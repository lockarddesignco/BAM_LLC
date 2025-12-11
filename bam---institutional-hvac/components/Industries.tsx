import React from 'react';
import { Stethoscope, GraduationCap, Landmark, Factory, Building, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const industries = [
  {
    title: "Healthcare Facilities",
    description: "Hospitals, surgical suites, labs, and critical-care environments requiring ASHRAE-aligned HVAC performance.",
    icon: Stethoscope
  },
  {
    title: "Education — K–12 & Higher Ed",
    description: "Campus buildings, classrooms, gyms, and large HVAC systems serving high-occupancy environments.",
    icon: GraduationCap
  },
  {
    title: "Government & Municipal",
    description: "Courthouses, federal buildings, correctional facilities, and secure sites with strict compliance requirements.",
    icon: Landmark
  },
  {
    title: "Industrial & Manufacturing",
    description: "Production floors, warehouses, high-load mechanical environments, and high-static-pressure systems.",
    icon: Factory
  },
  {
    title: "Commercial Properties",
    description: "Retail buildings, multi-tenant facilities, and large mechanical rooms with complex airflow demands.",
    icon: Building
  },
  {
    title: "Senior Care / Assisted Living",
    description: "Long-term care environments with sensitive air-quality and comfort standards.",
    icon: HeartHandshake
  }
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="relative py-24 bg-[#F7F9F8]">
      
      {/* Background Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#5E7A86 1px, transparent 1px), linear-gradient(90deg, #5E7A86 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#5E7A86] mb-3 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-[#5E7A86] font-light opacity-90">
            Trusted in mission-critical environments across the Mid-Atlantic.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border border-[#D7DDDA] rounded-sm p-8 transition-all duration-300 hover:border-[#265A4A] hover:shadow-[0_8px_24px_rgba(38,90,74,0.08)] cursor-pointer h-full"
            >
              {/* Icon */}
              <div className="mb-6 self-start">
                <item.icon 
                  className="w-10 h-10 text-[#265A4A] transform transition-transform duration-300 group-hover:scale-[1.06]" 
                  strokeWidth={1.2} 
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#265A4A] mb-3 transition-colors duration-300 group-hover:text-[#1e483b]">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#5E7A86] text-base leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-auto flex items-center text-[#265A4A] font-semibold text-sm opacity-90 group-hover:opacity-100 transition-all duration-300">
                <span className="border-b-2 border-transparent group-hover:border-[#A7D7C5] transition-all duration-300 pb-0.5">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-[#D7DDDA]/50">
           <Button variant="primary" size="lg" className="rounded-sm shadow-md font-bold min-w-[220px]">
             Find Your Industry
           </Button>
           <Button variant="outline" size="lg" className="rounded-sm font-bold min-w-[220px]">
             View All Industries
           </Button>
        </div>
      </div>
    </section>
  );
};