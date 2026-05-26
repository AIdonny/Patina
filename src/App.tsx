import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { WhyPatinaPage } from './pages/WhyPatinaPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { RitualPage } from './pages/RitualPage';
import { GiftingPage } from './pages/GiftingPage';
import { PressPage } from './pages/PressPage';
import { BlogPage } from './pages/BlogPage';
import { ForScreenWorkersPage } from './pages/ForScreenWorkersPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { LaunchingSoonPage } from './pages/LaunchingSoonPage';

interface AppProps {
  readonly className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone launching-soon page — no Nav or Footer */}
        <Route path="/launching-soon" element={<LaunchingSoonPage />} />

        {/* Main site with Nav + Footer */}
        <Route path="/*" element={
      <div className="min-h-screen flex flex-col bg-[#F5EAE0]">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/why-patina" element={<WhyPatinaPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/ritual" element={<RitualPage />} />
            <Route path="/gifting" element={<GiftingPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/for-screen-workers" element={<ForScreenWorkersPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
