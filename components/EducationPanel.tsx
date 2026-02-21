import EntityLogo from "@/components/EntityLogo";
import type { EducationItem } from "@/data/education";

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
        {items.map((item) => (
          <article key={item.slug} className="panel education-card">
            <div className="education-head">
              <span className="education-school">
                <EntityLogo logoKey={item.logoKey} className="company-icon" />
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
              <h4>Key Outcomes</h4>
              <ul>
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <article className="panel education-why">
        <h3>Why this matters for TPM + AI delivery</h3>
        <ul>
          {items.flatMap((item) => item.whyThisMatters).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
