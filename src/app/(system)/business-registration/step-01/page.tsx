import React from "react";
import { Metadata } from "next";

import BusinessRegistrationStep01Page from "@/custom-pages/system/business-registration-step-01-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Step 1: Business Registration | Secure Your Brand - Legal Trademark Office",
  description:
    "Take the first step toward securing your brand with expert business registration. Complete our simple process to protect your brand identity, trademarks, and intellectual property today.",
});

const page = () => {
  return <BusinessRegistrationStep01Page />;
};

export default page;
