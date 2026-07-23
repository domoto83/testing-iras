import React, { useState } from 'react';

interface TaxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaxCalculatorModal: React.FC<TaxCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'individual' | 'corporate' | 'property' | 'gst'>('individual');

  // Individual Tax State
  const [annualSalary, setAnnualSalary] = useState(85000);
  const [bonus, setBonus] = useState(12000);
  const [cpfContribution, setCpfContribution] = useState(17000);
  const [srsContribution, setSrsContribution] = useState(5000);
  const [numChildren, setNumChildren] = useState(1);

  // Corporate Tax State
  const [revenue, setRevenue] = useState(450000);
  const [expenses, setExpenses] = useState(280000);

  // Property Tax State
  const [annualValue, setAnnualValue] = useState(36000);
  const [isOwnerOccupied, setIsOwnerOccupied] = useState(true);

  // GST State
  const [amount, setAmount] = useState(1000);
  const [isGstInclusive, setIsGstInclusive] = useState(true);

  if (!isOpen) return null;

  // --- Individual Income Tax Calculation ---
  const totalIncome = annualSalary + bonus;
  const childRelief = numChildren * 4000;
  const earnedIncomeRelief = 1000; // standard below age 55
  const totalRelief = Math.min(80000, cpfContribution + srsContribution + childRelief + earnedIncomeRelief);
  const chargeableIncome = Math.max(0, totalIncome - totalRelief);

  const calculateIndividualTax = (ci: number): number => {
    let tax = 0;
    if (ci <= 20000) return 0;
    if (ci <= 30000) tax = (ci - 20000) * 0.02;
    else if (ci <= 40000) tax = 200 + (ci - 30000) * 0.035;
    else if (ci <= 80000) tax = 550 + (ci - 40000) * 0.07;
    else if (ci <= 120000) tax = 3350 + (ci - 80000) * 0.115;
    else if (ci <= 160000) tax = 7950 + (ci - 120000) * 0.15;
    else if (ci <= 200000) tax = 13950 + (ci - 160000) * 0.18;
    else if (ci <= 240000) tax = 21150 + (ci - 200000) * 0.19;
    else tax = 28750 + (ci - 240000) * 0.22;
    return tax;
  };

  const individualTaxPayable = calculateIndividualTax(chargeableIncome);

  // --- Corporate Tax Calculation ---
  const corporateChargeableIncome = Math.max(0, revenue - expenses);
  // Partial Exemption: 75% on first $10k ($7,500 exempt), 50% on next $190k ($95,000 exempt)
  const first10kExempt = Math.min(corporateChargeableIncome, 10000) * 0.75;
  const next190kExempt = Math.max(0, Math.min(corporateChargeableIncome - 10000, 190000)) * 0.50;
  const totalCorpExemption = first10kExempt + next190kExempt;
  const netTaxableCorpIncome = Math.max(0, corporateChargeableIncome - totalCorpExemption);
  const corporateTaxPayable = netTaxableCorpIncome * 0.17;

  // --- Property Tax Calculation ---
  const calculatePropertyTax = (av: number, owner: boolean): number => {
    if (owner) {
      // Owner-occupier progressive rates
      if (av <= 12000) return 0;
      if (av <= 30000) return (av - 12000) * 0.04;
      if (av <= 40000) return 720 + (av - 30000) * 0.06;
      if (av <= 50000) return 1320 + (av - 40000) * 0.10;
      return 2320 + (av - 50000) * 0.14;
    } else {
      // Non-owner occupied residential (12% - 36%)
      if (av <= 30000) return av * 0.12;
      if (av <= 45000) return 3600 + (av - 30000) * 0.20;
      return 6600 + (av - 45000) * 0.28;
    }
  };

  const propertyTaxPayable = calculatePropertyTax(annualValue, isOwnerOccupied);

  // --- GST Calculation ---
  const gstRate = 0.09;
  const gstAmount = isGstInclusive
    ? (amount * gstRate) / (1 + gstRate)
    : amount * gstRate;
  const netAmount = isGstInclusive ? amount - gstAmount : amount;
  const totalWithGst = isGstInclusive ? amount : amount + gstAmount;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] text-[#00244a] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-2xl">calculate</span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00244a]">Singapore Tax Calculator</h3>
            <p className="text-xs text-gray-500">Official IRAS computation guidelines for YA 2026</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-200 gap-2 mb-6">
          {[
            { key: 'individual', label: 'Individual Tax' },
            { key: 'corporate', label: 'Corporate Tax' },
            { key: 'property', label: 'Property Tax' },
            { key: 'gst', label: 'GST (9%)' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`pb-3 px-3 text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'border-[#00244a] text-[#00244a]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Individual Income Tax */}
        {activeTab === 'individual' && (
          <div className="space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Annual Basic Salary ($)</label>
                <input
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">Annual Bonus / Other Income ($)</label>
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">Employee CPF Relief ($)</label>
                <input
                  type="number"
                  value={cpfContribution}
                  onChange={(e) => setCpfContribution(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">SRS Contribution Relief ($)</label>
                <input
                  type="number"
                  value={srsContribution}
                  onChange={(e) => setSrsContribution(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a] focus:outline-none"
                />
              </div>
            </div>

            <div className="p-4 bg-[#f7f9ff] rounded-xl border border-[#cce3f5] space-y-2 mt-4">
              <div className="flex justify-between font-medium text-gray-600">
                <span>Total Gross Income:</span>
                <span className="font-bold text-gray-900">${totalIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium text-gray-600">
                <span>Total Tax Reliefs (Cap $80,000):</span>
                <span className="font-bold text-emerald-700">-${totalRelief.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium text-gray-600 border-t pt-2 border-gray-200">
                <span>Chargeable Income:</span>
                <span className="font-bold text-gray-900">${chargeableIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#00244a] border-t-2 pt-2 border-[#00244a]">
                <span>Estimated Tax Payable:</span>
                <span>${individualTaxPayable.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Corporate Income Tax */}
        {activeTab === 'corporate' && (
          <div className="space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Total Annual Revenue ($)</label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a]"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">Allowable Deductions / Expenses ($)</label>
                <input
                  type="number"
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a]"
                />
              </div>
            </div>

            <div className="p-4 bg-[#f7f9ff] rounded-xl border border-[#cce3f5] space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Chargeable Corporate Income:</span>
                <span className="font-bold text-gray-900">${corporateChargeableIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Partial Tax Exemption Scheme:</span>
                <span className="font-bold">-${totalCorpExemption.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#00244a] border-t-2 pt-2 border-[#00244a]">
                <span>Estimated Corporate Tax (17%):</span>
                <span>${corporateTaxPayable.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Property Tax */}
        {activeTab === 'property' && (
          <div className="space-y-4 text-xs md:text-sm">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Property Annual Value (AV) ($)</label>
              <input
                type="number"
                value={annualValue}
                onChange={(e) => setAnnualValue(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a]"
              />
            </div>

            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="ownerOccupied"
                checked={isOwnerOccupied}
                onChange={(e) => setIsOwnerOccupied(e.target.checked)}
                className="w-4 h-4 text-[#00244a] rounded"
              />
              <label htmlFor="ownerOccupied" className="font-bold text-gray-800">
                Owner-Occupied Residential Property Rate
              </label>
            </div>

            <div className="p-4 bg-[#f7f9ff] rounded-xl border border-[#cce3f5] space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Occupancy Status:</span>
                <span className="font-bold">{isOwnerOccupied ? 'Owner-Occupied' : 'Non-Owner Occupied'}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#00244a] border-t-2 pt-2 border-[#00244a]">
                <span>Annual Property Tax Payable:</span>
                <span>${propertyTaxPayable.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: GST Calculator */}
        {activeTab === 'gst' && (
          <div className="space-y-4 text-xs md:text-sm">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00244a]"
              />
            </div>

            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input
                  type="radio"
                  name="gstType"
                  checked={isGstInclusive}
                  onChange={() => setIsGstInclusive(true)}
                />
                GST Inclusive (9%)
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input
                  type="radio"
                  name="gstType"
                  checked={!isGstInclusive}
                  onChange={() => setIsGstInclusive(false)}
                />
                GST Exclusive (+9%)
              </label>
            </div>

            <div className="p-4 bg-[#f7f9ff] rounded-xl border border-[#cce3f5] space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Net Amount (excl. GST):</span>
                <span className="font-bold">${netAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-blue-800">
                <span>GST Component (9%):</span>
                <span className="font-bold">${gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#00244a] border-t-2 pt-2 border-[#00244a]">
                <span>Total Price:</span>
                <span>${totalWithGst.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#00244a] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#003a70] text-xs md:text-sm"
          >
            Close Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
