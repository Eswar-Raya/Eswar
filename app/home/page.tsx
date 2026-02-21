import PageContainer from "@/components/PageContainer";
import HomeHero from "@/components/HomeHero";
import CareerGrowthChart from "@/components/CareerGrowthChart";
import ServicesGrid from "@/components/ServicesGrid";
import SkillsChart from "@/components/SkillsChart";
import NavCards from "@/components/NavCards";
import QuickMetrics from "@/components/QuickMetrics";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import ContactPanel from "@/components/ContactPanel";
import {
  contact,
  homeNavCards,
  metrics,
  profile,
} from "@/data/site";
import { competencyPoints, growthPoints, services } from "@/data/services";
import { featuredProjectSlugs, projects } from "@/data/projects";

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
      <CareerGrowthChart points={growthPoints} />
      <SkillsChart items={competencyPoints} />
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
