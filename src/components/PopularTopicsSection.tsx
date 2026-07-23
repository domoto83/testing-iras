import React, { useState } from 'react';
import { POPULAR_TOPICS } from '../data/taxData';
import { TopicItem } from '../types';

interface PopularTopicsSectionProps {
  onSelectTopic: (topic: TopicItem) => void;
}

export const PopularTopicsSection: React.FC<PopularTopicsSectionProps> = ({ onSelectTopic }) => {
  const [activeTab, setActiveTab] = useState<TopicItem['category']>('Employees');

  const categories: TopicItem['category'][] = [
    'Employees',
    'Non-resident individuals',
    'Self-employed/Partners',
    'Companies'
  ];

  // Filter topics for selected tab or fallback if fewer items exist
  const currentTopics = POPULAR_TOPICS.filter(t => t.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#161c22] mb-6">
            Popular Topics
          </h2>
          
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-1 md:gap-2 border-b border-[#c3c6d1]">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 md:px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold transition-all border-b-2 cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'border-[#00244a] text-[#00244a]'
                      : 'border-transparent text-[#434750] hover:text-[#161c22]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x3 Grid of Topic Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="bg-white border border-[#E9ECEF] p-5 md:p-6 rounded-xl hover:border-[#00244a] hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
            >
              <span className="font-medium text-sm text-[#161c22] pr-4 leading-snug">
                {topic.title}
              </span>
              <span className="material-symbols-outlined text-[#737781] group-hover:text-[#00244a] transition-colors text-xl flex-shrink-0">
                open_in_new
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
