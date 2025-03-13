import { z } from "zod";

import { BusinessRegistrationStep1FormSchema } from "@/schemas/business-registration-step-1-form-schema";

export type BusinessRegistrationStep1FormData = z.infer<
  typeof BusinessRegistrationStep1FormSchema
>;
