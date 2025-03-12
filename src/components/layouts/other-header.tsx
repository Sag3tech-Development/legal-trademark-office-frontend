import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/favicons/logo.svg";

const OtherHeader = () => {
  return (
    <header className="h-[88px] header-shadow w-full bg-background sticky top-[-1px] left-0 z-[200]">
      <div className="layout-standard h-full flex-center">
        <Link href={"/"} passHref>
          <Image src={Logo} alt="Legal Trademark Office" priority width={100} />
        </Link>
      </div>
    </header>
  );
};

export default OtherHeader;
