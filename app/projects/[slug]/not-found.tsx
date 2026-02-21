import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="corp-page">
      <div className="corp-container">
        <section className="panel detail-hero">
          <h1>Project entry not found</h1>
          <p>The requested project detail page does not exist.</p>
          <Link href="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </section>
      </div>
    </main>
  );
}
