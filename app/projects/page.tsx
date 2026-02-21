import { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import ProjectBoards from "@/components/ProjectBoards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageContainer
      eyebrow="Programs"
      title="Case Studies"
      subtitle="Filter by Cloud & Infrastructure Strategy, Service/Product Innovation, AI Strategy & Governance, or Process Innovation (BPR)."
    >
      <Suspense fallback={<section className="panel project-loading">Loading projects...</section>}>
        <ProjectBoards items={projects} />
      </Suspense>
    </PageContainer>
  );
}
