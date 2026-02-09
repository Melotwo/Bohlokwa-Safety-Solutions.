import React from 'react';
import { MINE_AFRICA_AFFILIATE_URL } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30 grayscale-[30%]"
          alt="BK Safety Solutions Industrial Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Partner Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/30 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-400 text-[11px] font-black uppercase tracking-widest">Official Partner: Mine Africa</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.95] mb-8">
            Safety Gear That <br />
            <span className="text-orange-500 italic decoration-orange-500/20">
              Empowers.
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-xl leading-relaxed font-medium">
            Bohlokwa Safety Solutions provides industrial-grade PPE sourced via Mine Africa for the continent's most demanding sectors.
          </p>
          
          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button 
              onClick={onCtaClick}
              className="px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black text-lg transition-all shadow-2xl shadow-orange-900/30 flex items-center justify-center gap-3 group active:scale-95"
            >
              Browse Local Catalog
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <a 
              href={MINE_AFRICA_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-slate-900 rounded-xl font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 border-2 border-transparent active:scale-95 shadow-xl"
            >
              Partner Store
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
          
          {/* Direct Hotline */}
          <div className="pt-8 border-t border-slate-800/60 max-w-md">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-black text-orange-500 tracking-[0.3em] opacity-80">Direct Hotline</span>
              <a href="tel:+27729159871" className="text-3xl font-black text-white hover:text-orange-500 transition-colors tracking-tight">
                +27 72 915 9871
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
