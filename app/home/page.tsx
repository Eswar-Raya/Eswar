import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import HomeHero from "@/components/HomeHero";
import QuickMetrics from "@/components/QuickMetrics";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import ContactPanel from "@/components/ContactPanel";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import SectionReveal from "@/components/SectionReveal";
import DeliveryFlowVisual from "@/components/DeliveryFlowVisual";
import DeliverList from "@/components/DeliverList";
import ToolBadge from "@/components/ToolBadge";
import {
  contact,
  flagshipDxc,
  metrics,
  profile,
  whatIDeliver,
} from "@/data/site";
import { featuredProjectSlugs, projects } from "@/data/projects";

const featuredProjects = projects.filter((item) =>
  featuredProjectSlugs.includes(item.slug),
);
const transformationPreview = featuredProjects.slice(0, 2);
const credibilityItems = [
  "AT&T",
  "Workforce Resilience",
  "DIRECTV",
  "Enterprise Infrastructure Programs",
];

const flagshipTools = [
  { key: "aws", label: "AWS" },
  { key: "linux", label: "Linux" },
  { key: "cloudendure", label: "CloudEndure" },
  { key: "vmware", label: "VMware" },
  { key: "powerbi", label: "Power BI" },
  { key: "jira", label: "Jira" },
] as const;

export default function HomePage() {
  return (
    <PageContainer
      eyebrow="Infrastructure Leadership Portfolio"
      title="Infrastructure & Cloud Transformation Technical Project Manager"
      subtitle="Enterprise cloud migration, data center transformation, Linux platform modernization, and governance-led delivery."
      hideBanner
    >
      <SectionReveal direction="left">
        <HomeHero
          headline={profile.headline}
          subheadline={profile.subheadline}
          supportingText={profile.supportingText}
          credibilityItems={credibilityItems}
          resumeUrl={contact.resume}
        />
      </SectionReveal>

      <SectionReveal direction="up" delay={0.04}>
        <QuickMetrics items={metrics} />
      </SectionReveal>

      <SectionReveal direction="right">
        <section className="visual-section">
          <article className="panel deliver-panel">
            <div className="deliver-visual">
              <DeliveryFlowVisual />
            </div>
            <div className="deliver-content">
              <div className="deliver-intro">
                <span className="panel-kicker">What I Deliver</span>
                <h2>Execution-focused infrastructure transformation delivery.</h2>
                <p>
                  I lead migration lifecycle execution from dependency discovery and planning through
                  validation, rollback readiness, and production cutover governance.
                </p>
              </div>
              <DeliverList items={whatIDeliver} />
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="left">
        <section className="visual-section">
          <article className="panel flagship-panel">
            <div className="flagship-head">
              <div className="section-header">
                <span className="panel-kicker">Flagship DXC Program</span>
                <h2>{flagshipDxc.title}</h2>
                <p>{flagshipDxc.summary}</p>
              </div>
              <div className="flagship-visual">
                <div className="flagship-wave-map" aria-hidden="true">
                  <div className="wave-line">
                    <span>Wave 01</span>
                    <i />
                    <strong>Discovery + Dependencies</strong>
                  </div>
                  <div className="wave-line">
                    <span>Wave 02</span>
                    <i />
                    <strong>Cutover + Validation</strong>
                  </div>
                  <div className="wave-line">
                    <span>Wave 03</span>
                    <i />
                    <strong>Stabilization + Handover</strong>
                  </div>
                </div>
                <div className="flagship-tool-strip">
                  {flagshipTools.map((tool) => (
                    <ToolBadge
                      key={tool.label}
                      toolKey={tool.key}
                      label={tool.label}
                      tone="dark"
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flagship-stats">
              <div className="flagship-stat">
                <span>Linux Server Scope</span>
                <strong>1000+</strong>
              </div>
              <div className="flagship-stat">
                <span>Engineers Coordinated</span>
                <strong>40</strong>
              </div>
              <div className="flagship-stat">
                <span>Migration Programs</span>
                <strong>Multi-Wave</strong>
              </div>
              <div className="flagship-stat">
                <span>Cost Optimization</span>
                <strong>15-20%</strong>
              </div>
            </div>
            <DetailSectionGrid
              sections={[
                {
                  title: "Scope",
                  items: flagshipDxc.scope.slice(0, 3),
                },
                {
                  title: "Execution",
                  items: flagshipDxc.execution.slice(0, 3),
                },
                {
                  title: "Outcomes",
                  items: flagshipDxc.outcomes.slice(0, 2),
                },
              ]}
            />
            <div className="flagship-cta-row">
              <Link href="/experience/dxc" className="btn btn-secondary" prefetch>
                View DXC Experience
              </Link>
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="left">
        <FeaturedPrograms
          items={transformationPreview}
          title="Selected Transformation Programs"
          description="Compact preview of primary transformation case studies. Applied AI remains a secondary capability on the Programs page."
          linkHref="/projects"
          linkLabel="View Transformation Programs"
          variant="secondary"
        />
      </SectionReveal>

      <SectionReveal direction="up">
        <ContactPanel
          name={profile.name}
          location={profile.location}
          photo={profile.photo}
          email={contact.email}
          linkedin={contact.linkedin}
          resume={contact.resume}
        />
      </SectionReveal>
    </PageContainer>
  );
}
