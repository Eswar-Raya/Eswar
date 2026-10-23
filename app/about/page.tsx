import Link from "next/link";
import { ArrowUpRight, Boxes, ChartNoAxesCombined, Cloud } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import SectionReveal from "@/components/SectionReveal";
import TechPill from "@/components/ui/TechPill";
import CertIcon, { type CertIconKind } from "@/components/CertIcon";
import { profile } from "@/data/site";
import { capabilityGroups } from "@/data/services";

const achievements = [
  {
    icon: Cloud,
    title: "250+ applications. 1,000+ servers.",
    body: "At DXC, I led multi-wave migrations from on-premises to AWS, coordinating approximately 40 resources across network, infrastructure, application, and operations teams.",
    href: "/experience/dxc",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Measurable delivery improvement",
    body: "Reduced delivery delays by approximately 30% through blocker escalation and stakeholder decisions. Migration sequencing, consolidation, and workload rationalization drove 15–20% infrastructure cost optimization.",
    href: "/projects/enterprise-cloud-migration-program",
  },
  {
    icon: Boxes,
    title: "From infrastructure to applied AI",
    body: "Led RenewSight-AI at Community Dreams Foundation, aligning stakeholder requirements, data pipelines, model workflows, and performance metrics from ideation to deployment readiness.",
    href: "/projects/renewsight-ai",
  },
];

const certifications: { icon: CertIconKind; name: string; status: "credential" | "in-progress" }[] = [
  { icon: "csm", name: "Certified Scrum Master · Scrum Alliance", status: "credential" },
  { icon: "safe", name: "SAFe Scrum Master (SSM)", status: "credential" },
  { icon: "azure", name: "Microsoft AZ-900", status: "credential" },
  { icon: "oracle", name: "Oracle OCI Foundations", status: "credential" },
  { icon: "aws", name: "AWS Solutions Architect – Associate", status: "in-progress" },
];

export default function AboutPage() {
  return (
    <PageContainer
      eyebrow="About Eswar"
      title="Technical depth. Business perspective."
      subtitle="Technical project management and business analysis across cloud, infrastructure, telecom, and applied AI."
      bannerVariant="compact"
    >
      <SectionReveal direction="up">
        <section className="panel about-profile-intro">
          <span className="panel-kicker">11+ years of delivery experience</span>
          <h2>Connecting business needs with engineering execution.</h2>
          <p>{profile.supportingText}</p>
          <p>
            My career began in Linux operations and telecom OSS/BSS platforms, grew into
            enterprise migration leadership at DXC, and expanded into AI program delivery.
            Today, at Aivanta Tech, I coordinate concurrent technology initiatives using
            Agile and SAFe practices, dependency management, and executive reporting.
          </p>
          <Link href="/experience" className="detail-link">Explore my career <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header"><h2>Selected delivery outcomes</h2></div>
          <div className="proud-grid">
            {achievements.map(({ icon: Icon, ...item }) => (
              <article key={item.title} className="panel proud-card">
                <Icon className="achievement-icon" size={28} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className="detail-link">Explore the work <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header">
            <h2>Capabilities & technology</h2>
            <p>The platforms, delivery methods, and tools behind my work.</p>
          </div>
          <div className="resume-skills-grid">
            {capabilityGroups.map((group) => (
              <article key={group.id} className="panel resume-skill-card">
                <h3>{group.title}</h3>
                <div className="chip-list">
                  {group.items.map((item) => <TechPill key={item}>{item}</TechPill>)}
                </div>
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="visual-section">
          <div className="section-header"><h2>Certifications & professional development</h2></div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="panel cert-card">
                <span className="cert-icon" aria-hidden="true"><CertIcon kind={cert.icon} /></span>
                <span className="cert-name">{cert.name}</span>
                {cert.status === "in-progress" ? <span className="cert-status cert-status-in-progress">In progress</span> : null}
              </article>
            ))}
          </div>
        </section>
      </SectionReveal>
    </PageContainer>
  );
}
