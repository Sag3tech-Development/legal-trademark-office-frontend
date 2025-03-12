import React from "react";
import { Metadata } from "next";

import TrademarkRegistrationServicePage from "@/pages/website/trademark-registration-service-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Trademark Registration | Protect Your Brand - Legal Trademark Office",
  description:
    "Register your trademark with Legal Trademark Office and safeguard your brand identity. Our expert trademark registration services ensure legal protection and exclusive rights for your business.",
});

const page = () => {
  return <TrademarkRegistrationServicePage />;
};

export default page;
