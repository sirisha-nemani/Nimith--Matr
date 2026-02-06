import React, { useState } from "react";
import { navItems } from "../constants";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* NavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
          
          {/* Logo*/}
          <div className="flex items-center">
            <img className="h-10 w-10 mr-3" src={logo} alt="Logo" />
            
            {/* Text along with the logo */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font tracking-tighter text-xl  leading-none">
                Nimith Matr
              </span>
              <span className="text-[10px] text-neutral-400 tracking-[0.15em] mt-1 font-medium">
                Full-funnel consultancy
              </span>
            </div>
          </div>

          {/* Navigation links : Desktop version*/}
          <ul className="hidden md:flex items-center space-x-10 ml-auto mr-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  className="text-[20px] font-normal hover:text-red-500 transition-all" 
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/*Book Funnel Audit button */}
          <div className="hidden md:block">
            <a 
              href="#" 
              className="bg-white text-red-600 py-2.5 px-10 rounded-full font-medium text-base hover:bg-red-50 transition-all active:scale-95"

            >
              Book Funnel Audit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden ml-auto p-2" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer*/}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center md:hidden">
          <ul className="space-y-8 mb-10 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  className="text-2xl font-bold" 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            className="bg-white text-red-600 py-4 px-14 rounded-full font-bold text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Book Funnel Audit
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;