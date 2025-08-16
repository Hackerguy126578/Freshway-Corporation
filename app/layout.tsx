import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freshway PLC",
  description: "Roblox supermarket – Freshway PLC homepage",
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
