type DetailSectionGridProps = {
  sections: {
    title: string;
    items: string[];
  }[];
};

export default function DetailSectionGrid({ sections }: DetailSectionGridProps) {
  return (
    <section className="detail-grid">
      {sections.map((section) => (
        <article key={section.title} className="panel detail-card">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
