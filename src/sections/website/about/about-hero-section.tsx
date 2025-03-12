import React from "react";
import Link from "next/link";
import Image from "next/image";

import AboutHeroImg from "../../../../public/images/about-hero-img.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutHeroSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex flex-col gap-[7rem]">
      <div className="flex items-end justify-between mt-[5rem]">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%] max-w-[70%]">
          Protecting Your Brand,{" "}
          <span className="text-primary">Securing Your Future</span> -
          Trademark, Patent, and Business Registration Made Easy.
        </h1>

        <Link
          href={"/business-registration/step-1"}
          className="h-12 w-12 rounded-full bg-secondary flex-center glow-effect hover:bg-secondary-hover transition-colors duration-200"
        >
          <FaLongArrowAltRight size={25} className="text-white" />
        </Link>
      </div>

      <Image
        src={AboutHeroImg}
        alt="About"
        className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

      <div className="flex flex-col items-center gap-4 mb-[5rem]">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
          Hello, We Are Legal Trademark Office
        </h1>

        <p className="max-w-[900px] font-medium lg:text-lg md:text-base text-sm text-center">
          At Secure Your Mark, we offer comprehensive trademark protection
          packages designed to meet the unique needs of your brand. Choose our
          DIY-assisted service for a hands-on approach, allowing you to navigate
          the trademark registration process at your own pace.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
