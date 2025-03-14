import React from "react";

import TermsConditionsDetailsSection from "@/sections/website/terms-conditons/terms-conditions-details-section";
import TermsConditionsHeroSection from "@/sections/website/terms-conditons/terms-conditions-hero-section";

const TermsConditionsPage = () => {
  return (
    <main>
      <TermsConditionsHeroSection />
      <TermsConditionsDetailsSection />
    </main>
  );
};

export default TermsConditionsPage;
