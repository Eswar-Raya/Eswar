"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

type ParallaxStageProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ParallaxStage({ className, children }: ParallaxStageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--px", `${x * 24}px`);
    ref.current.style.setProperty("--py", `${y * 18}px`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--px", "0px");
    ref.current.style.setProperty("--py", "0px");
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
