import React from 'react';

const principles = [
  { title: "Low burn", desc: "Optimise for CPQL & conversion." },
  { title: "No black box", desc: "Transparent spend and learnings." },
  { title: "Capability built", desc: "You keep the playbooks." },
];

const Principles = () => (
  <section className="w-full py-12 pb-24">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-4xl font-semibold tracking-tight mb-2">Our Principles</h2>
      <p className="text-neutral-500 mb-10">How we approach growth and engagement.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <div key={i} className="border border-neutral-100 rounded-2xl p-8 bg-white/50 space-y-2 hover:shadow-sm transition-all">
            <h4 className="font-semibold text-black">{p.title}</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Principles;