import React from "react";
import Link from "next/link";
import Image from "next/image";

import AboutHeroImg from "../../../../public/images/about-hero-img.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutHeroSection = () => {
  return (
    <section>
      <div className="layout-standard flex flex-col relative">
        <div className="flex items-end justify-between section-padding-standard mt-[3rem] mb-[320px] relative">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%] max-w-[70%]">
            Protecting Your Brand,{" "}
            <span className="text-primary">Securing Your Future</span> -
            Trademark, Patent, and Business Registration Made Easy.
          </h1>

          <Link
            href={"/business-registration/step-01"}
            className="h-12 w-12 rounded-full bg-secondary flex-center glow-effect hover:bg-secondary-hover transition-colors duration-200"
          >
            <FaLongArrowAltRight size={25} className="text-primary-foreground" />
          </Link>
        </div>

        <Image
          src={AboutHeroImg}
          alt="About Us"
          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl absolute inset-0 top-[160px] translate-y-[250px]"
        />
      </div>

      <div className="bg-secondary-background section-padding-standard">
        <div className="layout-standard mt-[270px] pb-[100px] flex flex-col items-center gap-4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
            Hello, We Are{" "}
            <span className="text-primary">Secure Your Mark</span>
          </h1>

          <p className="max-w-[900px] lg:text-lg md:text-base text-sm text-center">
            At Secure Your Mark, we offer comprehensive trademark protection
            packages designed to meet the unique needs of your brand. Choose our
            DIY-assisted service for a hands-on approach, allowing you to
            navigate the trademark registration process at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
