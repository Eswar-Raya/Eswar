import { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import ProjectBoards from "@/components/ProjectBoards";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageContainer
      title="Transformation Programs"
      subtitle="Case studies across cloud migration and infrastructure modernization, with Applied AI shown as a secondary capability."
      bannerVariant="compact"
    >
      <Suspense fallback={<section className="panel project-loading">Loading projects...</section>}>
        <ProjectBoards items={projects} />
      </Suspense>
    </PageContainer>
  );
}
