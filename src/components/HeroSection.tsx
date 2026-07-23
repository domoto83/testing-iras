import React, { useState } from 'react';
import { TAX_DEADLINES } from '../data/taxData';
import { TaxDeadline } from '../types';

interface HeroSectionProps {
  onSelectDeadline: (deadline: TaxDeadline) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectDeadline }) => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [calendarFilter, setCalendarFilter] = useState<'ALL' | 'GST' | 'Corporate Income Tax' | 'Individual Income Tax' | 'Property Tax'>('ALL');

  const filteredCalendar = calendarFilter === 'ALL'
    ? TAX_DEADLINES
    : TAX_DEADLINES.filter(d => d.category === calendarFilter);

  return (
    <section className="relative bg-[#00244a] overflow-hidden py-12 md:py-20 px-4 md:px-6 text-white">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Taxes for our nation
            </h1>
            <p className="text-[#d5e3ff] text-base md:text-lg leading-relaxed font-normal">
              Powering Singapore's progress through fair and effective tax administration.
            </p>
          </div>
          <button 
            onClick={() => setShowCalendarModal(true)}
            className="text-white flex items-center gap-1.5 group font-semibold hover:text-[#d5e3ff] text-xs md:text-sm tracking-wide focus:outline-none"
          >
            <span>VIEW ALL DATES</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
              chevron_right
            </span>
          </button>
        </div>

        {/* Timeline Horizontal Grid (5 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {TAX_DEADLINES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDeadline(item)}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-xl hover:bg-white/20 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-[#d5e3ff] text-xs md:text-sm font-bold mb-3 tracking-wider">
                  {item.date}
                </div>
                <div className={`${item.badgeColor || 'bg-white text-[#00244a]'} px-3 py-1 rounded text-xs font-bold inline-block mb-3 shadow-xs`}>
                  {item.badge}
                </div>
                <p className="text-white text-xs md:text-sm leading-snug mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all text-xl">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#161c22] rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowCalendarModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#00244a] text-3xl">calendar_month</span>
              <div>
                <h3 className="text-2xl font-bold text-[#00244a]">Tax Filing Due Dates Calendar 2026</h3>
                <p className="text-xs text-gray-500">Key filing and payment deadlines for Singapore Taxpayers</p>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
              {(['ALL', 'GST', 'Corporate Income Tax', 'Individual Income Tax', 'Property Tax'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCalendarFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    calendarFilter === cat
                      ? 'bg-[#00244a] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Calendar list */}
            <div className="space-y-3">
              {filteredCalendar.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => {
                    setShowCalendarModal(false);
                    onSelectDeadline(item);
                  }}
                  className="p-4 border border-gray-200 rounded-xl hover:border-[#00244a] hover:bg-[#f7f9ff] transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#00244a] text-white px-3 py-1.5 rounded-lg text-xs font-bold w-24 text-center">
                      {item.badge}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#00244a]">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.description}</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      {item.date}
                    </span>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
