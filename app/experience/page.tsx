import PageContainer from "@/components/PageContainer";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow="Experience"
      title="Career Timeline"
      subtitle="Vertical role progression with company context, delivery outcomes, and technical stack."
    >
      <ExperienceTimeline items={experiences} />
    </PageContainer>
  );
}
