import type { ReactNode } from "react";
import VisualNav from "@/components/VisualNav";

type PageContainerProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function PageContainer({
  title,
  subtitle,
  eyebrow,
  children,
}: PageContainerProps) {
  return (
    <main className="corp-page">
      <VisualNav />
      <div className="corp-container">
        <section className="page-banner panel">
          {eyebrow ? <span className="page-eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </section>
        {children}
      </div>
    </main>
  );
}
