"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State } from "country-state-city";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSelector } from "react-redux";

import { BusinessRegistrationStep02FormData } from "@/interfaces/form-interfaces";
import { RootState } from "@/interfaces/store-interfaces";
import { ProtectionTypeEnum } from "@/enums/protection-type-enum";

import { BusinessRegistrationStep02FormSchema } from "@/schemas/business-registration-step-02-form-schema";

import { Form } from "../ui/form";
import CustomSystemField from "../common/custom-system-field";
import CustomSelection from "../common/custom-selection";
import CustomInput from "../common/custom-input";
import CustomUpload from "../common/custom-upload";
import { CustomDropdown01, CustomDropdown02 } from "../common/custom-dropdowns";
import CustomCalendar from "../common/custom-calendar";
import CustomTextarea from "../common/custom-textarea";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import { ApiRequest } from "@/utils/api-request";

import FormImg01 from "../../../public/images/form-img-01.png";
import FormImg02 from "../../../public/images/form-img-02.png";
import FormImg03 from "../../../public/images/form-img-03.png";
import FormImg04 from "../../../public/images/form-img-04.png";
import { LoaderCircle } from "lucide-react";

const BusinessRegistrationStep02Form = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const formId = useSelector((state: RootState) => state.form.formId);

  const countries = useMemo(
    () =>
      Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.name,
      })),
    []
  );

  const states = useMemo(
    () =>
      State.getStatesOfCountry("US").map((state) => ({
        label: state.name,
        value: state.name,
      })),
    []
  );

  const form = useForm({
    resolver: zodResolver(BusinessRegistrationStep02FormSchema),
    defaultValues: {
      protectionType: ProtectionTypeEnum.NAME,
      protectionName: "",
      protectionLogo: "",
      protectionLogoColorScheme: "",
      protectionLogoLiteralElements: "",
      protectionSlogan: "",

      isTrademarkInUse: false,
      trademarkFirstUseDate: undefined,
      trademarkFirstUseInCommerceDate: undefined,
      trademarkInUseOwnershipDetails: "",

      isIndividuallyOwnedTrademark: true,
      isUSBasedOrganization: true,
      organizationName: "",
      organizationType: "",
      organizationFormationCountry: "",
      organizationFormationState: "",
      organizationPosition: "",

      businessClassification: "",

      system01: "",
      system02: "",
    },
  });

  const { handleSubmit, control, setValue, watch } = form;

  const protectionType = watch("protectionType");
  const isTrademarkInUse = watch("isTrademarkInUse");
  const isIndividuallyOwnedTrademark = watch("isIndividuallyOwnedTrademark");
  const isUSBasedOrganization = watch("isUSBasedOrganization");

  const onSubmit = async (data: BusinessRegistrationStep02FormData) => {
    if (data.system01 || data.system02) {
      console.warn("Bot detected!");
      return;
    }

    if (!formId) {
      toast.error("Form ID is missing. Please complete Step 1.");
      return;
    }

    setLoading(true);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { system01, system02, ...filteredData } = data;

    try {
      await ApiRequest<{ success: boolean; message: string }>({
        endpoint: `/legal-trademark-office/form/step-02/${formId}`,
        method: "POST",
        body: filteredData,
        onSuccess: () => {
          toast.success("Step 2 Completed Successfully!");
          router.push("/business-registration/step-03");
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
          {/* SYSTEM FIELD 01 */}
          <CustomSystemField control={control} name="system01" />

          {/* PROTECTION TYPE FIELD */}
          <CustomSelection
            control={control}
            name="protectionType"
            label="Select what you are trying to protect"
            options={[
              {
                label: "Name",
                value: ProtectionTypeEnum.NAME,
                image: FormImg01,
              },
              {
                label: "Logo",
                value: ProtectionTypeEnum.LOGO,
                image: FormImg02,
              },
              {
                label: "Slogan",
                value: ProtectionTypeEnum.SLOGAN,
                image: FormImg03,
              },
              {
                label: "All of them",
                value: ProtectionTypeEnum.ALL_OF_THEME,
                image: FormImg04,
              },
            ]}
          />

          {protectionType === ProtectionTypeEnum.NAME ? (
            // PROTECTION NAME FIELD
            <CustomInput
              control={control}
              name="protectionName"
              label="Enter the name you want to protect"
              placeholder="e.g., Nike, Apple."
            />
          ) : protectionType === ProtectionTypeEnum.LOGO ? (
            <>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* PROTECTION LOGO COLOR SCHEME FIELD */}
                <CustomInput
                  control={control}
                  name="protectionLogoColorScheme"
                  label="What are the protetion logo color scheme?"
                  placeholder="e.g., Red, Blue, White."
                />

                {/* PROTECTION LOGO LITERAL ELEMENTS FIELD */}
                <CustomInput
                  control={control}
                  name="protectionLogoLiteralElements"
                  label="What are the protetion logo literal elements?"
                  placeholder="e.g., Nike, Apple."
                />
              </div>

              {/* PROTECTION LOGO UPLOAD BUTTON */}
              <CustomUpload
                control={control}
                name="protectionLogo"
                label="Upload Your Logo"
              />
            </>
          ) : protectionType === ProtectionTypeEnum.SLOGAN ? (
            // PROTECTION SLOGAN FIELD
            <CustomInput
              control={control}
              name="protectionSlogan"
              label="Enter the slogan you want to protect"
              placeholder="e.g., Just do it, Think Different."
            />
          ) : (
            <>
              {/* ALL OF THEM */}
              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* PROTECTION NAME FIELD */}
                <CustomInput
                  control={control}
                  name="protectionName"
                  label="Enter the name you want to protect"
                  placeholder="e.g., Nike, Apple."
                />

                {/* PROTECTION SLOGAN FIELD */}
                <CustomInput
                  control={control}
                  name="protectionSlogan"
                  label="Enter the slogan you want to protect"
                  placeholder="e.g., Just do it, Think Different."
                />
              </div>

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* PROTECTION LOGO COLOR SCHEME FIELD */}
                <CustomInput
                  control={control}
                  name="protectionLogoColorScheme"
                  label="What are the protetion logo color scheme?"
                  placeholder="e.g., Red, Blue, White."
                />

                {/* PROTECTION LOGO LITERAL ELEMENTS FIELD */}
                <CustomInput
                  control={control}
                  name="protectionLogoLiteralElements"
                  label="What are the protetion logo literal elements?"
                  placeholder="e.g., Nike, Apple."
                />
              </div>

              {/* PROTECTION LOGO UPLOAD BUTTON */}
              <CustomUpload
                control={control}
                name="protectionLogo"
                label="Upload Your Logo"
              />
            </>
          )}

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* TRADEMARK IN USE FIELD */}
            <CustomDropdown02
              control={control}
              name="isTrademarkInUse"
              label="Are you currently using this trademark anywhere?"
              options={[
                { label: "Yes, it is being used", value: true },
                { label: "No, it is not being used anywhere", value: false },
              ]}
            />

            {/* TRADEMARK FIRST USE DATE FIELD */}
            <CustomCalendar
              control={control}
              name="trademarkFirstUseDate"
              label="Select trademark first use anywhere date"
              disabled={!isTrademarkInUse}
              setValue={setValue}
            />
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* TRADEMARK FIRST USE IN COMMERCE DATE FIELD */}
            <CustomCalendar
              control={control}
              name="trademarkFirstUseInCommerceDate"
              label="Select trademark first use in commerce date"
              disabled={!isTrademarkInUse}
              setValue={setValue}
            />

            {/* TRADEMARK IN USE OWNERSHIP DETAILS FIELD */}
            <CustomInput
              control={control}
              name="trademarkInUseOwnershipDetails"
              label="Enter the ownership details of the trademark in use"
              placeholder="e.g., John Doe, Apple Inc."
              disabled={!isTrademarkInUse}
            />
          </div>

          {/* INDIVIDUALLY OWNED TRADEMARK FIELD */}
          <CustomDropdown02
            control={control}
            name="isIndividuallyOwnedTrademark"
            label="Will the trademark be owned by an individual or an entity such as a corporation or LLC?"
            options={[
              { label: "Yes, it will be owned by an individual.", value: true },
              {
                label:
                  "No, it will be owned by an entity such as a corporation or LLC.",
                value: false,
              },
            ]}
          />

          {!isIndividuallyOwnedTrademark && (
            <>
              {/* IS US-BASED ORGANIZATION FIELD */}
              <CustomDropdown02
                control={control}
                name="isUSBasedOrganization"
                label="Is the owning origanization/corporation based in the United States?"
                options={[
                  {
                    label: "Yes, the origanization/corporation is US-based.",
                    value: true,
                  },
                  {
                    label: "No, the origanization/corporation is not US-based.",
                    value: false,
                  },
                ]}
              />

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* ORGANIZATION NAME FIELD */}
                <CustomInput
                  control={control}
                  name="organizationName"
                  label="Enter the name of the origanization/corporation"
                  placeholder="e.g., Apple Inc."
                />

                {/* ORGANIZATION TYPE FIELD */}
                <CustomDropdown01
                  control={control}
                  name="organizationType"
                  label="Origanization/Corporation Type"
                  options={[
                    { name: "LLC", value: "llc" },
                    { name: "C Corporation", value: "c-corporation" },
                    { name: "S Corporation", value: "s-corporation" },
                    { name: "Non Profit", value: "non-profit" },
                    { name: "Partnership", value: "partnership" },
                    {
                      name: "Solo Proprietorship",
                      value: "solo-proprietorship",
                    },
                    { name: "Trust", value: "trust" },
                    { name: "Other", value: "other" },
                  ].map((option) => ({
                    label: option.name,
                    value: option.name,
                  }))}
                  placeholder="Select your origanization/corporation type"
                  isVirtualized={false}
                />
              </div>

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {isUSBasedOrganization ? (
                  <>
                    {/* ORGANIZATION FORMATION STATE FIELD */}
                    <CustomDropdown01
                      control={control}
                      name="organizationFormationState"
                      label="Origanization/Corporation Formation State"
                      options={states}
                      placeholder="Select your origanization/corporation formation state"
                      isVirtualized={false}
                    />
                  </>
                ) : (
                  <>
                    {/* ORGANIZATION FORMATION COUNTRY FIELD */}
                    <CustomDropdown01
                      control={control}
                      name="organizationFormationCountry"
                      label="Origanization/Corporation Formation Country"
                      options={countries}
                      placeholder="Select your origanization/corporation formation country"
                      isVirtualized={false}
                    />
                  </>
                )}

                {/* ORGANIZATION POSITION FIELD */}
                <CustomInput
                  control={control}
                  name="organizationPosition"
                  label="Enter the position held by the individual"
                  placeholder="e.g., CEO, CFO, Product Manager."
                />
              </div>
            </>
          )}

          {/* BUSINESS CLASSIFICATION FIELD */}
          <CustomTextarea
            control={control}
            name="businessClassification"
            label="Enter the business classification"
            placeholder="e.g., clothing, coffee shops, restaurants, retail stores..."
            rows={16}
          />

          <Separator className="mt-12" />

          {/* SYSTEM FIELD 02 */}
          <CustomSystemField control={control} name="system02" />

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

export default BusinessRegistrationStep02Form;
