import React from "react";
import { Metadata } from "next";

import GatewayFailedPage from "@/custom-pages/others/gateway-failed-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Payment Failed | Troubleshoot & Support - Legal Trademark Office",
  description:
    "Your payment could not be processed. Try again or contact Legal Trademark Office support for quick assistance in resolving payment issues.",
});

const page = () => {
  return <GatewayFailedPage />;
};

export default page;
