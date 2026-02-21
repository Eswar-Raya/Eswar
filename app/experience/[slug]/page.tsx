import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconBadge from "@/components/IconBadge";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { experiences, type ExperienceItem } from "@/data/experience";
import { experienceIconMap, toolIconMap } from "@/lib/iconMap";

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
  const item = experiences.find((entry) => entry.slug === slug) as ExperienceItem | undefined;

  if (!item) {
    notFound();
  }

  const iconTone = item.type === "education_phase" ? "education" : "company";
  const isEducationPhase = item.type === "education_phase";
  const icon = experienceIconMap[item.iconKey as keyof typeof experienceIconMap];

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
              icon={icon}
              label={item.label}
              tone={iconTone}
              size="md"
            />
            {item.label}
          </span>
          <h1>{item.title}</h1>
          <p>{item.periodLabel}</p>
          {isEducationPhase ? <span className="phase-badge">Education Phase</span> : null}
          {item.note ? <p className="detail-note">{item.note}</p> : null}
        </section>

        <section className="panel overview-card">
          <h2>{isEducationPhase ? "Overview (Graduate Program Career Phase)" : "Overview"}</h2>
          <p>{item.growthHighlight}</p>
        </section>

        {isEducationPhase ? (
          <DetailSectionGrid
            sections={[
              {
                title: "Key Projects During Stevens",
                items: item.projectsDuringPhase ?? item.detailBullets,
              },
              {
                title: "Skills/Tools Strengthened",
                items: item.tools.map((tool) => tool.label),
              },
              {
                title: "Outcomes",
                items: item.outcomes,
              },
              {
                title: "Challenges + How resolved",
                items: item.challengesResolutions,
              },
            ]}
          />
        ) : (
          <DetailSectionGrid
            sections={[
              {
                title: "Scope & Stakeholders",
                items: item.scopeStakeholders,
              },
              {
                title: "Responsibilities / Projects",
                items: item.detailBullets,
              },
              {
                title: "Programs/Clients",
                items: item.programsClients,
              },
              {
                title: "Outcomes / Metrics",
                items: item.outcomes,
              },
              {
                title: "Challenges + How resolved",
                items: item.challengesResolutions,
              },
            ]}
          />
        )}

        <section className="panel detail-card detail-tools-card">
          <h2>{isEducationPhase ? "Skills/Tools Strengthened" : "Tools/Tech"}</h2>
          <div className="chip-list">
            {item.tools.map((tool) => (
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
