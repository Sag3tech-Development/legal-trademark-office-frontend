import React from "react";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

const FaqsHeroSection = () => {
  return (
    <section className="bg-secondary-background w-full section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <div className="flex items-end justify-between">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%] max-w-[70%]">
            Got Questions? We&apos;ve Got Answers! Find{" "}
            <span className="text-primary">Everything You Need to Know</span>{" "}
            About Our Services, Support, and How We Can Help Your Business
            Thrive.
          </h1>

          <Link
            href={"/business-registration/step-1"}
            className="h-12 w-12 rounded-full bg-secondary flex-center glow-effect hover:bg-secondary-hover transition-colors duration-200"
          >
            <FaLongArrowAltRight size={25} className="text-primary-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqsHeroSection;
