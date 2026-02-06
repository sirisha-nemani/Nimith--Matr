import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-neutral-100">
      <div className="max-w-[1100px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-neutral-400 text-sm font-medium">
          © 2026 Nimith Matr
        </div>

        {/* Right Side: Tagline */}
        <div className="text-neutral-400 text-sm font-medium">
          Minimalist growth systems for founders.
        </div>

      </div>
    </footer>
  );
};

export default Footer;