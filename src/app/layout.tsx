import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";

import { GetPageMetadata } from "@/utils/meta-data";

import { Toaster } from "@/components/ui/sonner";

// STYLE SHEETS SOURCE
import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/includes.css";

// FONT CONFIGURATIONS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = GetPageMetadata();
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
