
import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ selected, onSelect }) => {
  const categories: (Category | 'All')[] = ['All', ...Object.values(Category)];

  return (
    <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            selected === cat 
              ? 'bg-white text-orange-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
