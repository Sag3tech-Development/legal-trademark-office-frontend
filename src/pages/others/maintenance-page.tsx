import React from "react";
import Image from "next/image";

import MaintenanceImg from "../../../public/images/maintenance-img.png";

const MaintenancePage = () => {
  return (
    <main className="h-[calc(100svh-170px)] flex-center layout-standard flex-col gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="lg:text-6xl md:text-4xl text-3xl tracking-tighter font-semibold font-inter text-heading !leading-[120%] max-w-[700px] text-center">
          The Site Is Currently Down For Maintenance
        </h1>
        <p className="lg:text-lg md:text-base text-sm max-w-[400px] text-center">
          We apologize for any inconveniences caused by us. We are almost done.
        </p>
      </div>

      <Image src={MaintenanceImg} alt="Maintenance" width={350} />
    </main>
  );
};

export default MaintenancePage;
