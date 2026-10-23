import { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import ProjectBoards from "@/components/ProjectBoards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageContainer
      title="Transformation Programs"
      subtitle="Enterprise cloud migration, infrastructure modernization, and applied AI delivery, from requirements to operational readiness."
      bannerVariant="compact"
    >
      <Suspense fallback={<section className="panel project-loading">Loading projects...</section>}>
        <ProjectBoards items={projects} />
      </Suspense>
    </PageContainer>
  );
}
