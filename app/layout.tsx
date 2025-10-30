import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Shero Home Foods 90-Day Content Plan",
  description: "Strategic 90-day content roadmap and brand analysis for Shero Home Foods.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
