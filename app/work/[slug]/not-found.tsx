import Link from "next/link";

export default function WorkNotFound() {
  return (
    <main className="work-page">
      <div className="work-container">
        <section className="panel work-hero">
          <p className="eyebrow">Not Found</p>
          <h1>Work item not found</h1>
          <p className="work-summary">
            The requested case study does not exist or has moved.
          </p>
          <Link href="/" className="work-back">
            Return to homepage
          </Link>
        </section>
      </div>
    </main>
  );
}
