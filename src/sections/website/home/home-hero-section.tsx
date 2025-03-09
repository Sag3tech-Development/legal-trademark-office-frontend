"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HomeHeroSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <section className="relative lg:h-[800px] w-full bg-home-hero bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-b from-[#042455a6] to-[#ffffff]" />

      <div className="relative z-10 layout-standard h-full flex-center flex-col gap-8">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-bold font-inter text-center text-white !leading-[120%]">
          File Your Trademark <span className="text-primary">Online.</span>{" "}
          <br className="max-md:hidden" /> Starting at Just{" "}
          <span className="text-primary">$49</span> +{" "}
          <span className="text-primary">USPTO</span> Filing Fee.
        </h1>

        <div className="max-md:w-full flex items-center gap-2">
          <Input
            placeholder="Search Trademark Availability"
            className="md:h-[50px] h-[45px] max-md:text-sm bg-white lg:w-[600px] md:w-[500px] w-full rounded-2xl"
          />

          <Button className="md:h-[50px] h-[45px] md:px-6 px-4 md:text-base text-sm hover:bg-primary-hover !rounded-lg font-inter font-medium">
            Search
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 md:mt-16 mt-4">
          <h1 className="lg:text-[28px] md:text-[24px] text-[16px] lg:leading-[32px] md:leading-[28px] leading-[24px] font-semibold max-md:text-center">
            Already know your Trademark is available?
          </h1>

          <Button
            onClick={() => handleNavigation(`/business-registration/step-1`)}
            className="md:h-[50px] h-[45px] md:w-[300px] w-full px-6 md:text-base text-sm hover:bg-primary-hover !rounded-lg relative overflow-hidden shine-effect font-inter"
          >
            Start Registering Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
