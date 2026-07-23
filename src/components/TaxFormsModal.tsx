import React, { useState } from 'react';
import { TAX_FORMS } from '../data/taxData';

interface TaxFormsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaxFormsModal: React.FC<TaxFormsModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<string>('ALL');

  if (!isOpen) return null;

  const filteredForms = filter === 'ALL'
    ? TAX_FORMS
    : TAX_FORMS.filter(f => f.taxType === filter);

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] text-[#00244a] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">description</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00244a]">IRAS Forms Repository</h3>
            <p className="text-xs text-gray-500">Official tax returns, e-Filing forms, and GIRO applications</p>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
          {['ALL', 'Individual', 'Corporate', 'GST', 'Employer'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                filter === cat
                  ? 'bg-[#00244a] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Forms List */}
        <div className="space-y-3">
          {filteredForms.map((form) => (
            <div
              key={form.id}
              className="p-4 border border-gray-200 rounded-xl hover:border-[#00244a] hover:bg-[#f7f9ff] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[#00244a] text-white px-2.5 py-0.5 rounded text-xs font-mono font-bold">
                    {form.code}
                  </span>
                  <span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
                    {form.taxType}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#00244a]">{form.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{form.description}</p>
              </div>

              <button
                onClick={() => alert(`Downloading official IRAS form ${form.code} (${form.fileSize})...`)}
                className="bg-[#003a70] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#00244a] transition-colors flex items-center gap-1 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-base">download</span>
                PDF ({form.fileSize})
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
