"use client";

import Image from "next/image";
import { FileText, Linkedin, Mail } from "lucide-react";
import IconBadge from "@/components/IconBadge";
import { motion, useReducedMotion } from "framer-motion";

type ContactPanelProps = {
  name: string;
  location: string;
  photo: string;
  email: string;
  linkedin: string;
  resume: string;
};

export default function ContactPanel({
  name,
  location,
  photo,
  email,
  linkedin,
  resume,
}: ContactPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="visual-section">
      <motion.article
        className="panel contact-card"
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-card-head">
          <span className="contact-kicker">Let&apos;s Connect</span>
          <h2>Open to Infrastructure and Cloud Transformation Roles</h2>
          <blockquote className="contact-quote">
            “Open to Infrastructure Project Manager, Cloud Migration Program Manager, Technical
            Project Manager (Infrastructure), and Infrastructure Delivery Manager opportunities.”
          </blockquote>
        </div>

        <div className="contact-layout">
          <div className="contact-profile">
            <div className="contact-photo-frame">
              <div className="contact-photo">
                <Image src={photo} alt={`${name} profile`} fill sizes="300px" />
              </div>
            </div>
            <div className="contact-profile-meta">
              <span className="contact-profile-name">{name}</span>
              <span className="contact-profile-location">{location}</span>
              <p>Infrastructure & Cloud Transformation Technical Project Manager</p>
            </div>
          </div>

          <div className="contact-card-main">
            <motion.div
              className="contact-grid"
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.a
                href={`mailto:${email}`}
                className="contact-link"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <IconBadge icon={Mail} label="Email" tone="service" size="sm" />
                {email}
              </motion.a>
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <IconBadge icon={Linkedin} label="LinkedIn" tone="service" size="sm" />
                LinkedIn
              </motion.a>
              <motion.a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <IconBadge icon={FileText} label="Resume PDF" tone="service" size="sm" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
