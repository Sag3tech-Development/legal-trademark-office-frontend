import React from "react";

import SystemHeading from "@/components/common/system-heading";
import { Separator } from "@/components/ui/separator";

const BusinessRegistrationStep1Page = () => {
  return (
    <main className="layout-standard section-padding-standard flex flex-col gap-4">
      <SystemHeading
        heading="Personal Information"
        subheading="Provide the necessary personal details to register your business with us"
      />
      <Separator />
    </main>
  );
};

export default BusinessRegistrationStep1Page;
