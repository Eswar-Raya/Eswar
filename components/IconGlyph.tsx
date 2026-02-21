type IconGlyphProps = {
  name: string;
  className?: string;
};

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Monogram({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="7.2"
        fontWeight="700"
        fill="currentColor"
      >
        {label}
      </text>
    </svg>
  );
}

export default function IconGlyph({ name, className }: IconGlyphProps) {
  switch (name) {
    case "cloud":
      return (
        <svg {...common} className={className}>
          <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 10.5 3.5 3.5 0 0 0 7 18z" />
        </svg>
      );
    case "infra":
    case "server":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </svg>
      );
    case "linux":
      return (
        <svg {...common} className={className}>
          <path d="M12 4c2 0 3 1.8 3 4v7a3 3 0 1 1-6 0V8c0-2.2 1-4 3-4z" />
          <circle cx="10" cy="10" r="0.8" fill="currentColor" />
          <circle cx="14" cy="10" r="0.8" fill="currentColor" />
          <path d="M10 14h4" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 13.5 11 9l2.5 4.5M9.5 12h5M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      );
    case "security":
      return (
        <svg {...common} className={className}>
          <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3z" />
          <path d="m9.5 12 1.5 1.5 3.5-3.5" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "release":
      return (
        <svg {...common} className={className}>
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      );
    case "ops":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
      );
    case "vmware":
      return (
        <svg {...common} className={className}>
          <rect x="4" y="6" width="7" height="7" rx="1.2" />
          <rect x="13" y="11" width="7" height="7" rx="1.2" />
        </svg>
      );
    case "migration":
      return (
        <svg {...common} className={className}>
          <path d="M4 7h7v7H4zM13 10h7v7h-7z" />
          <path d="M11 10h2M11 13h2" />
        </svg>
      );
    case "aws":
      return (
        <svg {...common} className={className}>
          <path d="M5 15c4 3 10 3 14 0" />
          <path d="M7 10h2l1.5 4L12 10h2l-2 5h-2l-2-5z" />
        </svg>
      );
    case "cloudendure":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case "powerbi":
    case "dashboard":
      return (
        <svg {...common} className={className}>
          <rect x="5" y="10" width="3" height="8" rx="0.8" />
          <rect x="10" y="7" width="3" height="11" rx="0.8" />
          <rect x="15" y="5" width="3" height="13" rx="0.8" />
        </svg>
      );
    case "jira":
      return (
        <svg {...common} className={className}>
          <path d="m7 7 5-5 5 5-5 5zM7 17l5-5 5 5-5 5z" />
        </svg>
      );
    case "python":
      return (
        <svg {...common} className={className}>
          <path d="M8 6h5a3 3 0 0 1 3 3v2H9a2 2 0 0 0-2 2v2a3 3 0 0 0 3 3h5" />
          <path d="M16 18H11a3 3 0 0 1-3-3v-2h7a2 2 0 0 0 2-2V9a3 3 0 0 0-3-3H9" />
        </svg>
      );
    case "governance":
    case "strategy":
      return (
        <svg {...common} className={className}>
          <path d="M4 7h16M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
        </svg>
      );
    case "script":
      return (
        <svg {...common} className={className}>
          <path d="M8 7h8M8 12h8M8 17h5" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
    case "runbook":
      return (
        <svg {...common} className={className}>
          <path d="M7 4h10a2 2 0 0 1 2 2v14H9a2 2 0 0 0-2 2V4z" />
          <path d="M7 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h2" />
          <path d="M10 9h6M10 13h6" />
        </svg>
      );
    case "service":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
        </svg>
      );
    case "integration":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="6" width="7" height="12" rx="1.2" />
          <rect x="14" y="6" width="7" height="12" rx="1.2" />
          <path d="M10 12h4" />
        </svg>
      );
    case "discovery":
      return (
        <svg {...common} className={className}>
          <circle cx="10.5" cy="10.5" r="5.5" />
          <path d="m15 15 4 4" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...common} className={className}>
          <path d="M5 18V8M11 18V6M17 18V10" />
          <path d="M3 20h18" />
        </svg>
      );
    case "ollama":
      return (
        <svg {...common} className={className}>
          <circle cx="9" cy="9" r="3" />
          <circle cx="15" cy="9" r="3" />
          <path d="M6 15h12v4H6z" />
        </svg>
      );
    case "timeline":
      return (
        <svg {...common} className={className}>
          <path d="M4 12h16" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      );
    case "education":
      return (
        <svg {...common} className={className}>
          <path d="m3 9 9-5 9 5-9 5-9-5zM7 11v4c0 2 2.5 3 5 3s5-1 5-3v-4" />
        </svg>
      );
    case "projects":
      return (
        <svg {...common} className={className}>
          <rect x="3" y="4" width="8" height="7" rx="1" />
          <rect x="13" y="4" width="8" height="7" rx="1" />
          <rect x="3" y="13" width="18" height="7" rx="1" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common} className={className}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v5M8 8.5h.01M12 16v-3a2 2 0 0 1 4 0v3" />
        </svg>
      );
    case "resume":
      return (
        <svg {...common} className={className}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h5M10 13h5M10 17h5" />
        </svg>
      );
    case "home":
      return (
        <svg {...common} className={className}>
          <path d="m4 11 8-7 8 7" />
          <path d="M6 10v10h12V10" />
        </svg>
      );
    case "tata":
      return <Monogram label="TT" className={className} />;
    case "huawei":
      return <Monogram label="HW" className={className} />;
    case "ericsson":
      return <Monogram label="ER" className={className} />;
    case "adecco":
      return <Monogram label="AD" className={className} />;
    case "dxc":
      return <Monogram label="DX" className={className} />;
    case "stevens":
      return <Monogram label="ST" className={className} />;
    case "bachelors":
      return <Monogram label="BA" className={className} />;
    case "savvy":
      return <Monogram label="SV" className={className} />;
    default:
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
