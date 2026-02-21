import PageContainer from "@/components/PageContainer";
import CareerStory from "@/components/CareerStory";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { careerStory, experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow="Experience"
      title="Experience"
    >
      <CareerStory items={careerStory} />

      <section className="visual-section">
        <div className="section-header">
          <h2>Career Timeline</h2>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>
    </PageContainer>
  );
}
