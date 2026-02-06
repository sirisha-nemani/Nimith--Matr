import React from 'react';

const testimonials = [
  {
    quote: "“Clear thinking, low burn, real outcomes.”",
    author: "Founder, SaaS Startup"
  },
  {
    quote: "“They helped us fix the funnel before scaling ads.”",
    author: "Co-founder, D2C Brand"
  },
  {
    quote: "“Finally a marketing partner who thinks like a founder.”",
    author: "CEO, EdTech Venture"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-12">
      {/* Aligned to the same 1100px grid as previous sections */}
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-1">
            What founders say
          </h2>
        </div>

        {/* Grid: Responsive 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className="border-2 border-red-50/50 rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between hover:border-red-600 transition-all min-h-[160px]"
            >
              {/* Quote text - slim and airy */}
              <p className="text-neutral-600 text-[15px] md:text-base leading-relaxed font-medium italic">
                {item.quote}
              </p>
              
              {/* Author attribution with the distinctive dash */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-neutral-300"></span>
                <span className="text-neutral-400 text-xs md:text-[13px] font-semibold tracking-tight">
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