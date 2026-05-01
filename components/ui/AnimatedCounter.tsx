"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);
  const shouldAnimate = inView && !reduceMotion;

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const id = window.requestAnimationFrame(() => setValue(target));
      return () => window.cancelAnimationFrame(id);
    }
  }, [inView, reduceMotion, target]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const totalMs = duration * 1000;
    const frameMs = 1000 / 60;
    const totalFrames = Math.max(1, Math.round(totalMs / frameMs));
    let frame = 0;

    const interval = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(eased * target);
      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setValue(target);
      } else {
        setValue(next);
      }
    }, frameMs);

    return () => window.clearInterval(interval);
  }, [shouldAnimate, target, duration]);

  const display = reduceMotion ? target : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
