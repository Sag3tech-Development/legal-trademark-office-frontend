import React from "react";
import Image from "next/image";

import AboutAnnouncementImg from "../../../../public/images/about-announcement-img.png";

const AnnouncementSection = () => {
  return (
    <section className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard grid lg:grid-cols-2 col-span-1 lg:gap-12">
        <div className="col-span-1 w-full max-lg:hidden">
          <Image src={AboutAnnouncementImg} alt="Announcement" />
        </div>

        <div className="col-span-1 flex flex-col h-full justify-center gap-8">
          <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%]">
            Making It Official For{" "}
            <span className="text-primary">Everyone</span>
          </h1>

          <div className="flex flex-col gap-4 lg:text-lg md:text-base text-sm font-medium">
            <p>
              We believe legal help should be accessible to anyone—regardless of
              who they are, who they love, the color of their skin, or their
              economic status.
            </p>

            <p>
              We strive to support the broader small business community and
              general public through our social impact efforts. To do so,
              we&apos;re building lasting partnerships with nonprofits to help
              lift up underserved and underrepresented communities, often
              excluded by the traditional legal system. Beyond partnerships, we
              take part in corporate giving, and empower our employees with
              community service days off and corporate matching programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
