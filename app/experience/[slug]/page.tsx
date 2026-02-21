import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconBadge from "@/components/IconBadge";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { experiences } from "@/data/experience";
import { companyIconMap, toolIconMap } from "@/lib/iconMap";

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
            <IconBadge
              icon={companyIconMap[item.iconKey]}
              label={item.company}
              tone="company"
              size="md"
            />
            {item.company}
          </span>
          <h1>{item.title}</h1>
          <p>{item.dates}</p>
          {item.note ? <p className="detail-note">{item.note}</p> : null}
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
              title: "Programs/Clients",
              items: item.details.programsClients,
            },
            {
              title: "Outcomes / Metrics",
              items: item.details.outcomes,
            },
            {
              title: "Challenges + How resolved",
              items: item.details.challengesResolutions,
            },
          ]}
        />

        <section className="panel detail-card detail-tools-card">
          <h2>Tools/Tech</h2>
          <div className="chip-list">
            {item.details.tools.map((tool) => (
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
