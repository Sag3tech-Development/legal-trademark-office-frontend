import BusinessFooter from "@/components/layouts/business-footer";
import BusinessHeader from "@/components/layouts/business-header";
import SystemProgressBar from "@/components/layouts/system-progress-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BusinessHeader />
      <SystemProgressBar />
      {children}
      <BusinessFooter />
    </>
  );
}
