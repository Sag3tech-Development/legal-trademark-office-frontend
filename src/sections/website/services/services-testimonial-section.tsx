"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { ServicesTestimonialSectionProps } from "@/interfaces/website-section-interfaces";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TrustPilotImg from "../../../../public/icons/rating-icon.svg";

const ServicesTestimonialSection = ({
  title,
  data,
}: ServicesTestimonialSectionProps) => {
  const [visibleData, setVisibleData] = useState(data);

  useEffect(() => {
    const updateVisibleData = () => {
      if (window.innerWidth >= 1024) {
        setVisibleData(data);
      } else {
        setVisibleData(data.slice(0, 3));
      }
    };

    updateVisibleData();
    window.addEventListener("resize", updateVisibleData);

    return () => {
      window.removeEventListener("resize", updateVisibleData);
    };
  }, [data]);

  return (
    <section className="w-full section-padding-standard bg-gradient-to-r from-secondary via-secondary to-[#092f69cc]">
      <div className="layout-standard section-padding-standard flex flex-col gap-12 items-center">
        <h1 className="font-inter lg:text-[44px] md:text-[40px] text-[36px] lg:leading-[52px] md:leading-[46px] leading-[42px] text-white font-semibold max-w-[800px] text-center">
          {title}
        </h1>

        <div className="w-full grid lg:grid-cols-3 gap-8 px-4">
          {visibleData.map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-4">
                    <Image src={TrustPilotImg} alt="Rating" height={20} />
                    <CardTitle>{review.name}</CardTitle>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{review.review}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonialSection;
