import React from "react";

const HighlightSection = () => {
  return (
    <section className="bg-primary section-padding-standard">
      <div className="layout-standard section-padding-standard flex flex-col gap-12">
        <h1 className="font-inter tracking-tighter lg:text-6xl md:text-4xl text-3xl leading-[120%] font-semibold text-white">
          A Few Highlights
        </h1>

        <div className="w-full grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-accent">
              3.5 million+
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-2">
              Estate Planning Docs
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90">
              Protecting loved ones by helping customers create 3.5 million+
              estate planning documents.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-accent">
              4 million+
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-2">
              Businesses
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90">
              Helping entrepreneurs turn ideas into businesses over 4 million
              times.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-accent">
              20+ years
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-2">
              Leading The Industry
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90">
              Giving customers access to trusted, affordable legal help for over
              two decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
