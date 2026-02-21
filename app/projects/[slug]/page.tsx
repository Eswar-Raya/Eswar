import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconGlyph from "@/components/IconGlyph";
import EntityLogo from "@/components/EntityLogo";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { projects } from "@/data/projects";

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
            <EntityLogo logoKey={project.logoKey} className="company-icon" />
            {project.clientProgram}
          </span>
          <h1>{project.title}</h1>
          <p>{project.category}</p>
          <span className="detail-role">{project.role}</span>
          <div className="chip-list">
            {project.toolIcons.map((tool) => (
              <span key={tool} className="chip with-icon">
                <IconGlyph name={tool} className="chip-icon" />
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="panel overview-card">
          <h2>Problem</h2>
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
              title: "Tools",
              items: project.details.tools,
            },
            {
              title: "Outcomes",
              items: project.details.outcomes,
            },
            {
              title: "Screenshots/Diagrams Placeholders",
              items: project.details.artifacts,
            },
          ]}
        />
      </div>
    </main>
  );
}
