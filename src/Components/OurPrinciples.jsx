import React from 'react';

import { principles } from '../constants';

const Principles = () => {
  
  return (
    <section className="w-full py-12 pb-24 flex justify-center">
      {/* Container: set to 85% width */}
      <div className="max-w-[1100px] w-[85%] mx-auto">
        <h3 className="text-3xl font-semibold tracking-tight mb-2 text-black">Our Principles</h3>
        <p className="text-neutral-700 text-sm md:text-base mb-10">How we approach growth and engagement.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            /* Card Styling */
            <div 
              key={i} 
              className="border-2 border-red-600 rounded-2xl px-4 py-3 bg-white space-y-0.5 transition-all duration-300 group hover:shadow-sm"
            >
              <h6 className="font-semibold text-black group-hover:text-red-500 transition-colors text-sm md:text-base">
                {p.title}
              </h6>
              <p className="text-neutral-600 text-[12px] md:text-[13px] leading-snug">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;