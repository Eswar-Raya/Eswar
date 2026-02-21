import type { StructuredSection as StructuredSectionType } from "@/content/executivePages";

type StructuredSectionProps = {
  section: StructuredSectionType;
};

export default function StructuredSection({ section }: StructuredSectionProps) {
  return (
    <section className="section-v2">
      <div className="section-head">
        <p className="eyebrow">{section.title}</p>
        <h2>{section.intro}</h2>
      </div>
      <div className="structured-grid">
        {section.blocks.map((block) => (
          <article key={block.title} className="panel structured-card">
            <h3>{block.title}</h3>
            <p>{block.narrative}</p>
            <ul>
              {block.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {block.tags?.length ? (
              <div className="panel-tags">
                {block.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
