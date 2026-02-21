import PageContainer from "@/components/PageContainer";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow="Experience"
      title="Career Timeline"
      subtitle="Vertical timeline with desktop hover preview, mobile tap preview, and dedicated role detail pages."
    >
      <ExperienceTimeline items={experiences} />
    </PageContainer>
  );
}
