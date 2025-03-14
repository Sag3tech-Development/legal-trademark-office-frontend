import React from "react";
import { Metadata } from "next";

import CopyrightRegistrationServicePage from "@/custom-pages/website/copyright-registration-service-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title:
    "Copyright Registration | Protect Your Creative Work - Legal Trademark Office",
  description:
    "Secure your creative works with expert copyright registration services. Legal Trademark Office helps protect your music, art, literature, and digital content with legal ownership rights.",
});

const page = () => {
  return <CopyrightRegistrationServicePage />;
};

export default page;
