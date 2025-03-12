import React from "react";

import { ServicesFaqSectionProps } from "@/interfaces/website-sections-interfaces";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BsQuestionDiamondFill } from "react-icons/bs";
import { FcQuestions, FcDepartment, FcApproval } from "react-icons/fc";

const ServicesFaqsSection = ({
  description,
  data01,
  data02,
  data03,
}: ServicesFaqSectionProps) => {
  return (
    <section className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard grid lg:grid-cols-2 gap-12">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <BsQuestionDiamondFill
              size={40}
              className="text-heading max-md:hidden"
            />
            <h1 className="font-inter font-semibold text-heading lg:text-[44px] md:text-[40px] text-[36px] lg:leading-[52px] md:leading-[46px] leading-[42px]">
              Frequently Asked Questions
            </h1>
          </div>

          <p className="lg:text-lg md:text-base text-sm">
            {description}
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-4 bg-white rounded-xl shadow-lg p-4 px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="definations">
              <AccordionTrigger className="text-heading">
                <div className="flex items-center gap-2">
                  <FcDepartment size={24} />
                  <h1 className="md:text-[20px] text-base md:leading-[28px]">
                    Definations
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 my-4">
                {data01.map((data, index) => (
                  <div key={index} className="md:space-y-1 space-y-2">
                    <h1 className="md:text-base text-sm text-heading font-medium">
                      {index + 1}. {data.question}
                    </h1>
                    <p className="md:text-sm text-xs">{data.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process">
              <AccordionTrigger className="text-heading">
                <div className="flex items-center gap-2">
                  <FcApproval size={24} />
                  <h1 className="md:text-[20px] text-base md:leading-[28px]">
                    The application process
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 my-4">
                {data02.map((data, index) => (
                  <div key={index} className="md:space-y-1 space-y-2">
                    <h1 className="md:text-base text-sm text-heading font-medium">
                      {index + 1}. {data.question}
                    </h1>
                    <p className="md:text-sm text-xs">{data.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="questions">
              <AccordionTrigger className="text-heading !border-none">
                <div className="flex items-center gap-2">
                  <FcQuestions size={24} />
                  <h1 className="md:text-[20px] text-base md:leading-[28px]">
                    Basic questions
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-6 my-4">
                {data03.map((data, index) => (
                  <div key={index} className="md:space-y-1 space-y-2">
                    <h1 className="md:text-base text-sm text-heading font-medium">
                      {index + 1}. {data.question}
                    </h1>
                    <p className="md:text-sm text-xs">{data.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesFaqsSection;
