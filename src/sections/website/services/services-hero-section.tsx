"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ServicesHeroSectionProps } from "@/interfaces/website-section-interfaces";

import { Button } from "@/components/ui/button";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RatingIcon from "../../../../public/icons/rating-icon.svg";
import TrustpilotIcon from "../../../../public/icons/trustpilot-icon.svg";

const ServicesHeroSection = ({
  backgroundClassname,

  breadcrumbPath,
  breadcrumbLabel,

  titleText,
  descriptionText,
  impactText,

  buttonText,
  reviewPath,
}: ServicesHeroSectionProps) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <section className="w-full h-[700px] grid grid-cols-2 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="bg-white" />
      <div className={`relative bg-cover bg-center ${backgroundClassname}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-[50%]" />
      </div>

      {/* OVERLAY CONTENT */}
      <div className="w-full layout-standard absolute inset-0 grid grid-cols-2 pr-8">
        <div className="w-full h-full flex flex-col lg:justify-center max-lg:items-center lg:gap-8 gap-6 section-padding-standard">
          <div className="md:flex items-center max-lg:w-full gap-2 hidden">
            <Link className="font-semibold hover:text-heading" href={"/"}>
              Home
            </Link>
            <MdOutlineKeyboardArrowRight size={20} />
            <Link className="font-semibold hover:text-heading" href={"/"}>
              Services
            </Link>
            <MdOutlineKeyboardArrowRight size={20} />
            <Link className="text-heading font-semibold" href={breadcrumbPath}>
              {breadcrumbLabel}
            </Link>
          </div>

          <h1 className="lg:text-[56px] md:text-[44px] text-[40px] lg:leading-[64px] md:leading-[50px] leading-[46px] text-heading font-semibold font-inter max-lg:text-center">
            {titleText}
          </h1>

          <p className="text-lg max-w-[800px] max-lg:text-center max-md:hidden">
            {descriptionText}
          </p>

          <p className="text-lg font-semibold max-md:hidden -translate-y-2 text-heading">
            {impactText}
          </p>

          <Button
            onClick={() => handleNavigation(`/business-registration/step-1`)}
            className="text-base md:w-fit w-full h-[50px] !rounded-lg hover:bg-primary-hover relative overflow-hidden shine-effect"
          >
            {buttonText}
          </Button>

          <Link href={reviewPath} className="flex items-center lg:gap-4 gap-2">
            <h1 className="lg:text-[18px] text-[12px] lg:leading-[27px] leading-[18px] text-heading font-semibold">
              Excellent
            </h1>
            <Image
              src={RatingIcon}
              width={150}
              alt="Our Trust Pilot Rating"
              className="mr-2 max-lg:w-[80px]"
            />
            <Image
              src={TrustpilotIcon}
              alt="Trust Pilot"
              className="max-lg:w-[80px]"
            />
          </Link>
        </div>
        <div className="bg-transparent" />
      </div>
    </section>
  );
};

export default ServicesHeroSection;
