import PageContainer from "@/components/PageContainer";
import EducationPanel from "@/components/EducationPanel";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <PageContainer
      eyebrow="Education"
      title="Education"
      subtitle="Graduate and undergraduate foundation supporting infrastructure transformation and technical program leadership."
    >
      <EducationPanel items={education} />
    </PageContainer>
  );
}
