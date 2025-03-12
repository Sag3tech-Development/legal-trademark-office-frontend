import React from "react";

import { FaqsDetailsSectionData } from "@/constants/faqs-page-data";

import { Separator } from "@/components/ui/separator";

const FaqsDetailsSection = () => {
  return (
    <section className="layout-standard section-padding-standard lg:mt-12 mb-16">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
        {FaqsDetailsSectionData.map((faq, index) => (
          <div key={index} className="col-span-1 flex flex-col gap-8">
            <div className="flex items-start gap-4 lg:h-[90px] md:h-[140px]">
              <span className="w-fit p-2 border rounded-lg text-primary translate-y-1 bg-secondary">
                {faq.icon}
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-heading lg:text-lg md:text-base text-sm">
                  {faq.question}
                </h1>
                <p className="lg:base md:text-sm text-xs font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>

            <Separator
              className={`${faq.id === 13 || faq.id === 14 ? "hidden" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsDetailsSection;
