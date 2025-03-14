import React from "react";
import { Metadata } from "next";

import AmazonBrandRegistrationServicePage from "@/custom-pages/website/amazon-brand-registration-service-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Amazon Brand Registration | Protect & Grow Your Brand - Legal Trademark Office",
  description:
    "Register your brand with Amazon Brand Registry to safeguard your trademarks, boost product visibility, and prevent counterfeits. Legal Trademark Office simplifies the process for you.",
});

const page = () => {
  return <AmazonBrandRegistrationServicePage />;
};

export default page;
