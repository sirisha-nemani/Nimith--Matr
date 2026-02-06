import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, error, success

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Simple validation check for empty fields
    if (!data.name || !data.email || !data.message) {
      setStatus('error');
      return;
    }

    // Simulate sending logic
    setStatus('success');
    e.target.reset(); // Clear the form after success
    
    // Optional: Reset back to idle after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 scroll-mt-20">
      {/* Container with RED BORDER */}
      <div className="max-w-[1100px] mx-auto border border-red-400/50 rounded-[40px] p-8 md:p-14 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-black mb-3">Talk to us</h2>
              <p className="text-neutral-500 text-base leading-relaxed max-w-[320px]">
                Share your stage and goals. We'll suggest the leanest next step.
              </p>
            </div>
            <a href="mailto:hello@nimithmatr.com" className="flex items-center gap-2 text-neutral-800 font-medium hover:text-[#E63946] transition-all">
              <Mail size={18} className="text-neutral-400" />
              hello@nimithmatr.com
            </a>
          </div>

          {/* RIGHT SECTION: Form */}
          <div className="lg:col-span-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 ml-1">Name</label>
                  <input name="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50/30 focus:outline-none focus:border-red-200 transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 ml-1">Company</label>
                  <input name="company" type="text" placeholder="Startup / brand" className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50/30 focus:outline-none focus:border-red-200 transition-all text-sm" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 ml-1">Email</label>
                <input name="email" type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50/30 focus:outline-none focus:border-red-200 transition-all text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 ml-1">What do you need?</label>
                <textarea name="message" rows="4" placeholder="Briefly describe your goal" className="w-full px-4 py-3 rounded-xl border border-neutral-100 bg-neutral-50/30 focus:outline-none focus:border-red-200 transition-all text-sm resize-none"></textarea>
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <p className="text-red-500 text-xs font-bold animate-pulse">! Please fill the form</p>
              )}
              {status === 'success' && (
                <p className="text-green-600 text-xs font-bold">✓ Sent</p>
              )}

              <button 
                type="submit"
                disabled={status === 'success'}
                className={`w-full font-bold py-4 rounded-xl transition-all text-sm mt-2 ${
                  status === 'success' ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]'
                }`}
              >
                {status === 'success' ? 'Sent' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;