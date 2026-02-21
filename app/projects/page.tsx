import { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import ProjectBoards from "@/components/ProjectBoards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageContainer
      eyebrow="Programs"
      title="Programs / Client Work / Initiatives"
      subtitle="Filter by Enterprise Migration, Linux Modernization, or AI/Automation. Hover cards for case-study prompt and open full detail on click."
    >
      <Suspense fallback={<section className="panel project-loading">Loading projects...</section>}>
        <ProjectBoards items={projects} />
      </Suspense>
    </PageContainer>
  );
}
