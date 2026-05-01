import PageContainer from "@/components/PageContainer";
import EducationPanel from "@/components/EducationPanel";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <PageContainer
      title="Academic Foundation"
      subtitle="Graduate and undergraduate foundation supporting technical program leadership and infrastructure transformation delivery."
    >
      <EducationPanel items={education} />
    </PageContainer>
  );
}
