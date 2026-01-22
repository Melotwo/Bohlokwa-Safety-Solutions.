
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic tracking-tighter shadow-lg shadow-orange-600/20">
              BK
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Bohlokwa<span className="text-orange-600">.</span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300 opacity-70'}`}>
                Safety Solutions
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onQuoteClick}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-orange-900/20 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          <div className="md:hidden">
            <button className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
