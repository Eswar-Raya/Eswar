import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eswarrayavarapu.com"),
  title: "Eswar Rayavarapu",
  description:
    "Infrastructure & Cloud Transformation Technical Project Manager with enterprise migration, Linux modernization, and governance-led delivery experience.",
  alternates: {
    canonical: "/",
  },
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
