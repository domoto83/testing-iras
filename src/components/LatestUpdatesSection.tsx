import React, { useState } from 'react';
import { LATEST_UPDATES } from '../data/taxData';
import { UpdateArticle } from '../types';

interface LatestUpdatesProps {
  onSelectArticle: (article: UpdateArticle) => void;
}

export const LatestUpdatesSection: React.FC<LatestUpdatesProps> = ({ onSelectArticle }) => {
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#161c22]">
            Latest Updates
          </h2>
          <button 
            onClick={() => setShowAllModal(true)}
            className="text-[#00244a] font-bold flex items-center gap-1.5 group text-xs md:text-sm focus:outline-none hover:underline"
          >
            <span>VIEW ALL UPDATES</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
              chevron_right
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {LATEST_UPDATES.map((article) => (
            <article
              key={article.id}
              className="bg-white p-6 md:p-8 rounded-2xl border border-[#E9ECEF] hover:shadow-xl transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="bg-[#e3e9f0] text-[#434750] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
                    {article.type}
                  </span>
                  <time className="text-[#434750] text-xs font-medium">
                    {article.date}
                  </time>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#161c22] line-clamp-2 hover:text-[#00244a] transition-colors cursor-pointer"
                    onClick={() => onSelectArticle(article)}>
                  {article.title}
                </h3>

                <p className="text-[#434750] text-xs md:text-sm line-clamp-3 mb-6 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9ECEF]">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="flex items-center text-[#00244a] font-bold text-xs md:text-sm group focus:outline-none cursor-pointer"
                >
                  <span>READ MORE</span>
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* View All Updates Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#161c22] rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowAllModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#00244a] text-3xl">newspaper</span>
              <div>
                <h3 className="text-2xl font-bold text-[#00244a]">All IRAS Media &amp; News Releases</h3>
                <p className="text-xs text-gray-500">Official announcements, tax policy updates, and legislative amendments</p>
              </div>
            </div>

            <div className="space-y-4">
              {LATEST_UPDATES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => {
                    setShowAllModal(false);
                    onSelectArticle(article);
                  }}
                  className="p-5 border border-gray-200 rounded-xl hover:border-[#00244a] hover:bg-[#f7f9ff] transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#e3e9f0] text-xs px-2 py-0.5 rounded font-bold">{article.type}</span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-[#00244a]">{article.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{article.summary}</p>
                  </div>
                  <button className="text-[#00244a] font-bold text-xs flex items-center gap-1 flex-shrink-0">
                    Read <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
