import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { outcomeList } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 w-full flex justify-center bg-white selection:bg-red-100">
      <div className="max-w-[1100px] w-[85%] mx-auto py-10 md:py-16">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/*Left Section: Contact */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center border-2 border-red-700/40 bg-red-700/15 w-fit px-4 py-2 rounded-full">
              <span className="text-[#D32F2F] font-bold text-[10px] md:text-xs tracking-widest ">
                Full Funnel growth for founders
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-black leading-[1.1] tracking-tight">
              Scale outreach. <br />
              <span className="text-[#D32F2F]">Keep burn low.</span>
            </h3>

            {/* Subheading */}
            <p className="text-neutral-500 text-sm md:text-base max-w-[440px] leading-relaxed bg-transparent ">
              Nimith Matr designs lean marketing systems-strategy, funnel,
              and execution—built for early-stage teams.
            </p>

            {/* Button that redirects to "Talk to us" section via href */}
            <a
              href="#contact"
              className="flex items-center justify-between bg-black text-white w-full max-w-[340px] px-6 py-3.5 rounded-full group transition-all hover:bg-red-700 active:scale-[0.98]"
            >
              <span className="text-sm md:text-base font-medium">
                Book a Funnel Audit
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="border border-neutral-500 px-5 py-2.5 rounded-xl w-fit min-w-[130px]">
                <p className="text-[13px] text-neutral-400 font-bold tracking-widest  mb-0.5">
                  Focus
                </p>
                <p className="text-neutral-700 text-[14px] font-medium leading-tight">
                  Low-cost scale
                </p>
              </div>
              
              <div className="border border-neutral-500 px-5 py-2.5 rounded-xl w-fit min-w-[130px]">
                <p className="text-[13px] text-neutral-400 font-bold tracking-widest  mb-0.5">
                  Style
                </p>
                <p className="text-neutral-700 text-[14px] font-medium leading-tight">
                  Test → Learn → Scale
                </p>
              </div>
            </div>
          </div>

          {/* Right Column : OutComes card*/}
          <div className="lg:col-span-5 flex lg:justify-end ">
            <div className="w-full border-2 border-red-700/40 rounded-[32px] px-6 py-4 md:px-8 bg-[#FFF5F5] shadow-sm bg-red-700/15">
              <h3 className="text-lg font-bold text-black mb-3">
                Typical outcomes
              </h3>

              <ul className="grid grid-cols-1 gap-y-2 mb-4">
                {outcomeList.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="bg-black p-0.5 rounded flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={4} />
                    </div>
                    <span className="text-neutral-700 text-[15px] font-medium leading-none">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Best For Tag */}
              <div className="border-2 border-red-700/40 rounded-xl p-3 bg-white/60">
                <p className="text-[11px] text-neutral-600 font-semibold mb-0.5 tracking-widest ">
                  Best For
                </p>
                <p className="text-neutral-600 text-[15px] font-medium leading-tight">
                  Bootstrapped, 0—Series , A teams
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;