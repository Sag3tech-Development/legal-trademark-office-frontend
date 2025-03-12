import React from "react";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const OtherFooter = () => {
  return (
    <footer className="bg-white">
      <div className="layout-standard py-6 border-t border-border h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2 group">
            <h1 className="text-base font-medium text-heading">
              Email Address :
            </h1>
            <p className="text-base group-hover:text-primary transition-colors">
              support@legaltrademarkoffice.com
            </p>
          </Link>

          <Link href={"/"} className="flex items-center gap-2 group">
            <h1 className="text-base font-medium text-heading">
              Contact Number :
            </h1>
            <p className="text-base group-hover:text-primary transition-colors">
              +7 (495) 123-47-80
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className="h-8 w-8 rounded-full border-2 flex-center bg-white hover:bg-black/10"
          >
            <FaFacebookF />
          </Link>

          <Link
            href={"/"}
            className="h-8 w-8 rounded-full border-2 flex-center bg-white hover:bg-black/10"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href={"/"}
            className="h-8 w-8 rounded-full border-2 flex-center bg-white hover:bg-black/10"
          >
            <TbWorldWww />
          </Link>

          <Link
            href={"/"}
            className="h-8 w-8 rounded-full border-2 flex-center bg-white hover:bg-black/10"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default OtherFooter;
