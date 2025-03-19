import React from "react";

import SystemHeading from "@/components/common/system-heading";
import { Separator } from "@/components/ui/separator";
import BusinessRegistrationStep03Form from "@/components/forms/business-registration-step-03-form";

const BusinessRegistrationStep03FormPage = () => {
  return (
    <main className="layout-standard section-padding-standard flex flex-col gap-4">
      <SystemHeading
        heading="Choose Your Package"
        subheading="Pick the best package sutaible for your business registration"
      />
      <Separator />
      <BusinessRegistrationStep03Form />
    </main>
  );
};

export default BusinessRegistrationStep03FormPage;
