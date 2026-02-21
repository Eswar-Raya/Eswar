import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconGlyph from "@/components/IconGlyph";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { experiences } from "@/data/profile";

type ExperienceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { slug } = await params;
  const item = experiences.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="corp-page">
      <VisualNav />
      <div className="corp-container">
        <section className="panel detail-hero">
          <Link href="/experience" className="detail-back">
            Back to Experience
          </Link>
          <span className="detail-company">
            <IconGlyph name={item.icon} className="company-icon" />
            {item.company}
          </span>
          <h1>{item.title}</h1>
          <p>{item.dates}</p>
          <div className="chip-list">
            {item.tech.map((tool) => (
              <span key={tool} className="chip with-icon">
                <IconGlyph name={tool} className="chip-icon" />
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="panel overview-card">
          <h2>Overview</h2>
          <p>{item.details.overview}</p>
        </section>

        <DetailSectionGrid
          sections={[
            {
              title: "Scope & Stakeholders",
              items: item.details.scopeStakeholders,
            },
            {
              title: "Responsibilities",
              items: item.details.responsibilities,
            },
            {
              title: "Tools/Tech",
              items: item.details.tools,
            },
            {
              title: "Key Deliverables",
              items: item.details.deliverables,
            },
            {
              title: "Outcomes / Metrics",
              items: item.details.outcomes,
            },
            {
              title: "Key Challenges + How I handled them",
              items: item.details.challenges,
            },
          ]}
        />
      </div>
    </main>
  );
}
