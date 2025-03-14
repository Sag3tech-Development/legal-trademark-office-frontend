import React from "react";
import { Metadata } from "next";

import PrivacyPolicyPage from "@/custom-pages/website/privacy-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Privacy Policy | Data Protection & Security - Legal Trademark Office",
  description:
    "Understand how Legal Trademark Office collects, uses, and safeguards your personal data. Our privacy policy ensures transparency, security, and compliance with data protection laws.",
});

const page = () => {
  return <PrivacyPolicyPage />;
};

export default page;
