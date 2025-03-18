import { StaticImageData } from "next/image";
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form";

import { ProtectionTypeEnum } from "@/enums/protection-type-enum";

export interface SystemHeadingProps {
  heading: string;
  subheading: string;
}

export interface CustomSystemFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

export interface CustomDropdown01Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  isVirtualized?: boolean;
}

export interface CustomDropdown02Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options: {
    label: string;
    value: string | boolean | number;
  }[];
  placeholder?: string;
}

export interface CustomSelectionProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options: {
    label: string;
    value: ProtectionTypeEnum;
    image: string | StaticImageData;
  }[];
}

export interface CustomUploadProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  setValue: UseFormSetValue<T>;
}

export interface CustomCalendarProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  disabled?: boolean;
  setValue: UseFormSetValue<T>;
}
