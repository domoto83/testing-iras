import React, { useState } from 'react';
import { ScamBanner } from './components/ScamBanner';
import { GovernmentBar } from './components/GovernmentBar';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { QuickLinksSection } from './components/QuickLinksSection';
import { AnnouncementCarousel } from './components/AnnouncementCarousel';
import { PopularTopicsSection } from './components/PopularTopicsSection';
import { LatestUpdatesSection } from './components/LatestUpdatesSection';
import { FooterSection } from './components/FooterSection';
import { ChatWidget } from './components/ChatWidget';

import { TaxCalculatorModal } from './components/TaxCalculatorModal';
import { MyTaxPortalModal } from './components/MyTaxPortalModal';
import { SearchModal } from './components/SearchModal';
import { TaxFormsModal } from './components/TaxFormsModal';
import { TaxRatesModal } from './components/TaxRatesModal';
import { TopicDetailModal } from './components/TopicDetailModal';

import { QuickLink, TopicItem, UpdateArticle, TaxDeadline } from './types';

export default function App() {
  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isRatesOpen, setIsRatesOpen] = useState(false);

  // Selected topic/item for detail sheet modal
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | UpdateArticle | TaxDeadline | null>(null);

  // Quick link action dispatcher
  const handleSelectQuickLink = (actionKey: QuickLink['actionKey']) => {
    switch (actionKey) {
      case 'calculators':
        setIsCalculatorOpen(true);
        break;
      case 'payments':
        setIsLoginOpen(true);
        break;
      case 'digital-services':
        setIsLoginOpen(true);
        break;
      case 'forms':
        setIsFormsOpen(true);
        break;
      case 'guides':
        setIsSearchOpen(true);
        break;
      case 'rates':
        setIsRatesOpen(true);
        break;
      default:
        break;
    }
  };

  const handleSelectNavCategory = (category: string) => {
    if (category === 'Digital Services') {
      setIsLoginOpen(true);
    } else {
      setIsSearchOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#161c22] font-['Inter',sans-serif] selection:bg-[#00244a] selection:text-white">
      {/* 1. Scam Warning Header */}
      <ScamBanner />

      {/* 2. Agency Identity Bar */}
      <GovernmentBar />

      {/* 3. Navigation Shell */}
      <HeaderNav
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectNavCategory={handleSelectNavCategory}
      />

      {/* 4. Main Portal Content */}
      <main className="flex-grow">
        {/* Hero Section: Taxes for our nation & timelines */}
        <HeroSection
          onSelectDeadline={(deadline) => setSelectedTopic(deadline)}
        />

        {/* Quick Links Section */}
        <QuickLinksSection
          onSelectQuickLink={handleSelectQuickLink}
        />

        {/* Dynamic Announcement Carousel */}
        <AnnouncementCarousel
          onOpenChecker={() => setIsCalculatorOpen(true)}
        />

        {/* Popular Topics Tabbed Section */}
        <PopularTopicsSection
          onSelectTopic={(topic) => setSelectedTopic(topic)}
        />

        {/* Latest Updates Section */}
        <LatestUpdatesSection
          onSelectArticle={(article) => setSelectedTopic(article)}
        />
      </main>

      {/* 5. Footer Cluster */}
      <FooterSection />

      {/* 6. Floating Ask IRAS Assistant */}
      <ChatWidget />

      {/* Modals & Dialog Sheets */}
      <MyTaxPortalModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={(item) => setSelectedTopic(item)}
      />

      <TaxCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <TaxFormsModal
        isOpen={isFormsOpen}
        onClose={() => setIsFormsOpen(false)}
      />

      <TaxRatesModal
        isOpen={isRatesOpen}
        onClose={() => setIsRatesOpen(false)}
      />

      <TopicDetailModal
        item={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />
    </div>
  );
}
