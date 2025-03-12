import React from "react";
import { Metadata } from "next";

import { GetPageMetadata } from "@/utils/meta-data";
import GatewayFailedPage from "@/pages/others/gateway-failed-page";

export const metadata: Metadata = GetPageMetadata({
  title: "Payment Failed | Troubleshoot & Support - Legal Trademark Office",
  description:
    "Your payment could not be processed. Try again or contact Legal Trademark Office support for quick assistance in resolving payment issues.",
});

const page = () => {
  return <GatewayFailedPage />;
};

export default page;
