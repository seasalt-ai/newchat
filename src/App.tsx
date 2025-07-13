import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

// Home page components
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import OmnichannelDemo from './components/OmnichannelDemo';
import FeatureTabs from './components/FeatureTabs';
import PricingSection from './components/PricingSection';
import KnowledgeBase from './components/KnowledgeBase';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';

// Feature pages
import HumanAgentsPage from './pages/features/HumanAgentsPage';
import AIAutomationPage from './pages/features/AIAutomationPage';
import AdvancedAIPage from './pages/features/AdvancedAIPage';
import KnowledgeBasePage from './pages/features/KnowledgeBasePage';
import VoiceAgentsPage from './pages/features/VoiceAgentsPage';
import AnalyticsPage from './pages/features/AnalyticsPage';
import OmnichannelPage from './pages/features/OmnichannelPage';
import APIPage from './pages/features/APIPage';

// Integration pages
import WebsitesPage from './pages/integrations/WebsitesPage';
import CRMPage from './pages/integrations/CRMPage';
import EcommercePage from './pages/integrations/EcommercePage';
import SocialMediaPage from './pages/integrations/SocialMediaPage';
import CommunicationPage from './pages/integrations/CommunicationPage';
import MarketingPage from './pages/integrations/MarketingPage';
import CalendarPage from './pages/integrations/CalendarPage';
import IntegrationAPIPage from './pages/integrations/IntegrationAPIPage';

// Solution pages
import EcommerceSolutionPage from './pages/solutions/EcommerceSolutionPage';
import HealthcarePage from './pages/solutions/HealthcarePage';
import FintechPage from './pages/solutions/FintechPage';
import EducationPage from './pages/solutions/EducationPage';
import RealEstatePage from './pages/solutions/RealEstatePage';
import TravelPage from './pages/solutions/TravelPage';
import SaaSPage from './pages/solutions/SaaSPage';
import SmallBusinessPage from './pages/solutions/SmallBusinessPage';

// Other pages
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <KeyFeatures />
      <OmnichannelDemo />
      <FeatureTabs />
      <PricingSection />
      <KnowledgeBase />
      <UseCases />
      <Testimonials />
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Features */}
          <Route path="/features/human-agents" element={<HumanAgentsPage />} />
          <Route path="/features/ai-automation" element={<AIAutomationPage />} />
          <Route path="/features/advanced-ai" element={<AdvancedAIPage />} />
          <Route path="/features/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/features/voice-agents" element={<VoiceAgentsPage />} />
          <Route path="/features/analytics" element={<AnalyticsPage />} />
          <Route path="/features/omnichannel" element={<OmnichannelPage />} />
          <Route path="/features/api" element={<APIPage />} />
          
          {/* Integrations */}
          <Route path="/integrations/websites" element={<WebsitesPage />} />
          <Route path="/integrations/crm" element={<CRMPage />} />
          <Route path="/integrations/ecommerce" element={<EcommercePage />} />
          <Route path="/integrations/social-media" element={<SocialMediaPage />} />
          <Route path="/integrations/communication" element={<CommunicationPage />} />
          <Route path="/integrations/marketing" element={<MarketingPage />} />
          <Route path="/integrations/calendar" element={<CalendarPage />} />
          <Route path="/integrations/api" element={<IntegrationAPIPage />} />
          
          {/* Solutions */}
          <Route path="/solutions/ecommerce" element={<EcommerceSolutionPage />} />
          <Route path="/solutions/healthcare" element={<HealthcarePage />} />
          <Route path="/solutions/fintech" element={<FintechPage />} />
          <Route path="/solutions/education" element={<EducationPage />} />
          <Route path="/solutions/real-estate" element={<RealEstatePage />} />
          <Route path="/solutions/travel" element={<TravelPage />} />
          <Route path="/solutions/saas" element={<SaaSPage />} />
          <Route path="/solutions/small-business" element={<SmallBusinessPage />} />
          
          {/* Other Pages */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;