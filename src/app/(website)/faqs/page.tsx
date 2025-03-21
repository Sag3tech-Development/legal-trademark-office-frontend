import React from "react";
import { Metadata } from "next";

import FaqsPage from "@/custom-pages/website/faqs-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Trademark FAQs - Get Expert Answers | Legal Trademark Office",
  description:
    "Find expert answers to common trademark registration questions. Learn about the process, costs, timelines, and how Legal Trademark Office safeguards your brand identity.",
});

const page = () => {
  return <FaqsPage />;
};

export default page;
