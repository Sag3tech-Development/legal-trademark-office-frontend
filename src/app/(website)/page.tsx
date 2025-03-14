import React from "react";
import { Metadata } from "next";

import HomePage from "@/custom-pages/website/home-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Register your brand today! - Legal Trademark Office",
  description:
    "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
});

const page = () => {
  return <HomePage />;
};

export default page;
