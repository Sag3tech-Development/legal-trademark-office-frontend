import React from "react";
import { Metadata } from "next";

import Error404Page from "@/pages/others/error-404-page";

import OtherHeader from "@/components/layouts/other-header";
import OtherFooter from "@/components/layouts/other-footer";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "404 Page Not Found | Return Home - Legal Trademark Office",
  description:
    "Oops! The page you’re looking for doesn’t exist or has been moved. Return to the homepage or explore Legal Trademark Office services to find what you need.",
});

export default function NotFound() {
  return (
    <>
      <OtherHeader />
      <Error404Page />
      <OtherFooter />
    </>
  );
}
