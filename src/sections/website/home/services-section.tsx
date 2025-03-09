import React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="layout-standard section-padding-standard">
      <div className="section-padding-standard">
        <div className="flex flex-col text-center w-full lg:mb-16 mb-12 gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl tracking-tighter font-semibold text-heading !leading-[120%] font-inter">
            One Stop Solution For Your{" "}
            <span className="text-primary">Business</span>
          </h1>
          <p className="md:text-[18px] text-base md:leading-[28px] font-medium">
            Protect your brand with our comprehensive range of intellectual
            property services
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 w-full md:px-8 p-4 md:py-6 border-l-2 border-border border-opacity-60 grid grid-cols-1 gap-4">
            <h2 className="text-lg sm:text-xl text-heading font-semibold">
              Trademark Registration
            </h2>

            <p className="leading-relaxed md:text-base text-sm">
              Protect your brand&apos;s name, logo, and identity with seamless
              trademark registration services. Ensure legal protection and
              establish your business as a trusted, recognizable entity.
            </p>

            <Link
              href={"/service/trademark-registration"}
              className="text-primary hover:text-primary-hover inline-flex items-center font-inter"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 w-full md:px-8 p-4 md:py-6 border-l-2 border-border border-opacity-60 grid grid-cols-1 gap-4">
            <h2 className="text-lg sm:text-xl text-heading font-semibold">
              Copyright Registration
            </h2>

            <p className="leading-relaxed md:text-base text-sm">
              Safeguard your original works with exclusive rights. Register to
              enhance legal protection, establish ownership, and enforce against
              unauthorized use or infringement.
            </p>

            <Link
              href={"/service/copyright-registration"}
              className="text-primary hover:text-primary-hover inline-flex items-center font-inter"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 w-full md:px-8 p-4 md:py-6 border-l-2 border-border border-opacity-60 grid grid-cols-1 gap-4">
            <h2 className="text-lg sm:text-xl text-heading font-semibold">
              Amazon Brand Registration
            </h2>

            <p className="leading-relaxed md:text-base text-sm">
              Enhance your brand&apos;s presence and trust on Amazon Brand.
              Officially register your brand to unlock tools and protections
              that help drive customer loyalty and prevent counterfeiting.
            </p>

            <Link
              href={"/service/amazon-brand-registration"}
              className="text-primary hover:text-primary-hover inline-flex items-center font-inter"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 w-full md:px-8 p-4 md:py-6 border-l-2 border-border border-opacity-60 grid grid-cols-1 gap-4">
            <h2 className="text-lg sm:text-xl text-heading font-semibold">
              Patent Registration
            </h2>

            <p className="leading-relaxed md:text-base text-sm">
              Protect your innovations and inventions by registering a patent.
              Secure legal ownership, safeguard your ideas, and create
              opportunities for competitive advantage in your industry.
            </p>

            <Link
              href={"/service/patent-registration"}
              className="text-primary hover:text-primary-hover inline-flex items-center font-inter"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
