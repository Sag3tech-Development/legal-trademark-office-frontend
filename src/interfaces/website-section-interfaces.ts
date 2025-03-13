import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ServicesHeroSectionProps {
  backgroundClassname: string;

  breadcrumbPath: string;
  breadcrumbLabel: string;

  titleText: string;
  descriptionText: string;
  impactText: string;

  buttonText: string;
  reviewPath: string;
}

export interface ServicesProcessSectionProps {
  titleText: string;
  descriptionText: string;

  process1Title: string;
  process1Img: StaticImageData;
  process1Description: string;

  process2Title: string;
  process2Img: StaticImageData;
  process2Description: string;

  process3Title: string;
  process3Img: StaticImageData;
  process3Description: string;
}

export interface ServicesAchievementSectionProps {
  titleText: string;
  descriptionText: string;

  Attorney1Img: StaticImageData;
  Attorney1ReviewerName: string;
  Attorney1ReviewTag1: string;
  Attorney1ReviewTag2: string;
  Attorney1Review: string;

  Attorney2Img: StaticImageData;
  Attorney2ReviewerName: string;
  Attorney2ReviewTag1: string;
  Attorney2ReviewTag2: string;
  Attorney2Review: string;

  Achievement1Icon: IconType;
  Achievement1Description: string;

  Achievement2Icon: IconType;
  Achievement2Description: string;

  Achievement3Icon: IconType;
  Achievement3Description: string;
}

export interface ServicesComparisonSectionProps {
  comparisonHeading: string;

  Point1: string;
  Point2: string;
  Point3: string;
  Point4: string;
  Point5: string;

  numbersAchieved: string;
  onlineCompatitorNumbers: string;
}

export interface ServicesFaqSectionProps {
  description: string;

  data01: {
    question: string;
    answer: string;
  }[];

  data02: {
    question: string;
    answer: string;
  }[];

  data03: {
    question: string;
    answer: string;
  }[];
}

export interface ServicesTestimonialSectionProps {
  title: string;
  data: {
    name: string;
    date: string;
    review: string;
  }[];
}

export interface ServicesImportanceSectionProps {
  titleText: string;
  descriptionText: string;

  noteData: {
    impIcon: IconType;
    impTitle: string;
    impDesc: string;
  }[];

  dosTitle: string;
  dos01: string;
  dos02: string;
  dos03: string;

  dontTitle: string;
  dont01: string;
  dont02: string;
  dont03: string;
}
