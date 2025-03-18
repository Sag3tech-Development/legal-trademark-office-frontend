import { z } from "zod";

import { BusinessRegistrationStep01FormSchema } from "@/schemas/business-registration-step-01-form-schema";
import { BusinessRegistrationStep02FormSchema } from "@/schemas/business-registration-step-02-form-schema";

export type BusinessRegistrationStep01FormData = z.infer<
  typeof BusinessRegistrationStep01FormSchema
>;

export type BusinessRegistrationStep02FormData = z.infer<
  typeof BusinessRegistrationStep02FormSchema
>;
