import {
  FaCircleInfo,
  FaFile,
  FaClock,
  FaShareNodes,
  FaSquareCheck,
  FaStopwatch,
} from "react-icons/fa6";
import { BsShieldFillExclamation } from "react-icons/bs";
import {
  FaHourglass,
  FaLock,
  FaBookOpen,
  FaThermometerFull,
  FaCopyright,
  FaKey,
  FaGlobeAfrica,
} from "react-icons/fa";

export const FaqsDetailsSectionData = [
  {
    id: 1,
    question: "What is a trademark?",
    answer:
      "A trademark is a word, phrase, logo, symbol, or design that identifies and distinguishes the source of goods or services from others in the marketplace.",
    icon: <FaCircleInfo size={14} />,
  },

  {
    id: 2,
    question: "Why should I register my trademark?",
    answer:
      "Registering a trademark provides legal protection, exclusive rights to use your mark, and the ability to prevent others from using a similar mark in your industry.",
    icon: <BsShieldFillExclamation size={14} />,
  },

  {
    id: 3,
    question: "How long does the trademark registration process take?",
    answer:
      "The process typically takes 8-12 months, but this can vary depending on the complexity of the application and potential objections.",
    icon: <FaHourglass size={14} />,
  },

  {
    id: 4,
    question:
      "Can I register a trademark for a business name I am not using yet?",
    answer:
      "Yes, you can file an 'Intent-to-Use' application if you plan to use the trademark in commerce in the near future.",
    icon: <FaFile size={14} />,
  },

  {
    id: 5,
    question: "How long does a trademark last?",
    answer:
      "A trademark lasts for 10 years and can be renewed indefinitely as long as it is being used in commerce and renewal fees are paid.",
    icon: <FaClock size={14} />,
  },

  {
    id: 6,
    question: "What is the Amazon Brand Registry?",
    answer:
      "Amazon Brand Registry is a program that helps protect your brand on Amazon by providing tools to monitor and report intellectual property violations.",
    icon: <FaShareNodes size={14} />,
  },

  {
    id: 7,
    question:
      "Do I need a registered trademark to enroll in the Amazon Brand Registry?",
    answer:
      "Yes, you must have a registered trademark in the country where you are enrolling in the registry.",
    icon: <FaSquareCheck size={14} />,
  },

  {
    id: 8,
    question: "How does the Brand Registry protect my products?",
    answer:
      "The program gives you access to tools that allow you to report listings that infringe on your trademark and enhance your brand's presence on Amazon.",
    icon: <FaLock size={14} />,
  },

  {
    id: 9,
    question: "How long does it take to enroll in the Amazon Brand Registry?",
    answer:
      "Once your trademark is registered, the enrollment process typically takes 1-2 weeks.",
    icon: <FaStopwatch size={14} />,
  },

  {
    id: 10,
    question: "What is a patent?",
    answer:
      "A patent is a legal right granted for an invention, giving the owner exclusive rights to use, sell, or license the invention for a specific period.",
    icon: <FaBookOpen size={14} />,
  },

  {
    id: 11,
    question: "How long does the patent application process take?",
    answer:
      "The process can take 1-3 years or more, depending on the type of patent and complexity of the invention.",
    icon: <FaThermometerFull size={14} />,
  },

  {
    id: 12,
    question: "What is copyright?",
    answer:
      "Copyright is a form of protection granted to original works of authorship, such as books, music, art, and software.",
    icon: <FaCopyright size={14} />,
  },

  {
    id: 13,
    question: "Do I need to register my copyright?",
    answer:
      "While copyright is automatically granted upon creation, registering your work provides additional legal protection and makes enforcement easier.",
    icon: <FaKey size={14} />,
  },

  {
    id: 14,
    question: "How do I protect my copyright internationally?",
    answer:
      "Copyright protection is automatic in countries that are members of international copyright treaties like the Berne Convention.",
    icon: <FaGlobeAfrica size={14} />,
  },
];
