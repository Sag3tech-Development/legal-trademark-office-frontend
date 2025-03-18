"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Logo from "../../../public/favicons/logo.svg";
import { FaPhone } from "react-icons/fa6";

const BusinessHeader = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <header className="h-[88px] header-shadow w-full bg-background sticky top-[-1px] left-0 z-[200]">
      <div className="layout-standard h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"} passHref>
            <Image
              src={Logo}
              alt="Legal Trademark Office"
              priority
              height={60}
            />
          </Link>

          <div className="lg:flex items-center gap-1 hidden">
            <HiOutlineArrowLongLeft className="text-[24px] text-heading" />
            <p className="text-[12px] leading-[18px] font-semibold font-inter text-heading">
              Register your trademark here
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="tel:+13104244909"
            className="text-heading hover:text-black/80 flex items-center gap-2 font-inter"
          >
            <FaPhone />
            <p className="font-semibold text-[14px]">(310) 424-4909</p>
          </Link>

          <Button
            onClick={() => handleNavigation(`/business-registration/step-01`)}
            className="h-[45px] lg:text-base rounded-lg text-sm hover:bg-primary-hover relative overflow-hidden shine-effect font-inter"
          >
            Start Registering Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BusinessHeader;
