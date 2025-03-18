"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FieldValues } from "react-hook-form";

import { CustomUploadProps } from "@/interfaces/common-component-interfaces";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { IoMdCloudUpload } from "react-icons/io";

const CustomUpload = <T extends FieldValues>({
  control,
  name,
  label,
  setValue,
}: CustomUploadProps<T>) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dnsk6igfu/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPreviewUrl(data.secure_url);

        setValue(name, data.secure_url);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-heading md:text-base text-sm font-normal">
            {label}
          </FormLabel>
          <FormControl>
            <div className="w-full flex flex-col items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="w-full">
                <Button
                  className="rounded-[5px] h-[55px] w-full flex items-center justify-center md:text-base text-sm hover:bg-primary-hover"
                  type="button"
                >
                  <IoMdCloudUpload className="!h-[22px] !w-[22px] mr-2" />
                  Upload Logo
                </Button>
              </label>
              {previewUrl && (
                <div className="w-full flex justify-center">
                  <Image
                    src={previewUrl}
                    alt="Uploaded logo"
                    width={100}
                    height={100}
                    className="rounded-md border"
                  />
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-destructive text-base" />
        </FormItem>
      )}
    />
  );
};

export default CustomUpload;
