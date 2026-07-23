import React from 'react';

interface TaxRatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaxRatesModal: React.FC<TaxRatesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] text-[#00244a] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">trending_up</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00244a]">Official Singapore Tax Rates Guide</h3>
            <p className="text-xs text-gray-500">Applicable for Year of Assessment (YA) 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-xs md:text-sm">
          
          {/* Individual Progressive Rates */}
          <div className="border border-gray-200 rounded-xl p-4 bg-[#f7f9ff]">
            <h4 className="font-bold text-sm text-[#00244a] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">person</span>
              Individual Resident Income Tax Rates (YA 2026)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-gray-700 font-bold">
                    <th className="py-2 px-2">Chargeable Income Band ($)</th>
                    <th className="py-2 px-2">Tax Rate (%)</th>
                    <th className="py-2 px-2">Gross Tax Payable ($)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-800">
                  <tr><td className="py-2 px-2">First 20,000</td><td className="py-2 px-2 font-bold text-emerald-700">0%</td><td className="py-2 px-2">$0</td></tr>
                  <tr><td className="py-2 px-2">Next 10,000</td><td className="py-2 px-2">2%</td><td className="py-2 px-2">$200</td></tr>
                  <tr><td className="py-2 px-2">Next 10,000</td><td className="py-2 px-2">3.5%</td><td className="py-2 px-2">$350</td></tr>
                  <tr><td className="py-2 px-2">Next 40,000</td><td className="py-2 px-2">7%</td><td className="py-2 px-2">$2,800</td></tr>
                  <tr><td className="py-2 px-2">Next 40,000</td><td className="py-2 px-2">11.5%</td><td className="py-2 px-2">$4,600</td></tr>
                  <tr><td className="py-2 px-2">Next 40,000</td><td className="py-2 px-2">15%</td><td className="py-2 px-2">$6,000</td></tr>
                  <tr><td className="py-2 px-2">Above 1,000,000</td><td className="py-2 px-2 font-bold text-purple-900">24%</td><td className="py-2 px-2">Progressive</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Corporate Income Tax */}
          <div className="border border-gray-200 rounded-xl p-4 bg-[#f7f9ff]">
            <h4 className="font-bold text-sm text-[#00244a] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">domain</span>
              Corporate Income Tax Rate &amp; Partial Exemption
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Flat Rate: <strong className="text-black">17%</strong> on normal chargeable corporate income.</li>
              <li>Partial Exemption Scheme:
                <ul className="list-circle pl-5 text-xs text-gray-600 mt-1">
                  <li>75% exemption on first $10,000 of normal chargeable income ($7,500 exempt).</li>
                  <li>50% exemption on next $190,000 of normal chargeable income ($95,000 exempt).</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* GST */}
          <div className="border border-gray-200 rounded-xl p-4 bg-[#f7f9ff]">
            <h4 className="font-bold text-sm text-[#00244a] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">receipt_long</span>
              Goods &amp; Services Tax (GST)
            </h4>
            <p className="text-gray-700">
              Standard GST rate is <strong className="text-black font-bold">9%</strong> for all taxable supplies of goods and services made in Singapore.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
