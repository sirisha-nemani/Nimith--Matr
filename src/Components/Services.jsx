import React from "react";
import { 
  ArrowRight, 
  Filter, 
  Box, 
  Monitor, 
  MessageSquare, 
  TrendingUp, 
  BarChart2 
} from "lucide-react";

const servicesList = [
  { title: "Funnel Strategy", desc: "ICP • offer • journey • KPIs", icon: <Filter size={20} /> },
  { title: "Demand Validation", desc: "pages • forms • conversion fixes", icon: <Box size={20} /> },
  { title: "Performance Ads", desc: "pages • forms • conversion fixes", icon: <Monitor size={20} /> },
  { title: "Landing Page & CRO", desc: "pages • forms • conversion fixes", icon: <MessageSquare size={20} /> },
  { title: "CRM & Analytics", desc: "pages • forms • conversion fixes", icon: <BarChart2 size={20} /> },
  { title: "Fractional Growth", desc: "pages • forms • conversion fixes", icon: <TrendingUp size={20} /> },
];

const Services = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <h3 className="text-xl md:text-3xl font-semibold text-black tracking-tight mb-12 ">
          Services
        </h3>
        
        {/* Responsive Grid: 1 col (mobile), 2 col (tablet), 3 col (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group border-2 border-red-600 rounded-[22px] px-6 py-5 flex items-center justify-between hover:bg-red-50/50 hover:border-red-600 hover:shadow-xl hover:shadow-red-500/5 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/*Icon section in the card*/}

                <div className="w-11 h-11 bg-[#E63946] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-red-200 ">
                  {service.icon}
                </div>
                {/* Text section in the card*/}
                <div className="space-y-0.5">
                  <h4 className="text-[15px] font-semibold text-black leading-snug">
                    {service.title}
                  </h4>
                  {/*The description */}
                  <p className="text-[12px] text-neutral-600 font-medium leading-tight">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              {/* Contextual Interaction Arrow */}
              <ArrowRight 
                size={20} 
                className="text-neutral-500 group-hover:text-[#E63946] " 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;