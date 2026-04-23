import PageContainer from "@/components/PageContainer";
import SectionReveal from "@/components/SectionReveal";
import ToolBadge from "@/components/ToolBadge";
import { ShieldCheck, SlidersHorizontal, Telescope, Workflow } from "lucide-react";

const specialization = [
  "Enterprise infrastructure transformation across telecom and global enterprise environments.",
  "Cloud migration execution including data center to AWS and data center to data center programs.",
  "Linux platform modernization with readiness validation, rollback strategy, and controlled production cutovers.",
  "Cross-functional engineering leadership with RAID governance and executive reporting.",
];

const scaleHandled = [
  "10+ years of infrastructure and platform delivery experience.",
  "Directed migration programs covering 1000+ Linux servers.",
  "Coordinated approximately 40 engineers across global delivery tracks.",
  "Drove approximately 15-20% infrastructure cost optimization outcomes.",
];

const coreCompetencies = [
  "Program management for large-scale cloud transformation (governance, RAID, risk).",
  "AWS cloud migration execution (legacy to AWS and hybrid cloud delivery).",
  "Migration planning and cutover execution (readiness, validation, rollback strategy).",
  "Infrastructure and application modernization with dependency discovery and interoperability alignment.",
  "Cross-functional leadership across infrastructure, network, security, applications, and operations.",
  "Change management and release control with operational readiness and post-migration stability.",
  "Cost optimization and financial tracking aligned to program outcomes.",
];

const deliveryApproach = [
  "Dependency discovery before migration commitments.",
  "Wave planning anchored in readiness evidence.",
  "Rollback criteria and cutover ownership defined ahead of production windows.",
  "Executive-ready reporting that keeps risk, schedule, and decisions visible.",
];

const specializationTools = [
  { key: "aws", label: "AWS" },
  { key: "azure", label: "Azure" },
  { key: "linux", label: "Linux" },
  { key: "vmware", label: "VMware" },
  { key: "cloudendure", label: "CloudEndure" },
  { key: "powerbi", label: "Power BI" },
] as const;

const methodVisual = [
  { id: "observe", title: "Observe Constraints", icon: Telescope },
  { id: "plan", title: "Sequence Execution", icon: Workflow },
  { id: "cutover", title: "Cutover Governance", icon: SlidersHorizontal },
  { id: "stabilize", title: "Stabilize Operations", icon: ShieldCheck },
] as const;

export default function AboutPage() {
  return (
    <PageContainer
      eyebrow="About"
      title="Infrastructure & Cloud Transformation Technical Project Manager"
      subtitle="A delivery profile built on migration lifecycle governance, Linux modernization, and enterprise execution discipline."
      bannerVariant="compact"
    >
      <SectionReveal direction="left">
        <section className="visual-section">
          <article className="panel about-intro about-split">
            <div>
              <h3 className="about-section-title">Who I Am</h3>
              <p>
                I lead infrastructure and cloud transformation programs where delivery precision
                matters: discovery, migration planning, validation, rollback readiness, and
                production cutover. My background combines telecom platform execution with large
                enterprise migration governance.
              </p>
            </div>
            <div className="about-visual-stack">
              <article className="about-visual-card about-visual-card-navy">
                <h3>Platform & Migration Stack</h3>
                <div className="tool-badge-row">
                  {specializationTools.map((tool) => (
                    <ToolBadge
                      key={tool.label}
                      toolKey={tool.key}
                      label={tool.label}
                      size="sm"
                      tone="dark"
                    />
                  ))}
                </div>
              </article>
              <article className="about-visual-card">
                <h3>Delivery Environments</h3>
                <p>Telecom platforms, enterprise data centers, hybrid cloud migration tracks.</p>
              </article>
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="right">
        <section className="visual-section about-grid">
          <article className="panel detail-card">
            <h3 className="about-section-title">What I Do</h3>
            <ul>
              {specialization.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="panel detail-card">
            <h3 className="about-section-title">Scale I&apos;ve Handled</h3>
            <ul>
              {scaleHandled.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="panel detail-card">
            <h3 className="about-section-title">Core Competencies</h3>
            <ul>
              {coreCompetencies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="left">
        <section className="visual-section">
          <article className="panel about-method about-split">
            <div>
              <div className="about-method-head">
                <h3 className="about-section-title">How I Work</h3>
                <p className="about-method-subtitle">
                  Governance-led execution under real infrastructure constraints.
                </p>
              </div>
              <ul className="about-method-list">
                {deliveryApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-method-visual about-method-visual-navy">
              {methodVisual.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.id} className="about-method-step">
                    <span>
                      <Icon />
                    </span>
                    <h3>{step.title}</h3>
                  </article>
                );
              })}
            </div>
          </article>
        </section>
      </SectionReveal>

    </PageContainer>
  );
}
