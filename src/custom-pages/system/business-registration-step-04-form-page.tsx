import React from "react";

import SystemHeading from "@/components/common/system-heading";
import { Separator } from "@/components/ui/separator";
import BusinessRegistrationStep04Form from "@/components/forms/business-registration-step-04-form";

const BusinessRegistrationStep04FormPage = () => {
  return (
    <main className="layout-standard section-padding-standard flex flex-col gap-4">
      <SystemHeading
        heading="Additonal Services"
        subheading="Add Rush Processing and Additional Government Fees alongside with your plan"
      />
      <Separator />
      <BusinessRegistrationStep04Form />
    </main>
  );
};

export default BusinessRegistrationStep04FormPage;
