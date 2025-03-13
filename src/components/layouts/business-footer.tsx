import Link from "next/link";
import React from "react";

const BusinessFooter = () => {
  return (
    <footer className="bg-white">
      <div className="layout-standard section-padding-standard">
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center text-heading font-inter">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            Legal Trademark Office™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default BusinessFooter;
