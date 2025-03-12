import React from "react";

import {
  ServicesAmazonBrandFaqsSectionData01,
  ServicesAmazonBrandFaqsSectionData02,
  ServicesAmazonBrandFaqsSectionData03,
  ServicesAmazonBrandTestimonialSectionData,
  ServicesAmazonBrandImportanceSectionData,
} from "@/constants/amazon-brand-registration-service-page-data";

import ServicesHeroSection from "@/sections/website/services/services-hero-section";
import ServicesProcessSection from "@/sections/website/services/services-process-section";
import ServicesAchievementSection from "@/sections/website/services/services-achievement-section";
import ServicesComparisonSection from "@/sections/website/services/services-comparison-section";
import ServicesFaqsSection from "@/sections/website/services/services-faqs-section";
import ServicesTestimonialSection from "@/sections/website/services/services-testimonial-section";
import ServicesImportanceSection from "@/sections/website/services/service-importance-section";

import ServicesProcess1Img from "../../../public/images/services-process-1-img.webp";
import ServicesProcess2Img from "../../../public/images/services-process-2-img.webp";
import ServicesProcess3Img from "../../../public/images/services-process-3-img.webp";
import ServicesAmazonBranAttorneyAchievement1 from "../../../public/images/services-trademark-attorney-achievement-01-img.png";
import ServicesAmazonBranAttorneyAchievement2 from "../../../public/images/services-amazon-brand-attorney-achievement-02-img.jpg";
import { FaAmazon } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";

const AmazonBrandRegistrationServicePage = () => {
  return (
    <main>
      <ServicesHeroSection
        backgroundClassname="bg-services-amazon-brand-registration-hero"
        breadcrumbPath="/services/amazon-brand-registration"
        breadcrumbLabel="Amazon Brand Registration"
        titleText="Protect & Elevate Your Brand with Amazon Brand Registry"
        descriptionText="Enroll in Amazon Brand Registry to safeguard your brand, prevent counterfeit listings, and gain exclusive tools to boost product visibility and sales on Amazon."
        impactText="$349 + Amazon fees"
        buttonText="Register my brand on Amazon"
        reviewPath="/"
      />

      <ServicesProcessSection
        titleText="Our Amazon Brand Registration Process"
        descriptionText="Get your brand registered on Amazon in just 3 simple steps with our expert-guided process."
        process1Title="Check Eligibility"
        process1Img={ServicesProcess1Img}
        process1Description="Ensure you have a registered trademark and meet Amazon's requirements."
        process2Title="Submit Required Information"
        process2Img={ServicesProcess2Img}
        process2Description="Provide details about your brand, including trademarks and product listings."
        process3Title="Amazon Brand Enrollment"
        process3Img={ServicesProcess3Img}
        process3Description="We file your application, and upon approval, you gain access to exclusive Amazon brand protection tools."
      />

      <ServicesAchievementSection
        titleText="Amazon Brand Registry Experts to Elevate Your Brand"
        descriptionText="Our team has helped thousands of businesses secure their brands on Amazon, ensuring protection from counterfeiters and boosting brand visibility."
        Attorney1Img={ServicesAmazonBranAttorneyAchievement1}
        Attorney1ReviewerName="Jessica M."
        Attorney1ReviewTag1="Amazon Brand Registration"
        Attorney1ReviewTag2="Brand Protection"
        Attorney1Review="Their team made Amazon Brand Registry a breeze! They handled everything, and now my brand is fully protected."
        Attorney2Img={ServicesAmazonBranAttorneyAchievement2}
        Attorney2ReviewerName="Robert K."
        Attorney2ReviewTag1="Amazon Brand Registration"
        Attorney2ReviewTag2="Brand Protection"
        Attorney2Review="I was struggling with unauthorized sellers on my listings, but after registering with their help, my brand is secure!"
        Achievement1Icon={FaAmazon}
        Achievement1Description="Amazon Brand Registry specialists with years of experience"
        Achievement2Icon={MdVerifiedUser}
        Achievement2Description="Thousands of Amazon sellers trust our expertise"
        Achievement3Icon={BsAwardFill}
        Achievement3Description="Proven success in preventing counterfeits and brand misuse"
      />

      <ServicesComparisonSection
        comparisonHeading="What Sets Us Apart"
        Point1="Fully owned law firm specializing in Amazon Brand Registry services"
        Point2="Experienced trademark attorneys guiding you through the registration process"
        Point3="Comprehensive trademark search to ensure your brand name is available"
        Point4="Assistance with Amazon Brand Registry application and documentation"
        Point5="Thousands of successful brand registrations—2x more than competitors"
        numbersAchieved="30K+"
        onlineCompatitorNumbers="15K+"
      />

      <ServicesFaqsSection
        description="Our FAQ section provides clear and concise answers about Amazon Brand Registry. Whether you're curious about eligibility, enrollment, or the tools available for protecting your brand on Amazon, we've got you covered. Explore our FAQs to get quick and reliable information."
        data01={ServicesAmazonBrandFaqsSectionData01}
        data02={ServicesAmazonBrandFaqsSectionData02}
        data03={ServicesAmazonBrandFaqsSectionData03}
      />

      <ServicesTestimonialSection
        title="We've Helped Protect 75K+ Brands on Amazon Since 2017"
        data={ServicesAmazonBrandTestimonialSectionData}
      />

      <ServicesImportanceSection
        titleText="Why Amazon Brand Registry Is Important"
        descriptionText="Amazon Brand Registry helps brand owners protect their products, enhance brand visibility, and maintain control over their listings. It prevents unauthorized sellers from hijacking your brand while giving you access to exclusive marketing and reporting tools."
        noteData={ServicesAmazonBrandImportanceSectionData}
        dosTitle="What You Get with Amazon Brand Registry"
        dos01="Protection against counterfeit listings"
        dos02="Exclusive access to A+ Content and Sponsored Brands"
        dos03="Enhanced search and reporting tools"
        dontTitle="What Amazon Brand Registry Doesn't Cover"
        dont01="Protection outside of Amazon"
        dont02="Copyright or patent disputes"
        dont03="Automatic enforcement—monitoring is still required"
      />
    </main>
  );
};

export default AmazonBrandRegistrationServicePage;
