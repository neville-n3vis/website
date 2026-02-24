import React from 'react';
import { CreditCard } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center select-none">
      {/* Icon Container: Static and Sharp */}
      <div className="flex items-center justify-center mr-3">
        <div className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
          <CreditCard 
            className="text-primary-600 dark:text-primary-400 w-6 h-6" 
            strokeWidth={1.5} 
          />
        </div>
      </div>

      {/* Brand Text: Single Line, Professional Tech Weight */}
      <div className="flex items-center">
        <span className="text-xl font-medium tracking-tight text-slate-900 dark:text-white uppercase">
          n3vision
          <span className="ml-1 font-bold text-primary-500">AB</span>
        </span>
      </div>
    </div>
  );
};