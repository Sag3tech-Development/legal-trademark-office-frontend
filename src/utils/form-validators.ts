import { z } from "zod";
import validator from "validator";

export const HiddenCharRegex = /[\u200B-\u200F\u202A-\u202E]/;

export const StrictStringValidator = (field: string) =>
  z
    .string()
    .min(1, { message: `Please provide your ${field}.` })
    .regex(/^\S.*\S$|^\S$/, { message: `Invalid whitespace in ${field}.` })
    .refine((val) => !HiddenCharRegex.test(val), {
      message: `Invalid characters detected in ${field}.`,
    });

export const ZipCodeSchemaValidator = z.string().regex(/^\d{5}(-\d{4})?$/, {
  message: "Enter a valid US zip code (e.g., 12345 or 12345-6789).",
});

export const PhoneNumberSchemaValidator = z
  .string()
  .regex(/^(?:\+1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, {
    message: "Enter a valid US phone number (e.g., 555-555-5555).",
  })
  .refine((val) => validator.isMobilePhone(val, "en-US"), {
    message: "Invalid US phone number format.",
  });

export const EmailSchemaValidator = z
  .string()
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Enter a valid email address (e.g., example@email.com).",
  })
  .refine((val) => !HiddenCharRegex.test(val), {
    message: "Invalid characters detected in email address.",
  })
  .transform((val) => val.trim());
