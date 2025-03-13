import React from "react";

import { SystemHeadingProps } from "@/interfaces/common-component-interfaces";

const SystemHeading = ({ heading, subheading }: SystemHeadingProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-inter font-semibold text-heading text-[34px] leading-[36px]">
        {heading}
      </h1>
      <p className="text-base">{subheading}</p>
    </div>
  );
};

export default SystemHeading;
