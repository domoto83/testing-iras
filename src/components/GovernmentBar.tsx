import React, { useState } from 'react';

export const GovernmentBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ffffff] border-b border-[#c3c6d1] py-2 px-4 md:px-6 text-xs text-[#434750]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ba1a1a] text-[16px]">account_balance</span>
            <span className="font-medium text-[#434750]">A Singapore Government Agency Website</span>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00244a] font-semibold flex items-center hover:underline focus:outline-none ml-1"
            >
              How to identify
              <span className={`material-symbols-outlined text-[16px] ml-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-[#e3e9f0] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#434750] animate-in fade-in duration-200">
            <div className="flex items-start gap-3 bg-[#f7f9ff] p-3 rounded-lg border border-[#e3e9f0]">
              <span className="material-symbols-outlined text-[#00244a] text-xl flex-shrink-0 mt-0.5">lock</span>
              <div>
                <p className="font-bold text-[#161c22]">Official government websites use .gov.sg</p>
                <p className="text-[11px] leading-relaxed mt-0.5">
                  Check the URL in your address bar. Official Singapore government websites end with .gov.sg (e.g. iras.gov.sg).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#f7f9ff] p-3 rounded-lg border border-[#e3e9f0]">
              <span className="material-symbols-outlined text-[#00244a] text-xl flex-shrink-0 mt-0.5">verified_user</span>
              <div>
                <p className="font-bold text-[#161c22]">Secure websites use HTTPS &amp; Singpass</p>
                <p className="text-[11px] leading-relaxed mt-0.5">
                  Look for a lock icon next to the URL or Singpass authentication when accessing digital tax services.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
