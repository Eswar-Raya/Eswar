import PageContainer from "@/components/PageContainer";
import ContactPanel from "@/components/ContactPanel";
import { contact } from "@/data/site";

export default function ContactPage() {
  return (
    <PageContainer
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="Open to technical program leadership roles and enterprise transformation initiatives."
    >
      <ContactPanel
        email={contact.email}
        linkedin={contact.linkedin}
        resume={contact.resume}
      />
    </PageContainer>
  );
}
