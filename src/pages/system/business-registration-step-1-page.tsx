import React from "react";

import SystemHeading from "@/components/common/system-heading";
import { Separator } from "@/components/ui/separator";
import BusinessRegistrationStep1Form from "@/components/forms/business-registration-step-1-form";

const BusinessRegistrationStep1Page = () => {
  return (
    <main className="layout-standard section-padding-standard flex flex-col gap-4">
      <SystemHeading
        heading="Personal Information"
        subheading="Provide the necessary personal details to register your business with us"
      />
      <Separator />
      <BusinessRegistrationStep1Form />
    </main>
  );
};

export default BusinessRegistrationStep1Page;
