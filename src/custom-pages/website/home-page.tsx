import React from "react";

import HomeHeroSection from "@/sections/website/home/home-hero-section";
import AchievementsSection from "@/sections/website/home/achievements-section";
import TrademarkProcessSection from "@/sections/website/home/trademark-process-section";
import ServicesSection from "@/sections/website/home/services-section";
import PricingSection from "@/sections/website/home/pricing-section";
import TrademarkBenefitSection from "@/sections/website/home/trademark-benefit-section";

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection />
      <AchievementsSection />
      <TrademarkProcessSection />
      <ServicesSection />
      <PricingSection />
      <TrademarkBenefitSection />
    </main>
  );
};

export default HomePage;
