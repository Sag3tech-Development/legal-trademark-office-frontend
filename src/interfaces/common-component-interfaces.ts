import { Control, FieldValues, Path } from "react-hook-form";

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
