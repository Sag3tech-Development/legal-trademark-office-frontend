"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import TrademarkBenefitSectionImg from "../../../../public/images/trademark-benefit-hero-img.png";

const TrademarkBenefitSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <section className="layout-standard section-margin-standard section-padding-standard grid lg:grid-cols-2 col-span-1 lg:gap-12">
      <div className="col-span-1 w-full max-lg:hidden">
        <Image src={TrademarkBenefitSectionImg} alt="Trademark Now" />
      </div>

      <div className="col-span-1 flex flex-col h-full justify-center gap-4">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
          Peace of mind promise with{" "}
          <span className="text-primary">Trademark Insurance</span>
        </h1>
        <p className="text-[18px] leading-[28px] text-heading font-medium">
          Insure your trademark for just $99.
        </p>

        <p className="md:text-base text-sm">
          We guarantee that your trademark will get registered, or we&apos;ll
          refund our legal fees. We guarantee that your trademark will get
          registered, or we&apos;ll refund our legal fees.*
        </p>

        <Button
          onClick={() => handleNavigation(`/business-registration/step-1`)}
          className="md:h-[55px] h-[45px] hover:bg-primary-hover md:w-fit w-full rounded-lg md:text-base text-sm mt-6 px-4 relative overflow-hidden shine-effect font-inter"
        >
          Start registering your trademark
        </Button>
      </div>
    </section>
  );
};

export default TrademarkBenefitSection;
