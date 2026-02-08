import React from 'react';
import { clients } from '../constants';


const Clients = () => {
  /* Work Flow:
     - Main Container: w-[85%] of the screen.
     - Inner Content: w-[85%] of that container.
     - Mobile: grid-cols-2 (2 cards per row, 3rd wraps).
     - Desktop: grid-cols-3 with exact 10px margin (gap).
  */
  return (
    <section className="w-full py-12 flex justify-center">
      {/* Main Container at 85% of screen width */}
      <div className="max-w-[1100px] w-[85%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold tracking-tight text-black mb-1">
            Clients
          </h3>
          <p className="text-neutral-700">
            Founders and institutions we've supported.
          </p>
        </div>

        {/* Inner Wrapper occupying 85% of the main container */}
        <div className="w-full md:w-[85%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px]">
            {clients.map((name, i) => (
              /* Card Styling*/
              <div 
                key={i} 
                className="border-2 border-red-600 rounded-2xl py-4 px-4 flex items-center justify-center bg-white transition-all hover:shadow-sm"
              >
                <span className="text-neutral-700 font-normal text-[12px] md:text-sm tracking-tight text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;