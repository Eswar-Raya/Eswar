import PageContainer from "@/components/PageContainer";
import EducationPanel from "@/components/EducationPanel";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <PageContainer
      eyebrow="Education"
      title="Education"
      subtitle="Graduate and undergraduate foundation supporting technical program management and AI-enabled delivery."
    >
      <EducationPanel items={education} />
    </PageContainer>
  );
}
