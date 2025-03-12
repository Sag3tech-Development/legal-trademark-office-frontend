import React from "react";
import Image from "next/image";

import { ServicesProcessSectionProps } from "@/interfaces/website-sections-interfaces";

import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";

const ServicesProcessSection = ({
  titleText,
  descriptionText,

  process1Title,
  process1Img,
  process1Description,

  process2Title,
  process2Img,
  process2Description,

  process3Title,
  process3Img,
  process3Description,
}: ServicesProcessSectionProps) => {
  return (
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard flex flex-col items-center lg:gap-12 md:gap-8 gap-3">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-inter lg:text-[44px] md:text-[40px] text-[36px] lg:leading-[52px] md:leading-[46px] leading-[42px] text-heading font-semibold max-lg:text-center">
            {titleText}
          </h1>
          <p className="text-lg font-medium max-lg:text-center max-md:hidden">
            {descriptionText}
          </p>
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-4 mt-8">
          <div className="w-[350px] h-[350px] bg-white rounded-lg flex flex-col items-center justify-between gap-6 p-8">
            <h1 className="text-heading text-lg font-semibold">
              {process1Title}
            </h1>
            <Image src={process1Img} alt="Trademark process 1" />
            <p className="text-center text-base font-medium">
              {process1Description}
            </p>
          </div>

          <FaLongArrowAltRight
            size={70}
            className="text-primary max-lg:hidden"
          />
          <FaLongArrowAltDown size={70} className="text-primary lg:hidden" />

          <div className="w-[350px] h-[350px] bg-white rounded-lg flex flex-col items-center justify-between gap-6 p-8">
            <h1 className="text-heading text-lg font-semibold">
              {process2Title}
            </h1>
            <Image src={process2Img} alt="Trademark process 2" />
            <p className="text-center text-base font-medium">
              {process2Description}
            </p>
          </div>

          <FaLongArrowAltRight
            size={70}
            className="text-primary max-lg:hidden"
          />
          <FaLongArrowAltDown size={70} className="text-primary lg:hidden" />

          <div className="w-[350px] h-[350px] bg-white rounded-lg flex flex-col items-center justify-between gap-6 p-8">
            <h1 className="text-heading text-lg font-semibold">
              {process3Title}
            </h1>
            <Image src={process3Img} alt="Trademark process 3" />
            <p className="text-center text-base font-medium">
              {process3Description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;
