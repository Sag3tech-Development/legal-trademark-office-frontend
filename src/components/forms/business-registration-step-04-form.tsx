"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSelector } from "react-redux";

import { BusinessRegistrationStep04FormData } from "@/interfaces/form-interfaces";
import { RootState } from "@/interfaces/store-interfaces";

import { BusinessRegistrationStep04FormSchema } from "@/schemas/business-registration-step-04-form-schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "../ui/separator";

import { ApiRequest } from "@/utils/api-request";

import { LoaderCircle } from "lucide-react";
import CustomCheckbox from "../common/custom-checkbox";

const BusinessRegistrationStep04Form = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const formId = useSelector((state: RootState) => state.form.formId);

  const form = useForm({
    resolver: zodResolver(BusinessRegistrationStep04FormSchema),
    defaultValues: {
      isGovernmentFeeIncluded: false,
      isRushProcessingIncluded: false,
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: BusinessRegistrationStep04FormData) => {
    if (!formId) {
      toast.error("Form ID is missing. Please complete Step 1.");
      return;
    }

    setLoading(true);

    try {
      await ApiRequest<{ success: boolean; message: string }>({
        endpoint: `/legal-trademark-office/form/step-04/${formId}`,
        method: "POST",
        body: data,
        onSuccess: () => {
          toast.success("Step 4 Completed Successfully!");
          router.push(`/checkout/${formId}`);
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

  return (
    <section className="mt-12">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          {/* GOVERNMENT FEE FIELD */}
          <CustomCheckbox
            control={control}
            name="isGovernmentFeeIncluded"
            label="1. Federal Filing Fee"
            description="The package includes the government fee of $350 for the registration of one mandatory class for your trademark. Our expert paralegals will review your case to determine the optimal number of classes needed to fully protect your business name, logo, or slogan. Additional government fees may apply for each additional class identified during the paralegal team's review. You will be informed about additional classes before proceeding. Our goal is to ensure comprehensive protection for your intellectual property, and our team will guide you through the process with transparency and expertise."
            priceLabel="Federal Fee: $350.00 USD"
          />

          <Separator />

          {/* RUSH PROCESSING FIELD */}
          <CustomCheckbox
            control={control}
            name="isRushProcessingIncluded"
            label="2. Rush Processing"
            description="We know time is critical. With Rush Processing, we will complete your search results by the next business day, and file the application immediately after you have approved it."
            priceLabel="Rush Processing: $25.00 USD"
          />

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

export default BusinessRegistrationStep04Form;
