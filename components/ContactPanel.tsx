import IconGlyph from "@/components/IconGlyph";

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
            <IconGlyph name="contact" className="contact-icon" />
            {email}
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <IconGlyph name="linkedin" className="contact-icon" />
            LinkedIn
          </a>
          <a href={resume} target="_blank" rel="noreferrer" className="contact-link">
            <IconGlyph name="resume" className="contact-icon" />
            Resume PDF
          </a>
        </div>
      </article>
    </section>
  );
}
