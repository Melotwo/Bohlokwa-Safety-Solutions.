import React from 'react';
import { MINE_AFRICA_AFFILIATE_URL } from '../constants';

interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="bg-[#0f172a] text-slate-400 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center text-white font-black text-xl italic tracking-tighter">
                BK
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Bohlokwa<span className="text-orange-600">.</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mb-8 font-medium text-slate-400">
              Official supplier of premium industrial protective equipment. Bohlokwa Safety Solutions: Protecting Africa's workforce in partnership with <strong>Mine Africa</strong>.
            </p>
            <div className="flex gap-4">
              <a href="tel:+27729159871" className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="mailto:info@bohlokwa-safety.co.za" className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Sourcing Partners */}
          <div>
            <h4 className="text-white font-black mb-8 text-[11px] uppercase tracking-[0.3em]">Sourcing Partners</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li>
                <a href={MINE_AFRICA_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-white transition-colors underline decoration-orange-500/20 underline-offset-[10px]">
                  Mine Africa Full Catalogue
                </a>
              </li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">U-Safety Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Regional Distributors</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 className="text-white font-black mb-8 text-[11px] uppercase tracking-[0.3em]">Direct Contact</h4>
            <ul className="space-y-8 text-sm">
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Sales Hotline</span>
                <a href="tel:+27729159871" className="text-white hover:text-orange-500 transition-colors font-black text-xl tracking-tight">
                  +27 72 915 9871
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Email Inquiries</span>
                <a href="mailto:info@bohlokwa-safety.co.za" className="text-slate-200 hover:text-orange-500 transition-colors font-bold text-base">
                  info@bohlokwa-safety.co.za
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Location</span>
                <span className="text-slate-200 font-bold text-base">Gauteng, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Portal (Klaviyo Style) */}
          <div className="bg-[#1e293b]/40 p-8 rounded-[2rem] border border-slate-800 shadow-2xl">
            <h4 className="text-white font-black mb-4 text-[11px] uppercase tracking-[0.3em]">Client Portal</h4>
            <p className="text-[12px] mb-8 leading-relaxed font-medium text-slate-400">
              Join our list for the latest SABS regulation updates and new gear releases via Klaviyo automation.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="Your work email" 
                className="bg-[#0f172a] border-slate-700 border-2 rounded-xl px-5 py-4 text-sm w-full focus:ring-2 focus:ring-orange-500/50 outline-none text-white font-bold transition-all placeholder:text-slate-600" 
              />
              <button 
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-[0.97] shadow-xl shadow-orange-900/30"
              >
                Subscribe to List
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 text-center md:text-left">
            © 2025 BOHLOKWA SAFETY SOLUTIONS (PTY) LTD. PARTNERED WITH MINE AFRICA.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy (POPIA)</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-white transition-colors">Compliance Certs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
