import React, { useState } from 'react';

interface HeaderNavProps {
  onOpenLogin: () => void;
  onOpenSearch: () => void;
  onSelectNavCategory: (category: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenLogin,
  onOpenSearch,
  onSelectNavCategory
}) => {
  const [activeTab, setActiveTab] = useState('Taxes');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'Who We Are',
    'Taxes',
    'Schemes',
    'Digital Services',
    'Digital Collaboration'
  ];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    onSelectNavCategory(item);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#c3c6d1] h-20 shadow-xs transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-4 md:px-6 max-w-[1200px] mx-auto h-full">
        {/* Brand Logo & Name */}
        <a href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="h-14 flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLv_KhMN4KTTXY20jERh9l24VURDJUVtAVOSWGzRCsod_gjrSQqpR9meiFUiPPiUEuIMeiWQIwIcrpilg7LwcgUKpBh1ftpfvmbyC3gV498FLsg2I_opxJTBdywdzxWgVZePojoSM_gdZFZnAMtrkwY2vI7yTlHfivzu_TftxOykVmdiWWLftD6dRkSd16F8RmzPTKrPLwsiz6y4O8b9f0jRADksDJqPuoFvQXKEQ7_7YNHYYUQWIaU5tOMz" 
              alt="IRAS Logo" 
              className="h-14 w-auto object-contain"
              onError={(e) => {
                // Fallback SVG if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-2xl font-bold text-[#00244a] tracking-tight">
            IRAS
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`h-full flex items-center transition-colors duration-200 text-sm font-medium focus:outline-none ${
                  isActive
                    ? 'text-[#00244a] font-bold border-b-2 border-[#00244a] pt-0.5'
                    : 'text-[#434750] hover:text-[#00244a]'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Search, Login & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#161c22] hover:bg-[#e9eef6] transition-colors rounded-full focus:outline-none"
            title="Search IRAS"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button
            onClick={onOpenLogin}
            className="bg-[#003a70] text-white px-5 md:px-6 py-2.5 rounded-lg font-bold hover:bg-[#00244a] active:scale-98 transition-all text-xs md:text-sm tracking-wide focus:outline-none shadow-xs"
          >
            LOGIN
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#161c22] hover:bg-[#e9eef6] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c3c6d1] px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`w-full text-left py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                activeTab === item
                  ? 'bg-[#eff4fc] text-[#00244a] font-bold border-l-4 border-[#00244a]'
                  : 'text-[#434750] hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
