import React from "react";
import { ArrowRight } from "lucide-react";
import { steps } from "../constants";


const HowWeWork = () => {
  return (
    /*  spacing between components */
    <section className="w-full py-10 md:py-16 bg-white">
      
      
      <div className="max-w-[1100px] mx-auto border border-neutral-200/60 rounded-[32px] p-8 md:p-12 lg:p-14 bg-white">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left section
          */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
              How we work
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-[240px] leading-relaxed">
              A simple system founders can follow.
            </p>
          </div>

          {/* Right section
          */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group w-full border-2 border-red-100/80 rounded-2xl p-4 md:p-5 flex items-center justify-between transition-all duration-300 hover:bg-red-50/50 hover:border-red-500"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Id numbrer */}
                  <span className="text-neutral-600 font-medium text-xs md:text-sm tracking-widest w-6">
                    {step.id}
                  </span>
                  
                  <div className="flex flex-col">
                    <h5 className="text-lg md:text-l font-semibold text-black  leading-tight mb-0.5">
                      {step.title}
                    </h5>
                    <p className="text-neutral-600 font-medium text-[11px] md:text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ArrowRight 
                  size={16} 
                  className="text-neutral-600 ]" 
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