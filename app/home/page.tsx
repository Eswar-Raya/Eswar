import PageContainer from "@/components/PageContainer";
import HomeHero from "@/components/HomeHero";
import CareerGrowthChart from "@/components/CareerGrowthChart";
import ServicesGrid from "@/components/ServicesGrid";
import NavCards from "@/components/NavCards";
import QuickMetrics from "@/components/QuickMetrics";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import ContactPanel from "@/components/ContactPanel";
import {
  careerGrowth,
  contact,
  featuredProjectSlugs,
  homeNavCards,
  metrics,
  profile,
  projects,
  services,
} from "@/data/profile";

const featuredProjects = projects.filter((item) =>
  featuredProjectSlugs.includes(item.slug),
);

export default function HomePage() {
  return (
    <PageContainer
      eyebrow="Executive Portfolio"
      title="Technical Project Manager - Cloud Infrastructure & AI-Enabled Delivery"
      subtitle="Enterprise migration leadership, infrastructure modernization, and structured AI-enabled delivery."
    >
      <HomeHero
        name={profile.name}
        headline={profile.headline}
        location={profile.location}
        photo={profile.photo}
        tags={profile.introTags}
      />
      <QuickMetrics items={metrics} />
      <CareerGrowthChart points={careerGrowth} />
      <ServicesGrid items={services.slice(0, 6)} title="Core Services" />
      <FeaturedPrograms items={featuredProjects} />
      <NavCards items={homeNavCards} />
      <ContactPanel
        email={contact.email}
        linkedin={contact.linkedin}
        resume={contact.resume}
      />
    </PageContainer>
  );
}
