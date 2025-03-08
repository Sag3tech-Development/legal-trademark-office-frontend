import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export const defaultMetadata: Metadata = {
  title: "Legal Trademark Office",
  description:
    "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
  creator: "Zevi Tech",
  applicationName: "Legal Trademark Office",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-16x16.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicons/logo.svg",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Legal Trademark Office",
    description:
      "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
    siteName: "Legal Trademark Office",
    images: [
      {
        url: "/favicons/logo.svg",
        width: 96,
        height: 58,
        alt: "Legal Trademark Office",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Trademark Office",
    description:
      "Legal Trademark Office offers professional trademark registration services to protect your business name, logo, and brand identity. Start safeguarding your brand today!",
    images: "/favicons/logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}
