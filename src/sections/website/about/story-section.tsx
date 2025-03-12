import React from "react";
import Image from "next/image";

import AboutStroySectionImg from "../../../../public/images/about-story-img.png";

const StorySection = () => {
  return (
    <section className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard grid lg:grid-cols-2 col-span-1 lg:gap-12">
        <div className="col-span-1 flex flex-col h-full justify-center gap-8">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
            Hear Our <span className="text-primary">Story</span>
          </h1>

          <div className="flex flex-col gap-4 lg:text-lg md:text-base text-sm font-medium">
            <p>
              In 2001, we established ourselves as a tech company dedicated to
              making legal help accessible to all. With that mission in mind, we
              launched 10 online services, focusing on estate planning, business
              formation, and intellectual property protection.
            </p>

            <p>
              Soon, word began to spread: there&apos;s a new, easier, and less
              expensive way to get legal help.
            </p>

            <p>
              In 2010, after a decade of growing our services, we innovated
              again, and created an independent network of attorneys so our
              customers could get personalized legal advice—without having to
              leave home.
            </p>

            <p>
              With offices in Los Angeles, Austin, and the Bay Area, our united
              workforce of talented, diverse, and inclusive Zoomers is our
              recipe for success, and the reason we&apos;re able to empower
              millions to make their dreams official.
            </p>
          </div>
        </div>

        <div className="col-span-1 w-full max-lg:hidden">
          <Image src={AboutStroySectionImg} alt="Our Story" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
