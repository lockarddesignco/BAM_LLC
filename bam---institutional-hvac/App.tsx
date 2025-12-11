import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Accreditations } from './components/Accreditations';
import { Capabilities } from './components/Capabilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { TheBAMMethod } from './components/TheBAMMethod';
import { Results } from './components/Results';
import { SiteVisitCTA } from './components/SiteVisitCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F8] text-slate-800 antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Accreditations />
        <Capabilities />
        <WhyChooseUs />
        <Industries />
        <TheBAMMethod />
        <Results />
        <SiteVisitCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;