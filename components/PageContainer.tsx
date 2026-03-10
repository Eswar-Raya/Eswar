import type { ReactNode } from "react";
import VisualNav from "@/components/VisualNav";

type PageContainerProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  hideBanner?: boolean;
  bannerVariant?: "default" | "compact";
  children: ReactNode;
};

export default function PageContainer({
  title,
  subtitle,
  eyebrow,
  hideBanner = false,
  bannerVariant = "default",
  children,
}: PageContainerProps) {
  return (
    <main className="corp-page">
      <VisualNav />
      <div className="corp-container">
        {!hideBanner ? (
          <section
            className={`page-banner panel ${
              bannerVariant === "compact" ? "page-banner-compact" : ""
            }`}
          >
            {eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </section>
        ) : null}
        {children}
      </div>
    </main>
  );
}
