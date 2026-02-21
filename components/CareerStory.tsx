import type { CareerStoryBlock } from "@/data/experience";

type CareerStoryProps = {
  items: CareerStoryBlock[];
};

export default function CareerStory({ items }: CareerStoryProps) {
  return (
    <section className="panel experience-story-shell" aria-label="Career story">
      <div className="experience-story-head">
        <h2>Career Story</h2>
        <p>
          I moved from technical execution to enterprise program leadership, then into
          AI-enabled delivery with structured governance.
        </p>
      </div>

      <div className="story-grid">
        {items.map((item) => (
          <article key={item.id} className="story-card">
            <span className="story-period">{item.period}</span>
            <h3>{item.phase}</h3>
            <p className="story-headline">{item.headline}</p>
            <p className="story-narrative">{item.narrative}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
