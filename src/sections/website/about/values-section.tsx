import Image from "next/image";
import React from "react";

import { ValuesSectionData } from "@/constants/about-page-data";

const ValuesSection = () => {
  return (
    <section className="section-padding-standard">
      <div className="layout-standard section-padding-standard flex flex-col gap-16">
        <div className="flex flex-col text-center w-full mb-4 gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl tracking-tighter font-semibold text-heading !leading-[120%] font-inter">
            The Values That <span className="text-primary">Guide Us</span>
          </h1>
          <p className="md:text-[18px] text-base md:leading-[28px] font-medium">
            Experienced attorneys and paralegals dedicated to protecting your
            business and intellectual property.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-x-8 gap-y-12">
          {ValuesSectionData.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <Image src={data.img} alt="Values" />
              <h1 className="lg:text-2xl md:text-xl text-lg font-medium text-heading mt-4">
                {data.title}
              </h1>
              <p className="lg:text-lg md:text-base text-sm text-center">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
