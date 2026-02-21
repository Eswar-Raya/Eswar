import PageContainer from "@/components/PageContainer";
import ServicesGrid from "@/components/ServicesGrid";
import IconBadge from "@/components/IconBadge";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { toolIconMap } from "@/lib/iconMap";

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
      eyebrow="Skills / Services"
      title="Delivery Capabilities"
      subtitle="Structured capabilities for cloud migration programs, infrastructure modernization, and AI-enabled operations."
    >
      <ServicesGrid items={services} title="Service Portfolio" />

      <section className="visual-section">
        <div className="section-header">
          <h2>Technology Stack</h2>
        </div>
        <article className="panel tool-cloud">
          {techStack.map((tool) => (
            <span key={tool.key} className="chip with-icon">
              <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
              {tool.label}
            </span>
          ))}
        </article>
      </section>
    </PageContainer>
  );
}
