import OtherHeader from "@/components/layouts/other-header";
import OtherFooter from "@/components/layouts/other-footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OtherHeader />
      {children}
      <OtherFooter />
    </>
  );
}
