import React from "react";

import {
  ServicesTrademarkFaqsSectionData01,
  ServicesTrademarkFaqsSectionData02,
  ServicesTrademarkFaqsSectionData03,
  ServicesTrademarkImportanceSectionData,
  ServicesTrademarkTestimonialSectionData,
} from "@/constants/services-trademark-registration-page-data";

import ServicesHeroSection from "@/sections/website/services/services-hero-section";
import ServicesProcessSection from "@/sections/website/services/services-process-section";
import ServicesAchievementSection from "@/sections/website/services/services-achievement-section";
import ServicesComparisonSection from "@/sections/website/services/services-comparison-section";
import ServicesFaqsSection from "@/sections/website/services/services-faqs-section";
import ServicesTestimonialSection from "@/sections/website/services/services-testimonial-section";
import ServicesImportanceSection from "@/sections/website/services/service-importance-section";

import ServicesTrademarkProcess1Img from "../../../public/images/services-trademark-process-1-img.webp";
import ServicesTrademarkProcess2Img from "../../../public/images/services-trademark-process-2-img.webp";
import ServicesTrademarkProcess3Img from "../../../public/images/services-trademark-process-3-img.webp";
import ServicesTrademarkAttorneyAchievement1 from "../../../public/images/services-trademark-attorney-achievement-01-img.png";
import ServicesTrademarkAttorneyAchievement2 from "../../../public/images/services-trademark-attorney-achievement-02-img.jpg";
import { BsAwardFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { RiShieldCheckFill } from "react-icons/ri";

const TrademarkRegistrationServicePage = () => {
  return (
    <main>
      <ServicesHeroSection
        backgroundClassname="bg-services-trademark-registration-hero"
        breadcrumbPath="/services/trademark-registration"
        breadcrumbLabel="Trademark Registration"
        titleText="Register A Trademark With America's #1 Filer"
        descriptionText="Let one of our experienced trademark attorneys take care of everything so you don't have to they can perform a trademark search, provide legal advice, and prepare and file your application."
        impactText="$649 + federal fees"
        buttonText="Register my trademark"
        reviewPath="/"
      />

      <ServicesProcessSection
        titleText="Our Streamlined Trademark Registration Process"
        descriptionText=" Get your trademark registered in just 3 easy steps using our simple online questionaire."
        process1Title="Search for Availability"
        process1Img={ServicesTrademarkProcess1Img}
        process1Description="Check to see if your trademark is already being used."
        process2Title="Answer a few Questions"
        process2Img={ServicesTrademarkProcess2Img}
        process2Description="Fill out our simple questionnaire to begin the registration process."
        process3Title="Application Filling"
        process3Img={ServicesTrademarkProcess3Img}
        process3Description="Your application will be filed with the Trademark Office (USPTO)."
      />

      <ServicesAchievementSection
        titleText="Experienced Attorneys To Guide You At Each Step"
        descriptionText="Our law firm has successfully registered over 3x more trademarks than online competitors."
        Attorney1Img={ServicesTrademarkAttorneyAchievement1}
        Attorney1ReviewerName="Omaima P."
        Attorney1ReviewTag1="Trademark Registration"
        Attorney1ReviewTag2="Legal Trademark Office"
        Attorney1Review="The process was seamless, and their attorneys provided exceptional guidance. Highly recommend for trademark registration!"
        Attorney2Img={ServicesTrademarkAttorneyAchievement2}
        Attorney2ReviewerName="Michael R."
        Attorney2ReviewTag1="Trademark Registration"
        Attorney2ReviewTag2="Legal Trademark Office"
        Attorney2Review="They made trademark registration easy and stress-free. Their expertise ensured my brand was protected without any issues."
        Achievement1Icon={BsAwardFill}
        Achievement1Description="Rigorously vetted intellectual property attorneys specializing in trademarks"
        Achievement2Icon={IoMdPerson}
        Achievement2Description="Trademark specialists with an average of 8 years of experience"
        Achievement3Icon={RiShieldCheckFill}
        Achievement3Description="Tens of thousands of satisfied customers trust our law firm"
      />

      <ServicesComparisonSection
        comparisonHeading="What Sets Us Apart"
        Point1="Fully owned law firm specializing in online trademark services"
        Point2="Experienced trademark attorney to guide you step-by-step through the process"
        Point3="Free second search if your attorney identifies an issue with your first choice"
        Point4="Waived second application fee if your first application is rejected"
        Point5="Most trademark applications filed—2x more than competitors"
        numbersAchieved="400K+"
        onlineCompatitorNumbers="200K+"
      />

      <ServicesFaqsSection
        description="Our FAQ section provides clear and concise answers to common questions about trademark registration and protection. Whether you're curious about the application process, fees, or how to handle trademark disputes, we've got you covered. Explore our FAQs to get quick and reliable information."
        data01={ServicesTrademarkFaqsSectionData01}
        data02={ServicesTrademarkFaqsSectionData02}
        data03={ServicesTrademarkFaqsSectionData03}
      />

      <ServicesTestimonialSection
        title="We've Helped File 400K+ Trademark Applications Since 2017"
        data={ServicesTrademarkTestimonialSectionData}
      />

      <ServicesImportanceSection
        titleText="Why Trademark Registration Is Important"
        descriptionText="A trademark protects your brand identity, prevents confusion in the marketplace, and provides legal security for your business. Registering a trademark ensures that your name, slogan, or logo remains uniquely yours—giving you exclusive rights to its use."
        noteData={ServicesTrademarkImportanceSectionData}
        dosTitle="What You Can Trademark"
        dos01="A name like Nike"
        dos02="A logo like the swoosh logo"
        dos03='A slogan like "Just Do It"'
        dontTitle="What You Can't Trademark"
        dont01="Generic terms like 'Computer Store'"
        dont02="Common phrases used in everyday language"
        dont03="Deceptive or misleading brand names"
      />
    </main>
  );
};

export default TrademarkRegistrationServicePage;
