"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State } from "country-state-city";
import { useRouter } from "next/navigation";

import { BusinessRegistrationStep02FormData } from "@/interfaces/form-interfaces";
import { ProtectionTypeEnum } from "@/enums/protection-type-enum";

import { BusinessRegistrationStep02FormSchema } from "@/schemas/business-registration-step-02-form-schema";

import { Form } from "../ui/form";
import CustomSystemField from "../common/custom-system-field";
import CustomSelection from "../common/custom-selection";
import CustomInput from "../common/custom-input";
import CustomUpload from "../common/custom-upload";
import { CustomDropdown02 } from "../common/custom-dropdowns";
import CustomCalendar from "../common/custom-calendar";

import FormImg01 from "../../../public/images/form-img-01.png";
import FormImg02 from "../../../public/images/form-img-02.png";
import FormImg03 from "../../../public/images/form-img-03.png";
import FormImg04 from "../../../public/images/form-img-04.png";

const BusinessRegistrationStep02Form = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

    setLoading(true);

    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
                setValue={setValue}
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
                setValue={setValue}
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
            
            </>
          )}
        </form>
      </Form>
    </section>
  );
};

export default BusinessRegistrationStep02Form;
