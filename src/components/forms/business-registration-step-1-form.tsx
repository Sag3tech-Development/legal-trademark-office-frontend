"use client";

import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { State, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { BusinessRegistrationStep1FormData } from "@/interfaces/form-interfaces";

import { BusinessRegistrationStep1FormSchema } from "@/schemas/business-registration-step-1-form-schema";

import { ApiRequest } from "@/utils/api-request";

import { Form } from "../ui/form";
import CustomSystemField from "../common/custom-system-field";
import CustomInput from "../common/custom-input";
import { CustomDropdown01 } from "../common/custom-dropdowns";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import { LoaderCircle } from "lucide-react";

const BusinessRegistrationStep1Form = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // US STATES AND CITIES
  const states = useMemo(
    () =>
      State.getStatesOfCountry("US").map((state) => ({
        label: state.name,
        value: state.isoCode,
      })),
    []
  );
  const cities = useMemo(
    () =>
      City.getAllCities()
        .filter((city) => city.countryCode === "US")
        .map((city) => ({
          label: city.name,
          value: city.name,
        })),
    []
  );

  const form = useForm({
    resolver: zodResolver(BusinessRegistrationStep1FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      zipCode: "",
      emailAddress: "",
      phoneNumber: "",
      landlineNumber: "",
      prefferedContactTime: "",

      system01: "",
      system02: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: BusinessRegistrationStep1FormData) => {
    if (data.system01 || data.system02) {
      console.warn("Bot detected!");
      return;
    }

    setLoading(true);

    const { system01, system02, ...filteredData } = data;

    try {
      const response = await ApiRequest<{ success: boolean; message: string }>({
        endpoint: "/lto/form/step-1",
        method: "POST",
        body: filteredData,
        onSuccess: () => {
          router.push("/business-registration/step-2");
        },
        onFailure: () => {
          toast.error("Failed to complete the form.");
        },
      });
    } catch (error: any) {
      toast.error("Form submission failed:", error);
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

          {/* FIRST AND LAST NAME FIELD */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <CustomInput
              control={control}
              name="firstName"
              label="First Name"
              placeholder="e.g., John"
            />

            <CustomInput
              control={control}
              name="lastName"
              label="Last Name"
              placeholder="e.g., Doe"
            />
          </div>

          {/* STATE AND CITY FIELD */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <CustomDropdown01
              control={control}
              name="state"
              label="State"
              options={states}
              placeholder="Select your state"
              isVirtualized={false}
            />

            <CustomDropdown01
              control={control}
              name="city"
              label="City"
              options={cities}
              placeholder="Select your city"
              isVirtualized={true}
            />
          </div>

          {/* ADDRESS FIELD */}
          <CustomInput
            control={control}
            name="address"
            label="Address"
            placeholder="e.g., 342 Jeffery Mills"
          />

          {/* ZIP CODE AND EMAIL ADDRESS FIELD */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <CustomInput
              control={control}
              name="zipCode"
              label="Zip Code"
              placeholder="e.g., 99515"
            />

            <CustomInput
              control={control}
              name="emailAddress"
              label="Email Address"
              placeholder="e.g., johndoe@email.com"
            />
          </div>

          {/* PHONE NUMBER AND LANDLINE FIELD */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <CustomInput
              control={control}
              name="phoneNumber"
              label="Phone Number"
              placeholder="e.g., 555-555-5555"
            />

            <CustomInput
              control={control}
              name="landlineNumber"
              label="Landline Number"
              placeholder="e.g., 555-555-5555"
            />
          </div>

          {/* PREFFERED CONTACT TIME FIELD */}
          <CustomInput
            control={control}
            name="prefferedContactTime"
            label="Preffered Contact Time (must be during business hours.)"
            placeholder="e.g., Monday 10:00 AM"
          />

          <Separator className="mt-12" />

          {/* SYSTEM FIELD 02 */}
          <CustomSystemField control={control} name="system02" />

          {/* SUBMIT BUTTON */}
          <div className="w-full flex items-center justify-between mb-12">
            <div>Google Captcha</div>

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

export default BusinessRegistrationStep1Form;
