import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";
import BackgroundScene from "@/components/ui/BackgroundScene";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <BackgroundScene />
        {children}
        <ScrollToTop />
        {/* Profile chatbot: uses same-origin /chat (proxies to CHATBOT_API_URL when set) */}
        <Script
          src="/widget.js?v=20260208"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
