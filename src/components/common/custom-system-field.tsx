import React from "react";
import { FieldValues } from "react-hook-form";

import { CustomSystemFieldProps } from "@/interfaces/common-component-interfaces";

import { FormField } from "../ui/form";
import { Input } from "../ui/input";

const CustomSystemField = <T extends FieldValues>({
  control,
  name,
}: CustomSystemFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div style={{ display: "none" }}>
          <Input
            {...field}
            tabIndex={-1}
            autoComplete="off"
            placeholder="..."
          />
        </div>
      )}
    />
  );
};

export default CustomSystemField;
