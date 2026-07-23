import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'iras-bot',
      text: 'Hello! I am your IRAS Virtual Tax Assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        'How to calculate individual tax relief?',
        'What are 2026 GST filing deadlines?',
        'Am I eligible for Form C-S (Lite)?',
        'How do I apply for GIRO tax payment?'
      ]
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: 'u_' + Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    setTimeout(() => {
      let botResponse = '';
      let options: string[] = [];

      const lower = textToSend.toLowerCase();

      if (lower.includes('relief') || lower.includes('calculate') || lower.includes('individual tax')) {
        botResponse = 'In Singapore, personal income tax is progressive (0% to 24%). You can claim reliefs like Earned Income Relief, CPF Cash Top-Up (up to $8,000 for self + $8,000 for family), SRS (up to $15,300 for Citizens), and Child Relief ($4,000/child). Maximum total relief cap is $80,000.';
        options = ['Try Individual Tax Calculator', 'Check SRS Relief Cap', 'When is Tax Season 2026?'];
      } else if (lower.includes('gst') || lower.includes('deadline')) {
        botResponse = 'The standard GST rate in Singapore is 9%. GST returns (e.g. GST F5) are due 1 month after the end of each accounting period (e.g., 31 Jul for Jun period, 31 Oct for Sep period).';
        options = ['Download GST F5 Form', 'GST Rate Guide for Businesses'];
      } else if (lower.includes('form c-s') || lower.includes('corporate') || lower.includes('company')) {
        botResponse = 'Form C-S is a simplified corporate tax return for Singapore-incorporated companies with annual revenue ≤ $5 million. If revenue is ≤ $200,000, you can file Form C-S (Lite). Corporate tax is flat 17% with partial tax exemptions!';
        options = ['Check Corporate Tax Exemptions', 'When is ECI filing due?'];
      } else if (lower.includes('giro') || lower.includes('payment') || lower.includes('installment')) {
        botResponse = 'You can set up GIRO via myTax Portal for interest-free monthly installments up to 12 months for Individual Tax or 10 months for Corporate Tax ECI. Deductions occur on the 6th of each month.';
        options = ['Log in to myTax Portal', 'Check Outstanding Tax Balance'];
      } else {
        botResponse = `Thank you for your inquiry regarding "${textToSend}". You can find step-by-step guidance on myTax Portal, download official IRAS forms, or call our toll-free hotline at 1800 356 8300 (Mon-Fri 8am-5pm).`;
        options = ['Browse Popular Topics', 'Launch Tax Calculator', 'Contact Customer Service'];
      }

      const botMsg: ChatMessage = {
        id: 'b_' + Date.now(),
        sender: 'iras-bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options
      };

      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Chat FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#00244a] text-white p-3.5 md:p-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 active:scale-95 transition-all group focus:outline-none cursor-pointer border-2 border-white/20"
        aria-label="Chat with IRAS"
      >
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-[10px] uppercase font-bold opacity-80 tracking-wider">Need Help?</span>
          <span className="text-xs md:text-sm font-bold leading-none">Chat with IRAS</span>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#00244a] shadow-inner">
          <span className="material-symbols-outlined text-2xl md:text-[28px]">
            {isOpen ? 'close' : 'forum'}
          </span>
        </div>
      </button>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 z-50 w-[92vw] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-[520px] max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#00244a] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#00244a] flex items-center justify-center font-bold text-sm">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">IRAS Ask Tax Assistant</h3>
                <p className="text-[10px] text-blue-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Singapore Tax Portal
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f7f9ff] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#00244a] text-white rounded-tr-none'
                      : 'bg-white text-[#161c22] border border-gray-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick option buttons */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(opt)}
                        className="bg-white hover:bg-[#d5e3ff] text-[#00244a] border border-[#00244a]/20 px-3 py-1.5 rounded-full font-medium text-[11px] transition-colors text-left shadow-2xs"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-500 bg-white p-3 rounded-xl border border-gray-200 w-24">
                <span className="w-2 h-2 rounded-full bg-[#00244a] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#00244a] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#00244a] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type your tax question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#00244a] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-[#00244a] text-white p-2.5 rounded-xl hover:bg-[#003a70] disabled:opacity-40 transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>

        </div>
      )}
    </>
  );
};
