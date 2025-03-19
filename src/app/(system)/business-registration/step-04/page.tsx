import React from "react";
import { Metadata } from "next";

import BusinessRegistrationStep04FormPage from "@/custom-pages/system/business-registration-step-04-form-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Step 4: Business Registration | Secure Your Brand - Legal Trademark Office",
  description:
    "Take the final step toward securing your brand with expert business registration. Complete our simple process to protect your brand identity, trademarks, and intellectual property today.",
});

const page = () => {
  return <BusinessRegistrationStep04FormPage />;
};

export default page;
