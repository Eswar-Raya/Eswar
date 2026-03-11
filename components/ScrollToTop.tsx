"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 520;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_AFTER_PX);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={onClick}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5l-7 7" />
        <path d="M12 5l7 7" />
        <path d="M12 5v14" />
      </svg>
    </button>
  );
}

