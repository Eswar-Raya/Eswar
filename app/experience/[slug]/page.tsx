import Link from "next/link";
import { notFound } from "next/navigation";
import VisualNav from "@/components/VisualNav";
import IconGlyph from "@/components/IconGlyph";
import EntityLogo from "@/components/EntityLogo";
import DetailSectionGrid from "@/components/DetailSectionGrid";
import { experiences } from "@/data/experience";

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
            <EntityLogo logoKey={item.logoKey} className="company-icon" />
            {item.company}
          </span>
          <h1>{item.title}</h1>
          <p>{item.dates}</p>
          <div className="chip-list">
            {item.techIcons.map((tool) => (
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
              title: "Responsibilities",
              items: item.details.responsibilities,
            },
            {
              title: "Tools & Tech",
              items: item.details.toolsTech,
            },
            {
              title: "Programs/Clients",
              items: item.details.programsClients,
            },
            {
              title: "Outcomes",
              items: item.details.outcomes,
            },
            {
              title: "Challenges & Resolutions",
              items: item.details.challengesResolutions,
            },
          ]}
        />
      </div>
    </main>
  );
}
