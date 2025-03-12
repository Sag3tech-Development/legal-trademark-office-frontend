"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { PackagePricing } from "@/constants/home-page-data";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { FaCheck } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";

const PricingSection = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <section className="w-full section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard flex flex-col md:gap-[5rem] gap-[3rem]">
        <div className="flex flex-col text-center w-full gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl tracking-tighter font-semibold !leading-[120%] font-inter text-heading">
            Trademark Registration <span className="text-primary">Pricing</span>
          </h1>
          <p className="md:text-[18px] text-base md:leading-[28px] font-medium">
            Protect your brand with our comprehensive range of intellectual
            property services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PackagePricing.map((data) => (
            <Card
              key={data.id}
              className={cn(
                data.id === 2 && "shadow-2xl",
                "pt-2 pb-8 !rounded-2xl"
              )}
            >
              <CardHeader>
                <h2
                  className={cn(
                    data.id === 2 ? "text-heading" : "text-heading",
                    "md:text-3xl text-2xl font-semibold font-poppins"
                  )}
                >
                  {data.PackageType}
                </h2>
                <p className="md:text-base text-sm">
                  {data.PackageDescription}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col md:gap-8 gap-4">
                <div className="flex md:items-end items-center gap-2">
                  <h1 className="md:text-5xl text-3xl font-bold font-poppins text-heading">
                    ${data.PackageAmount}
                  </h1>
                  <p className="md:text-base text-sm">
                    +$350 per class{" "}
                    <span className="text-primary font-bold">USPTO</span> fee
                  </p>
                </div>

                <Button
                  onClick={() =>
                    handleNavigation(`/business-registration/step-1`)
                  }
                  className="hover:bg-primary-hover md:text-base text-sm md:py-6 py-5"
                >
                  Get Started Now
                </Button>
              </CardContent>
              <CardFooter className="md:pt-8 pt-2">
                <ul className="flex flex-col gap-4">
                  {data.Details.map((detail, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <FaCheck size={16} className="text-green-500" />
                      <span className="text-paragraph max-md:text-sm">
                        {detail}
                      </span>
                    </li>
                  ))}

                  {data.DetailsNotOffered?.map((data, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-black/40"
                    >
                      <GrFormClose size={20} className="text-black/40" />
                      <span className="max-md:text-sm">{data}</span>
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
