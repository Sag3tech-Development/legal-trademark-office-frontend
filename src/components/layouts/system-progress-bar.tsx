"use client";

import React, { Fragment } from "react";
import { usePathname } from "next/navigation";

import { Progress } from "../ui/progress";

import { FaCheck } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";

const SystemProgressBar = () => {
  const pathname = usePathname() || "";

  const currentStep = parseInt(pathname.split("step-")[1], 10);

  const totalSteps = 4;

  const getStepState = (step: number): "complete" | "active" | "incomplete" => {
    if (step < currentStep) return "complete";
    if (step === currentStep) return "active";
    return "incomplete";
  };

  return (
    <section className="layout-standard section-margin-standard flex-center flex-col gap-4 mb-12">
      <h1 className="text-heading text-center font-inter font-bold lg:text-[52px] md:text-[42px] text-[32px] lg:leading-[60px] md:leading-[50px] leading-[40px]">
        Registering Your <span className="text-primary">Business</span>
      </h1>

      <div className="w-full flex max-md:flex-col items-center md:gap-2 gap-12 md:mt-12 mt-5 max-md:hidden">
        {Array.from({ length: totalSteps }, (_, index) => {
          const step = index + 1;
          const stepState = getStepState(step);

          return (
            <Fragment key={step}>
              <div className="w-fit flex flex-col gap-4 items-center text-center">
                <div
                  className={`w-[60px] h-[60px] rounded-full flex-center ${
                    stepState === "complete" ? "bg-primary" : "bg-[#f1f1f1]"
                  }`}
                >
                  {stepState === "complete" ? (
                    <FaCheck className="text-white text-[20px]" />
                  ) : (
                    <RiLoader2Fill
                      className={`${
                        stepState === "active"
                          ? "text-secondary"
                          : "text-paragraph"
                      } text-[20px]`}
                    />
                  )}
                </div>
                <p className="text-base text-heading font-semibold font-inter">
                  Step {step}
                </p>
              </div>

              {step < totalSteps && (
                <Progress
                  value={step < currentStep ? 100 : 0}
                  className="md:-translate-y-[19px] max-md:mb-8 max-md:hidden"
                />
              )}
            </Fragment>
          );
        })}
      </div>

      <div className="w-full md:hidden mt-5">
        <Progress value={50} />
      </div>
    </section>
  );
};

export default SystemProgressBar;
