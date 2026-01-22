
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { AISafetyConsultant } from './components/AISafetyConsultant';
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
      
      <main className="flex-grow pt-16 md:pt-0">
        <Hero onCtaClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="products">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">BK Safety Gear Catalog</h2>
              <p className="text-lg text-slate-600">
                Sourced from industry leaders including <span className="text-orange-600 font-bold">U-Safety Solutions</span>, our catalog features the most reliable protective gear in South Africa.
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

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Need a custom safety package?</h2>
              <p className="text-xl text-slate-600 mb-12">
                Bohlokwa Safety Solutions specializes in bulk distribution. We coordinate with multiple top-tier suppliers to ensure your project stays compliant and your team stays protected.
              </p>
              <button 
                onClick={() => handleRequestQuote()}
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-xl shadow-slate-200"
              >
                Request Corporate Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer id="footer" />
      <AISafetyConsultant />
      
      {isQuoteOpen && (
        <QuoteModal 
          product={selectedProduct} 
          onClose={() => setIsQuoteOpen(false)} 
        />
      )}
    </div>
  );
}
