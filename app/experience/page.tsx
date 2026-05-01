import PageContainer from "@/components/PageContainer";
import CareerStory from "@/components/CareerStory";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionReveal from "@/components/SectionReveal";
import { timelineExperiences } from "@/data/experience";
import IconBadge from "@/components/IconBadge";
import { experienceIconMap } from "@/lib/iconMap";

export default function ExperiencePage() {
  return (
    <PageContainer
      title="Infrastructure and Cloud Transformation Experience"
      subtitle="Reverse-chronological experience with DXC as the flagship enterprise transformation role."
      bannerVariant="compact"
    >
      <SectionReveal direction="left">
        <section className="visual-section">
          <article className="panel journey-intro panel-navy">
            <div>
              <h2>From telecom operations to enterprise cloud transformation leadership.</h2>
            </div>
            <div className="journey-map">
              {timelineExperiences.slice(0, 4).map((item) => (
                <div key={item.id} className="journey-map-row">
                  <IconBadge
                    icon={experienceIconMap[item.iconKey]}
                    label={item.label}
                    tone="company"
                    size="sm"
                  />
                  <span>{item.periodLabel}</span>
                  <strong>{item.label}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>
      </SectionReveal>

      <SectionReveal direction="right">
        <CareerStory />
      </SectionReveal>

      <SectionReveal direction="left">
        <section className="visual-section">
          <div className="section-header">
            <h2>Employer Timeline</h2>
          </div>
          <ExperienceTimeline items={timelineExperiences} />
        </section>
      </SectionReveal>
    </PageContainer>
  );
}
