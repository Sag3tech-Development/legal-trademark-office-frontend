import { z } from "zod";

import { PackageTypeEnum } from "@/enums/package-type-enum";

export const BusinessRegistrationStep03FormSchema = z.object({
  packageType: z.enum(Object.values(PackageTypeEnum) as [string, ...string[]]),
});
