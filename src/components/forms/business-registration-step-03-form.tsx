"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSelector } from "react-redux";

import { BusinessRegistrationStep03FormData } from "@/interfaces/form-interfaces";
import { RootState } from "@/interfaces/store-interfaces";
import { PackageTypeEnum } from "@/enums/package-type-enum";

import { FormPackageData } from "@/constants/form-data";

import { BusinessRegistrationStep03FormSchema } from "@/schemas/business-registration-step-03-form-schema";

import { Form, FormMessage } from "../ui/form";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { cn } from "@/lib/utils";
import { ApiRequest } from "@/utils/api-request";

import { LoaderCircle } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const BusinessRegistrationStep03Form = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const router = useRouter();

  const formId = useSelector((state: RootState) => state.form.formId);

  const form = useForm({
    resolver: zodResolver(BusinessRegistrationStep03FormSchema),
    defaultValues: {
      packageType: "",
    },
  });

  const { handleSubmit, setValue } = form;

  const onSubmit = async (data: BusinessRegistrationStep03FormData) => {
    if (!formId) {
      toast.error("Form ID is missing. Please complete Step 1.");
      return;
    }

    setLoading(true);

    try {
      await ApiRequest<{ success: boolean; message: string }>({
        endpoint: `/legal-trademark-office/form/step-03/${formId}`,
        method: "POST",
        body: data,
        onSuccess: () => {
          toast.success("Step 3 Completed Successfully!");
          router.push("/business-registration/step-04");
        },
        onFailure: () => {
          toast.error("Failed to complete the form.");
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Form submission failed: ${error.message}`);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePackageSelection = (
    id: number,
    packageValue: PackageTypeEnum
  ) => {
    setSelectedPlanId(id);
    setValue("packageType", packageValue);
  };

  return (
    <section className="mt-12">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {FormPackageData.map((data) => (
              <Card
                key={data.id}
                className={cn(
                  selectedPlanId === data.id &&
                    "bg-secondary-background border shadow-2xl",
                  "pt-2 pb-8 !transition-all !ease-in-out !duration-200"
                )}
              >
                <CardHeader>
                  <h2 className="md:text-3xl text-2xl font-semibold font-poppins text-heading">
                    {data.packageType}
                  </h2>
                  <p className="md:text-base text-sm">
                    {data.packageDescription}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col md:gap-8 gap-4">
                  <div className="flex md:items-end items-center gap-2">
                    <h1 className="md:text-5xl text-3xl font-bold font-poppins text-heading">
                      ${data.packageAmount}
                    </h1>
                    <p className="md:text-base text-sm">
                      +$350 per class{" "}
                      <span className="text-primary font-bold">USPTO</span> fee
                    </p>
                  </div>

                  <Button
                    type="button"
                    onClick={() =>
                      handlePackageSelection(data.id, data.packageValue)
                    }
                    className={cn(
                      selectedPlanId === data.id
                        ? "bg-secondary hover:bg-secondary-hover"
                        : "hover:bg-primary-hover",
                      "md:text-base text-sm md:py-6 py-5"
                    )}
                  >
                    Select Your Package
                  </Button>
                </CardContent>

                <CardFooter className="md:pt-8 pt-2">
                  <ul className="flex flex-col gap-4">
                    {data.details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <FaCheck size={16} className="text-green-500" />
                        <span className="text-paragraph max-md:text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}

                    {data.detailsNotOffered?.map((data, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-black/40"
                      >
                        <GrFormClose size={20} className="text-black/40" />
                        <span className="max-md:text-sm">{data}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>

          <FormMessage className="text-destructive text-sm" />

          <Separator className="mt-[4rem] mb-8" />

          <div className="w-full flex items-center justify-end mb-12">
            <Button
              className="w-[200px] h-[56px] text-base !rounded-[5px] hover:bg-primary-hover"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="w-full h-full flex items-center justify-center gap-2">
                  <p>Submiting</p> <LoaderCircle className="animate-spin" />
                </div>
              ) : (
                "Next Step"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default BusinessRegistrationStep03Form;
