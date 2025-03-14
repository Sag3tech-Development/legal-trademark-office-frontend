import React from "react";

import {
  ServicesCopyrightFaqsSectionData01,
  ServicesCopyrightFaqsSectionData02,
  ServicesCopyrightFaqsSectionData03,
  ServicesCopyrightImportanceSectionData,
  ServicesCopyrightTestimonialSectionData,
} from "@/constants/copyright-registration-service-page-data";

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
import ServicesCopyrightAttorneyAchievement1 from "../../../public/images/services-copyright-attorney-achievement-01-img.png";
import ServicesCopyrightAttorneyAchievement2 from "../../../public/images/services-copyright-attorney-achievement-02-img.jpg";
import { BsAwardFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { RiShieldCheckFill } from "react-icons/ri";

const CopyrightRegistrationServicePage = () => {
  return (
    <main>
      <ServicesHeroSection
        backgroundClassname="bg-services-copyright-registration-hero"
        breadcrumbPath="/services/copyright-registration"
        breadcrumbLabel="Copyright Registration"
        titleText="Protect Your Creative Work with Copyright Registration"
        descriptionText="Secure legal protection for your original content, including music, art, books, and digital media. Our experienced copyright specialists handle the process for you, ensuring your intellectual property is safeguarded."
        impactText="$149 + federal fees"
        buttonText="Register my copyright"
        reviewPath="/"
      />

      <ServicesProcessSection
        titleText="Our Simple Copyright Registration Process"
        descriptionText="Register your copyright in just 3 easy steps with our hassle-free online process."
        process1Title="Determine Copyright Eligibility"
        process1Img={ServicesProcess1Img}
        process1Description="Ensure your creative work qualifies for copyright protection."
        process2Title="Complete Our Questionnaire"
        process2Img={ServicesProcess2Img}
        process2Description="Answer a few quick questions to provide details about your work."
        process3Title="Application Filing"
        process3Img={ServicesProcess3Img}
        process3Description="We prepare and file your copyright application with the U.S. Copyright Office."
      />

      <ServicesAchievementSection
        titleText="Experienced Copyright Attorneys to Protect Your Work"
        descriptionText="Our law firm has successfully registered thousands of copyrights, ensuring creators' rights are legally protected."
        Attorney1Img={ServicesCopyrightAttorneyAchievement1}
        Attorney1ReviewerName="Samantha T."
        Attorney1ReviewTag1="Copyright Registration"
        Attorney1ReviewTag2="Legal Trademark Office"
        Attorney1Review="The process was incredibly smooth, and their attorneys provided excellent guidance. Highly recommend for copyright registration!"
        Attorney2Img={ServicesCopyrightAttorneyAchievement2}
        Attorney2ReviewerName="David L."
        Attorney2ReviewTag1="Copyright Registration"
        Attorney2ReviewTag2="Legal Trademark Office"
        Attorney2Review="They handled my copyright registration effortlessly. Their expertise ensured my creative work was legally protected without hassle."
        Achievement1Icon={BsAwardFill}
        Achievement1Description="Expert intellectual property attorneys specializing in copyright law"
        Achievement2Icon={IoMdPerson}
        Achievement2Description="Copyright specialists with an average of 10 years of experience"
        Achievement3Icon={RiShieldCheckFill}
        Achievement3Description="Trusted by thousands of artists, writers, and content creators"
      />

      <ServicesComparisonSection
        comparisonHeading="What Sets Us Apart"
        Point1="Fully owned law firm specializing in copyright protection"
        Point2="Experienced copyright attorneys guiding you through the filing process"
        Point3="Comprehensive copyright search to ensure your work is unique"
        Point4="Assistance with registering copyrights for various creative works"
        Point5="Thousands of successful copyright registrations—2x more than competitors"
        numbersAchieved="75K+"
        onlineCompatitorNumbers="35K+"
      />

      <ServicesFaqsSection
        description="Our FAQ section provides clear and concise answers about copyright registration. Whether you're looking to protect your creative work, understand the registration process, or enforce your copyright, we've got you covered. Explore our FAQs to get quick and reliable information."
        data01={ServicesCopyrightFaqsSectionData01}
        data02={ServicesCopyrightFaqsSectionData02}
        data03={ServicesCopyrightFaqsSectionData03}
      />

      <ServicesTestimonialSection
        title="We've Helped Protect 150K+ Copyrights Since 2017"
        data={ServicesCopyrightTestimonialSectionData}
      />

      <ServicesImportanceSection
        titleText="Why Copyright Registration Is Important"
        descriptionText="Copyright registration legally protects your creative work, ensuring that you maintain exclusive rights to reproduce, distribute, and profit from your original content. It also provides legal advantages in enforcing your rights against unauthorized use."
        noteData={ServicesCopyrightImportanceSectionData}
        dosTitle="What You Can Copyright"
        dos01="Books, articles, and literary works"
        dos02="Music, films, and recorded performances"
        dos03="Photographs, paintings, and digital art"
        dontTitle="What You Can't Copyright"
        dont01="Ideas, concepts, or methods"
        dont02="Common phrases or generic titles"
        dont03="Government publications or public domain works"
      />
    </main>
  );
};

export default CopyrightRegistrationServicePage;
