"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import ServerDownImg from "../../../public/images/server-down-img.png";

const ServerDownPage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (!path) return;
    router.push(path);
  };

  return (
    <main className="h-[calc(100svh-170px)] flex-center layout-standard flex-col gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%] max-w-[900px] text-center">
          Our Website Is Temporarily Down
        </h1>
        <p className="lg:text-lg md:text-base text-sm max-w-[700px] text-center">
          We are experiencing technical difficulties. Please try again later.
          For immediate assistance, contact our support team at{" "}
          <span className="font-semibold text-primary">+1 (310) 424-4909</span>
        </p>
      </div>

      <Image src={ServerDownImg} alt="Server Down" width={300} />

      <div className="max-md:w-full flex items-center md:gap-4 gap-2 max-md:flex-col">
        <Button
          onClick={() => (window.location.href = "tel:+13104244909")}
          className="bg-secondary h-[55px] md:text-base max-md:w-full text-sm px-8 rounded-lg hover:bg-secondary-hover shine-effect"
        >
          Contact Support
        </Button>

        <Button
          onClick={() => handleNavigation(`/`)}
          className="bg-primary h-[55px] md:text-base text-sm max-md:w-full px-8 rounded-lg hover:bg-primary-hover shine-effect"
        >
          Go To Home
        </Button>
      </div>
    </main>
  );
};

export default ServerDownPage;
