"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/favicons/logo-white.svg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secondary via-secondary to-[#092f69cc] section-padding-standard">
      <div className="layout-standard mt-[3rem]">
        <div className="md:flex md:justify-between">
          <Link href="/" passHref className="mb-6 md:mb-0">
            <Image src={Logo} alt="Legal Trademark Office" width={180} />
          </Link>

          <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-bold uppercase text-white font-inter">
                Company
              </h2>

              <ul className="font-medium text-white/80">
                <Link href="/" passHref>
                  <li className="hover:underline mb-4">Home</li>
                </Link>

                <Link href="/about" passHref>
                  <li className="hover:underline mb-4">About Us</li>
                </Link>

                <Link href="/faqs" passHref>
                  <li className="hover:underline mb-4">FAQs</li>
                </Link>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-bold uppercase text-white font-inter">
                Legal
              </h2>

              <ul className="font-medium text-white/80">
                <Link href="/privacy-policy" passHref>
                  <li className="hover:underline mb-4">Privacy Policy</li>
                </Link>

                <Link href="/terms-conditions" passHref>
                  <li className="hover:underline">Terms & Conditions</li>
                </Link>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-bold uppercase text-white font-inter">
                Services
              </h2>

              <ul className="font-medium text-white/80">
                <Link href="/services/trademark-registration" passHref>
                  <li className="hover:underline mb-4">
                    Trademark Registration
                  </li>
                </Link>

                <Link href="/services/patent-registration" passHref>
                  <li className="hover:underline mb-4">Patent Registration</li>
                </Link>

                <Link href="/services/amazon-brand-registration" passHref>
                  <li className="hover:underline mb-4">
                    Amazon Brand Registration
                  </li>
                </Link>

                <Link href="/services/copyright-registration" passHref>
                  <li className="hover:underline">Copyright Registration</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 md:mx-auto lg:my-8 border-white/40" />

        <div className="md:flex md:items-center md:justify-between">
          <span className="text-sm text-white font-inter md:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Legal Trademark Office™
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 md:justify-center md:mt-0 gap-2">
            <Link
              href={"/"}
              className="h-8 w-8 rounded-full border-2 flex-center bg-white"
            >
              <FaFacebookF />
            </Link>

            <Link
              href={"/"}
              className="h-8 w-8 rounded-full border-2 flex-center bg-white"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href={"/"}
              className="h-8 w-8 rounded-full border-2 flex-center bg-white"
            >
              <TbWorldWww />
            </Link>

            <Link
              href={"/"}
              className="h-8 w-8 rounded-full border-2 flex-center bg-white"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
