import React from 'react';

import { testimonials } from '../constants';

const Testimonials = () => {
  /* Logic:
     - Main Container: w-[85%] of the screen.
     - We keep the quote and author tightly packed to maintain a horizontal rectangle.
  */
  return (
    <section className="w-full py-12 flex justify-center">
      {/* Container: Occupies 85% of the width*/}
      <div className="max-w-[1100px] w-[85%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold tracking-tight text-black mb-1">
            What founders say
          </h3>
        </div>

        {/* Grid: 3-column layout that shifts to 1 on mobile devices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            /* Card Styling */
            <div 
              key={i} 
              className="border-2 border-red-600 rounded-2xl px-4 py-4 bg-white flex flex-col justify-between transition-all hover:shadow-sm"
            >
              {/* Quote text */}
              <p className="text-black text-[11px] md:text-sm leading-snug font-normal mb-3 ">
                {item.quote}
              </p>
              
              {/* Author attribution */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-[1.5px] bg-neutral-300"></span>
                <span className="text-neutral-700 text-[13px] md:text-xs font-semibold tracking-tight ">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;