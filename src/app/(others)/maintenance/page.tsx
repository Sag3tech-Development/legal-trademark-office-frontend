import React from "react";
import { Metadata } from "next";

import MaintenancePage from "@/pages/others/maintenance-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Website Under Maintenance | Improving Your Experience - Legal Trademark Office",
  description:
    "We're currently performing maintenance to enhance our services. Legal Trademark Office will be back online soon. Thank you for your patience and understanding!",
});

const page = () => {
  return <MaintenancePage />;
};

export default page;
