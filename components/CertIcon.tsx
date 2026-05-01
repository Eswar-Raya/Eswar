"use client";

import Image from "next/image";
import { siAmazonwebservices } from "simple-icons";

export type CertIconKind =
  | "csm"
  | "safe"
  | "azure"
  | "oracle"
  | "aws"
  | "aws-cloudquest-cloud"
  | "aws-cloudquest-ai";

type CertIconProps = {
  kind: CertIconKind;
};

type BadgeMeta = {
  src: string;
  alt: string;
};

const badgeMap: Partial<Record<CertIconKind, BadgeMeta>> = {
  csm: { src: "/badges/csm-scrum-master.png", alt: "Certified Scrum Master badge" },
  safe: { src: "/badges/safe-ssm.png", alt: "SAFe Scrum Master badge" },
  azure: { src: "/badges/azure-fundamentals.png", alt: "Microsoft Azure Fundamentals badge" },
  oracle: { src: "/badges/oracle-oci-foundations.png", alt: "Oracle OCI Foundations badge" },
  "aws-cloudquest-cloud": {
    src: "/badges/aws-cloudquest-cloud-practitioner.png",
    alt: "AWS Cloud Practitioner badge",
  },
  "aws-cloudquest-ai": {
    src: "/badges/aws-cloudquest-genai-practitioner.png",
    alt: "AWS AI Practitioner badge",
  },
};

export default function CertIcon({ kind }: CertIconProps) {
  const badge = badgeMap[kind];

  if (badge) {
    return (
      <Image
        src={badge.src}
        alt={badge.alt}
        width={56}
        height={56}
        className="cert-icon-img"
      />
    );
  }

  // AWS Solutions Architect (in progress) — no earned badge yet, render the AWS brand mark.
  if (kind === "aws") {
    return (
      <svg
        className="cert-icon-svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path d={siAmazonwebservices.path} fill="#FF9900" />
      </svg>
    );
  }

  return null;
}
