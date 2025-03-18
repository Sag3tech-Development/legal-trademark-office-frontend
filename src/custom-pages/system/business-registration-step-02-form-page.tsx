import React from "react";

import SystemHeading from "@/components/common/system-heading";
import { Separator } from "@/components/ui/separator";
import BusinessRegistrationStep02Form from "@/components/forms/business-registration-step-02-form";

const BusinessRegistrationStep02FormPage = () => {
  return (
    <main className="layout-standard section-padding-standard flex flex-col gap-4">
      <SystemHeading
        heading="Business Information"
        subheading="Provide the necessary bussiness details to register your brand with us"
      />
      <Separator />
      <BusinessRegistrationStep02Form />
    </main>
  );
};

export default BusinessRegistrationStep02FormPage;
