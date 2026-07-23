import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENT_SLIDES } from '../data/taxData';

interface AnnouncementCarouselProps {
  onOpenChecker: () => void;
}

export const AnnouncementCarousel: React.FC<AnnouncementCarouselProps> = ({ onOpenChecker }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = ANNOUNCEMENT_SLIDES[currentIndex];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#eff4fc] rounded-3xl overflow-hidden border border-[#E9ECEF] shadow-xs">
          
          {/* Slide Text Content */}
          <div className="p-8 md:p-12 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <span className="text-[#00244a] font-bold text-xs md:text-sm tracking-widest uppercase">
                {slide.tag}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#161c22] leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-[#434750] leading-relaxed">
                {slide.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
              <button
                onClick={onOpenChecker}
                className="bg-[#00244a] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold hover:bg-[#003a70] hover:shadow-lg transition-all active:scale-95 text-xs md:text-sm tracking-wider cursor-pointer"
              >
                {slide.actionText}
              </button>

              <div className="flex items-center gap-2 text-[#161c22]">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-[#dde3eb] rounded-full transition-colors focus:outline-none"
                  title={isPlaying ? 'Pause auto-play' : 'Play auto-play'}
                  aria-label="Toggle autoplay"
                >
                  <span className="material-symbols-outlined text-xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span className="text-xs md:text-sm font-bold tracking-wider">
                  {currentIndex + 1} / 11
                </span>
                
                {/* Manual slide switchers */}
                <button 
                  onClick={() => setCurrentIndex((currentIndex - 1 + ANNOUNCEMENT_SLIDES.length) % ANNOUNCEMENT_SLIDES.length)}
                  className="p-1 hover:bg-[#dde3eb] rounded-full text-xs"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button 
                  onClick={() => setCurrentIndex((currentIndex + 1) % ANNOUNCEMENT_SLIDES.length)}
                  className="p-1 hover:bg-[#dde3eb] rounded-full text-xs"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slide Banner Image */}
          <div className="relative h-[280px] sm:h-[350px] lg:h-full min-h-[320px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback image if unsplash/google fails
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};
