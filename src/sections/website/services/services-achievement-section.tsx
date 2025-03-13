import React from "react";
import Image from "next/image";

import { ServicesAchievementSectionProps } from "@/interfaces/website-sections-interface";

import { FaStar } from "react-icons/fa";

const ServicesAchievementSection = ({
  titleText,
  descriptionText,

  Attorney1Img,
  Attorney1ReviewerName,
  Attorney1ReviewTag1,
  Attorney1ReviewTag2,
  Attorney1Review,

  Attorney2Img,
  Attorney2ReviewerName,
  Attorney2ReviewTag1,
  Attorney2ReviewTag2,
  Attorney2Review,

  Achievement1Icon,
  Achievement1Description,

  Achievement2Icon,
  Achievement2Description,

  Achievement3Icon,
  Achievement3Description,
}: ServicesAchievementSectionProps) => {
  return (
    <section className="w-full section-padding-standard bg-gradient-to-r from-secondary via-secondary to-[#092f69cc]">
      <div className="layout-standard section-padding-standard flex flex-col max-lg:items-center gap-4">
        <div className="flex flex-col items-center lg:gap-2 gap-6">
          <h1 className="font-inter lg:text-[44px] md:text-[40px] text-[36px] lg:leading-[52px] md:leading-[46px] leading-[42px] text-white font-semibold lg:max-w-[1400px] text-center">
            {titleText}
          </h1>
          <p className="text-lg font-medium text-white/80 text-center max-md:hidden">
            {descriptionText}
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-2 justify-center lg:gap-12 gap-[5rem] lg:mt-16 mt-8">
          <div className="relative h-[500px] w-full ml-auto">
            <Image
              src={Attorney1Img}
              alt="Attorney 1"
              className="h-full w-full object-cover rounded-xl"
            />

            <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-lg rounded-xl p-4">
              <div className="w-full flex items-center gap-2 mb-2 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="lg:text-lg text-base font-semibold">
                    {Attorney1ReviewerName}
                  </h3>
                  <div className="flex items-center lg:gap-2 gap-1 text-green-500 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} size={14} />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded max-md:hidden">
                    {Attorney1ReviewTag1}
                  </span>

                  <span className="bg-gray-200 text-xs px-2 py-1 rounded ">
                    {Attorney1ReviewTag2}
                  </span>
                </div>
              </div>

              <p className="md:text-sm text-xs mb-4">{Attorney1Review}</p>
            </div>
          </div>

          <div className="relative h-[500px] w-full ml-auto">
            <Image
              src={Attorney2Img}
              alt="Attorney 2"
              className="h-full w-full object-cover rounded-xl"
            />

            <div className="absolute -bottom-6 left-6 right-6 bg-white shadow-lg rounded-xl p-4">
              <div className="w-full flex items-center gap-2 mb-2 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="lg:text-lg text-base font-semibold">
                    {Attorney2ReviewerName}
                  </h3>
                  <div className="flex items-center lg:gap-2 gap-1 text-green-500 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} size={14} />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded max-md:hidden">
                    {Attorney2ReviewTag1}
                  </span>

                  <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                    {Attorney2ReviewTag2}
                  </span>
                </div>
              </div>

              <p className="md:text-sm text-xs mb-4">{Attorney2Review}</p>
            </div>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-3 max-md:items-center gap-8 md:mt-[100px] mt-[50px]">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl bg-primary flex-center">
              <Achievement1Icon size={40} className="text-white" />
            </div>

            <h1 className="lg:text-[20px] text-sm text-white leading-[24px] text-center">
              {Achievement1Description}
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl bg-primary flex-center">
              <Achievement2Icon size={40} className="text-white" />
            </div>

            <h1 className="lg:text-[20px] text-sm text-white leading-[24px] text-center">
              {Achievement2Description}
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="w-[80px] h-[80px] rounded-2xl bg-primary flex-center">
              <Achievement3Icon size={40} className="text-white" />
            </div>

            <h1 className="lg:text-[20px] text-sm text-white leading-[24px] text-center">
              {Achievement3Description}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAchievementSection;
