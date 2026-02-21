import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eswar Rayavarapu",
  description:
    "Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery",
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
