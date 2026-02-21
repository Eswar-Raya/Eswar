import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <main className="corp-page">
      <div className="corp-container">
        <section className="panel detail-hero">
          <h1>Experience entry not found</h1>
          <p>The requested role detail page does not exist.</p>
          <Link href="/experience" className="btn btn-primary">
            Back to Experience
          </Link>
        </section>
      </div>
    </main>
  );
}
