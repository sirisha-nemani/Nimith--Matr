import React from 'react';

const clients = ["E&ICT Academy", "LeadUp Universe", "ConceptWaves"];

const Clients = () => (
  <section className="w-full py-12">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-semibold tracking-tight mb-2">Clients</h2>
      <p className="text-neutral-700 mb-10">Founders and institutions we've supported.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clients.map((name, i) => (
          <div key={i} className="border-2 border-red-50 rounded-2xl p-6 flex items-center justify-center bg-white hover:border-red-400 transition-all">
            <span className="text-neutral-500 font-medium text-sm tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;