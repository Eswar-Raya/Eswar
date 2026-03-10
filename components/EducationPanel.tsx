import IconBadge from "@/components/IconBadge";
import type { EducationItem } from "@/data/education";
import { educationIconMap } from "@/lib/iconMap";

type EducationPanelProps = {
  items: EducationItem[];
};

export default function EducationPanel({ items }: EducationPanelProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Academic Foundation</h2>
      </div>

      <div className="education-grid">
        {items.map((item, index) => (
          <article
            key={item.slug}
            className={`panel education-card ${index % 2 === 0 ? "education-card-navy" : ""}`}
          >
            <div className="education-head">
              <span className="education-school">
                <IconBadge
                  icon={educationIconMap[item.iconKey]}
                  label={item.institution}
                  tone="education"
                  size="md"
                />
                {item.institution}
              </span>
              <span className="education-date">{item.dates}</span>
            </div>

            <h3>{item.degree}</h3>
            <p>{item.field}</p>

            <div className="education-subsection">
              <h4>Relevant Coursework</h4>
              <div className="chip-list">
                {item.coursework.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="education-subsection">
              <h4>Why this matters</h4>
              <p>{item.supportText}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
