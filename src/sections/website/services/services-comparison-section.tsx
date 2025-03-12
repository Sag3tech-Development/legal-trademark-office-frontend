import React from "react";
import Image from "next/image";

import { ServicesComparisonSectionProps } from "@/interfaces/website-sections-interfaces";

import Logo from "../../../../public/favicons/logo.svg";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ServicesComparisonSection = ({
  comparisonHeading,

  Point1,
  Point2,
  Point3,
  Point4,
  Point5,

  numbersAchieved,
  onlineCompatitorNumbers,
}: ServicesComparisonSectionProps) => {
  return (
    <section className="layout-standard section-padding-standard section-margin-standard">
      <div className="mx-auto w-full rounded-xl shadow-lg border bg-white py-4 px-8 grid grid-cols-3 gap-4 max-lg:hidden">
        <div className="flex flex-col gap-6">
          <h2 className="text-[44px] leading-[52px] font-inter text-heading border-b h-[120px] flex items-center font-semibold">
            {comparisonHeading}
          </h2>

          <ul className="space-y-6 text-lg">
            <li className="border-b py-4 h-[90px]">{Point1}</li>
            <li className="border-b py-4 h-[90px]">{Point2}</li>
            <li className="border-b py-4 h-[90px]">{Point3}</li>
            <li className="border-b py-4 h-[90px]">{Point4}</li>
            <li className="py-4 h-[90px]">{Point5}</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="border-b h-[120px] flex items-center w-full justify-center">
            <Image src={Logo} alt="Secure Your Mark" height={60} />
          </div>

          <ul className="space-y-6 w-full">
            {Array(4)
              .fill(4)
              .map((_, index) => (
                <li
                  key={index}
                  className="text-green-500 flex justify-center border-b py-4 h-[90px]"
                >
                  <FaCheckCircle size={24} />
                </li>
              ))}
          </ul>
          <div className="mt-6 text-2xl font-semibold text-green-500">
            {numbersAchieved}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl w-full justify-center font-semibold text-heading border-b h-[120px] flex items-center font-inter">
            Online Competitors
          </h3>

          <ul className="space-y-6 w-full">
            {Array(4)
              .fill(4)
              .map((_, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex justify-center border-b py-4 h-[90px]"
                >
                  <FaTimesCircle size={24} />
                </li>
              ))}
          </ul>
          <div className="mt-6 text-2xl font-semibold text-gray-400">
            {onlineCompatitorNumbers}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComparisonSection;
