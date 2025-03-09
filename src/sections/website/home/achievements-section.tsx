import React, { Fragment } from "react";

import { AchievementStats } from "@/constants/home-page-data";

const AchievementsSection = () => {
  return (
    <section className="layout-standard">
      <dl className="my-4 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:py-14">
        {AchievementStats.map((stat, index) => (
          <Fragment key={index}>
            <div className="border-l-2 border-border pl-6 md:border-l md:text-center lg:border-border md:first:border-none">
              <dd className="inline-block text-heading font-inter text-5xl font-bold tracking-tight lg:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-1 font-medium">{stat.name}</dt>
            </div>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};

export default AchievementsSection;
