import PageContainer from "@/components/PageContainer";
import ProjectBoards from "@/components/ProjectBoards";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <PageContainer
      eyebrow="Programs"
      title="Programs / Client Work / Initiatives"
      subtitle="Project mapping across enterprise migration programs, Linux modernization, and AI automation initiatives."
    >
      <ProjectBoards items={projects} />
    </PageContainer>
  );
}
