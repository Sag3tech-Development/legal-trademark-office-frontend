import { z } from "zod";

import { BusinessRegistrationStep01FormSchema } from "@/schemas/business-registration-step-01-form-schema";
import { BusinessRegistrationStep02FormSchema } from "@/schemas/business-registration-step-02-form-schema";
import { BusinessRegistrationStep03FormSchema } from "@/schemas/business-registration-step-03-form-schema";
import { BusinessRegistrationStep04FormSchema } from "@/schemas/business-registration-step-04-form-schema";

export type BusinessRegistrationStep01FormData = z.infer<
  typeof BusinessRegistrationStep01FormSchema
>;

export type BusinessRegistrationStep02FormData = z.infer<
  typeof BusinessRegistrationStep02FormSchema
>;

export type BusinessRegistrationStep03FormData = z.infer<
  typeof BusinessRegistrationStep03FormSchema
>;

export type BusinessRegistrationStep04FormData = z.infer<
  typeof BusinessRegistrationStep04FormSchema
>;
