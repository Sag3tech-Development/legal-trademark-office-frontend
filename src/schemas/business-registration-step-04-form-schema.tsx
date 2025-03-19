import { z } from "zod";

export const BusinessRegistrationStep04FormSchema = z.object({
  isGovernmentFeeIncluded: z.boolean(),
  isRushProcessingIncluded: z.boolean(),
});
