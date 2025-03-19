import { PackageTypeEnum } from "@/enums/package-type-enum";

export const FormPackageData = [
  {
    id: 1,
    packageType: "Basic Package",
    packageValue: PackageTypeEnum.BASIC,
    packageDescription:
      "Essential trademark filing for startups with 7-day processing.",
    packageAmount: 49,
    details: [
      "Comprehensive USPTO trademark search",
      "7-day application processing",
      "Application prepared by specialists",
      "100% satisfaction guarantee",
    ],
    detailsNotOffered: [
      "Office action support",
      "Trademark monitoring (6 months)",
      "Additional filings management",
    ],
  },

  {
    id: 2,
    packageType: "Standard Package",
    packageValue: PackageTypeEnum.STANDARD,
    packageDescription:
      "Essential trademark filing for startups with 3-day processing.",
    packageAmount: 149,
    details: [
      "Comprehensive federal and state trademark search",
      "3-day application processing",
      "Application reviewed by licensed paralegal",
      "100% satisfaction guarantee",
      "Office action support",
    ],
    detailsNotOffered: [
      "Trademark monitoring (6 months)",
      "Additional filings management",
    ],
  },

  {
    id: 3,
    packageType: "Premium Package",
    packageValue: PackageTypeEnum.PREMIUM,
    packageDescription:
      "Faster filing with paralegal review and office action support.",
    packageAmount: 249,
    details: [
      "Comprehensive federal and state trademark search",
      "24-48 hours application processing",
      "Full support from U.S. licensed paralegals",
      "100% satisfaction guarantee",
      "Office action support",
      "6 months trademark monitoring",
      "Additional filings management",
    ],
  },
];
