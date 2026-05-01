"use client";

import Image from "next/image";
import { FileText, Linkedin, Mail } from "lucide-react";
import IconBadge from "@/components/IconBadge";
import { motion, useReducedMotion } from "framer-motion";
import { cardVariant, staggerContainer, fadeUp } from "@/lib/motion";

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

  const linkHover = reduceMotion
    ? undefined
    : {
        y: -2,
        borderColor: "rgba(147, 197, 253, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        transition: { duration: 0.25, ease: "easeOut" as const },
      };

  return (
    <section className="visual-section">
      <motion.article
        className="panel contact-card"
        variants={cardVariant}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-card-head">
          <span className="contact-kicker">
            <span className="pulse-dot" aria-hidden="true" />
            Open to Work
          </span>
          <h2>Open to Infrastructure and Cloud Transformation Roles</h2>
          <blockquote className="contact-quote">
            &ldquo;Ready for the next large-scale migration program to own end-to-end.&rdquo;
          </blockquote>
        </div>

        <div className="contact-layout">
          <div className="contact-profile">
            <motion.div
              className="contact-photo-frame"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              <div className="contact-photo">
                <Image src={photo} alt={`${name} profile`} fill sizes="300px" />
              </div>
            </motion.div>
            <div className="contact-profile-meta">
              <span className="contact-profile-name">{name}</span>
              <span className="contact-profile-location">{location}</span>
              <p>Infrastructure & Cloud Transformation Technical Project Manager</p>
            </div>
          </div>

          <div className="contact-card-main">
            <motion.div
              className="contact-grid"
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.a
                href={`mailto:${email}`}
                className="contact-link"
                variants={fadeUp}
                whileHover={linkHover}
              >
                <IconBadge icon={Mail} label="Email" tone="service" size="sm" />
                {email}
              </motion.a>
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                variants={fadeUp}
                whileHover={linkHover}
              >
                <IconBadge icon={Linkedin} label="LinkedIn" tone="service" size="sm" />
                LinkedIn
              </motion.a>
              <motion.a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download
                className="contact-link"
                variants={fadeUp}
                whileHover={linkHover}
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
