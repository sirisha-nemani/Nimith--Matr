import React, { useState } from "react";
import { navItems } from "../constants";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
//mobileOpen track whether the mobile menu drawer is open , it is first set to false
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* NavBar: Fixed at top with backdrop blur */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white flex justify-center">
        {/* Container: set to 85% width */}
        <div className="max-w-[1100px] w-[85%] py-3 flex items-center justify-between">
          
          {/* Logo Section: Wrapped in anchor for pointer and home redirect */}
          <a href="#home" className="flex items-center cursor-pointer group">
            <img className="h-9 w-9 mr-3" src={logo} alt="Logo" />
            
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font-bold tracking-tighter text-lg leading-none group-hover:text-red-500 transition-colors">
                Nimith Matr
              </span>
              <span className="text-[9px] text-neutral-400 tracking-[0.12em] mt-1 font-medium uppercase">
                Full-funnel consultancy
              </span>
            </div>
          </a>

          {/* Navigation links: Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center space-x-10">
              {/* loops through NavItems */}
              {navItems.map((item, index) => (
                <li key={index}>
                  
                  <a 
                  //  item.#home(goes to that particular id named file(the #name is equal to id="name" in the component's file))
                    href={item.href} 
                    className="text-[16px] font-medium hover:text-red-500 transition-all cursor-pointer" 
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Book Funnel Audit button */}
            <a 
              href="#contact" 
              className="bg-white text-red-500 py-2 px-8 rounded-full font-bold text-[15px] cursor-pointer hover:bg-red-500 hover:text-white transition-all active:scale-95"
            >
              Book Funnel Audit
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            //only visible on mobile
            className="md:hidden p-2 cursor-pointer" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center md:hidden">
          <ul className="space-y-8 mb-10 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  className="text-2xl font-semibold cursor-pointer hover:text-red-500"
                  //scrolld to the section and closes the menu immediately 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact"
            className="bg-white text-black py-3 px-10 rounded-full font-bold text-lg cursor-pointer"
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