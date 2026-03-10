import PageContainer from "@/components/PageContainer";
import ContactPanel from "@/components/ContactPanel";
import { contact, profile } from "@/data/site";

export default function ContactPage() {
  return (
    <PageContainer
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="Open to technical program leadership roles and enterprise transformation initiatives."
      hideBanner
    >
      <ContactPanel
        name={profile.name}
        location={profile.location}
        photo={profile.photo}
        email={contact.email}
        linkedin={contact.linkedin}
        resume={contact.resume}
      />
    </PageContainer>
  );
}
