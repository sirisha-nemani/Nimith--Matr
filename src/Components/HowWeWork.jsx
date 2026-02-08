import React from "react";
import { ArrowRight } from "lucide-react";
import { steps } from "../constants";

const HowWeWork = () => {

  return (
    <section className="w-full py-12 flex justify-center">
      
      {/* Outer Continer */}
      <div className="max-w-[1100px] w-[85%] mx-auto border border-neutral-300 rounded-[40px] py-10 px-6 md:px-10 lg:px-12 bg-white">
        
        {/* Grid styling
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left section : Content Text */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <h3 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
              How we work
            </h3>
            <p className="text-neutral-500 text-sm md:text-base max-w-[280px] leading-relaxed">
              A simple system founders can follow to achieve lean growth.
            </p>
          </div>

          {/* Right Sections : cards arranged one after the other */}
          <div className="lg:col-span-7 flex flex-col space-y-3 w-full">
            {/* Id is alredy specified, hence passing a single parameter */}
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group border-2 border-red-600 rounded-2xl px-4 py-3 flex items-center justify-between hover:bg-red-700/17 transition-all cursor-pointer"
              >
                {/* Content Wrapper */}
                <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                  {/* Step ID */}
                  <span className="text-neutral-400 font-bold text-xs md:text-sm tracking-widest shrink-0">
                    {step.id}
                  </span>
                  
                  {/* Text Details */}
                  <div className="flex flex-col min-w-0">
                    <h5 className="text-sm md:text-base font-semibold text-black leading-tight truncate">
                      {step.title}
                    </h5>
                    <p className="text-neutral-500 font-medium text-[11px] md:text-[13px] truncate md:whitespace-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ArrowRight 
                  size={16} 
                  className="text-neutral-400 group-hover:text-[#E63946] group-hover:translate-x-1 transition-all shrink-0 ml-2" 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;