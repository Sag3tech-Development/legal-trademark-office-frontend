import React from "react";

import {
  TermsConditionsDetailsSectionData01,
  TermsConditionsDetailsSectionData02,
} from "@/constants/terms-conditions-page-data";

const TermsConditionsDetailsSection = () => {
  return (
    <section className="layout-standard section-margin-standard section-padding-standard flex flex-col gap-4">
      <h1 className="text-2xl leading-[28px] font-bold text-heading font-inter">
        Last Updated: December 12, 2023
      </h1>
      {TermsConditionsDetailsSectionData01.map((desc) => (
        <p
          key={desc.id}
          className="lg:text-lg md:text-base text-sm leading-relaxed text-justify"
        >
          {desc.description}
        </p>
      ))}

      <div className="grid grid-cols-1 gap-x-6 my-4">
        {TermsConditionsDetailsSectionData02.map((data) => (
          <div key={data.id} className="flex flex-col gap-2 mb-8">
            <h1 className="text-heading font-semibold lg:text-xl md:text-lg text-base leading-relaxed">
              {data.id}. {data.heading}
            </h1>

            <p className="lg:text-lg md:text-base text-sm leading-relaxed text-justify">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsConditionsDetailsSection;
