import PageContainer from "@/components/PageContainer";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow="Experience"
      title="Experience"
    >
      <section className="panel experience-story-shell" aria-label="Career story section">
        <h2>Career Story</h2>
      </section>

      <section className="visual-section">
        <div className="section-header">
          <h2>Career Timeline</h2>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>
    </PageContainer>
  );
}
