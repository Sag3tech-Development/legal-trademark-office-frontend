import React from "react";

import {
  ServicesPatentFaqsSectionData01,
  ServicesPatentFaqsSectionData02,
  ServicesPatentFaqsSectionData03,
  ServicesPatentImportanceSectionData,
  ServicesPatentTestimonialSectionData,
} from "@/constants/services-patent-registration-page-data";

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
import ServicesPatentAttorneyAchievement1 from "../../../public/images/services-patent-attorney-achievement-01-img.png";
import ServicesPatentAttorneyAchievement2 from "../../../public/images/services-patent-attorney-achievement-02-img.jpg";
import { FaLightbulb } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { MdGavel } from "react-icons/md";

const PatentRegistrationServicePage = () => {
  return (
    <main>
      <ServicesHeroSection
        backgroundClassname="bg-services-patent-registration-hero"
        breadcrumbPath="/services/patent-registration"
        breadcrumbLabel="Patent Registration"
        titleText="Protect Your Invention with America's #1 Patent Filer"
        descriptionText="Let our experienced patent attorneys handle everything for you. We conduct patent searches, provide legal guidance, and prepare and file your patent application to safeguard your intellectual property."
        impactText="$799 + USPTO fees"
        buttonText="Start Your Patent Registration"
        reviewPath="/"
      />

      <ServicesProcessSection
        titleText="Our Streamlined Patent Registration Process"
        descriptionText="Secure your invention with a patent in just 3 simple steps using our expert-guided process."
        process1Title="Conduct a Patent Search"
        process1Img={ServicesProcess1Img}
        process1Description="Our experts check for existing patents to ensure your invention is unique."
        process2Title="Prepare Your Application"
        process2Img={ServicesProcess2Img}
        process2Description="Provide key details, and our professionals will draft your patent application."
        process3Title="Submit to USPTO"
        process3Img={ServicesProcess3Img}
        process3Description="We file your patent application with the USPTO for official review and approval."
      />

      <ServicesAchievementSection
        titleText="Experienced Patent Attorneys to Protect Your Invention"
        descriptionText="Our law firm has successfully secured thousands of patents, helping inventors protect their intellectual property with expert legal guidance."
        Attorney1Img={ServicesPatentAttorneyAchievement1}
        Attorney1ReviewerName="Sophia L."
        Attorney1ReviewTag1="Patent Registration"
        Attorney1ReviewTag2="Legal Trademark Office"
        Attorney1Review="Their patent attorneys were incredibly knowledgeable and walked me through the entire process. My invention is now fully protected!"
        Attorney2Img={ServicesPatentAttorneyAchievement2}
        Attorney2ReviewerName="James T."
        Attorney2ReviewTag1="Patent Registration"
        Attorney2ReviewTag2="Legal Trademark Office"
        Attorney2Review="I was impressed with their attention to detail and professionalism. They made the complex patent process simple and hassle-free."
        Achievement1Icon={FaLightbulb}
        Achievement1Description="Top-rated patent attorneys with extensive experience in intellectual property law"
        Achievement2Icon={HiOutlineDocumentText}
        Achievement2Description="Patent law specialists with an average of 10 years of experience"
        Achievement3Icon={MdGavel}
        Achievement3Description="Thousands of inventors trust our firm to protect their intellectual property"
      />

      <ServicesComparisonSection
        comparisonHeading="What Sets Us Apart"
        Point1="Fully owned law firm specializing in patent registration services"
        Point2="Experienced patent attorneys guiding you through the complex filing process"
        Point3="Comprehensive patent search to ensure your invention is unique"
        Point4="Assistance with provisional and non-provisional patent applications"
        Point5="Thousands of successful patent applications filed—2x more than competitors"
        numbersAchieved="50K+"
        onlineCompatitorNumbers="25K+"
      />

      <ServicesFaqsSection
        description="Our FAQ section provides clear and concise answers about patent registration. Whether you're looking to protect a new invention, understand the application process, or enforce your patent rights, we've got you covered. Explore our FAQs to get quick and reliable information."
        data01={ServicesPatentFaqsSectionData01}
        data02={ServicesPatentFaqsSectionData02}
        data03={ServicesPatentFaqsSectionData03}
      />

      <ServicesTestimonialSection
        title="We've Helped Secure 200K+ Patents Since 2017"
        data={ServicesPatentTestimonialSectionData}
      />

      <ServicesImportanceSection
        titleText="Why Patent Registration Is Important"
        descriptionText="A patent protects your invention and grants you exclusive rights, ensuring that no one else can profit from your hard work and innovation. Patents are essential for safeguarding unique ideas, increasing business value, and maintaining a competitive edge in the marketplace."
        noteData={ServicesPatentImportanceSectionData}
        dosTitle="What You Can Patent"
        dos01="A new and useful product"
        dos02="A unique manufacturing process"
        dos03="An innovative machine or device"
        dontTitle="What You Can't Patent"
        dont01="Laws of nature or mathematical formulas"
        dont02="Abstract ideas or theories"
        dont03="Inventions that are not new or obvious"
      />
    </main>
  );
};

export default PatentRegistrationServicePage;
