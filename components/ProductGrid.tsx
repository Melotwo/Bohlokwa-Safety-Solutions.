
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onQuote: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuote }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
        >
          <div className="relative h-64 overflow-hidden bg-slate-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors">
                {product.name}
              </h3>
            </div>
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Rating: <span className="text-slate-900">{product.industrialRating}</span>
              </div>
              <button 
                onClick={() => onQuote(product)}
                className="p-2.5 bg-slate-900 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200"
                aria-label="Request Quote"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
