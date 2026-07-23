import React, { useState } from 'react';
import { POPULAR_TOPICS, TAX_FORMS, LATEST_UPDATES } from '../data/taxData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (item: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectTopic }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredTopics = POPULAR_TOPICS.filter(
    t => t.title.toLowerCase().includes(query.toLowerCase()) || t.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredForms = TAX_FORMS.filter(
    f => f.title.toLowerCase().includes(query.toLowerCase()) || f.code.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArticles = LATEST_UPDATES.filter(
    a => a.title.toLowerCase().includes(query.toLowerCase()) || a.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 md:pt-24 text-[#161c22]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[80vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 border-b border-gray-200 pb-4 pr-10">
          <span className="material-symbols-outlined text-[#00244a] text-2xl">search</span>
          <input
            type="text"
            autoFocus
            placeholder="Search IRAS forms, tax reliefs, GST rules, or guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-medium focus:outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-6 text-xs md:text-sm">
          {!query.trim() ? (
            <div className="text-gray-500 text-xs py-6 space-y-3">
              <span className="font-bold text-gray-700 block">Suggested Quick Searches:</span>
              <div className="flex flex-wrap gap-2">
                {['Individual Tax Rates', 'Form C-S (Lite)', 'GST Return F5', 'CPF Cash Top-Up Relief', 'Property Tax Bill'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="bg-gray-100 hover:bg-[#d5e3ff] hover:text-[#00244a] px-3 py-1.5 rounded-lg text-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Topics */}
              {filteredTopics.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-[#00244a] text-xs uppercase tracking-wider">Popular Topics ({filteredTopics.length})</h4>
                  {filteredTopics.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onClose();
                        onSelectTopic(item);
                      }}
                      className="p-3 hover:bg-[#f7f9ff] rounded-lg cursor-pointer border border-transparent hover:border-[#cce3f5] transition-colors"
                    >
                      <div className="font-bold text-[#00244a]">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.summary}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Forms */}
              {filteredForms.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-[#00244a] text-xs uppercase tracking-wider">Forms ({filteredForms.length})</h4>
                  {filteredForms.map((form) => (
                    <div
                      key={form.id}
                      onClick={() => {
                        alert(`Downloading ${form.code} - ${form.title}...`);
                      }}
                      className="p-3 hover:bg-[#f7f9ff] rounded-lg cursor-pointer border border-transparent hover:border-[#cce3f5] transition-colors flex justify-between items-center"
                    >
                      <div>
                        <span className="font-bold text-xs bg-gray-200 px-2 py-0.5 rounded mr-2">{form.code}</span>
                        <span className="font-medium">{form.title}</span>
                      </div>
                      <span className="text-xs text-gray-400">{form.fileSize}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* News */}
              {filteredArticles.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-[#00244a] text-xs uppercase tracking-wider">Updates &amp; Articles ({filteredArticles.length})</h4>
                  {filteredArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onClose();
                        onSelectTopic(art);
                      }}
                      className="p-3 hover:bg-[#f7f9ff] rounded-lg cursor-pointer border border-transparent hover:border-[#cce3f5]"
                    >
                      <div className="font-bold text-[#00244a]">{art.title}</div>
                      <div className="text-xs text-gray-600 line-clamp-1">{art.summary}</div>
                    </div>
                  ))}
                </div>
              )}

              {filteredTopics.length === 0 && filteredForms.length === 0 && filteredArticles.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No matching IRAS documents found for "{query}".
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
