import React from "react";

import AboutHeroSection from "@/sections/website/about/about-hero-section";
import StorySection from "@/sections/website/about/story-section";
import HighlightSection from "@/sections/website/about/highlight-section";
import AnnouncementSection from "@/sections/website/about/announcement-section";
import ValuesSection from "@/sections/website/about/values-section";
import MeetLegalTeamSection from "@/sections/website/about/meet-legal-team-section";

const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <HighlightSection />
      <ValuesSection />
      <AnnouncementSection />
      <MeetLegalTeamSection />
    </main>
  );
};

export default AboutPage;
