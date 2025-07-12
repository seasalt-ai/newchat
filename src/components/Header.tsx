import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'pl', name: 'Polski' },
    { code: 'ru', name: 'Русский' },
    { code: 'ar', name: 'العربية' },
  ];

  const featuresDropdown = [
    { name: t('header.featuresDropdown.humanAgents'), href: '/features/human-agents' },
    { name: t('header.featuresDropdown.aiAutomation'), href: '/features/ai-automation' },
    { name: t('header.featuresDropdown.advancedAI'), href: '/features/advanced-ai' },
    { name: t('header.featuresDropdown.knowledgeBase'), href: '/features/knowledge-base' },
    { name: t('header.featuresDropdown.voiceAgents'), href: '/features/voice-agents' },
    { name: t('header.featuresDropdown.analytics'), href: '/features/analytics' },
    { name: t('header.featuresDropdown.omnichannel'), href: '/features/omnichannel' },
    { name: t('header.featuresDropdown.api'), href: '/features/api' }
  ];

  const integrationsDropdown = [
    { name: t('header.integrationsDropdown.websites'), href: '/integrations/websites' },
    { name: t('header.integrationsDropdown.crm'), href: '/integrations/crm' },
    { name: t('header.integrationsDropdown.ecommerce'), href: '/integrations/ecommerce' },
    { name: t('header.integrationsDropdown.socialMedia'), href: '/integrations/social-media' },
    { name: t('header.integrationsDropdown.communication'), href: '/integrations/communication' },
    { name: t('header.integrationsDropdown.marketing'), href: '/integrations/marketing' },
    { name: t('header.integrationsDropdown.calendar'), href: '/integrations/calendar' },
    { name: t('header.integrationsDropdown.api'), href: '/integrations/api' }
  ];

  const solutionsDropdown = [
    { name: t('header.solutionsDropdown.ecommerce'), href: '/solutions/ecommerce' },
    { name: t('header.solutionsDropdown.healthcare'), href: '/solutions/healthcare' },
    { name: t('header.solutionsDropdown.fintech'), href: '/solutions/fintech' },
    { name: t('header.solutionsDropdown.education'), href: '/solutions/education' },
    { name: t('header.solutionsDropdown.realEstate'), href: '/solutions/real-estate' },
    { name: t('header.solutionsDropdown.travel'), href: '/solutions/travel' },
    { name: t('header.solutionsDropdown.saas'), href: '/solutions/saas' },
    { name: t('header.solutionsDropdown.smallBusiness'), href: '/solutions/small-business' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (section: string) => {
    return location.pathname.startsWith(`/${section}`);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  // Get current language code and name
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/seachat-logo.png" alt="SeaChat Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isActiveSection('features') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => handleDropdownToggle('features')}
              >
                {t('header.features')}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {featuresDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActivePath(item.href) 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Integrations Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isActiveSection('integrations') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => handleDropdownToggle('integrations')}
              >
                {t('header.integrations')}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === 'integrations' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {integrationsDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActivePath(item.href) 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isActiveSection('solutions') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => handleDropdownToggle('solutions')}
              >
                {t('header.solutions')}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActivePath(item.href) 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link 
              to="/pricing" 
              className={`font-medium transition-colors ${
                isActivePath('/pricing') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('header.pricing')}
            </Link>

            {/* Blog */}
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${
                isActivePath('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('header.blog')}
            </Link>

            {/* Wiki (standout) */}
            <a
              href="http://wiki.seasalt.ai/seachat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105 border border-blue-400"
              style={{ marginLeft: '0.5rem' }}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Wiki
            </a>
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language selector */}
            <LanguageSwitcher />
            {/* Sign In button */}
            <a
              href="https://chat.seasalt.ai/gpt/signin"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('common.signIn')}
            </a>
            <a href="https://chat.seasalt.ai/gpt/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
              {t('common.getStarted')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-6 space-y-6">
            {/* Features Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('header.features')}</h3>
              <div className="space-y-2 pl-4">
                {featuresDropdown.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`block transition-colors ${
                      isActivePath(item.href) 
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Integrations Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('header.integrations')}</h3>
              <div className="space-y-2 pl-4">
                {integrationsDropdown.slice(0, 4).map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`block transition-colors ${
                      isActivePath(item.href) 
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/integrations" className="block text-blue-600 font-medium">View All Integrations →</Link>
              </div>
            </div>

            {/* Solutions Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('header.solutions')}</h3>
              <div className="space-y-2 pl-4">
                {solutionsDropdown.slice(0, 4).map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`block transition-colors ${
                      isActivePath(item.href) 
                        ? 'text-blue-600 font-medium' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/solutions" className="block text-blue-600 font-medium">View All Solutions →</Link>
              </div>
            </div>

            <Link 
              to="/pricing" 
              className={`block font-medium transition-colors ${
                isActivePath('/pricing') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.pricing')}
            </Link>
            <Link 
              to="/blog" 
              className={`block font-medium transition-colors ${
                isActivePath('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.blog')}
            </Link>
            
            {/* Language Selector */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('header.language')}</h3>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`text-left px-3 py-2 rounded text-sm ${
                      i18n.language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <a
                href="https://chat.seasalt.ai/gpt/signin"
                className="block w-full text-left text-gray-700 font-medium mb-3"
              >
                {t('common.signIn')}
              </a>
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                className="w-full block text-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t('common.getStarted')}
              </a>
              <a
                href="http://wiki.seasalt.ai/seachat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center mt-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-teal-600 transition-all border border-blue-400"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Wiki
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for dropdowns */}
      {openDropdown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;