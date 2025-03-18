import React from "react";
import { Metadata } from "next";

import BusinessRegistrationStep02FormPage from "@/custom-pages/system/business-registration-step-02-form-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Step 2: Business Registration | Secure Your Brand - Legal Trademark Office",
  description:
    "Take the second step toward securing your brand with expert business registration. Complete our simple process to protect your brand identity, trademarks, and intellectual property today.",
});

const page = () => {
  return <BusinessRegistrationStep02FormPage />;
};

export default page;
