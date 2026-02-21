import { FileText, Linkedin, Mail } from "lucide-react";
import IconBadge from "@/components/IconBadge";

type ContactPanelProps = {
  email: string;
  linkedin: string;
  resume: string;
};

export default function ContactPanel({ email, linkedin, resume }: ContactPanelProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <article className="panel contact-card">
        <p>If your systems are changing, clarity in execution matters.</p>
        <div className="contact-grid">
          <a href={`mailto:${email}`} className="contact-link">
            <IconBadge icon={Mail} label="Email" tone="service" size="sm" />
            {email}
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <IconBadge icon={Linkedin} label="LinkedIn" tone="service" size="sm" />
            LinkedIn
          </a>
          <a href={resume} target="_blank" rel="noreferrer" className="contact-link">
            <IconBadge icon={FileText} label="Resume PDF" tone="service" size="sm" />
            Resume PDF
          </a>
        </div>
      </article>
    </section>
  );
}
