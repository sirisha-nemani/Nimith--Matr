import React, { useState } from 'react';
import { Mail, IndianRupee } from 'lucide-react';

const ContactForm = () => {
  // Initialised with "idle" : nothing is entered in the form
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    //HTML forms reload the page on submit , but react is a SPA , hence its important we prevent that behavior , (prevents from refreshing every single time we click on submit and input column going blank)
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // checking to ensure all required fields are entered
    if (!data.name || !data.email || !data.budget || !data.message) {
      setStatus('error');
      return;
    }

    // Success flow: update UI, clear form, and reset after 5 seconds
    setStatus('success');
    e.target.reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="w-full py-8 px-4 flex justify-center scroll-mt-24">
      
      <div className="max-w-[1100px] w-full border-2 border-red-600 rounded-[40px] py-8 px-6 md:px-12 bg-white shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left side of the container: Heading and Email info */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-1.5">Talk to us</h3>
            <p className="text-neutral-500 text-[13px] md:text-sm leading-relaxed max-w-[280px] mb-6">
              Share your stage and goals. We'll suggest the leanest next step.
            </p>
            <a href="mailto:hello@nimithmatr.com" className="flex items-center gap-2 text-neutral-800 text-[14px] font-bold hover:text-red-600 transition-all">
              <Mail size={15} className="text-neutral-400" />
              hello@nimithmatr.com
            </a>
          </div>

          {/*  The Form */}
          <div className="lg:col-span-7">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
              
              {/* Row 1: Name and Company (Half-width columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[15px] font-semibold tracking-tight text-neutral-600 ml-1">Name</label>
                  <input name="name" type="text" placeholder="Your name" className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 bg-neutral-50/30 focus:bg-white focus:outline-none focus:border-red-400 transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[15px] font-semibold tracking-tight text-neutral-600 ml-1">Company</label>
                  <input name="company" type="text" placeholder="Startup / brand" className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 bg-neutral-50/30 focus:bg-white focus:outline-none focus:border-red-400 transition-all text-sm" />
                </div>
              </div>

              {/* Row 2: Email (Full width) */}
              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-semibold tracking-tight text-neutral-600 ml-1">Email</label>
                <input name="email" type="email" placeholder="you@company.com" className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 bg-neutral-50/30 focus:bg-white focus:outline-none focus:border-red-400 transition-all text-sm" />
              </div>

              {/* Row 3: Budget Range (Full width with Indian Rupee Icon) */}
              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-semibold tracking-tight text-neutral-600 ml-1">Budget range</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-neutral-400">
                    <IndianRupee size={14}/>
                  </div>
                  <input name="budget" type="text" placeholder="50k—2L / month" className="w-full pl-10 pr-4 py-2 rounded-xl border border-neutral-300 bg-neutral-50/30 focus:bg-white focus:outline-none focus:border-red-400 transition-all text-sm" />
                </div>
              </div>

              {/* Row 4: Message (Full width, shorter height) */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold tracking-tight text-neutral-600 ml-1">What do you need?</label>
                <textarea name="message" rows="3" placeholder="Briefly describe your goal" className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 bg-neutral-50/30 focus:bg-white focus:outline-none focus:border-red-400 transition-all text-sm resize-none"></textarea>
              </div>

              {/* Status Message area */}
              <div className="h-4 flex items-center">
                {status === 'error' && <p className="text-red-500 text-[11px] font-bold tracking-tight">! Please fill all fields</p>}
                {status === 'success' && <p className="text-green-600 text-[11px] font-bold tracking-tight">✓ Sent</p>}
              </div>

              {/* Button section */}
              <button 
                type="submit"
                disabled={status === 'success'}
                className={`w-full font-bold py-2 rounded-xl transition-all text-sm active:scale-[0.98] ${
                  status === 'success' ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-neutral-800'
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