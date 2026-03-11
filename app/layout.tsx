import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Profile chatbot: uses same-origin /chat (proxies to CHATBOT_API_URL when set) */}
        <Script
          src="/widget.js?v=20260311"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
