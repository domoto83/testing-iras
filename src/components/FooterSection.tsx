import React, { useState } from 'react';

export const FooterSection: React.FC = () => {
  const [modalType, setModalType] = useState<'ealerts' | 'contact' | 'privacy' | 'terms' | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
        setModalType(null);
      }, 2500);
    }
  };

  return (
    <footer className="bg-[#222526] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-20">
        
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-12 border-b border-[#454748]">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Inland Revenue Authority of Singapore
            </h2>
            <p className="text-xs md:text-sm text-[#a2a4a5] leading-relaxed">
              Contributing to a vibrant economy through tax administration and world-class service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#373a3b] hover:bg-white hover:text-[#222526] transition-all text-white" aria-label="QR Code / Social">
                <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#373a3b] hover:bg-white hover:text-[#222526] transition-all text-white" aria-label="Instagram">
                <span className="material-symbols-outlined text-[20px]">camera_alt</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#373a3b] hover:bg-white hover:text-[#222526] transition-all text-white" aria-label="Telegram">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#373a3b] hover:bg-white hover:text-[#222526] transition-all text-white" aria-label="LinkedIn">
                <span className="material-symbols-outlined text-[20px]">group</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 w-full lg:w-auto">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a2a4a5]">
                Organisation
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('IRAS Careers page: Join our team in tax policy & technology!'); }} className="hover:underline">Careers</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('IRAS News & Events: Tax updates and policy forums.'); }} className="hover:underline">News &amp; Events</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Useful Links: MOF, CPF Board, ACRA, Singpass.'); }} className="hover:underline">Useful links</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a2a4a5]">
                Help &amp; Feedback
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                <li><button onClick={() => setModalType('contact')} className="hover:underline text-left">Contact Us</button></li>
                <li><button onClick={() => setModalType('contact')} className="hover:underline text-left">Feedback</button></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('IRAS Sitemap: View all 120 tax portal sections.'); }} className="hover:underline">Sitemap</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a2a4a5]">
                Stay Updated
              </h4>
              <button
                onClick={() => setModalType('ealerts')}
                className="inline-block bg-[#003a70] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#00244a] transition-all text-xs tracking-wider"
              >
                SUBSCRIBE TO eALERTS
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xs text-[#a2a4a5]">
              © 2026, Government of Singapore. Last updated 21 July 2026
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-300">
              <button onClick={() => setModalType('privacy')} className="hover:underline">Privacy Statement</button>
              <button onClick={() => setModalType('terms')} className="hover:underline">Terms of Use</button>
              <button onClick={() => alert('Vulnerability Disclosure: Please submit reports via GovTech vulnerability disclosure program.')} className="hover:underline">Report Vulnerability</button>
            </div>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLv_KhMN4KTTXY20jERh9l24VURDJUVtAVOSWGzRCsod_gjrSQqpR9meiFUiPPiUEuIMeiWQIwIcrpilg7LwcgUKpBh1ftpfvmbyC3gV498FLsg2I_opxJTBdywdzxWgVZePojoSM_gdZFZnAMtrkwY2vI7yTlHfivzu_TftxOykVmdiWWLftD6dRkSd16F8RmzPTKrPLwsiz6y4O8b9f0jRADksDJqPuoFvQXKEQ7_7YNHYYUQWIaU5tOMz"
            alt="Singapore Government Logo"
            className="h-9 grayscale brightness-200 opacity-70 object-contain"
            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          />
        </div>

      </div>

      {/* Modals */}
      {modalType === 'ealerts' && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="text-center space-y-2 mb-6">
              <span className="material-symbols-outlined text-[#00244a] text-4xl">mark_email_unread</span>
              <h3 className="text-xl font-bold text-[#00244a]">Subscribe to IRAS eAlerts</h3>
              <p className="text-xs text-gray-600">Get official email notifications on tax deadlines, tax relief changes, and GST updates directly in your inbox.</p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center text-emerald-800 text-sm font-bold animate-in fade-in">
                ✓ Successfully subscribed! You will receive our next tax update.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. citizen@example.sg"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00244a]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00244a] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#003a70] transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {modalType === 'contact' && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-xl font-bold text-[#00244a] mb-4">Contact IRAS</h3>
            <div className="space-y-4 text-xs text-gray-700">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="font-bold text-[#00244a] block text-sm">Toll-Free Helplines:</span>
                <p>Individual Income Tax: 1800 356 8300</p>
                <p>Corporate Income Tax: 1800 356 8622</p>
                <p>GST Enquiries: 1800 356 8633</p>
                <p>Property Tax: 1800 356 8300</p>
              </div>
              <div>
                <span className="font-bold block text-sm">IRAS Building Address:</span>
                <p>55 Newton Road, Revenue House, Singapore 307987</p>
                <p className="text-gray-500 mt-1">Mon - Fri: 8:00 am to 5:00 pm (Appointment basis via myTax Portal)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-xl font-bold text-[#00244a] mb-4">IRAS Privacy Statement</h3>
            <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
              <p>1. This is a Government of Singapore website. Thank you for visiting IRAS digital portal.</p>
              <p>2. If you make an application or send an e-mail containing personally identifiable data, we may share relevant data with other Government agencies to serve you in the most efficient and effective way, unless prohibited by law.</p>
              <p>3. To safeguard your personal data, all electronic storage and transmission of personal data are secured with appropriate security technologies and encryption standard.</p>
            </div>
          </div>
        </div>
      )}

      {modalType === 'terms' && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 text-[#161c22]">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-xl font-bold text-[#00244a] mb-4">Terms of Use</h3>
            <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
              <p>1. Access to and use of this service are provided by the Inland Revenue Authority of Singapore (IRAS) subject to the following terms.</p>
              <p>2. All intellectual property rights in the content and design of this portal belong to IRAS or the Government of Singapore.</p>
              <p>3. Unauthorised attempts to modify, bypass security controls, or upload malicious code are strictly prohibited under the Computer Misuse Act.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
