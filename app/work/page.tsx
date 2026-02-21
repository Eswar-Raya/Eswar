import Link from "next/link";
import { portfolioData } from "@/content/portfolioData";

export default function WorkIndexPage() {
  return (
    <main className="work-page">
      <div className="work-container">
        <header className="panel work-hero">
          <p className="eyebrow">Work</p>
          <h1>Enterprise programs and timeline milestones</h1>
          <p className="work-summary">
            Select an item to view full context, execution, and outcomes.
          </p>
        </header>
        <section className="work-listing">
          {portfolioData.timeline.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="panel work-list-item">
              <h3>{item.title}</h3>
              <p>
                {item.org} | {item.dates}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
