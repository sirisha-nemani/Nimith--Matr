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

export const servicesList = [
  { title: "Funnel Strategy", desc: "ICP • offer • journey • KPIs", icon: <Filter size={18} /> },
  { title: "Demand Validation", desc: "pages • forms • conversion fixes", icon: <Box size={18} /> },
  { title: "Performance Ads", desc: "pages • forms • conversion fixes", icon: <Monitor size={18} /> },
  { title: "Landing Page & CRO", desc: "pages • forms • conversion fixes", icon: <MessageSquare size={18} /> },
  { title: "CRM & Analytics", desc: "pages • forms • conversion fixes", icon: <BarChart2 size={18} /> },
  { title: "Fractional Growth", desc: "pages • forms • conversion fixes", icon: <TrendingUp size={18} /> },
];

const Services = () => {
  
  return (
    <section className="bg-white py-12 md:py-16 flex justify-center">
      {/* Setting the width of each component to occupy 85% of the screen */}
      <div className="max-w-[1100px] w-[85%] mx-auto ">
        
        {/* Section Header */}
        <h3 className="text-3xl font-semibold text-black tracking-tight mb-8">
          Services
        </h3>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 ">
          {/* first the first item with index 0 will be rendered onto the screen */}
          {servicesList.map((service, index) => (
            /* Card Styling
            */
            <div 
              key={index} 
              className="group border-2 border-red-600 rounded-2xl px-4 py-3 flex items-center justify-between hover:bg-red-700/17 transition-all cursor-pointer "
            >
              <div className="flex items-center gap-3 overflow-hidden ">
                {/* Slimmed down Icon section */}
                <div className="w-9 h-9 bg-[#E63946] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-red-100">
                  {service.icon}
                </div>

                {/* Text section */}
                <div className="min-w-0">
                  <h4 className="text-[16px] font-bold text-black leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-[13px] text-neutral-500 font-medium leading-tight truncate">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              {/* Interaction Arrow */}
              <ArrowRight 
                size={16} 
                className="text-neutral-400 group-hover:text-[#E63946] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2 " 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;