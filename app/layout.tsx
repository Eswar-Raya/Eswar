import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eswar Rayavarapu",
  description:
    "Infrastructure & Cloud Transformation Technical Project Manager with enterprise migration, Linux modernization, and governance-led delivery experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
