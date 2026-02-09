import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { CategoryTabs } from './components/CategoryTabs';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';
import { Category, Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleRequestQuote = (product?: Product) => {
    setSelectedProduct(product || null);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onQuoteClick={() => handleRequestQuote()} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="products">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4">
                Official Catalog Source: Mine Africa
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">BK Safety Gear Catalog</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sourced via <span className="text-orange-600 font-black">Mine Africa</span>, our catalog features professional industrial-grade protection tested for the harshest African environments.
              </p>
            </div>
            <CategoryTabs 
              selected={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
          </div>

          <ProductGrid 
            products={filteredProducts} 
            onQuote={handleRequestQuote} 
          />
        </div>

        {/* Bulk Safety Procurement Section - Refined based on Screenshot 1 */}
        <section className="py-32 bg-slate-50 border-y border-slate-100" id="quote">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Bulk Safety Procurement</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                Bohlokwa Safety Solutions, in partnership with Mine Africa, streamlines your bulk distribution. We ensure your workforce stays protected with SABS-approved gear delivered directly to your site.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => handleRequestQuote()}
                  className="w-full sm:w-auto px-12 py-6 bg-[#0f172a] text-white rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-slate-300 active:scale-95"
                >
                  Request Corporate Quote
                </button>
                <a 
                  href="tel:+27729159871"
                  className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black text-xl hover:border-orange-600 hover:text-orange-600 transition-all flex items-center justify-center gap-4 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +27 72 915 9871
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer id="footer" />
      
      {isQuoteOpen && (
        <QuoteModal 
          product={selectedProduct} 
          onClose={() => setIsQuoteOpen(false)} 
        />
      )}
    </div>
  );
}
