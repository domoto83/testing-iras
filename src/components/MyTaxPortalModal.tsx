import React, { useState } from 'react';

interface MyTaxPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MyTaxPortalModal: React.FC<MyTaxPortalModalProps> = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState<'individual' | 'corporate'>('individual');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [singpassId, setSingpassId] = useState('S1234567A');
  const [paidStatus, setPaidStatus] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!isLoggedIn ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00244a] text-white rounded-2xl font-bold text-2xl shadow-md">
                myTax
              </div>
              <h3 className="text-2xl font-bold text-[#00244a]">Welcome to myTax Portal</h3>
              <p className="text-xs text-gray-500">Official digital gateway for Singapore Taxpayers</p>
            </div>

            {/* User type selector */}
            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setUserType('individual')}
                className={`py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  userType === 'individual'
                    ? 'bg-white text-[#00244a] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Personal Tax (Singpass)
              </button>
              <button
                onClick={() => setUserType('corporate')}
                className={`py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  userType === 'corporate'
                    ? 'bg-white text-[#00244a] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Business Tax (Corppass)
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-red-800 font-bold text-xs">
                  <span className="material-symbols-outlined text-lg">shield</span>
                  Singpass Authentication Simulator
                </div>
                <p className="text-[11px] text-red-700">
                  Enter NRIC or FIN below to access your digital tax account.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  {userType === 'individual' ? 'NRIC / FIN' : 'Entity UEN / NRIC'}
                </label>
                <input
                  type="text"
                  required
                  value={singpassId}
                  onChange={(e) => setSingpassId(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-[#00244a] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ba1a1a] text-white py-3 rounded-lg font-bold text-sm hover:bg-red-800 transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">vpn_key</span>
                Log in with Singpass
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard when logged in */
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="text-xs bg-[#d5e3ff] text-[#001c3b] px-2.5 py-1 rounded font-bold uppercase">
                  {userType === 'individual' ? 'Individual Taxpayer' : 'Corporate Entity'}
                </span>
                <h3 className="text-xl font-bold text-[#00244a] mt-1">
                  {userType === 'individual' ? 'Tan Ah Kow (S1234567A)' : 'ACME Logistics Pte Ltd (202012345K)'}
                </h3>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-red-600 font-bold hover:underline"
              >
                Log Out
              </button>
            </div>

            {/* Account balance card */}
            <div className="bg-[#f7f9ff] p-5 rounded-2xl border border-[#cce3f5] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-600">Outstanding Tax Balance</span>
                <span className="text-xs text-gray-500">YA 2026</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-extrabold text-[#00244a]">
                  {paidStatus ? '$0.00' : '$1,240.00'}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${paidStatus ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {paidStatus ? 'PAID in Full' : 'Due by 30 May 2026'}
                </span>
              </div>

              {!paidStatus && (
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => {
                      alert('PayNow QR Code Generated! Payment received.');
                      setPaidStatus(true);
                    }}
                    className="flex-1 bg-[#00244a] text-white py-2 rounded-lg font-bold text-xs hover:bg-[#003a70] transition-colors"
                  >
                    Pay via PayNow QR
                  </button>
                  <button
                    onClick={() => alert('GIRO plan setup request submitted. Deduction starts 6th of next month.')}
                    className="bg-[#cfe6f7] text-[#061e2b] px-4 py-2 rounded-lg font-bold text-xs hover:bg-blue-200"
                  >
                    Set up GIRO
                  </button>
                </div>
              )}
            </div>

            {/* E-Filing status */}
            <div className="border border-gray-200 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-800">Income Tax Return YA 2026</span>
                <span className="text-emerald-700 font-bold">Completed / Pre-filled</span>
              </div>
              <p className="text-xs text-gray-600">
                Auto-Inclusion Scheme (AIS) employment details received from employer.
              </p>
              <button 
                onClick={() => alert('Opening Notice of Assessment (NOA) PDF viewer...')} 
                className="text-xs text-[#00244a] font-bold hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-base">download</span>
                Download Notice of Assessment (NOA)
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
