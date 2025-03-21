import { z } from "zod";

import {
  HiddenCharRegex,
  PhoneNumberSchemaValidator,
  StrictStringValidator,
  ZipCodeSchemaValidator,
  EmailSchemaValidator,
} from "@/utils/form-validators";

export const BusinessRegistrationStep01FormSchema = z.object({
  firstName: StrictStringValidator("first name"),
  lastName: StrictStringValidator("last name"),
  address: StrictStringValidator("address"),
  state: StrictStringValidator("state"),
  city: StrictStringValidator("city"),
  zipCode: ZipCodeSchemaValidator,
  emailAddress: EmailSchemaValidator,
  phoneNumber: PhoneNumberSchemaValidator,
  landlineNumber: PhoneNumberSchemaValidator.optional(),
  prefferedContactTime: z
    .string()
    .optional()
    .transform((val) => (val ? val.trim() : val))
    .refine((val) => !val || !HiddenCharRegex.test(val), {
      message: "Invalid characters detected in preferred contact time.",
    }),

  // Hidden security fields
  system01: z.string().max(0, { message: "Invalid field detected." }),
  system02: z.string().max(0, { message: "Invalid field detected." }),
});
