import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Youth Fellowship | UCCP Bacolod",
  description: "United in Christ. Empowered to serve.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
