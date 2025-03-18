import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomTextareaProps } from "@/interfaces/common-component-interfaces";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const CustomTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Enter text...",
  rows = 5,
}: CustomTextareaProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-heading md:text-base text-sm font-normal">
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className="rounded-[5px] md:!text-base !text-sm border border-border"
              rows={rows}
            />
          </FormControl>
          <FormMessage className="text-destructive text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
