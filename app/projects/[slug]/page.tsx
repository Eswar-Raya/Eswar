import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconBadge from "@/components/IconBadge";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { projects } from "@/data/projects";
import { serviceIconMap, toolIconMap } from "@/lib/iconMap";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="corp-page">
      <VisualNav />
      <div className="corp-container">
        <section className="panel detail-hero">
          <Link href="/projects" className="detail-back">
            Back to Projects
          </Link>
          <span className="detail-company">
            <IconBadge
              icon={serviceIconMap[project.iconKey]}
              label={project.context}
              tone="service"
              size="md"
            />
            {project.context}
          </span>
          <h1>{project.title}</h1>
          <p>{project.category}</p>
          <span className="detail-role">{project.role}</span>
          <div className="chip-list">
            {project.tools.map((tool) => (
              <span key={tool.label} className="chip with-icon">
                <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                {tool.label}
              </span>
            ))}
          </div>
        </section>

        <section className="panel overview-card">
          <h2>Problem / Opportunity</h2>
          <p>{project.details.problem}</p>
        </section>

        <DetailSectionGrid
          sections={[
            {
              title: "Approach",
              items: project.details.approach,
            },
            {
              title: "My Contribution",
              items: project.details.contribution,
            },
            {
              title: "Deliverables",
              items: project.details.deliverables,
            },
            {
              title: "Outcomes",
              items: project.details.outcomes,
            },
            {
              title: "Artifacts",
              items: project.details.artifacts,
            },
          ]}
        />

        <section className="panel detail-card detail-tools-card">
          <h2>Tools</h2>
          <div className="chip-list">
            {project.details.tools.map((tool) => (
              <span key={tool.label} className="chip with-icon">
                <IconBadge icon={toolIconMap[tool.key]} label={tool.label} tone="tool" size="sm" />
                {tool.label}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
