
import React from 'react';

interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-black text-lg italic tracking-tighter">
                BK
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bohlokwa<span className="text-orange-600">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Official supplier of premium industrial protective equipment. Bohlokwa Safety Solutions: Protecting Africa's workforce.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Product Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Head & Face Protection</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Footwear & Boots</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Respiratory Gear</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Hi-Vis Apparel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Connect With BK</h4>
            <p className="text-xs mb-4">Subscribe for safety regulation updates and special offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-800 border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-orange-500" />
              <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em]">© 2025 Bohlokwa Safety Solutions (Pty) Ltd.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
