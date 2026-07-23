import React, { useState } from 'react';

export const ScamBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div className="scam-banner-gradient py-3.5 px-4 md:px-6 relative text-[#161c22]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start md:items-center gap-3">
            <span className="material-symbols-outlined text-[#161c22] flex-shrink-0 text-xl md:text-2xl mt-0.5 md:mt-0">
              warning
            </span>
            <div className="text-xs md:text-sm leading-snug">
              <span className="font-bold mr-1.5">Beware of Impersonation Scams</span>
              Government officials will <strong className="font-bold">NEVER</strong> ask for money, bank details, or app installations over a call. Call 1799 if unsure.{' '}
              <button 
                onClick={() => setShowModal(true)} 
                className="underline font-semibold hover:text-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                Learn more
              </button>
            </div>
          </div>
          <button 
            onClick={() => setDismissed(true)} 
            className="absolute top-3.5 right-4 md:static opacity-70 hover:opacity-100 p-1 rounded transition-opacity"
            aria-label="Dismiss scam alert"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="flex items-center gap-3 mb-4 text-[#C69600]">
              <span className="material-symbols-outlined text-3xl">security</span>
              <h3 className="text-xl font-bold text-[#161c22]">How to Protect Yourself Against Tax Scams</h3>
            </div>

            <div className="space-y-4 text-sm text-[#434750]">
              <p>
                IRAS takes fraudulent activities seriously. Please stay vigilant against phishing SMSes, spoofed phone calls, and fake emails asking for payment or Singpass login credentials.
              </p>
              
              <div className="bg-[#eff4fc] p-4 rounded-xl space-y-2 border border-[#cce3f5]">
                <h4 className="font-bold text-[#00244a] flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  Official IRAS Channels:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Official domain end with <strong className="font-semibold text-black">.gov.sg</strong></li>
                  <li>SMS notifications originate only from <strong className="font-semibold text-black">gov.sg</strong> sender ID</li>
                  <li>All tax payments are processed securely via <strong className="font-semibold text-black">myTax Portal</strong></li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl space-y-1 border border-amber-200 text-amber-900 text-xs">
                <span className="font-bold">Hotline for Verification:</span>
                <p>Call the Anti-Scam Helpline at <strong>1800-722-6688</strong> or IRAS at <strong>1800-356-8300</strong>.</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowModal(false)}
                className="bg-[#00244a] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#003a70] transition-colors text-sm"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
