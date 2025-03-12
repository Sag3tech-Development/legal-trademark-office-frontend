import React from "react";
import { Metadata } from "next";

import TermsConditionsPage from "@/pages/website/terms-conditions-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Terms & Conditions | User Agreement - Legal Trademark Office",
  description:
    "Review the terms and conditions governing the use of Legal Trademark Office services. Our policies ensure fairness, transparency, and legal compliance to protect your rights and our services.",
});

const page = () => {
  return <TermsConditionsPage />;
};

export default page;
