import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MeetLegalTeamSectionData } from "@/constants/about-page-data";

import { Card } from "@/components/ui/card";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const MeetLegalTeamSection = () => {
  return (
    <section className="layout-standard section-padding-standard">
      <div className="section-padding-standard flex flex-col lg:gap-12 gap-8">
        <div className="flex flex-col text-center w-full mb-4 gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl tracking-tighter font-semibold text-heading !leading-[120%] font-inter">
            Meet Our Expert <span className="text-primary">Legal Team</span>
          </h1>
          <p className="md:text-[18px] text-base md:leading-[28px] font-medium">
            Experienced attorneys and paralegals dedicated to protecting your
            business and intellectual property.
          </p>
        </div>

        <div className="w-full grid gap-8 lg:grid-cols-2">
          {MeetLegalTeamSectionData.map((member, index) => (
            <Card
              key={index}
              className="shadow-2xl md:h-[400px] md:flex items-center bg-secondary-bg-color px-4 md:pt-4 md:pb-0 py-8"
            >
              <Image
                className="md:w-1/2 md:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={member.img}
                alt={member.name}
              />

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-heading mb-2">
                  {member.name}
                </h3>
                <p className="mt-3 mb-4 font-light text-paragraph">
                  {member.descripiton}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <Link href={"/"}>
                    <li className="hover:text-heading">
                      <FaFacebook size={20} />
                    </li>
                  </Link>

                  <Link href={"/"}>
                    <li className="hover:text-heading-color">
                      <FaTwitter size={20} />
                    </li>
                  </Link>

                  <Link href={"/"}>
                    <li className="hover:text-heading-color">
                      <TbWorldWww size={20} />
                    </li>
                  </Link>
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetLegalTeamSection;
