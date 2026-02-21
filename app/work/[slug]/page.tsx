import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWorkBySlug, portfolioData } from "@/content/portfolioData";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioData.timeline.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Work Not Found" };
  return {
    title: `${work.title} | ${work.org}`,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <main className="work-page">
      <div className="work-container">
        <Link href="/" className="work-back">
          Back to home
        </Link>
        <header className="work-hero panel">
          <p className="eyebrow">{work.org}</p>
          <h1>{work.title}</h1>
          <p className="work-meta">
            {work.role} | {work.dates}
          </p>
          <p className="work-summary">{work.summary}</p>
          <div className="panel-tags">
            {work.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <section className="work-grid">
          <article className="panel work-block">
            <p className="eyebrow">Context</p>
            <p>{work.detail.context}</p>
          </article>
          <article className="panel work-block">
            <p className="eyebrow">Challenges</p>
            <ul>
              {work.detail.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="panel work-block">
            <p className="eyebrow">Decision</p>
            <p>{work.detail.decision}</p>
          </article>
          <article className="panel work-block">
            <p className="eyebrow">Execution</p>
            <ul>
              {work.detail.execution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="panel work-block">
            <p className="eyebrow">Outcomes</p>
            <ul>
              {work.detail.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
