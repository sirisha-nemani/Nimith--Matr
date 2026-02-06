import React from "react";
import { ArrowRight, Check } from "lucide-react";

// Data defined locally
const outcomeList = [
  "Clear Ideal Customer Profile",
  "Lower CPL / CPQL via funnel fixes",
  "Better conversion with minimal pages",
  "Dashboards that founders actually use",
];



const Hero = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-100">
      <div className="max-w-[1280px] mx-auto px-6 py-12 lg:py-20">
        
        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-6 lg:gap-y-8 lg:gap-x-6 items-start mb-32">

          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8">
            
            {/* Full Funnel growth for founders */}
            <div className="min-w-[240px] flex items-center justify-center border border-red-200 bg-red-50/50 w-[370px] px-5 py-3 rounded-full transition-colors hover:bg-red-50">
              <span className="text-[#E63946] font-semibold text-xs tracking-widest text-center">
                Full Funnel growth for founders
              </span>
            </div>

            {/* main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-black leading-[1.1] tracking-tight">
              Scale outreach. <br />
              <span className="text-[#D32F2F]">Keep burn low.</span>
            </h1>

            {/*  Subheading */}
            <p className="text-neutral-500 text-base md:text-lg max-w-[480px] font-normal leading-relaxed">
              Nimith Matr designs lean marketing systems—strategy, funnel, and 
              execution—built for early-stage teams.
            </p>

            {/* Funnel Audit Button */}
            <button className="flex items-center justify-left bg-black text-white w-[370px] px-5 py-3 rounded-full group transition-all hover:bg-red-700 active:scale-[0.98] relative">
  <span className="text-base font-medium tracking-tight">
    Book a Funnel Audit
  </span>
  <ArrowRight
    size={18}
    className="absolute right-3.5 "
  />
</button>




            {/*More info row*/}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="border border-neutral-200 p-4 rounded-2xl min-w-[160px] flex-1">
                <p className="text-[10px] uppercase text-neutral-400 font-bold mb-1 tracking-widest">Focus</p>
                <p className="text-neutral-700 font-medium">Low-cost scale</p>
              </div>
              <div className="border border-neutral-200 p-4 rounded-2xl min-w-[160px] flex-1">
                <p className="text-[10px] uppercase text-neutral-400 font-bold mb-1 tracking-widest">Style</p>
                <p className="text-neutral-700 font-medium whitespace-nowrap">Test → Learn → Scale</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="w-full max-w-[420px] border border-red-100 rounded-[40px] p-8 md:p-10 bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-8">Typical outcomes</h3>
              
              <ul className="space-y-5 mb-10">
                {outcomeList.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="bg-black p-1 rounded flex-shrink-0 mt-1">
                      <Check size={12} className="text-white" strokeWidth={4} />
                    </div>
                    <span className="text-neutral-600 text-[15px] font-normal leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Best For Tag  */}
              <div className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/30">
                <p className="text-[10px] uppercase text-neutral-400 font-bold mb-1 tracking-widest">Best For</p>
                <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                  Bootstrapped, 0—Series A, capital-conscious teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;