import React from "react";
import { Metadata } from "next";

import { GetPageMetadata } from "@/utils/meta-data";

import HomePage from "@/pages/home-page";

export const metadata: Metadata = GetPageMetadata({
  title: "Register your brand today! - Legal Trademark Office",
  description:
    "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
});

const page = () => {
  return <HomePage />;
};

export default page;
