import type { ReactNode } from "react";
import ExecutiveNav from "@/components/ExecutiveNav";
import { executivePositioning } from "@/content/executivePages";

type PageShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="page-v3">
      <ExecutiveNav />
      <div className="container-v3">
        <section className="page-hero panel">
          <p className="eyebrow">{executivePositioning}</p>
          <h1>{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
        </section>
        {children}
      </div>
    </main>
  );
}
