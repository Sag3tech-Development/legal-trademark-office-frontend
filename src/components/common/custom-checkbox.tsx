import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomCheckboxProps } from "@/interfaces/common-component-interfaces";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const CustomCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  priceLabel,
}: CustomCheckboxProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-4">
          <FormLabel className="text-heading text-xl font-semibold">
            {label}
          </FormLabel>
          {description && (
            <FormDescription className="md:text-base text-sm leading-relaxed font-normal">
              {description}
            </FormDescription>
          )}
          <FormControl>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={name as string}
                checked={field.value}
                onCheckedChange={(checked) =>
                  field.onChange(checked as boolean)
                }
                className="rounded-lg !animation-standard !duration-200"
              />
              {priceLabel && (
                <label
                  htmlFor={name as string}
                  className="md:text-base text-sm font-normal text-heading leading-none"
                >
                  {priceLabel}
                </label>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-destructive text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomCheckbox;
