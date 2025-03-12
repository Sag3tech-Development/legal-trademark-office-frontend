import React from "react";

import { ServicesImportanceSectionProps } from "@/interfaces/website-sections-interfaces";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ServicesImportanceSection = ({
  titleText,
  descriptionText,

  noteData,

  dosTitle,
  dos01,
  dos02,
  dos03,

  dontTitle,
  dont01,
  dont02,
  dont03,
}: ServicesImportanceSectionProps) => {
  return (
    <section className="layout-standard section-margin-standard flex flex-col lg:gap-16 gap-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-inter lg:text-[44px] md:text-[40px] text-[36px] lg:leading-[52px] md:leading-[46px] leading-[42px] text-heading font-semibold max-w-[900px] text-center">
          {titleText}
        </h1>
        <p className="md:text-lg font-medium max-md:hidden text-center max-w-[80%]">
          {descriptionText}
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {noteData.map((note, index) => (
          <Card key={index} className="bg-secondary-background">
            <CardHeader className="flex flex-col gap-1 items-center">
              <note.impIcon size={30} className="text-heading" />
              <h1 className="text-[24px] leading-[28px] text-heading font-medium">
                {note.impTitle}
              </h1>
            </CardHeader>

            <CardContent className="text-lg text-center">{note.impDesc}</CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full grid md:grid-cols-2 gap-8">
        <Card className="pb-4 pt-4 bg-secondary-background">
          <CardHeader className="text-[32px] leading-[38px] font-semibold text-heading">
            {dosTitle}
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-lg">{dos01}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-lg">{dos02}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-lg">{dos03}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="pb-8 pt-4 bg-secondary-background">
          <CardHeader className="text-[32px] leading-[38px] font-semibold text-heading">
            {dontTitle}
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex lg:items-center items-start gap-2">
              <IoClose
                size={20}
                className="text-red-500 max-lg:translate-y-1"
              />
              <p className="text-lg w-[calc(100%-22px)]">{dont01}</p>
            </div>

            <div className="flex items-start gap-2">
              <IoClose size={20} className="text-red-500 translate-y-1" />
              <p className="text-lg w-[calc(100%-22px)]">{dont02}</p>
            </div>

            <div className="flex items-start gap-2">
              <IoClose size={20} className="text-red-500 translate-y-1" />
              <p className="text-lg w-[calc(100%-22px)]">{dont03}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesImportanceSection;
