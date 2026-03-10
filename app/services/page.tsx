import PageContainer from "@/components/PageContainer";
import ServicesGrid from "@/components/ServicesGrid";
import ToolBadge from "@/components/ToolBadge";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { aiMlSkills, capabilityGroups, services } from "@/data/services";

const techStack = Array.from(
  new Map(
    [...experiences.flatMap((item) => item.tools), ...projects.flatMap((item) => item.tools)].map(
      (tool) => [tool.key, tool],
    ),
  ).values(),
);

export default function ServicesPage() {
  return (
    <PageContainer
      eyebrow="Capabilities"
      title="Infrastructure and Cloud Delivery Capabilities"
      subtitle="Recruiter-ready capability map aligned to infrastructure transformation, migration governance, and technical program delivery."
    >
      <ServicesGrid items={services} title="Core Capability Areas" />

      <section className="visual-section">
        <div className="section-header">
          <h2>Skills by Category</h2>
        </div>
        <section className="detail-grid">
          {capabilityGroups.map((group) => (
            <article key={group.id} className="panel detail-card">
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </section>

      <section className="visual-section">
        <div className="section-header">
          <h2>Applied AI Projects</h2>
          <p>Applied AI is positioned as a complement to infrastructure and cloud leadership.</p>
        </div>
        <article className="panel ai-skill-panel">
          <div className="ai-skill-grid">
            {aiMlSkills.map((skill) => (
              <article key={skill.id} className="ai-skill-card">
                <ToolBadge
                  toolKey={skill.toolKey}
                  label={skill.title}
                  size="md"
                  showLabel={false}
                />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="visual-section">
        <div className="section-header">
          <h2>Technology Stack</h2>
        </div>
        <article className="panel tool-cloud">
          {techStack.map((tool) => (
            <ToolBadge key={tool.key} toolKey={tool.key} label={tool.label} size="sm" />
          ))}
        </article>
      </section>
    </PageContainer>
  );
}
