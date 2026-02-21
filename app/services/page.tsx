import PageContainer from "@/components/PageContainer";
import ServicesGrid from "@/components/ServicesGrid";
import IconGlyph from "@/components/IconGlyph";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { services } from "@/data/skills";

const techStack = Array.from(
  new Set([
    ...experiences.flatMap((item) => item.techIcons),
    ...projects.flatMap((item) => item.toolIcons),
  ]),
).sort();

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
            <span key={tool} className="chip with-icon">
              <IconGlyph name={tool} className="chip-icon" />
              {tool}
            </span>
          ))}
        </article>
      </section>
    </PageContainer>
  );
}
