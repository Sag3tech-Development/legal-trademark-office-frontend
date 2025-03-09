"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import TrademarkProcessSectionImg from "../../../../public/images/trademark-process-hero-img.png";

const TrademarkProcessSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <section className="w-full bg-secondary-background section-padding-standard">
      <div
        className="layout-standard section-padding-standard 
      grid lg:grid-cols-2 col-span-1 lg:gap-12"
      >
        <div className="col-span-1 flex flex-col h-full justify-center gap-4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
            Register your <span className="text-primary">Trademark</span> in 3
            simple steps
          </h1>
          <p className="md:text-[18px] text-base md:leading-[28px] mb-3 font-medium">
            Secure monopoly rights for your trademark
          </p>

          <div className="flex md:items-center gap-4">
            <span className="w-[40px] h-[40px] rounded-full bg-[#042555]/10 text-heading text-base font-medium flex-center">
              1
            </span>
            <div className="max-md:w-[calc(100%-40px)] flex flex-col">
              <h1 className="md:text-base text-sm text-heading font-medium">
                Select trademark type
              </h1>
              <p className="md:text-base text-sm">
                Choose whether you want to trademark a Name, Logo, Sound or
                Slogan.
              </p>
            </div>
          </div>

          <div className="flex md:items-center gap-4">
            <span className="w-[40px] h-[40px] rounded-full bg-[#042555]/10 text-heading text-base font-medium flex-center">
              2
            </span>
            <div className="max-md:w-[calc(100%-40px)] flex flex-col">
              <h1 className="md:text-base text-sm text-heading font-medium">
                Trademark details
              </h1>
              <p className="md:text-base text-sm">
                Describe what products or services you offer.
              </p>
            </div>
          </div>

          <div className="flex md:items-center gap-4">
            <span className="w-[40px] h-[40px] rounded-full bg-[#042555]/10 text-heading text-base font-medium flex-center">
              3
            </span>
            <div className="max-md:w-[calc(100%-40px)] flex flex-col">
              <h1 className="md:text-base text-sm text-heading font-medium">
                Select countries
              </h1>
              <p className="md:text-base text-sm">
                Choose from 180+ countries to file your trademark in.
              </p>
            </div>
          </div>

          <Button
            onClick={() => handleNavigation(`/business-registration/step-1`)}
            className="md:h-[55px] h-[45px] md:w-fit w-full rounded-lg text-base mt-8 px-4 hover:bg-primary-hover relative overflow-hidden shine-effect font-inter"
          >
            Start registering your trademark
          </Button>
        </div>

        <div className="col-span-1 w-full max-lg:hidden">
          <Image src={TrademarkProcessSectionImg} alt="Trademark Now" />
        </div>
      </div>
    </section>
  );
};

export default TrademarkProcessSection;
