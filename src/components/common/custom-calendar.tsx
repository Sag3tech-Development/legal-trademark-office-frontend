"use client";

import React, { useEffect } from "react";
import { FieldValues, PathValue, Path } from "react-hook-form";
import { format } from "date-fns";

import { CustomCalendarProps } from "@/interfaces/common-component-interfaces";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import { IoCalendarClear } from "react-icons/io5";

const CustomCalendar = <T extends FieldValues>({
  control,
  name,
  label,
  disabled = false,
  setValue,
}: CustomCalendarProps<T>) => {
  useEffect(() => {
    if (disabled) {
      setValue(name as Path<T>, undefined as PathValue<T, Path<T>>);
    }
  }, [disabled, control, name, setValue]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            htmlFor={name as string}
            className={cn(
              "text-heading md:text-base text-sm font-normal",
              disabled && "opacity-50"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            <div className="w-full relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    disabled={disabled}
                    className={cn(
                      "w-full flex-center justify-start h-[50px] rounded-[5px] border border-border bg-transparent hover:bg-blue-50 md:text-base text-sm shadow-none text-paragraph font-normal"
                    )}
                  >
                    <IoCalendarClear size={16} />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span className="md:text-base text-sm">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => field.onChange(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </FormControl>

          <FormMessage className="text-destructive text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomCalendar;
