
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30"
          alt="BK Safety Solutions Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Premium Safety Sourcing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            Safety Gear That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 italic">
              Empowers.
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
            Bohlokwa Safety Solutions provides industrial-grade PPE tailored for South Africa's most demanding sectors. Reliability you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-900/30 flex items-center justify-center gap-2 group"
            >
              Browse Our Catalog
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <a href="#quote" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all backdrop-blur-sm text-center">
              Request Bulk Pricing
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-slate-800 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" 
                  src={`https://picsum.photos/seed/${i + 40}/100/100`} 
                  alt="BK Safety Client" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Trusted supplier for over <span className="text-white font-bold">250+</span> local businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
