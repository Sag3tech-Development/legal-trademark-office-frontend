import React from "react";
import { Metadata } from "next";

import ServerDownPage from "@/pages/others/server-down-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Server Down | Maintenance & Support - Legal Trademark Office",
  description:
    "Our website is temporarily unavailable due to maintenance or technical issues. We’re working to restore access. For urgent assistance, contact our support team now.",
});

const page = () => {
  return <ServerDownPage />;
};

export default page;
