import React from 'react';
import { QUICK_LINKS } from '../data/taxData';
import { QuickLink } from '../types';

interface QuickLinksProps {
  onSelectQuickLink: (actionKey: QuickLink['actionKey']) => void;
}

export const QuickLinksSection: React.FC<QuickLinksProps> = ({ onSelectQuickLink }) => {
  return (
    <section className="py-16 md:py-24 bg-[#f7f9ff] px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#161c22]">
            Quick links
          </h2>
          <div className="flex gap-2">
            <button 
              className="w-10 h-10 rounded-full border border-[#c3c6d1] flex items-center justify-center hover:bg-white transition-colors focus:outline-none"
              aria-label="Previous quick links"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button 
              className="w-10 h-10 rounded-full border border-[#c3c6d1] flex items-center justify-center hover:bg-white transition-colors focus:outline-none"
              aria-label="Next quick links"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectQuickLink(link.actionKey)}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-2xs border border-[#E9ECEF] flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all group focus:outline-none cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#00244a] group-hover:bg-[#00244a] group-hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined text-2xl md:text-3xl">
                  {link.icon}
                </span>
              </div>
              <span className="font-semibold text-xs md:text-sm text-[#161c22]">
                {link.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
