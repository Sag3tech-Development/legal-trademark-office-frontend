import React from "react";
import { Metadata } from "next";

import PatentRegistrationServicePage from "@/pages/website/patent-registration-service-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Patent Registration | Secure Your Invention - Legal Trademark Office",
  description:
    "Protect your intellectual property with expert patent registration services. Legal Trademark Office ensures exclusive rights to your invention with a seamless and legally compliant process.",
});

const page = () => {
  return <PatentRegistrationServicePage />;
};

export default page;
