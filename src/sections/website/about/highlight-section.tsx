import React from "react";

const HighlightSection = () => {
  return (
    <section className="bg-secondary section-margin-standard section-padding-standard">
      <div className="layout-standard section-padding-standard flex flex-col items-center gap-12">
        <div className="w-full grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary">
              3.5 million+
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-4">
              Estate Planning Docs
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90 text-center">
              Protecting loved ones by helping customers create 3.5 million+
              estate planning documents.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary">
              4 million+
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-2">
              Businesses
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90 text-center">
              Helping entrepreneurs turn ideas into businesses over 4 million
              times.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary">
              20+ years
            </h1>
            <h4 className="lg:text-xl md:text-lg text-base font-medium text-white mt-2">
              Leading The Industry
            </h4>
            <p className="lg:text-lg md:text-base text-sm font-medium text-white/90 text-center">
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
