"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo.svg";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-white">
      <div className="layout-standard section-padding-standard">
        <div className="md:flex md:items-center md:justify-between">
          <Link href="/" passHref>
            <Image src={Logo} alt="Legal Trademark Office" />
          </Link>

          <ul className="flex flex-wrap items-center mb-4 lg:text-base text-sm font-medium font-inter text-heading md:mb-0">
            <Link href="/" passHref>
              <li
                className={cn(
                  pathname === "/" ? "text-primary" : "hover:text-primary",
                  "me-4 md:me-6"
                )}
              >
                Home
              </li>
            </Link>

            <Link href="/about" passHref>
              <li
                className={cn(
                  pathname === "/about" ? "text-primary" : "hover:text-primary",
                  "me-4 md:me-6"
                )}
              >
                About Us
              </li>
            </Link>

            <Link href="/privacy-policy" passHref>
              <li
                className={cn(
                  pathname === "/privacy-policy"
                    ? "text-primary"
                    : "hover:text-primary",
                  "me-4 md:me-6"
                )}
              >
                Privacy Policy
              </li>
            </Link>

            <Link href="/terms-condition" passHref>
              <li
                className={cn(
                  pathname === "/terms-condition"
                    ? "text-primary"
                    : "hover:text-primary"
                )}
              >
                Terms & Condition
              </li>
            </Link>
          </ul>
        </div>

        <hr className="my-6 border-border md:mx-auto lg:my-6" />

        <span className="block text-sm md:text-center font-inter">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Legal Trademark Office™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
