import React from "react";
import { Metadata } from "next";

import { GetPageMetadata } from "@/utils/meta-data";

import AboutPage from "@/pages/about-page";

export const metadata: Metadata = GetPageMetadata({
  title: "About Legal Trademark Office - Trusted Trademark Experts",
  description:
    "Learn about Legal Trademark Office, a trusted leader in trademark registration and brand protection. Discover our mission, expertise, and dedication to safeguarding your business identity.",
});

const page = () => {
  return <AboutPage />;
};

export default page;
