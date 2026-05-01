import type { ReactNode } from "react";
import PageContainer from "@/components/PageContainer";
import SectionReveal from "@/components/SectionReveal";
import ToolBadge from "@/components/ToolBadge";
import TechPill from "@/components/ui/TechPill";
import CertIcon, { type CertIconKind } from "@/components/CertIcon";
import type { ToolIconKey } from "@/lib/iconMap";

const specializationTools: { key: ToolIconKey; label: string }[] = [
  { key: "aws", label: "AWS" },
  { key: "azure", label: "Azure" },
  { key: "oracleOci", label: "Oracle OCI" },
  { key: "linux", label: "Linux (RHEL/SLES/CentOS)" },
  { key: "vmware", label: "VMware vSphere" },
  { key: "cloudendure", label: "CloudEndure" },
  { key: "universalDiscovery", label: "Universal Discovery" },
  { key: "awsMgn", label: "AWS MGN" },
  { key: "awsDms", label: "AWS DMS" },
  { key: "dynamoDB", label: "DynamoDB" },
  { key: "awsDataSync", label: "DataSync" },
  { key: "powerbi", label: "Power BI" },
  { key: "serviceNow", label: "ServiceNow" },
  { key: "jira", label: "Jira" },
  { key: "python", label: "Python" },
];

const aiConcepts = [
  "LangChain",
  "VectorDB",
  "Supervised Learning",
  "RAG Pipelines",
  "LLM Tuning",
  "Model Evaluation",
  "Prompt Engineering",
];

const expertiseTags = [
  "Cloud Migration",
  "Linux Modernization",
  "RAID Governance",
  "Wave Planning",
  "Dependency Discovery",
  "Production Cutover",
  "Rollback Strategy",
  "Executive Reporting",
  "Cost Optimization",
  "Cross-Functional Coordination",
  "Stakeholder Alignment",
  "Risk & Issue Management",
  "Migration Lifecycle Governance",
  "Schedule Predictability",
  "Post-Migration Stabilization",
  "Applied AI Delivery",
  "Data Preprocessing",
  "Model Evaluation",
];

const proudCards = [
  {
    icon: "🚀",
    title: "Zero-Rollback at Enterprise Scale",
    body:
      "Migrated 1000+ Linux servers to AWS across multiple production waves at DXC Technology. Every cutover window closed without a critical rollback — the result of dependency gated readiness validation built into every wave plan.",
  },
  {
    icon: "🎯",
    title: "Flagship Program Ownership",
    body:
      "Sole TPM on DXC's WFR infrastructure transformation — the largest program in my portfolio. Owned planning, stakeholder alignment, wave execution, rollback governance, and production handover across a 40+ engineer global delivery team.",
  },
  {
    icon: "🤖",
    title: "First Applied AI Delivery",
    body:
      "Delivered a LangChain RAG pipeline using ChromaDB at Savvy Global Technologies — expanding from infrastructure TPM into applied AI program delivery and establishing a new capability track in my portfolio.",
  },
];

const blue = (text: ReactNode) => (
  <span className="highlight-metric">{text}</span>
);

const highlights: ReactNode[] = [
  <>
    Migrated 1000+ Linux servers (RHEL/SLES/CentOS) to AWS across multiple 
  production waves with zero critical rollbacks, full 
  readiness validation on every wave.
  </>,
  <>
    Achieved {blue("15\u201320% infrastructure cost reduction")} by designing 
  right-sizing and decommission sequencing into the migration wave 
  structure before execution began.
  </>,
  <>
    Led cross-functional teams globally across discovery, 
  validation, and deployment phases using RAID governance, dependencies, & Power BI executive dashboards.
  </>,
  <>
    Improved delivery velocity by ~20% at Savvy Global Technologies 
  through sprint restructuring and dependency mitigation across 
  AI-driven program delivery.
  </>,
  <>
    Delivered LangChain RAG pipeline (ChromaDB + Ollama) — first 
  applied AI delivery in career portfolio, expanding from 
  infrastructure TPM into AI program execution.
  </>,
  <>
    10+ year career arc: telecom OSS/BSS (Huawei, Ericsson, TATA) → 
  Linux infra migration (Adecco) → Enterprise cloud 
  transformation (DXC) → AI delivery (Savvy, 
  CDF).
  </>,
  <>
    MS Information Systems, Stevens Institute of Technology (
    {blue("2024\u20132025")}) &mdash; graduate-level foundation in Digital Innovation, IT strategy, and Machine learning.
  </>,
];

type CertStatus = "active" | "in-progress" | "trained";

const certifications: {
  icon: CertIconKind;
  name: string;
  status: CertStatus;
}[] = [
  { icon: "csm", name: "Certified Scrum Master (CSM)", status: "active" },
  { icon: "safe", name: "SAFe Scrum Master (SSM)", status: "active" },
  { icon: "azure", name: "Microsoft AZ-900", status: "active" },
  { icon: "oracle", name: "Oracle OCI Foundations", status: "active" },
  {
    icon: "aws-cloudquest-cloud",
    name: "AWS Cloud Practitioner",
    status: "trained",
  },
  {
    icon: "aws-cloudquest-ai",
    name: "AWS AI Practitioner",
    status: "trained",
  },
  {
    icon: "aws",
    name: "AWS Solutions Architect \u2013 Associate",
    status: "in-progress",
  },
];

const statusLabel: Record<CertStatus, string> = {
  active: "ACTIVE",
  "in-progress": "IN PROGRESS",
  trained: "TRAINED",
};

export default function AboutPage() {
  return (
    <PageContainer
      title="Infrastructure & Cloud Transformation Technical Project Manager"
      subtitle="A delivery profile built on migration lifecycle governance, Linux modernization, and enterprise execution discipline."
      bannerVariant="compact"
    >
      <SectionReveal direction="up">
        <section className="visual-section about-stack-row">
          <article className="panel about-visual-card about-visual-card-navy">
            <h3>Platform & Migration Stack</h3>
            <div className="tool-badge-row">
              {specializationTools.map((tool, idx) => (
                <ToolBadge
                  key={`${tool.label}-${idx}`}
                  toolKey={tool.key}
                  label={tool.label}
                  size="sm"
                  tone="dark"
                />
              ))}
            </div>
            <div className="about-stack-divider" aria-hidden="true" />
            <span className="about-stack-subkicker">AI Concepts</span>
            <div className="chip-list">
              {aiConcepts.map((concept, idx) => (
                <TechPill key={concept} delay={idx * 0.04}>
                  {concept}
                </TechPill>
              ))}
            </div>
          </article>
          <article className="panel about-visual-card">
            <h3>Areas of Expertise</h3>
            <div className="chip-list expertise-chip-list">
              {expertiseTags.map((tag, idx) => (
                <TechPill key={tag} delay={idx * 0.04}>
                  {tag}
                </TechPill>
              ))}
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header">
            <span className="panel-kicker">Most Proud Of</span>
          </div>
          <div className="proud-grid">
            {proudCards.map((card) => (
              <article key={card.title} className="panel proud-card">
                <span className="proud-icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header">
            <span className="panel-kicker">Professional Highlights</span>
          </div>
          <ul className="highlights-list">
            {highlights.map((item, idx) => (
              <li key={idx} className="panel highlights-item">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header">
            <span className="panel-kicker">Certifications</span>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="panel cert-card">
                <span className="cert-icon" aria-hidden="true">
                  <CertIcon kind={cert.icon} />
                </span>
                <span className="cert-name">{cert.name}</span>
                <span
                  className={`cert-status cert-status-${cert.status}`}
                >
                  <span className="pulse-dot" aria-hidden="true" />
                  {statusLabel[cert.status]}
                </span>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>
    </PageContainer>
  );
}
