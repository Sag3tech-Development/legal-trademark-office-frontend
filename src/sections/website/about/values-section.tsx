import Image from "next/image";
import React from "react";

import { ValuesSectionData } from "@/constants/about-page-data";

const ValuesSection = () => {
  return (
    <section className="section-padding-standard">
      <div className="layout-standard section-padding-standard flex flex-col gap-16">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
          The Values That <span className="text-primary">Guide Us</span>
        </h1>

        <div className="w-full grid grid-cols-3 gap-x-8 gap-y-12">
          {ValuesSectionData.map((data, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Image src={data.img} alt="Values" />
              <h1 className="lg:text-2xl md:text-xl text-lg font-medium text-heading mt-4">
                {data.title}
              </h1>
              <p className="lg:text-lg md:text-base text-sm">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
